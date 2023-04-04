<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function register(Request $request){
        $attr = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password'=>'required|string|min:6',
            'is_user'=>'required',
            'is_company' => 'required',
        ]);

        $user = User::create([
            'name' => $attr['name'],
            'email' => $attr['email'],
            'is_user' => $attr['is_user'],
            'is_company' => $attr['is_company'],
            'password' => bcrypt($attr['password'])
        ]);
        $token = $user->createToken('Tokens')->plainTextToken;
        return response([
            "token"=>$token,
            "user"=>$user
        ],201);
    }

    public function login(Request $request){
        $attr = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|min:6'
        ]);

        if (!Auth::attempt($attr)) {
            return response()->json([
                'error' => "Credentials don't match",
            ], 401);
        }

        $user = Auth::user();

        return response([
            'token' => auth()->user()->createToken('Tokens')->plainTextToken,
            'user' => auth()->user()
        ], 200);
    }

    public function logout(Request $request){
        auth()->user()->currentAccessToken()->delete();

        return response(["message"=>"Successfully logged out"],200);
    }
}

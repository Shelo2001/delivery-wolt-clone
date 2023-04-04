<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CompanyObject;
use Intervention\Image\Facades\Image;

class CompanyObjectController extends Controller
{
    public function createObject(Request $request){
        $attr = $request->validate([
            "title"=>"required",
            "description"=>"required",
            "image"=>"required",
            "category"=>"required",
            "location"=>"required",
            "company_id"=>"required",
        ]);

        $object = new CompanyObject();
        $object->title = $request->title;
        $object->description = $request->description;
        $object->category = $request->category;
        $object->location = $request->location;
        $object->company_id = $request->company_id;
        if($request->image!=''){
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = time().'.'.$ex;
            $img = Image::make($request->image);
            $upload_path = public_path()."/upload/";
            $img->save($upload_path.$name);
            $object->image = $name;
        } else {
            $object->image = 'image.png';
        }
        $object->save();
        
        return response([
            "object"=>$object,
        ],201);
    }

    public function getMyObjects($id){
        $objects = CompanyObject::where("company_id",$id)->get();
        return response()->json([
            "objects"=>$objects,
        ]);
    }

    public function getObjectBySearch(Request $request){
        $searchTerm = $request->input('q');
        $results = CompanyObject::where('title', 'like', '%'.$searchTerm.'%')->orWhere('location', 'like', '%'.$searchTerm.'%')->get();
        return response()->json($results);
    }

    public function getMostUsedCategories(){
        $categories = CompanyObject::selectRaw('category, count(*) as count')->groupBy('category')->orderBy('count','desc')->take(4)->get();
        return response()->json($categories);
    }

    public function getAllObjects(){
        $objects = CompanyObject::orderBy('created_at', 'desc')->get();
        return response()->json($objects);
    }

    public function getObjectByCategory($category){
        $objects = CompanyObject::where('category',$category)->get();
        return response()->json($objects);
    }
}

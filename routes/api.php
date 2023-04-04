<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompanyObjectController;

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::get('/logout', [UserController::class, 'logout']);
    Route::post('/company/object/create', [CompanyObjectController::class, 'createObject']);
    Route::get('/company/object/{id}', [CompanyObjectController::class, 'getMyObjects']);

});
Route::get('/company/search', [CompanyObjectController::class, 'getObjectBySearch']);
Route::get('/categories', [CompanyObjectController::class, 'getMostUsedCategories']);
Route::get('/objects/all', [CompanyObjectController::class, 'getAllObjects']);
Route::get('/objects/{category}', [CompanyObjectController::class, 'getObjectByCategory']);

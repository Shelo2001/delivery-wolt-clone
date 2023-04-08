<?php

namespace App\Http\Controllers;

use App\Models\ObjectData;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ObjectDataController extends Controller
{
    public function createObjectData(Request $request){
        $attr = $request->validate([
            "title"=>"required",
            "image"=>"required",
            "category"=>"required",
            "price"=>"required",
            "description"=>"required",
            "company_object_id"=>"required",
        ]);

        $objectData = new ObjectData();
        $objectData->title = $request->title;
        $objectData->description = $request->description;
        $objectData->company_object_id = $request->company_object_id;
        $objectData->category = $request->category;
        $objectData->price = $request->price;
        if($request->image!=''){
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = time().'.'.$ex;
            $img = Image::make($request->image);
            $upload_path = public_path()."/upload/";
            $img->save($upload_path.$name);
            $objectData->image = $name;
        } else {
            $objectData->image = 'image.png';
        }
        $objectData->save();
        
        return response([
            "objectData"=>$objectData,
        ],201);
    }
}

<?php

namespace App\Models;

use App\Models\CompanyObject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ObjectData extends Model
{
    use HasFactory;

    protected $fillable=[
        "title",
        "image",
        "category",
        "price",
        "description",
        "company_object_id",
    ];

    public function companyObject()
    {
        return $this->belongsTo(CompanyObject::class);
    }

}

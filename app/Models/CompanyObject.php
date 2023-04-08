<?php

namespace App\Models;

use App\Models\ObjectData;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompanyObject extends Model
{
    use HasFactory;

    protected $fillable=[
        "title",
        "description",
        "image",
        "location",
        "company_id",
        "category",
    ];

    public function objectData()
    {
        return $this->hasMany(ObjectData::class);
    }

}

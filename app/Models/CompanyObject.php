<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}

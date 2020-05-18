<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class document extends Model
{
    protected $table='document';
    protected $id='doc_id';
    public $incrementing = false;
    public $timestamps = true;

    protected $fillable=['name','from_','to_','input','output','user_id'];
}

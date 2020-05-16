<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //
    protected $table='users';
    protected $id='user_id';
    public $incrementing = true;
    public $timestamps = true;

}

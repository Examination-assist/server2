<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';
    protected $id = 'course_id';
    
    public $incrementing = true;
    public $timestamps = true;
    
    protected $fillable =  ['stream','discipline','course_name'];
    //
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class links extends Model
{
    protected $table = 'links';
    protected $id = 'id';
    public $incrementing = true;
    public $timestamps = true;


    protected $fillable = ['id', 'created_at', 'updated_at', 'course_name', 'moduleId', 'lectureId', 'lecture_name', 'english_transcript', 'doc_name', 'YouTubeId'];
}

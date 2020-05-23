<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Audio extends Model
{
    protected $table = 'audio';
    protected $id = 'audio_id';

    public $incrementing = true;
    public $timestamps = true;

    protected $fillable = ['doc_id','count','filename'];

}

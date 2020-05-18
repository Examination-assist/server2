<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class document extends Model
{
    protected $table = 'documents';
    protected $id = 'doc_id';

    public $incrementing = true;
    public $timestamps = true;

    protected $fillable = ['name', 'from_', 'to_', 'input', 'output', 'user_id','status','book_name','chapter_number'];
}

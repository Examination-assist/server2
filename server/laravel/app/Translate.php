<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Translate extends Model
{
    protected $table = 'translates';
    protected $id = 'translate_id';

    public $incrementing = true;
    public $timestamps = true;

    protected $fillable = ['line_counter', 'para', 'count', 'input', 'output', 'doc_id'];
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('links', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('course_name')->nullable();
            'lectureId Lecture Name English Transcript Document Name    YouTubeId';
            
            $table->string('moduleId')->nullable();
            $table->string('lectureId')->nullable();
            $table->string('lecture_name')->nullable();
            $table->string('english_transcript')->nullable();
            $table->string('doc_name')->nullable();
            
            $table->string('YouTubeId')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('links');
    }
}

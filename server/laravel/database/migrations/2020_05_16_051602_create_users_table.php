<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('user_id');
            $table->timestamps();
            $table->string('first_name',50)->nullable();
            $table->string('last_name',50)->nullable();
            
            
            $table->string('email')->unique();
            $table->string('username',25)->nullable()->unique();
            $table->string('password',500);
            
            $table->string('course_id')->references('course_id')->on('courses')->nullable();
            $table->foreignId('type_id')->references('type_id')->on('user_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

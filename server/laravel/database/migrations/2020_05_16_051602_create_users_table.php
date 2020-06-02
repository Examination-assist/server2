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

            $table->string('username')->nullable();
            
            $table->string('first_name',50)->nullable();
            $table->string('last_name',50)->nullable();
            
            
            $table->string('email')->nullable();
            $table->bigInteger('phone')->nullable();

            $table->string('language')->nullable();
            
            $table->string('role')->nullable();
            
            $table->string('gender')->nullable();
            
            $table->string('title')->nullable();
            
            $table->string('qualification')->nullable();
            
            $table->string('password',500);

            $table->string('approved')->default('No');
            
            $table->string('course_id')->references('course_id')->on('courses')->nullable();
            $table->foreignId('type_id')->references('type_id')->on('user_types')->nullable();
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

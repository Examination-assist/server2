<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id('doc_id');
            $table->string('from_')->nullable();
            $table->string('to_')->nullable();
            $table->mediumText('input')->nullable();
            $table->mediumText('output')->nullable();
            $table->timestamps();
            $table->foreignId('user_id')->references('user_id')->on('users');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documents');
    }
}

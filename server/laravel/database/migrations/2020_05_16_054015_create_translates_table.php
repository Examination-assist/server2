<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTranslatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('translates', function (Blueprint $table) {
            $table->id('translate_id');
            $table->timestamps();
            $table->integer('line_counter');
            $table->integer('para');
            $table->integer('count');
            $table->mediumText('input')->nullable()->charset('utf8')->collation('utf8_unicode_ci');
            $table->mediumText('output')->nullable()->charset('utf8')->collation('utf8_unicode_ci');
            $table->foreignId('doc_id')->references('doc_id')->on('documents');
            $table->string('status')->default('In Progress');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('translates');
    }
}

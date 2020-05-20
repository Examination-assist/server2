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

            $table->string('name');

            $table->string('from_')->nullable();
            $table->string('to_')->nullable();

            $table->string('course_name')->nullable();

            $table->string('book_name')->nullable();
            $table->string('chapter_number')->nullable();

            $table->timestamps();
            $table->foreignId('user_id')->references('user_id')->on('users');

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
        Schema::dropIfExists('documents');
    }
}

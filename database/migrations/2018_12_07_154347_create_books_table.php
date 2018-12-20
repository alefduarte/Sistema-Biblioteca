<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->float('sellingPrice');
            $table->float('loanPrice');
            $table->integer('ISBN');
            $table->integer('stock');
            $table->integer('publisher_id')->unsigned();
            $table->integer('author_id')->unsigned();
            $table->timestamps();

            $table->foreign('publisher_id')->references('id')->on('publishers');
            $table->foreign('author_id')->references('id')->on('authors');
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}

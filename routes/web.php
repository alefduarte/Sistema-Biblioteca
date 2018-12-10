<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('authors', 'AuthorController');
Route::resource('books', 'BookController');
Route::resource('publishers', 'PublisherController');

Route::get('/users', function () {
    $users = DB::select('call viewUsers');
    dump($users);
});

Route::get('/livros', function () {
    $books = DB::select('call viewBooks');
    dump($books);
});

Route::get('/livros/{id}', function ($id) {
    $books = DB::select('call viewBooksId(3)');
    dump($books);
});

Route::get('/autores', function () {
    $authors = DB::select('call viewAuthors');
    dump($authors);
});

Route::get('/editoras', function () {
    $publishers = DB::select('call viewPublishers');
    dump($publishers);
});

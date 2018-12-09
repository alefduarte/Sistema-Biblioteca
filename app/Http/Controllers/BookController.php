<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Book;

class BookController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Book $book)
    {
        // get all the tasks based on current user id
        $books = Book::orderBy('created_at', 'desc')->take(10)->get();
		// return json response
        return response()->json([
            'books' => $books,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'sellingPrice' => 'required|numeric',
            'loanPrice' => 'required|numeric',
            'ISBN' => 'required|numeric',
            'stock' => 'required|numeric',
            'book_id' => 'required|numeric',
            'author_id' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $books = Book::create([
            'title' => request('title'),
            'sellingPrice' => request('sellingPrice'),
            'loanPrice' => request('loanPrice'),
            'ISBN' => request('ISBN'),
            'stock' => request('stock'),
            'book_id' => request('book_id'),
            'author_id' => request('author_id')
        ]);

		// return task with user object
        return response()->json([
            'book' => $books,
            'message' => 'Success'
        ], 200);
    }   

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $book = Book::findOrFail($id);
        return response()->json([
            'book' => $book,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // update book
        $input = $request->all();
        $book = Book::findOrFail($id);
        $book->update($input);
        return response()->json([
            'book' => $book,
            'message' => 'Success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Book::findOrFail($id)->delete();
    }
}

<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get("about-us",function (){
    return view('about');
});

Route::get('disclaimer', function () {
     return view('info.disclaimer');
});

Route::get('fraud-warning', function () {
    return view('info.fraudwg');
});

Route::get('radionics',function (){
    return view('info.radionics'); 
});
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// testing endpoint 
Route::get('testing', [\App\Http\Controllers\AuthController::class,'testing' ]);

// register endpoint 
Route::post('register', [\App\Http\Controllers\AuthController::class,'register' ]);

// login endpoint
Route::post('login', [\App\Http\Controllers\AuthController::class,'login' ]);

// logout & getUser mid/endpoint
Route::middleware('auth:sanctum')->group(function () {
    Route::get('getUser', [\App\Http\Controllers\AuthController::class, 'getUser']);
    Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
});




// counts endpoint
Route::post('counts', [\App\Http\Controllers\ClicksController::class,'counts' ]);

// aggregates endpoint
Route::get('aggregates', [\App\Http\Controllers\ClicksController::class,'aggregates' ]);


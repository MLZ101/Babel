<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class AuthController extends Controller
{
    public function testing() {
        return 'hello!!';
    }

    public function login(Request $req){
        $isAuth = Auth::attempt($req->only('email', 'password'));
        if(!$isAuth){
            return response(['error' => 'Unauthorized / Wrong Credentials'], Response::HTTP_UNAUTHORIZED);
        }
        $user = Auth::user();
        $token = $user->createToken('loginToken')->plainTextToken;

        // for more security, I'm going to store the token in a cookie
        $cookie = cookie('jwt', $token, 60*12);
        return response()->json([
            'note' => 'Login Successful!',
            'user' => $user,
        ])->withCookie($cookie);        

    }

    public function register(Request $req) {
        $valid = Validator::make($req->all(), [
            'name' => 'required|string|between:2,50',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if($valid->fails()){
            return response()->json($valid->errors(), 400);
           }

        return $user = User::create($valid->validated());
    }


    public function logout(){
        
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Successfully Logged Out'
        ])->withCookie($cookie);
    }
}





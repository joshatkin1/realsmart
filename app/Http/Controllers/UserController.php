<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('userDeviceAuth');
    }

    /**
     * FETCH ALL USERS SESSION DATA
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function fetchAllSessionData(Request $request){

        if(Session::has('id')){

            $session_data = json_encode( Session::all() , true);

            return response($session_data, 200)
                ->header('Content-Type', 'application/json');
        }

        return response("not logged in", 401)
            ->header('Content-Type', 'text/plain');
    }

}

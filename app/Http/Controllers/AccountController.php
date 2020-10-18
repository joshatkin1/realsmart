<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends AppController
{
    //

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * SHOW APP USERS ACCOUNT PAGE
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('account');
    }

    public function getUserAccountDetails(){
        return Account::find(session('id'));
    }






}

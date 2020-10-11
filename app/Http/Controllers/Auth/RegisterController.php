<?php

namespace App\Http\Controllers\Auth;

use App\AccountVerification;
use App\Http\Controllers\Controller;
use App\Mail\VerificationCodeEmail;
use App\Mail\WelcomeEmail;
use App\Models\AccountDeviceVerification;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::APP;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    final protected function create(array $data)
    {
        $deviceKeys = [];

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'verified_device_keys' => $deviceKeys,
        ]);

        session(['id' => $user->id , 'name' => $user->name , 'email' => $user->email , 'job_title' => $user->job_title]);

        //Mail::to($user->email)->send(new WelcomeEmail($user->name, $user->email));

        $accountVerification = new AccountDeviceVerification();
        $code = $accountVerification->formatVerificationCode();
        Mail::to(session('email'))->send(new VerificationCodeEmail($code));

        return $user;
    }
}

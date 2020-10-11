@extends('layouts.main')

@section('content')
    <form id="verify-device-form" method="post" action="/verify-device/submit" enctype="application/x-www-form-urlencoded">
        @csrf

        <p>{{$email}}</p>

        <input id="verification-code" class="lrg-inpt" name="verification-code" type="text" autocomplete="off" required="required" placeholder="verification code" />

        <button class="whitebtn verfybtns" type="submit">Submit Code</button>
        <input name="resend-code-email" value="{{$email}}" type="hidden"/>
    </form>
    <form method="post" action="/verify-device/resend-code" enctype="application/x-www-form-urlencoded">
        @csrf
        <input name="resend-code-email" value="{{$email}}" type="hidden"/>
        <button id="resend-verify-btn" class="blubtn verfybtns" name="resend-verify-btn" type="submit">resend code</button>
    </form>
@endsection

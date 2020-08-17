<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Demo</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <Index></Index>
        </div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>

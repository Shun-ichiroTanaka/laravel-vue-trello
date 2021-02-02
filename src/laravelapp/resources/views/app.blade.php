
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('common.head')

<body>

    <div id="app">
        @yield('content')
    </div>

<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>

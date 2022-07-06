<header class="menu {{ Route::currentRouteName() == 'profile' ? 'margin-x-20' : '' }}">
    <div class="menu__title">
        PokeAtlas
    </div>
    <nav class="navigation">
        <ul class="list">
            <li class="list__item hamburger">
                <button class="button">
                    <i class="button__icon fa-solid fa-bars"></i>
                    <i class="button__close fa-solid fa-xmark"></i>
                </button>
            </li>
        </ul>
        <ul class="list desktop" style="display: none">
            <li class="list__item"><a class="{{ Route::currentRouteName() == 'home' ? 'active' : '' }}"
                    href="{{ route('home') }}">Home</a></li>
            <li class="list__item"><a class="{{ Route::currentRouteName() == 'list' ? 'active' : '' }}"
                    href="{{ route('list') }}">Lista</a></li>
        </ul>
    </nav>
</header>

<ul class="menu-mobile">
    <li class="menu-mobile__item">
        <a class="{{ Route::currentRouteName() == 'home' ? 'active' : '' }}" href="{{ route('home') }}">
            <i class="fa-solid fa-house-chimney"></i>
            Home
        </a>
    </li>
    <li class="menu-mobile__item">
        <a class="{{ Route::currentRouteName() == 'list' ? 'active' : '' }}" href="{{ route('list') }}">
            <i class="fa-solid fa-rectangle-list"></i>
            Lista
        </a>
    </li>
</ul>

@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row banner">
            <div class="col-12 col-desktop-6">
                <h1 class="banner__title">Pokedex</h1>
                <p class="banner__content font-weight-400">Use the Advanced Search to explore Pokémon by type, weakness,
                    Ability, and more! Search for a Pokémon by
                    name or using its National Pokédex number.</p>

                <div class="text-right">
                    <a href="{{ route('list') }}" class="banner__button">
                        Search Pokemon
                    </a>
                </div>
            </div>
            <div class="mobile-none col-desktop-6">
                <div class="carousel">
                    <div class="carousel__images">
                        <div class="carousel__image">
                            <img src="{{ asset('images/pokemons/charizard.webp') }}">
                        </div>
                        <div class="carousel__image">
                            <img src="{{ asset('images/pokemons/venusaur.webp') }}">
                        </div>
                        <div class="carousel__image">
                            <img src="{{ asset('images/pokemons/blastoise.webp') }}">
                        </div>
                    </div>
                    <div class="carousel__dots"></div>
                </div>
            </div>
        </div>
    </div>
@endsection

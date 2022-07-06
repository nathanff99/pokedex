@extends('layouts.app')

@section('content')
  <pokemon-profile name="{{ request()->route('name') }}" />
@endsection

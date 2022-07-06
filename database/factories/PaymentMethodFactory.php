<?php

namespace Database\Factories;

use App\Models\PaymentMethod;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PaymentMethodFactory extends Factory
{

    protected $model = PaymentMethod::class;

    public function definition()
    {
        return [
            'user_id' => User::factory()->create()->id,
            'card_number' => $this->faker->unique()->numerify('################'),
            'holder' => $this->faker->name(),
            'expiration_date' => $this->faker->date('m-y'),
            'security_code' => Str::random(3),
            'brand' => Str::random(10),
        ];
    }
}

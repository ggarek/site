---
title: Pseudo-Random Numbers
category: Computer Science
tags: random
date: 2018-09-11
---

## Overview

Pseudo-random number generators are used for generating numbers distributed randomly.

The reason of being pseudo-random is that the modern computer cannot generate true-random information without an additional device.

## Terms

* RNG: Random Number Generators.
* PRNG: Pseudo-Random Number Generators. The `pseudo` here means the generator would eventually repeating a same sequence of numbers at a certain time.
* TRNG: True-Random Number Generators. The `true` here means we have no way to truly detect the next number being generated at any given time or certain order.

## Use

In Python, `random.random()` returns the next random floating point number in the range `[0.0, 1.0)`.

```bash
$ python -c "import random; print(random.random())"
0.9997071591954676

$ python -c "import random; print(random.random())"
0.7442605999548604
```

In Bash, you can use the environ variable `$RANDOM` for a random integer between 0 and 32767 (2^15-1).

```bash
$ echo $RANDOM
16857

$ echo $RANDOM
12485
```

Note: for security reason, please don't use the above technique for getting pseudo-random numbers, for example, to generate random numbers for cryptography usage.

## Patterns

### Pseudo means recur

The PRNGs have a period of number recurring.
For example, in sequence `1 4 3 2 5 1 4 3 2 5 1 4 3 2 5`, the `1 4 3 2 5` recurs every 5 numbers.
For a PRNG based on such sequence, whenever you see `1` as random number, `4` will always be the next number.
The recurring numbers determine that the number sequence is fixed rather than randomized.

The big picture behind the PRNG is like a fixed table of such similar sequence.

You might be wondering why do people still get random numbers in such a silly way?
The answer is as long as the period is wide enough and you start from different positions in the sequence, you're almost unable to get a same set of random numbers during the life cycle of your application.

### Seed

When using the PRNG libraries, you need to set the initial state as a seed.

If you didn't set the seed for the random call, it's up to language or library designer on how to assign one for you.
The current system time will probably be used.

Once you call a random function, the PRNG libraries will update their internal state for the generator so that you won't get a same number next time.

### Reproduce

As long as you provide the same seed again, the PRNG libraries will reproduce the same random results for you.

### Insecure

Usually, you do not want to use the standard `random` module for cryptographic operations, since the PRNG algorithms are not cryptographically secure.

It's recommended to always use OS random number generator, for example `/dev/urandom` on UNIX platform or `CryptGenRandom` on Windows.

### Extend APIs

There are several variants of random APIs:

* Get a sequence of random bits.
* Get a random character.
* Get a random string.
* Get a random integer.
* Get a random floating number.
* Choose an element from an array.
* Shuffle the array.
* Get a sample from an array.
* Get a random number in designated distribution, for example, Beta distribution, Exponential distribution, Gamma Distribution, etc.

## Solutions

### Mersenne Twister

Mersenne Twister algorithm is a pseudo-random number generator that produces 53-bit precision floats in a period of 2^19937-1. It's one of the most extensively tested RNGs.

People like it because it's fast, re-entrant, and efficient. The extensive period reduces the probability of causing issues.

The disadvantage of Mersenne Twister is that it uses relatively larger buffer than other PRNG algorithms.

The Mersenne Twister is used in below systems or libraries: Python, Ruby, R, PHP, Common Lisp, C++ Boost, Julia, Octave, Excel, Mathematica, etc.

### Linear Congruential Generator

The LCG or linear congruential generator is yet another pseudo-random number generator calculated with a discontinuous piecewise linear equation. It's one of the oldest and best-known RNGs. People like it because it's easy to understand and easily implemented.

The period of LCG depends on the parameter. If the parameters are too small, it tends to be problematic. Otherwise, it creates known and long periods. For performance consideration, the periods of LCG are usually between 2^32 to 2^64.

The advantage of LCG is that it uses minimal RAM. The disadvantage of LCG is its relatively small period.

## Mix

A typical implementation of PRNG comprised of the two PRNG algorithm introduced above:

* Use LCG for seed data.
* Use Mersenne Twister for generating a pseudo-random number.

## What else?

Please read "The Art of Computer Programming, Volume 2". In this book, Knuth has in-depth research on generating random numbers.

## Thoughts

Oh, did I just forgot to mention what is TRNG? With the help of some magic device, you might be able to get random numbers easily. For example, since the weather system is a chaos system, meaning no one can accurately predict it, you can generate random numbers based on the history of temperature, humidity, wind speed. You can find more good indicators in natural world or in the universe.

## Conclusion

* The pseudo-random number generators generate "random" numbers. However, they're not TRUE random numbers.
* The Mersenne Twister and LCG are two popular PRNG algorithms.
* Don't use PRNG for cryptographic operations.

## References

* [Random number generation](https://en.wikipedia.org/wiki/Random_number_generation)
* [How do random number generators work](https://softwareengineering.stackexchange.com/questions/109724/how-do-random-number-generators-work)
* [Linear congruential generator](https://en.wikipedia.org/wiki/Linear_congruential_generator)
* [Python random](https://docs.python.org/3/library/random.html)
* [Cryptography](https://cryptography.io/en/latest/random-numbers/)
* [Mersenne Twister](https://en.wikipedia.org/wiki/Mersenne_Twister)
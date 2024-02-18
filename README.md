# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @shanelbb/lotide`

**Require it:**

`const _ = require('@shanelbb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual()`: Function that asserts if arrays are equal.
- `assertEqual()`: Function that asserts equality between two arguments.
- `assertObjectsEqual()`: Function that asserts if two objects are equal.
- `countLetters()`: Function that uses `countOnly()` to create an object with the occurrences of letters in a string.
- `countOnly()`: Function that returns the number of time an item appears in an array based on the true/false values in the itemsToCount object.
- `eqArrays()`: Function that checks if two arrays are equal.
- `eqObjects()`: Function that checks if two objects are equal.
- `findKey()`: Function that loops through an object argument and returns the first key that matches the callback results.
- `findKeyByValue()`: Function that loops through an object's keys and returns the key that matches the value argument.
- `flatten()`: Function to flatten an array that contains arrays.
- `head()`: Function that returns the first element of an array argument.
- `letterPositions()`: Function that returns an object with key:value pairs of letter:array with index(s) of each letter.
- `middle()`: Function that returns an new array with the middle value(s) in an array.
- `tail()`: Function that returns all but the first element of an array argument.
- `takeUntil()`: Function that will loop through the items in an array until an item meets the criteria of the callback.
- `without()`: Function to remove items from the source array that appear in the itemsToRemove array.

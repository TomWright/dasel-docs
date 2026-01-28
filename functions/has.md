# has

Returns true if the input data has the given key/index.

Expects a single argument of type `string` or `int`.

* If `string`, returns `true` when the input data is a map with a key matching the given value.
* If `int`, returns `true` when the input data is an array and the given index is within range.

## Examples

```
["foo", "bar", "baz"].has(1) // true
["foo", "bar", "baz"].has(3) // false
["foo", "bar", "baz"].has(-1) // false
["foo", "bar", "baz"].has("foo") // false
{"foo": "bar"}.has("foo") // true
{"foo": "bar"}.has("bar") // false
{"foo": "bar"}.has(0) // false
```


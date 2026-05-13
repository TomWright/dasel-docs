# map

The `map` function can be used to transform the contents of an array. It's functions in a similar way to [javascripts Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Examples

### Simple addition

```
[1, 2, 3].map($this + 1)
// [2, 3, 4]
```

### Using `$key` for the index

```
[10, 20, 30].map($key)
// [0, 1, 2]
```

```
[10, 20, 30].map($key + $this)
// [10, 21, 32]
```

### Extracting nested properties

```
[
    {"x": "foo"},
    {"x": "bar"},
    {"x": "baz"}
].map(x)
// ["foo", "bar", "baz"]
```

### Fizzbuzz

Given `numbers.json`

```json
{
    "numbers": [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 10,
        11, 12, 13, 14, 15
    ]
}
```

```sh
$ cat numbers.json | dasel -i json 'numbers.map(
    if ($this % 3 == 0 && $this % 5 == 0) {
        "fizzbuzz"
    } elseif ($this % 5 == 0) {
        "buzz"
    } elseif ($this % 3 == 0) {
        "fizz"
    } else {
        $this
    }
)'
[
    1,
    2,
    "fizz",
    4,
    "buzz",
    "fizz",
    7,
    8,
    "fizz",
    "buzz",
    11,
    "fizz",
    13,
    14,
    "fizzbuzz"
]

```


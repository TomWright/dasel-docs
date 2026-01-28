# sortBy

Sorts the input array by the given expression, either ascending or descending.

Defaults to ascending.

## Examples

### Simple array

```sh
[1, 3, 5, 2, 4].sortBy() // [1, 2, 3, 4, 5]
[1, 3, 5, 2, 4].sortBy($this) // [1, 2, 3, 4, 5]
[1, 3, 5, 2, 4].sortBy($this, asc) // [1, 2, 3, 4, 5]
[1, 3, 5, 2, 4].sortBy($this, desc) // [5, 4, 3, 2, 1]
```

### Sort by nested property

```sh
[
    {"x": 1},
    {"x": 3},
    {"x": 5},
    {"x": 2},
    {"x": 4}
].sortBy(x)

// Results in
[
    {"x": 1},
    {"x": 2},
    {"x": 3},
    {"x": 4},
    {"x": 5}
]
```


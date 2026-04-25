# flatten

Flattens a nested array by one level. Elements that are arrays are unpacked into the parent array; non-array elements are kept as-is.

#### Syntax

```
flatten(array)
```

or chained:

```
<array>.flatten()
```

#### Arguments

* **array** (`array`, optional when chained) - The array to flatten.

#### Examples

```
flatten([[1, 2], [3, 4]])
// [1, 2, 3, 4]
```

```
[[1, [2, 3]], [4]].flatten()
// [1, [2, 3], 4]
```

#### Notes

* Only flattens one level deep. Nested arrays within nested arrays are not recursively flattened.

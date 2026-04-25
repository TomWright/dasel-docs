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

**Flatten nested arrays**

```
flatten([[1, 2], [3, 4]])
// [1, 2, 3, 4]
```

**Mixed elements**

```
[[1, 2], 3, [4, 5]].flatten()
// [1, 2, 3, 4, 5]
```

**Only one level deep**

```
[[1, [2, 3]], [4]].flatten()
// [1, [2, 3], 4]
```

**CLI usage — combine nested tag arrays**

```bash
$ echo '{"groups": [["a", "b"], ["c", "d"]]}' | dasel -i json 'groups.flatten()'
[
    "a",
    "b",
    "c",
    "d"
]
```

#### Notes

* Only flattens one level deep. To flatten deeper, chain multiple `.flatten()` calls.

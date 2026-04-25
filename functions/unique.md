# unique

Removes duplicate values from an array, returning a new array with only unique elements. Order is preserved.

#### Syntax

```
unique(array)
```

or chained:

```
<array>.unique()
```

#### Arguments

* **array** (`array`, optional when chained) - The array to deduplicate.

#### Examples

```
unique([1, 2, 2, 3, 1])
// [1, 2, 3]
```

```
["a", "b", "a", "c"].unique()
// ["a", "b", "c"]
```

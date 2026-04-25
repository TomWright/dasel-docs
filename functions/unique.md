# unique

Removes duplicate values from an array, returning a new array with only unique elements. Order is preserved — the first occurrence of each value is kept.

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

**Deduplicate numbers**

```
unique([1, 2, 2, 3, 1])
// [1, 2, 3]
```

**Deduplicate strings**

```
["a", "b", "a", "c", "b"].unique()
// ["a", "b", "c"]
```

**CLI usage — get unique tags**

```bash
$ echo '{"tags": ["go", "cli", "go", "json", "cli"]}' | dasel -i json 'tags.unique()'
[
    "go",
    "cli",
    "json"
]
```

**Chained with other functions**

```
[3, 1, 2, 1, 3].unique().sortBy()
// [1, 2, 3]
```

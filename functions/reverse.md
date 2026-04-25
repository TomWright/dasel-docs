# reverse

Reverses the input. Works with both strings and arrays.

#### Syntax

```
reverse(input)
```

or chained:

```
<value>.reverse()
```

#### Arguments

* **input** (`string | array`) - The value to reverse.

#### Examples

**Reverse a string**

```
reverse("hello")
// "olleh"
```

**Reverse an array**

```
reverse([1, 2, 3])
// [3, 2, 1]
```

**Chained usage**

```
[1, 2, 3].reverse()
// [3, 2, 1]
```

**CLI usage — reverse an array from a file**

```bash
$ echo '{"items": ["a", "b", "c"]}' | dasel -i json 'items.reverse()'
[
    "c",
    "b",
    "a"
]
```

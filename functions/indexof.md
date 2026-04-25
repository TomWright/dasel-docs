# indexOf

Returns the index of the first occurrence of a substring within a string. Returns `-1` if the substring is not found.

#### Syntax

```
indexOf(input, substring)
```

or chained:

```
<string>.indexOf(substring)
```

#### Arguments

* **input** (`string`, optional when chained) - The string to search in.
* **substring** (`string`) - The substring to search for.

#### Examples

```
indexOf("hello world", "world")
// 6
```

```
"foobar".indexOf("bar")
// 3
```

```
"hello".indexOf("xyz")
// -1
```

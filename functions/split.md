# split

Splits a string by a separator into an array of strings.

#### Syntax

```
split(separator, input)
```

or chained:

```
<string>.split(separator)
```

#### Arguments

* **separator** (`string`) - The delimiter to split on.
* **input** (`string`, optional when chained) - The string to split.

#### Examples

```
"a,b,c".split(",")
// ["a", "b", "c"]
```

```
split("-", "one-two-three")
// ["one", "two", "three"]
```

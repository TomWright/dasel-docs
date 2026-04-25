# endsWith

Checks if a string ends with a given suffix. Returns a boolean.

#### Syntax

```
endsWith(input, suffix)
```

or chained:

```
<string>.endsWith(suffix)
```

#### Arguments

* **input** (`string`, optional when chained) - The string to check.
* **suffix** (`string`) - The suffix to look for.

#### Examples

```
endsWith("hello world", "world")
// true
```

```
"foobar".endsWith("foo")
// false
```

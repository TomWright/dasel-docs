# trimSuffix

Removes a suffix from the end of a string. If the string does not end with the suffix, it is returned unchanged.

#### Syntax

```
trimSuffix(input, suffix)
```

or chained:

```
<string>.trimSuffix(suffix)
```

#### Arguments

* **input** (`string`, optional when chained) - The string to trim.
* **suffix** (`string`) - The suffix to remove.

#### Examples

```
trimSuffix("hello world", " world")
// "hello"
```

```
"foobar".trimSuffix("bar")
// "foo"
```

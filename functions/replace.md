# replace

The `replace` function replaces occurrences of one or more substrings within a string.

It supports replacing multiple different substrings in a single call and can be used either as a chained function or with explicit input.

#### Syntax

Chained form:

```
<string>.replace(old, new[, old2, new2...])
```

Function form:

```
replace(input, old, new[, old2, new2...])
```

#### Arguments

* **input** (`string`, optional when chained)\
  The string to perform replacements on.
* **old** (`string`)\
  The substring to search for.
* **new** (`string`)\
  The replacement string.
* **oldN / newN** (`string`, optional pairs)\
  Additional replacement pairs. Each `old` must be followed by its corresponding `new`.

#### Examples

**Chained usage**

```
dasel '"hello world".replace("world", "there")'
```

**Output**

```
hello there
```

**Function usage**

```
dasel 'replace("hello world", "world", "there")'
```

**Output**

```
hello there
```

**Multiple replacements**

```
dasel '"a-b-c".replace("-", "_", "a", "x")'
```

**Output**

```
x_b_c
```

**Replace multiple patterns at once**

```
dasel 'replace("one two three", "one", "1", "two", "2", "three", "3")'
```

**Output**

```
1 2 3
```

#### Notes

* Replacements are applied in a single pass.
* Each replacement must be provided as a pair (`old`, `new`).
* If an odd number of arguments is supplied, the first argument is treated as the input string.
* All arguments must be strings.
* Replacement is literal (not regex-based).

# trim

Trims whitespace from both ends of a string.

#### Syntax

```
trim(input)
```

or chained:

```
<string>.trim()
```

#### Arguments

* **input** (`string`, optional when chained) - The string to trim.

#### Examples

```
trim("  hello  ")
// "hello"
```

```
"  hello world  ".trim()
// "hello world"
```

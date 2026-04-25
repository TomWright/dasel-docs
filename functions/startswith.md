# startsWith

Checks if a string starts with a given prefix. Returns a boolean.

#### Syntax

```
startsWith(input, prefix)
```

or chained:

```
<string>.startsWith(prefix)
```

#### Arguments

* **input** (`string`, optional when chained) - The string to check.
* **prefix** (`string`) - The prefix to look for.

#### Examples

```
startsWith("hello world", "hello")
// true
```

```
"foobar".startsWith("bar")
// false
```

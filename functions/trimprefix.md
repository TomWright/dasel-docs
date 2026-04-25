# trimPrefix

Removes a prefix from the beginning of a string. If the string does not start with the prefix, it is returned unchanged.

#### Syntax

```
trimPrefix(input, prefix)
```

or chained:

```
<string>.trimPrefix(prefix)
```

#### Arguments

* **input** (`string`, optional when chained) - The string to trim.
* **prefix** (`string`) - The prefix to remove.

#### Examples

```
trimPrefix("hello world", "hello ")
// "world"
```

```
"foobar".trimPrefix("foo")
// "bar"
```

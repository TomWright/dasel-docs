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

**Function call**

```
trimPrefix("hello world", "hello ")
// "world"
```

**Chained usage**

```
"foobar".trimPrefix("foo")
// "bar"
```

**No match — string unchanged**

```
"foobar".trimPrefix("xyz")
// "foobar"
```

**CLI usage — strip a URL prefix**

```bash
$ echo '{"url": "https://example.com/path"}' | dasel -i json 'url.trimPrefix("https://")'
example.com/path
```

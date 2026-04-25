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

**Find a substring**

```
indexOf("hello world", "world")
// 6
```

**Chained usage**

```
"foobar".indexOf("bar")
// 3
```

**Not found**

```
"hello".indexOf("xyz")
// -1
```

**CLI usage**

```bash
$ echo '{"path": "/api/v2/users"}' | dasel -i json 'path.indexOf("/v2")'
4
```

**Check if a substring exists**

```
"hello world".indexOf("world") >= 0
// true
```

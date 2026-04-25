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

**Basic checks**

```
startsWith("hello world", "hello")
// true
```

```
"foobar".startsWith("bar")
// false
```

**CLI usage**

```bash
$ echo '{"url": "https://example.com"}' | dasel -i json 'url.startsWith("https")'
true
```

**Use inside a filter**

```
["https://a.com", "http://b.com", "https://c.com"].filter(startsWith($this, "https"))
// ["https://a.com", "https://c.com"]
```

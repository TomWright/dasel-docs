# contains

Checks if an array contains a given value. Returns a boolean.

#### Syntax

```
<array>.contains(value)
```

#### Arguments

* **value** - The value to search for in the array.

#### Examples

**Check for a number**

```
[1, 2, 3].contains(2)
// true
```

**Check for a string**

```
["a", "b", "c"].contains("d")
// false
```

**CLI usage**

```bash
$ echo '{"tags": ["go", "cli", "json"]}' | dasel -i json 'tags.contains("go")'
true
```

**Use inside a filter**

```
[
    {"name": "Alice", "roles": ["admin", "user"]},
    {"name": "Bob", "roles": ["user"]}
].filter(roles.contains("admin"))
// [{"name": "Alice", "roles": ["admin", "user"]}]
```

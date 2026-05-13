# KDL format

[KDL](https://kdl.dev/) (KDL Document Language) is a node-oriented document language. Dasel supports both v1 and v2 syntax for reading, and outputs v2 by default.

## Version support

KDL has two versions with slightly different syntax for keywords:

| Feature    | v1              | v2                    |
| ---------- | --------------- | --------------------- |
| Booleans   | `true` `false`  | `#true` `#false`      |
| Null       | `null`          | `#null`               |
| Raw strings| `r"..."` `r#"..."#` | `#"..."#` `##"..."##` |
| Multi-line strings | Not supported | `"""..."""`   |
| Special floats | N/A          | `#inf` `#-inf` `#nan` |

When reading, dasel auto-detects the version from the syntax used, or from a `/- kdl-version N` marker at the start of the document. Both versions produce the same data model.

When writing, dasel outputs v2 syntax by default. Use `--write-flag kdl-version=1` for v1 output.

## Data model

KDL is node-oriented — each node has a name, optional arguments, optional properties (key=value), and optional children. Dasel maps this to its standard map/slice model:

### Scalar nodes

A node with a single argument, no properties, and no children becomes a direct scalar value:

```kdl
name "Bob"
age 76
active #true
```

```json
{
    "name": "Bob",
    "age": 76,
    "active": true
}
```

### Nodes with properties and children

Properties become map keys. Children are merged in as nested keys. Arguments are stored under a `$args` key:

```kdl
server 80 host="localhost" {
    tls #true
}
```

```json
{
    "server": {
        "$args": [80],
        "host": "localhost",
        "tls": true
    }
}
```

### Duplicate node names

Duplicate node names at the same level are automatically promoted to a slice:

```kdl
plugin "git"
plugin "docker"
plugin "tmux"
```

```json
{
    "plugin": ["git", "docker", "tmux"]
}
```

### Empty nodes

A node with no arguments, properties, or children maps to `null`:

```kdl
marker
```

```json
{
    "marker": null
}
```

## Examples

### Read a value from KDL

```bash
echo 'name "Bob"' | dasel -i kdl 'name'
```

### Convert KDL to JSON

```bash
echo 'name "Bob"
age 76' | dasel -i kdl -o json '$root'
```

### Convert JSON to KDL

```bash
echo '{"name": "Bob", "age": 76}' | dasel -i json -o kdl '$root'
```

### Output as KDL v1

```bash
echo '{"active": true}' | dasel -i json -o kdl --write-flag kdl-version=1 '$root'
# Output: active true
```

### Query nested KDL

```bash
echo 'server {
    host "localhost"
    port 8080
}' | dasel -i kdl 'server.host'
```

### Query duplicate nodes by index

```bash
echo 'plugin "git"
plugin "docker"
plugin "tmux"' | dasel -i kdl 'plugin[1]'
# Output: "docker"
```

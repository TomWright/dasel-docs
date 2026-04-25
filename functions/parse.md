# parse

Converts a string into a structured document at runtime.

#### Syntax

```
parse(format, content)
```

#### Arguments

* **format** (`string`) - The format to parse (`"json"`, `"yaml"`, `"toml"`, etc).
* **content** (`string`) - The string to parse.

#### Examples

**Parse JSON and access a field**

```
parse("json", '{"name":"Tom"}').name
// "Tom"
```

**Parse YAML**

```
parse("yaml", "name: Tom\nage: 30").name
// "Tom"
```

**CLI usage — parse an embedded JSON string from a YAML file**

```bash
$ echo 'config: {"port": 8080}' | dasel -i yaml 'parse("json", config).port'
8080
```

**Combined with readFile**

```
parse("json", readFile("config.json")).database.host
```

**Roundtrip with stringify**

```
parse("json", stringify("json", {"a": 1})).a
// 1
```

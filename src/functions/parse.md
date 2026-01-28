# parse

`parse` allows you to convert strings to documents within your query.

Accepts 2 arguments:

1. Format (`json`, `yaml`, `toml`, etc)
2. String to parse

## Example

```
parse("json", "{'name':'Tom'}").name
"Tom"
```


# Editing files in place

With V3, built-in file editing was removed to allow for re-evaluation. In the meantime, you can edit files in place using shell redirection and a temporary file.

***

## Basic pattern

```bash
dasel -i <format> '<query>' < file > file.tmp && mv file.tmp file
```

1. Read the file into dasel via `< file`
2. Redirect the output to a temporary file via `> file.tmp`
3. Move the temporary file over the original via `mv file.tmp file`

If assigning a single value, it is important to use the `--root` flag — this ensures dasel outputs the entire document, not just the modified value.

***

## Examples

### Update a value in a TOML file

```bash
dasel -i toml --root 'foo = "bar"' < config.toml > config.toml.tmp \
  && mv config.toml.tmp config.toml
```

### Update a value in a JSON file

```bash
dasel -i json --root 'settings.theme = "dark"' < config.json > config.json.tmp \
  && mv config.json.tmp config.json
```

### Add a new field to a YAML file

```bash
dasel -i yaml --root '{$root..., "newField": "value"}' < data.yaml > data.yaml.tmp \
  && mv data.yaml.tmp data.yaml
```

### Shell function for convenience

You can wrap this pattern in a shell function:

```bash
dasel-edit() {
  local format="$1" query="$2" file="$3"
  dasel -i "$format" --root "$query" < "$file" > "$file.tmp" && mv "$file.tmp" "$file"
}

# Usage:
dasel-edit json 'name = "Tom"' config.json
```

***

## Why use a temporary file?

When you redirect output to a file, the shell truncates that file **before** running the command. This means the file would be empty when dasel tries to read it. The temporary file avoids this race condition.

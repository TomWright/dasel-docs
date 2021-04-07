# Multiple

## Description

Tells dasel to select or put multiple items.

This causes the [dynamic](https://github.com/TomWright/dasel#dynamic) selector to return all matching results rather than the first, and enables the [any index](https://github.com/TomWright/dasel#any-index) selector.

All matches will be output on a new line.

## Usage

Pass the `-m`, `--multiple` flag to [select](../select.md) or [put](../put.md) commands.

## Example

### Select

```bash
echo '[{"name": "Tom"}, {"name": "Jim"}]' | dasel -p json -m '.[*].name'
"Tom"
"Jim"
```

### Put

```bash
echo '[{"name": "Tom"}, {"name": "Jim"}]' | dasel put string -p json -m '.[*].name' Frank
[
  {
    "name": "Frank"
  },
  {
    "name": "Frank"
  }
]
```


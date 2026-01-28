# Multiple

## Description

Tells dasel to select or put multiple items.

This causes the [dynamic](../../selectors/dynamic.md) selector to return all matching results rather than the first, and enables the [all indexes](../../selectors/all-indexes.md) selector.

All matches will be output on a new line.

## Usage

Pass the `-m`, `--multiple` flag to [select](../select.md) or [put](../put.md) commands.

## Example

### Select

```shell
$ echo '[{"name": "Tom"}, {"name": "Jim"}]' | dasel -p json -m '.[*].name'
"Tom"
"Jim"
```

### Put

```shell
$ echo '[{"name": "Tom"}, {"name": "Jim"}]' | dasel put string -p json -m '.[*].name' Frank
[
  {
    "name": "Frank"
  },
  {
    "name": "Frank"
  }
]
```

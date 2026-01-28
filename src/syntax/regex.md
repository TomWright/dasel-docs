# Regex

Regex pattern are represented as unquoted strings, in the format of `r/my regex pattern/`.

Regex patterns can be used with the like `=~` and not like `!~` comparators.

## Limitations

1. Usage is limited to pattern matching for now. Value extraction will come in the future.
2. Patterns must start with `r/` and end with `/`.

## Examples

### Filter for strings starting with `b`

```
["foo", "bar", "baz"].filter($this =~ r/^b/)
[
    "bar",
    "baz"
]

```

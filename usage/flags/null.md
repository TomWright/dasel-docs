# Null

## Description

This flag tells dasel to output `null` instead of `ValueNotFound` errors.

## Usage

Pass the `-n`, `--null` flag to [select](../select.md) commands.

## Example

With the flag:

```text
$ echo '[1]' | dasel -p json -n '.[1]'
null
```

Without the flag:

```text
$ echo '[1]' | dasel -p json '.[1]'   
Error: could not query node: could not find value: no value found for selector: .[1]: [1]
Usage:
  dasel select -f <file> -p <json,yaml> -s <selector> [flags]

Flags:
  -f, --file string       The file to query.
  -h, --help              help for select
  -m, --multiple          Select multiple results.
  -n, --null              Output null instead of value not found errors.
  -p, --parser string     Shorthand for -r FORMAT -w FORMAT.
      --plain             Alias of -w plain
  -r, --read string       The parser to use when reading.
  -s, --selector string   The selector to use when querying the data structure.
  -w, --write string      The parser to use when writing.

Error: could not write custom output: could not query node: could not find value: no value found for selector: .[1]: [1]
exit status 1
```


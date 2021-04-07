# Keys and indexes

## Description

The key/index selector is used to return a list of all keys/indexes in the current node.

## Usage

{% hint style="info" %}
This must be used in conjunction with the `-m`, `--multiple` flag.
{% endhint %}

```bash
.-
```

## Example

```bash
echo '{"a":{"c": [1, 2, 3]},"b":{}}' | dasel -p json -m '.a.c.-'
"0"
"1"
"2"
```


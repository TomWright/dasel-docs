# Index

## Description

The index selector allows you to access a specific element of an array.

## Usage

```bash
.[0]
```

## Example

```bash
echo '{"a":{"b": [1, 2, 3]}}' | dasel -p json '.a.b.[1]'
"2"
```


# Property

## Description

A property selector is the most common selector, and is used to select a specific named property within a map.

## Usage

```bash
.propertyName
```

## Example

```bash
echo '{"name": "Tom"}' | dasel -p json '.name'
Tom
```


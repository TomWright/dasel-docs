# All

All takes any list or object value and extracts each element within it, allowing you to access each of them individually.

## Examples

### Lists

```
echo '["a", "b", "c"]' | dasel -r json
[
  "a",
  "b",
  "c"
]

echo '["a", "b", "c"]' | dasel -r json 'all()'
"a"
"b"
"c"
```

### Objects

```
echo '{"x": 1, "y": 2, "z": 3}' | dasel -r json
{
  "x": 1,
  "y": 2,
  "z": 3
}

echo '{"x": 1, "y": 2, "z": 3}' | dasel -r json 'all()'
1
2
3
```

### Nested Objects

```
echo '{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "Jim"
    }
  ]
}' | dasel -r json 'users.all().name'
"Tom"
"Jim"
```

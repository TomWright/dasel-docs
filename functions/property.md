# Property

Accepts 1 or more arguments.

Returns the values found under the given keys.

If any argument ends with a `?`, that lookup is considered optional and dasel will continue if that property is not found.

## Usage

Because property is a commonly used function, it has an alias.

If no round brackets are detected in a selector part and no other function detects it as an alias, dasel assumes it is a property name.

## Examples

### Property with optional field

```
$ echo '{"x": 1, "y": 2, "z": 3}' | dasel -r json 'property(x,y,bad?)'
1
2
```

### Property using alias

```
$ echo '{"x": 1, "y": 2, "z": 3}' | dasel -r json 'x'
1
```

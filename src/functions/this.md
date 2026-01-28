# This

Accepts no arguments.

Returns the current value. Is most commonly used in comparison functions when you want to reference the value of the current element.

## Usage

`.` is an alias for `this()`.

## Examples

### This

```
$ echo '{"x": 1, "y": 2, "z": 3}' | dasel -r json 'all().this()'
1
2
3
```

### This using alias

```
$ echo '{"x": 1, "y": 2, "z": 3}' | dasel -r json 'all().'
1
2
3
```

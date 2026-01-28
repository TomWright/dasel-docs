# Merge

Merge expect 0 or more arguments.

## No arguments

When called with no arguments merge takes all of the output values from the previous function and adds them to a single list.

## 1 or more arguments

When called with 1 or more arguments, the arguments are executed as a subquery on each of the output values from the previous function.

All values returned from subqueries across all input values are added to a single list.

## Examples

### Merge arguments

```
$ echo '{
  "name": {
    "first":"Tom",
    "last":"Wright"
  },
  "firstNames": [
    "Jim",
    "Bob"
  ]
}' | dasel -r json 'merge(name.first,firstNames.all()).all()' 
[
  "Tom",
  "Jim",
  "Bob"
]
```

### Merge no arguments

```
$ echo '[
  {"name": {"first": "Tom"}},
  {"name": {"first": "Jim"}},
  {"name": {"first": "Frank"}}
]' | dasel -r json 'all().name.first.merge()' 
[
  "Tom",
  "Jim",
  "Frank"
]
```

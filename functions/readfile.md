# readFile

`readFile` allows you to read file contents at runtime and use the results in your selectors.

A common use-case may be to send the output into a [`parse`](parse.md) call.

Accepts 1 arguments:

1. Filepath

## Example

### Simple text

```
$greeting = readFile("greeting.txt");
$name = readFile("name.txt");
$greeting + " " + $name;
// "Hello Tom"
```

### Parsing file contents

```
// Assuming names.json contains ["Tom", "Jim"]
$names = parse("json", readFile("names.json"));
len(names)
// 2
```

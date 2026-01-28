# Spread

The spread operator `...` can be used to spread the contents of a map or array across function arguments or array/object constructors, depending on the situation.

Anothor primary use-case is to output results as separate documents when put at the end of the output statement.

## Examples

```
doSomething([1, 2, 3]...)
// equivalent to doSomething(1, 2, 3)

[[1, 2, 3]..., 4, 5, 6]
// resolves to [1, 2, 3, 4, 5, 6]

{ {"firstName": "Tom"}..., "lastName": "Wright" }
// resolves to { "firstName": "Tom", "lastName": "Wright" }

[1, 2, 3]...
// 1
// 2
// 3
```


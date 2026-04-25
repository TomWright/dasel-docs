# ignore

Marks a value to be ignored, causing it to be excluded from branch output. This is useful in conditional branches where you want to discard certain paths.

#### Syntax

```
ignore()
```

#### Arguments

None.

#### Examples

```
{
  "name": "Tom",
  "age": 30
} | (
  name,
  age > 40 ? age : ignore()
)
```

In this example, since `age` is not greater than 40, the `ignore()` branch is taken and the age value is excluded from the output.

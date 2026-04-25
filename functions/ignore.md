# ignore

Marks a value to be ignored, causing it to be excluded from branch output. This is useful in conditional branches where you want to discard certain paths.

#### Syntax

```
ignore()
```

#### Arguments

None.

#### Examples

**Conditionally exclude a value**

Given `input.json`:

```json
{
  "name": "Tom",
  "age": 30
}
```

```bash
$ dasel -i json -f input.json '(name, if (age > 40) { age } else { ignore() })'
Tom
```

Since `age` is not greater than 40, the `ignore()` branch is taken and only `name` is output.

**Filter branches in a multi-select**

```
(
  name,
  if (has("email")) { email } else { ignore() }
)
```

This outputs `email` only if the field exists, without erroring on missing keys.

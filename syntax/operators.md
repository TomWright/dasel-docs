# Operators

Dasel supports a range of operators for arithmetic, comparison, logic, assignment, and pattern matching.

## Arithmetic Operators

Arithmetic operators work on numeric values (`int` and `float`). If either operand is a float, the result is a float.

| Operator | Description    | Example              | Result |
| -------- | -------------- | -------------------- | ------ |
| `+`      | Addition       | `3 + 2`              | `5`    |
| `-`      | Subtraction    | `10 - 4`             | `6`    |
| `*`      | Multiplication | `3 * 4`              | `12`   |
| `/`      | Division       | `10 / 3`             | `3`    |
| `%`      | Modulo         | `10 % 3`             | `1`    |

The `+` operator also works for [string concatenation](string-concatenation.md).

#### Examples

```
5 + 3    // 8
10 - 4   // 6
3 * 4    // 12
10 / 3   // 3 (integer division)
10 / 3.0 // 3.333... (float division)
10 % 3   // 1
```

## Comparison Operators

Comparison operators return a boolean value.

| Operator | Description              | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `==`     | Equal                    | `1 == 1`    | `true`  |
| `!=`     | Not equal                | `1 != 2`    | `true`  |
| `>`      | Greater than             | `3 > 2`     | `true`  |
| `>=`     | Greater than or equal    | `3 >= 3`    | `true`  |
| `<`      | Less than                | `2 < 3`     | `true`  |
| `<=`     | Less than or equal       | `3 <= 3`    | `true`  |
| `=~`     | Like (regex match)       | `"foo" =~ r/^f/` | `true` |
| `!~`     | Not like (regex no match)| `"foo" !~ r/^b/` | `true` |

#### Examples

```
"hello" == "hello" // true
"hello" != "world" // true
5 > 3              // true
5 >= 5             // true
2 < 3              // true
3 <= 3             // true
"bar" =~ r/^b/     // true
"bar" !~ r/^f/     // true
```

See [Regex](regex.md) for more on pattern matching.

## Logical Operators

Logical operators combine boolean expressions.

| Operator | Description | Example                | Result  |
| -------- | ----------- | ---------------------- | ------- |
| `&&`     | And         | `true && false`        | `false` |
| `\|\|`   | Or          | `true \|\| false`      | `true`  |

#### Examples

```
age > 18 && age < 65   // true if age is between 18 and 65
name == "Tom" || name == "Jim"  // true if name is either
```

## Assignment Operator

The `=` operator assigns a value. It can be used to set variables, modify fields, or update array elements.

| Operator | Description | Example               |
| -------- | ----------- | --------------------- |
| `=`      | Assign      | `foo.bar = "new"`     |

#### Examples

**Set a variable**

```
$name = "Tom";
$name
// "Tom"
```

**Modify a field**

```bash
$ echo '{"name": "old"}' | dasel -i json --root 'name = "new"'
{
    "name": "new"
}
```

**Modify in a loop**

```bash
$ echo '[1, 2, 3]' | dasel -i json 'each($this = $this + 10)'
[11, 12, 13]
```

See [Modifying data](../input-output/modifying-data.md) for more details.

## Coalesce Operator

The `??` operator provides a fallback value when the left side is `null`, missing, or errors.

| Operator | Description | Example                  |
| -------- | ----------- | ------------------------ |
| `??`     | Coalesce    | `foo.bar ?? "default"`   |

See [Coalesce](coalesce.md) for full documentation.

## Spread Operator

The `...` operator unpacks arrays or maps into their individual elements.

| Operator | Description | Example                      |
| -------- | ----------- | ---------------------------- |
| `...`    | Spread      | `[1, 2, 3].sum($this...)`   |

See [Spread](spread.md) for full documentation.

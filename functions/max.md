# max

Returns the largest number in the given arguments.

Accepts int and float.

#### Syntax

```
max(value1, value2, ...)
```

#### Arguments

* **values** (`int | float`) - Two or more numeric values.

#### Examples

**Integer values**

```
max(1, 2, 3)
// 3
```

**Float values**

```
max(3.14, 2.72, 1.41)
// 3.14
```

**From an array using spread**

```
[5, 3, 8, 1].max($this...)
// 8
```

**CLI usage**

```bash
$ echo '{"scores": [88, 72, 95, 64]}' | dasel -i json 'scores.max($this...)'
95
```

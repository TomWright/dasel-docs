# min

Returns the smallest number in the given arguments.

Accepts int and float.

#### Syntax

```
min(value1, value2, ...)
```

#### Arguments

* **values** (`int | float`) - Two or more numeric values.

#### Examples

**Integer values**

```
min(1, 2, 3)
// 1
```

**Float values**

```
min(3.14, 2.72, 1.41)
// 1.41
```

**From an array using spread**

```
[5, 3, 8, 1].min($this...)
// 1
```

**CLI usage**

```bash
$ echo '{"scores": [88, 72, 95, 64]}' | dasel -i json 'scores.min($this...)'
64
```

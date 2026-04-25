# add

Adds all of the given numbers.

Accepts int and float.

* If any floats are given, float is returned.
* If no floats are given, int is returned.

#### Syntax

```
add(value1, value2, ...)
```

#### Arguments

* **values** (`int | float`) - Two or more numeric values to add.

#### Examples

**Integer addition**

```
add(1, 2, 3)
// 6
```

**Float addition**

```
add(1.5, 2.5)
// 4.0
```

**Add values from an array using spread**

```
[1, 2, 3].add($this...)
// 6
```

**CLI usage**

```bash
$ echo '{"a": 10, "b": 20}' | dasel -i json 'add(a, b)'
30
```

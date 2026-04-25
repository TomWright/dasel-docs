# avg

Returns the average of the given numbers. Always returns a float value.

#### Syntax

```
avg(value1, value2, ...)
```

#### Arguments

* **values** (`int | float`) - Two or more numeric values to average.

#### Examples

**Simple average**

```
avg(1, 2, 3)
// 2.0
```

**Mixed types**

```
avg(10, 20)
// 15.0
```

**Average values from an array using map and spread**

```
[
    {"score": 80},
    {"score": 90},
    {"score": 100}
].map(score).avg($this...)
// 90.0
```

**CLI usage**

```bash
$ echo '{"grades": [85, 92, 78]}' | dasel -i json 'grades.avg($this...)'
85
```

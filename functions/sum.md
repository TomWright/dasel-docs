# sum

Sums the given numeric inputs.

If any float is given, all inputs are converted to float and a float is returned.

#### Syntax

```
sum(value1, value2, ...)
```

#### Arguments

* **values** (`int | float`) - Two or more numeric values to sum.

#### Examples

**Integer sum**

```
sum(1, 2, 3)
// 6
```

**Mixed int and float**

```
sum(1, 2.2, 3)
// 6.2
```

**Sum an array using spread**

```
[10, 20, 30].sum($this...)
// 60
```

**CLI usage**

```bash
$ echo '{"prices": [9.99, 4.50, 2.00]}' | dasel -i json 'prices.sum($this...)'
16.49
```

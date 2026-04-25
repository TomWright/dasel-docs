# floor

Returns the largest integer less than or equal to the input. If the input is already an integer, it is returned as-is.

#### Syntax

```
floor(value)
```

or chained:

```
<number>.floor()
```

#### Arguments

* **value** (`int | float`, optional when chained) - The number to floor.

#### Examples

**Round down a positive float**

```
floor(3.7)
// 3
```

**Negative values round toward negative infinity**

```
floor(-2.3)
// -3
```

**Integer input unchanged**

```
floor(5)
// 5
```

**CLI usage**

```bash
$ echo '{"price": 9.99}' | dasel -i json 'floor(price)'
9
```

# ceil

Returns the smallest integer greater than or equal to the input. If the input is already an integer, it is returned as-is.

#### Syntax

```
ceil(value)
```

or chained:

```
<number>.ceil()
```

#### Arguments

* **value** (`int | float`, optional when chained) - The number to ceil.

#### Examples

**Round up a positive float**

```
ceil(3.2)
// 4
```

**Negative values round toward zero**

```
ceil(-2.7)
// -2
```

**Integer input unchanged**

```
ceil(5)
// 5
```

**CLI usage**

```bash
$ echo '{"rating": 3.2}' | dasel -i json 'ceil(rating)'
4
```

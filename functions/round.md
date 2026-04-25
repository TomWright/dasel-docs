# round

Rounds a number to the nearest integer. If the input is already an integer, it is returned as-is.

#### Syntax

```
round(value)
```

or chained:

```
<number>.round()
```

#### Arguments

* **value** (`int | float`, optional when chained) - The number to round.

#### Examples

**Round up**

```
round(3.5)
// 4
```

**Round down**

```
round(3.4)
// 3
```

**Negative values**

```
round(-2.5)
// -2
```

**CLI usage**

```bash
$ echo '{"score": 7.6}' | dasel -i json 'round(score)'
8
```

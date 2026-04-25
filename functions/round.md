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

```
round(3.5)
// 4
```

```
round(3.4)
// 3
```

```
round(-2.5)
// -2
```

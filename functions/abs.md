# abs

Returns the absolute value of a number. Works with both integers and floats.

#### Syntax

```
abs(value)
```

or chained:

```
<number>.abs()
```

#### Arguments

* **value** (`int | float`, optional when chained) - The number to get the absolute value of.

#### Examples

**Integer**

```
abs(-5)
// 5
```

**Float**

```
abs(-3.14)
// 3.14
```

**Already positive**

```
abs(10)
// 10
```

**CLI usage**

```bash
$ echo '{"balance": -42}' | dasel -i json 'abs(balance)'
42
```

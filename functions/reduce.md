# reduce

The `reduce` function folds an array into a single value using an accumulator. It works in a similar way to [JavaScript's Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

#### Syntax

```
<array>.reduce(expr, init, update)
```

#### Arguments

* **expr** - An expression evaluated against each element to produce the current value. Use `$this` to refer to the current element, or a field name to extract a property.
* **init** - The initial value of the accumulator.
* **update** - An expression evaluated for each element to produce the next accumulator value. Use `$acc` to refer to the current accumulator and `$this` to refer to the value produced by `expr`.

#### Examples

**Sum numbers**

```
[1, 2, 3, 4].reduce($this, 0, $acc + $this)
// 10
```

**Concatenate strings**

```
["a", "b", "c"].reduce($this, "", $acc + $this)
// "abc"
```

**Product of numbers**

```
[2, 3, 4].reduce($this, 1, $acc * $this)
// 24
```

**Sum a field from objects**

```
[
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25}
].reduce(age, 0, $acc + $this)
// 55
```

**CLI usage**

```bash
$ echo '[1,2,3,4,5]' | dasel 'reduce($this, 0, $acc + $this)'
15
```

**Chained with other expressions**

```
[1, 2, 3, 4, 5].reduce($this, 0, $acc + $this) > 10
// true
```

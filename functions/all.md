# all

Returns `true` if all elements in an array match the given predicate. This is an expression, not a function - the predicate is evaluated against each element using `$this` to refer to the current element.

#### Syntax

```
<array>.all(predicate)
```

#### Arguments

* **predicate** - A boolean expression evaluated against each element. Use `$this` to refer to the current element.

#### Examples

```
[1, 2, 3].all($this > 0)
// true
```

```
[1, 2, 3].all($this > 1)
// false
```

```
[{"active": true}, {"active": true}].all($this.active == true)
// true
```

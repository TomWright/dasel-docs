# all

Returns `true` if all elements in an array match the given predicate. This is an expression — the predicate is evaluated against each element using `$this` to refer to the current element.

#### Syntax

```
<array>.all(predicate)
```

#### Arguments

* **predicate** - A boolean expression evaluated against each element. Use `$this` to refer to the current element.

#### Examples

**Check if all numbers are positive**

```
[1, 2, 3].all($this > 0)
// true
```

```
[1, 2, 3].all($this > 1)
// false
```

**Check a field on objects**

```
[{"active": true}, {"active": true}].all($this.active == true)
// true
```

**CLI usage — verify all items have a required field**

```bash
$ echo '{"items": [{"name": "a", "price": 10}, {"name": "b", "price": 20}]}' \
  | dasel -i json 'items.all(has("price"))'
true
```

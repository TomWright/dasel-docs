# first

Returns the first element of an array. Returns `null` if the array is empty.

#### Syntax

```
first(array)
```

or chained:

```
<array>.first()
```

#### Arguments

* **array** (`array`, optional when chained) - The array to get the first element from.

#### Examples

**Get the first number**

```
first([1, 2, 3])
// 1
```

**Chained usage**

```
["a", "b", "c"].first()
// "a"
```

**Empty array returns null**

```
first([])
// null
```

**CLI usage — get the first user**

```bash
$ echo '{"users": ["Alice", "Bob", "Charlie"]}' | dasel -i json 'users.first()'
Alice
```

**Chained with filter**

```
[1, 2, 3, 4, 5].filter($this > 3).first()
// 4
```

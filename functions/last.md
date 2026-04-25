# last

Returns the last element of an array. Returns `null` if the array is empty.

#### Syntax

```
last(array)
```

or chained:

```
<array>.last()
```

#### Arguments

* **array** (`array`, optional when chained) - The array to get the last element from.

#### Examples

**Get the last number**

```
last([1, 2, 3])
// 3
```

**Chained usage**

```
["a", "b", "c"].last()
// "c"
```

**Empty array returns null**

```
last([])
// null
```

**CLI usage — get the most recent entry**

```bash
$ echo '{"logs": ["started", "running", "stopped"]}' | dasel -i json 'logs.last()'
stopped
```

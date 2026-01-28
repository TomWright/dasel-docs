# join

The `join` function concatenates multiple values into a single string, inserting a delimiter between each value.

It is useful for turning arrays or multiple values into a delimited string (for example, CSV-style output).

#### Syntax

`join(delimiter, values...)`

or as a chained function:

`<array>.join(delimiter)`

#### Arguments

* **delimiter** (`string`)\
  The string to insert between each value.
* **values** (`string | array[string]`)\
  The values to join. These can be provided as:
  * Multiple arguments
  * A single array
  * A chained array input

#### Examples

**Chained array input**

```bash
["a","b","c"].join(",")
```

**Output:**

```
a,b,c
```

**Variadic arguments**

```bash
join(",", "a", "b", "c")
```

**Output:**

```
a,b,c
```

**Array argument**

```bash
join(",", ["a", "b", "c"])
```

**Output:**

```
a,b,c
```

#### Notes

* All arguments given to join are expected to be strings. Dasel will not try to convert for you.
* The order of values is preserved.
* This function is commonly used for formatting output for shells, logs, or downstream tools.

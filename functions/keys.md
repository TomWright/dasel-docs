# keys

The `keys` function returns the keys of a map or the indices of a slice.

It is useful for inspecting the structure of data, iterating over fields, or extracting available paths.

#### Syntax

Chained form:

```
<value>.keys()
```

#### Arguments

This function does not accept any arguments.

#### Examples

**Map keys**

```
{"name":"Tom","age":30}.keys()
```

**Output**

```
["name","age"]
```

**Slice indices**

```
["a","b","c"].keys()
```

**Output**

```
[0,1,2]
```

**Nested usage**

```
{"user":{"name":"Tom","age":30}}.user.keys()
```

**Output**

```
["name","age"]
```

#### Notes

* When used on a **map**, `keys` returns a slice of strings.
* When used on a **slice**, `keys` returns a slice of integers representing indices.
* The order of keys for maps is not guaranteed.
* This function cannot be used on scalar values (e.g. strings, numbers, booleans).

#### Errors

* Returns an error if used on a non-map and non-slice value.


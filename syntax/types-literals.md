# Types/Literals

Dasel supports the following literal types in queries.

## Integers

Integers are represented as whole numbers.

```
1
5234
-530
```

Note: If `-530` is detected as a bad binary expression (nothing subtract 530) it can be grouped, e.g. `(-530)`.

## Floats

Numbers are interpreted as floats when they contain a decimal place `.` or are followed with an `f`.

```
1.1
23.45
123f
```

## Booleans

Bools are matched by a case insensitive match on `true` or `false`.

```
true
True
TRUE
false
False
FALSE
```

## Strings

Strings are a sequence of characters surrounded by quotes — both single and double quotes are supported.

```
"I am a string"
'I am a string'
"I am a string with an escaped \" inside of me"
```

## Null

The `null` literal represents an absent or empty value.

```
null
```

`null` is returned by functions like [`first`](../functions/first.md) and [`last`](../functions/last.md) on empty arrays, and is the fallback trigger for the [`??` coalesce operator](coalesce.md).

## Arrays

Array literals are defined with square brackets. See [Arrays/slices](arrays-slices.md) for full documentation.

```
[1, 2, 3]
["a", "b", "c"]
[1, "mixed", true, null]
```

## Objects

Object/map literals are defined with curly braces. See [Objects/maps](objects-maps.md) for full documentation.

```
{"name": "Tom", "age": 30}
```

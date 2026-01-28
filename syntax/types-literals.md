# Types/Literals

## Integers

Integers are represented as whole numbers. E.g.

* `1`,
* `5234`
* &#x20;`-530`

Note: If `-530` is detected as a bad binary expression (nothing subtract 530) it can be grouped, e.g. `(-530)`.

## Floats

Numbers are interpreted as floats when they contain a decimal place `.` or are followed with an `f`. E.g.

* `1.1`
* `23.45`
* `123f`

## Booleans

Bools are matched by a case insentive match on true or false. E.g.

* `true`
* `True`
* `TRUE`
* `false`
* `False`
* `FALSE`

## Strings

Strings are interpreted as a sequence of characters surrounded by quotes, both single and double. E.g.

* `"I am a string"`
* `'I am a string'`
* `"I am a string with an escaped \" inside of me"`

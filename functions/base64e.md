# base64e

Base64 encodes the given string value.

#### Syntax

```
base64e(input)
```

or chained:

```
<string>.base64e()
```

#### Arguments

* **input** (`string`, optional when chained) - The string to encode.

#### Examples

**Function call**

```
base64e("hello")
// "aGVsbG8="
```

**Chained usage**

```
"hello world".base64e()
// "aGVsbG8gd29ybGQ="
```

**CLI usage**

```bash
$ echo '{"name": "secret"}' | dasel -i json 'name.base64e()'
c2VjcmV0
```

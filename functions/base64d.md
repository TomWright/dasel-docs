# base64d

Base64 decodes the given string value.

#### Syntax

```
base64d(input)
```

or chained:

```
<string>.base64d()
```

#### Arguments

* **input** (`string`, optional when chained) - The base64-encoded string to decode.

#### Examples

**Function call**

```
base64d("aGVsbG8=")
// "hello"
```

**Chained usage**

```
"aGVsbG8gd29ybGQ=".base64d()
// "hello world"
```

**CLI usage**

```bash
$ echo '{"token": "c2VjcmV0"}' | dasel -i json 'token.base64d()'
secret
```

**Roundtrip with base64e**

```
base64d(base64e("hello"))
// "hello"
```

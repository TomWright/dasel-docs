# JQ to Dasel

The follow examples show a set of [jq](https://github.com/stedolan/jq) commands and the equivalent in dasel.

### **Select a single value**

{% tabs %}
{% tab title="JQ" %}
```bash
echo '{"name": "Tom"}' | jq '.name'
"Tom"
```
{% endtab %}

{% tab title="Dasel" %}
```bash
echo '{"name": "Tom"}' | dasel -p json '.name'
"Tom"
```
{% endtab %}
{% endtabs %}

### **Select a nested value**

{% tabs %}
{% tab title="JQ" %}
```bash
echo '{"user": {"name": "Tom", "age": 27}}' | jq '.user.age'
27
```
{% endtab %}

{% tab title="Dasel" %}
```bash
echo '{"user": {"name": "Tom", "age": 27}}' | dasel -p json '.user.age'
27
```
{% endtab %}
{% endtabs %}

### **Select an array index**

{% tabs %}
{% tab title="JQ" %}
```bash
echo '[1, 2, 3]' | jq '.[1]'
2
```
{% endtab %}

{% tab title="Dasel" %}
```bash
echo '[1, 2, 3]' | dasel -p json '.[1]'
2
```
{% endtab %}
{% endtabs %}

### **Append to an array of strings**

{% tabs %}
{% tab title="JQ" %}
```bash
echo '["a", "b", "c"]' | jq '. += ["d"]'
[
  "a",
  "b",
  "c",
  "d"
]
```
{% endtab %}

{% tab title="Dasel" %}
```bash
echo '["a", "b", "c"]' | dasel put string -p json -s '.[]' d
[
  "a",
  "b",
  "c",
  "d"
]
```
{% endtab %}
{% endtabs %}

### **Update a string value**

{% tabs %}
{% tab title="JQ" %}
```bash
echo '["a", "b", "c"]' | jq '.[1] = "d"'
[
  "a",
  "d",
  "c"
]
```
{% endtab %}

{% tab title="Dasel" %}
```bash
echo '["a", "b", "c"]' | dasel put string -p json '.[1]' d
[
  "a",
  "d",
  "c"
]
```
{% endtab %}
{% endtabs %}

### **Update an int value**

{% tabs %}
{% tab title="JQ" %}
```bash
echo '[1, 2, 3]' | jq '.[1] = 5'
[
  1,
  5,
  3
]
```
{% endtab %}

{% tab title="Dasel" %}
```bash
echo '[1, 2, 3]' | dasel put int -p json '.[1]' 5
[
  1,
  5,
  3
]
```
{% endtab %}
{% endtabs %}

### **Overwrite an object**

{% tabs %}
{% tab title="JQ" %}
```bash
echo '{"user": {"name": "Tom", "age": 27}}' | jq '.user = {"name": "Frank", "age": 25}'
{
  "user": {
    "name": "Frank",
    "age": 25
  }
}
```
{% endtab %}

{% tab title="Dasel put object" %}
```bash
echo '{"user": {"name": "Tom", "age": 27}}' | dasel put object -p json -t string -t int '.user' name=Frank age=25
{
  "user": {
    "age": 25,
    "name": "Frank"
  }
}
```
{% endtab %}

{% tab title="Dasel put document" %}
```bash
echo '{"user": {"name": "Tom", "age": 27}}' | dasel put document -p json '.user' '{"name": "Frank", "age": 25}'
{
  "user": {
    "age": 25,
    "name": "Frank"
  }
}
```
{% endtab %}
{% endtabs %}

### **Append to an array of objects**

{% tabs %}
{% tab title="Bash" %}
```bash
echo '{"users": [{"name": "Tom"}]}' | jq '.users += [{"name": "Frank"}]'
{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "Frank"
    }
  ]
}
```
{% endtab %}

{% tab title="Dasel put object" %}
```bash
echo '{"users": [{"name": "Tom"}]}' | dasel put object -p json -t string '.users.[]' name=Frank
{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "Frank"
    }
  ]
}
```
{% endtab %}

{% tab title="Dasel put document" %}
```bash
echo '{"users": [{"name": "Tom"}]}' | dasel put document -p json '.users.[]' '{"name":"Frank"}'
{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "Frank"
    }
  ]
}
```
{% endtab %}
{% endtabs %}


# YQ to Dasel

The follow examples show a set of [yq](https://github.com/kislyuk/yq) commands and the equivalent in dasel.

### **Select a single value**

{% tabs %}
{% tab title="YQ" %}

```shell
echo 'name: Tom' | yq '.name'
"Tom"
```

{% endtab %}

{% tab title="Dasel" %}

```shell
echo 'name: Tom' | dasel -p yaml '.name'
Tom
```

{% endtab %}
{% endtabs %}

### **Select a nested value**

{% tabs %}
{% tab title="YQ" %}

```shell
echo 'user:
  name: Tom
  age: 27' | yq '.user.age'
27
```

{% endtab %}

{% tab title="Dasel" %}

```shell
echo 'user:
       name: Tom
       age: 27' | dasel -p yaml '.user.age'
27
```

{% endtab %}
{% endtabs %}

### **Select an array index**

{% tabs %}
{% tab title="YQ" %}

```shell
echo '- 1
- 2
- 3' | yq '.[1]'
2
```

{% endtab %}

{% tab title="Dasel" %}

```shell
echo '- 1
- 2
- 3' | dasel -p yaml '.[1]'
2
```

{% endtab %}
{% endtabs %}

### **Append to an array of strings**

{% tabs %}
{% tab title="YQ" %}

```shell
echo '- a
- b
- c' | yq --yaml-output '. += ["d"]'
- a
- b
- c
- d
```

{% endtab %}

{% tab title="Dasel" %}

```shell
echo '- a
- b
- c' | dasel put string -p yaml -s '.[]' d
- a
- b
- c
- d
```

{% endtab %}
{% endtabs %}

### **Update a string value**

{% tabs %}
{% tab title="YQ" %}

```shell
echo '- a
- b
- c' | yq --yaml-output '.[1] = "d"'
- a
- d
- c
```

{% endtab %}

{% tab title="Dasel" %}

```shell
echo '- a
- b
- c' | dasel put string -p yaml -s '.[1]' d
- a
- d
- c
```

{% endtab %}
{% endtabs %}

### **Update an int value**

{% tabs %}
{% tab title="YQ" %}

```shell
echo '- 1
- 2
- 3' | yq --yaml-output '.[1] = 5'
- 1
- 5
- 3
```

{% endtab %}

{% tab title="Dasel" %}

```
echo '- 1
- 2
- 3' | dasel put int -p yaml -s '.[1]' 5
- 1
- 5
- 3
```

{% endtab %}
{% endtabs %}

### **Overwrite an object**

{% tabs %}
{% tab title="YQ" %}

```shell
echo 'user:
  name: Tom
  age: 27' | yq --yaml-output '.user = {"name": "Frank", "age": 25}'
user:
  name: Frank
  age: 25
```

{% endtab %}

{% tab title="Dasel put object" %}

```shell
echo 'user:
  name: Tom
  age: 27' | dasel put object -p yaml -t string -t int '.user' name=Frank age=25
user:
  age: 25
  name: Frank
```

{% endtab %}

{% tab title="Dasel put document" %}

```shell
echo 'user:
  name: Tom
  age: 27' | dasel put document -p yaml -d json '.user' '{"name":"Frank","age":25}'
user:
  age: 25
  name: Frank
```

{% endtab %}
{% endtabs %}

### **Append to an array of objects**

{% tabs %}
{% tab title="YQ" %}

```shell
echo 'users:
- name: Tom' | yq --yaml-output '.users += [{"name": "Frank"}]'
users:
  - name: Tom
  - name: Frank
```

{% endtab %}

{% tab title="Dasel put object" %}

```shell
echo 'users:
- name: Tom' | dasel put object -p yaml -t string '.users.[]' name=Frank
users:
- name: Tom
- name: Frank
```

{% endtab %}

{% tab title="Dasel put document" %}

```shell
echo 'users:
- name: Tom' | dasel put document -p yaml -d json '.users.[]' '{"name":"Frank"}'
users:
- name: Tom
- name: Frank
```

{% endtab %}
{% endtabs %}

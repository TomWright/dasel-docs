# Cookbook

Practical recipes for common tasks with dasel.

---

## Convert between formats

**JSON to YAML**

```bash
$ echo '{"name": "Tom", "age": 30}' | dasel -i json -o yaml
name: Tom
age: 30
```

**YAML to JSON**

```bash
$ echo 'name: Tom
age: 30' | dasel -i yaml -o json
{
    "name": "Tom",
    "age": 30
}
```

---

## Extract a nested value

```bash
$ echo '{"server": {"host": "localhost", "port": 8080}}' \
  | dasel -i json 'server.port'
8080
```

---

## Filter an array of objects

Get names of active users:

```bash
$ echo '{
  "users": [
    {"name": "Alice", "active": true},
    {"name": "Bob", "active": false},
    {"name": "Charlie", "active": true}
  ]
}' | dasel -i json 'users.filter(active == true).map(name)'
[
    "Alice",
    "Charlie"
]
```

---

## Count matching items

Count how many items have a specific status:

```bash
$ echo '{
  "tasks": [
    {"title": "A", "done": true},
    {"title": "B", "done": false},
    {"title": "C", "done": true}
  ]
}' | dasel -i json 'tasks.count($this.done == true)'
2
```

---

## Rename a key

Use `entries`, `map`, and `fromEntries` to transform map keys:

```bash
$ echo '{"firstName": "Tom", "lastName": "Wright"}' \
  | dasel -i json '
    entries()
    .map({
      "key": if (key == "firstName") { "first" }
             elseif (key == "lastName") { "last" }
             else { key },
      "value": value
    })
    .fromEntries()
  '
{
    "first": "Tom",
    "last": "Wright"
}
```

---

## Sum values from an array of objects

```bash
$ echo '{
  "items": [
    {"name": "A", "price": 9.99},
    {"name": "B", "price": 4.50},
    {"name": "C", "price": 2.00}
  ]
}' | dasel -i json 'items.map(price).sum($this...)'
16.49
```

---

## Provide a default for a missing field

Use the `??` coalesce operator:

```bash
$ echo '{"name": "Tom"}' | dasel -i json 'email ?? "not set"'
not set
```

---

## Merge two objects

```bash
$ echo '{
  "defaults": {"color": "red", "size": 10},
  "overrides": {"size": 20}
}' | dasel -i json 'merge(defaults, overrides)'
{
    "color": "red",
    "size": 20
}
```

---

## Sort and deduplicate an array

```bash
$ echo '{"tags": ["go", "cli", "go", "json", "cli"]}' \
  | dasel -i json 'tags.unique().sortBy()'
[
    "cli",
    "go",
    "json"
]
```

---

## Conditionally transform values

Classify scores into grades:

```bash
$ echo '{"scores": [95, 82, 67, 45]}' \
  | dasel -i json 'scores.map(
    if ($this >= 90) { "A" }
    elseif ($this >= 80) { "B" }
    elseif ($this >= 70) { "C" }
    elseif ($this >= 60) { "D" }
    else { "F" }
  )'
[
    "A",
    "B",
    "D",
    "F"
]
```

---

## Search deeply nested data

Find all objects with a `name` field anywhere in the document:

```bash
$ echo '{
  "team": {
    "lead": {"name": "Alice", "role": "lead"},
    "members": [
      {"name": "Bob", "role": "dev"},
      {"name": "Charlie", "role": "dev"}
    ]
  }
}' | dasel -i json 'search(has("name")).map(name)'
```

---

## Build a new object from existing data

```bash
$ echo '{"first": "Tom", "last": "Wright", "age": 30}' \
  | dasel -i json '{
    "fullName": first + " " + last,
    "isAdult": age >= 18
  }'
{
    "fullName": "Tom Wright",
    "isAdult": true
}
```

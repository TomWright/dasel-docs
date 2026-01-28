# Query syntax

## Overview

Dasel queries are composed of one or more **statements**. Each statement describes how to navigate or transform the data, and the **final statement determines the output value**.

A statement is made up of a sequence of **accessors** or **function calls**, chained together with a dot (`.`) and terminated with a semi-colon (`;`).

* **Accessors** let you step into nested structures (e.g. objects, arrays, maps).
* **Functions** apply transformations or filters to the current value.

### Example

Suppose you have the following JSON document:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "active": true
    },
    {
      "id": 2,
      "name": "Bob",
      "active": false
    }
  ]
}
```

A dasel query might look like this:

```
$activeUsers = $root.users.filter(active == true);
$activeUsers.map(name)
```

* **`$activeUsers =`** \
  Variable assignment.
* **`$root`** \
  Access the root document.
* **`users`**\
  Access the `users` field.
* **`filter(active == true)`**\
  Filter the `users` list to only include elements where `active` is `true`.
* **`;`** \
  Terminate the statement.
* **`$activeUsers`** \
  Access the active users variable we just created.
* **`map`** \
  Iterate through each active user, returning the specified value, in this case `name` .\
  &#xNAN;_(Since this is the last statement, this is also the **output value**.)_

Output:

```json
[
  "Alice"
]
```

This query could be written in a more compact form, or split into multiple statements for clarity.\
The following examples are equivalent and will all produce the same result:

```
$root.users.filter(active == true).map(name)
```

```
$activeUsers = $root.users.filter(active == true);
$activeUsers.map(name)
```

```
$activeUsers = $root.users.filter(active == true);
$names = $activeUsers.map(name);
$names
```

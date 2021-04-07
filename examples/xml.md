# XML

XML has some slight differences \(such as attributes\) that should be documented.

See [XML file format](../usage/supported-file-types.md#xml) for more information.

## **Query attributes**

Decoded attributes are set as properties on the related object with a prefix of `-`.

```bash
echo '<data>
    <users primary="true">
        <name>Tom</name>
    </users>
    <users primary="false">
        <name>Frank</name>
    </users>
</data>' | dasel -p xml '.data.users[0].-primary'
true
```

## **Filtering on attributes**

We can also filter on attributes since they are defined against the related object.

```bash
echo '<data>
    <users primary="true">
        <name>Tom</name>
    </users>
    <users primary="false">
        <name>Frank</name>
    </users>
</data>' | dasel -p xml '.data.users.(-primary=true).name'
Tom
```


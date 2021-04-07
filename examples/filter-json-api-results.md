# Filter JSON API results

The following line will return the download URL for the latest macOS dasel release:

```text
$ curl https://api.github.com/repos/tomwright/dasel/releases/latest | dasel -p json --plain '.assets.(name=dasel_darwin_amd64).browser_download_url'

https://github.com/TomWright/dasel/releases/download/v1.13.6/dasel_darwin_amd64
```

#### 


# StayOnline
### A module having capacity of creating website for your repo so you can uptime it 

## Now there is no need to code 100s of lines or create a server.js file.

## Light Weight Package Under 200 Bytes

# Usage

```js

const Astra = require('stayonline'); 

Astra({}); // Uses default values

Astra({ code: '<html><body><h1>Custom HTML</h1></body></html>', port: 8080}); // Uses custom values

```

# Compressed Version 

```js

require("stayonline")({}); // Uses default values

require("stayonline")({ code: '<html><body><h1>Custom HTML</h1></body></html>', port: 8080}); // Uses custom values

```

# auckland-transport [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/auckland-transport/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/auckland-transport)

A simplified interface for the Auckland Transport API.

[![NPM Badge](https://nodei.co/npm/auckland-transport.png)](https://npmjs.com/package/auckland-transport)

## Install

```sh
npm install auckland-transport
```

## Usage

```js
const at = require("auckland-transport");

(async () => {
	const data = await at("gtfs/routes/geosearch", {
		key: "some api key",
		data: {
			lat: -36.8483957,
			lng: 174.7600113,
			distance: 100,
		},
	});

	const {route_short_name, route_long_name} = data[0]

	console.log(`Bus ${route_short_name} - ${route_long_name}`)
})();
```

## API

### aucklandTransport(method, options)

#### method

Type: `string`

The [API method](https://dev-portal.at.govt.nz/docs/services/) to call.

#### options

Type: `object`

##### key

Type: `string`

The api key to use.

##### data

Type: `object`\
Default: `{}`

The options to pass to the api.

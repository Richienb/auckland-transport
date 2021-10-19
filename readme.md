# auckland-transport

A simplified interface for the Auckland Transport API.

## Install

```sh
npm install auckland-transport
```

## Usage

```js
import aucklandTransport from 'auckland-transport';

const [{route_short_name, route_long_name}] = await aucklandTransport('gtfs/routes/geosearch', {
	apiKey: 'some api key',
	data: {
		lat: -36.8483957,
		lng: 174.7600113,
		distance: 100,
	},
});

console.log(`Bus ${route_short_name} - ${route_long_name}`);
```

## API

### aucklandTransport(method, options)

#### method

Type: `string`

The [API method](https://dev-portal.at.govt.nz/docs/services/) to call.

#### options

Type: `object`

##### apiKey

Type: `string`

The API key to use.

##### data

Type: `object`\
Default: `{}`

The options to pass to the API.

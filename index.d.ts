declare namespace aucklandTransport {
	export interface Options {
		/** The api key to use. */
		key: string

		/** The options to pass to the api. */
		data?: Record<string, string | number | boolean>
	}
}

/**
A simplified interface for the Auckland Transport API.
@param method The [API method](https://dev-portal.at.govt.nz/docs/services/) to call.
@example
```
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
*/
declare function aucklandTransport(method: string, options: aucklandTransport.Options): object

export = aucklandTransport

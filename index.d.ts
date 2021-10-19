import {JsonObject, JsonArray} from 'type-fest';

export interface Options {
	/**
	The API key to use.
	*/
	apiKey: string;

	/**
	The options to pass to the API.

	@default {}
	*/
	data?: Record<string, string | number | boolean>;
}

/**
A simplified interface for the [Auckland Transport API](https://dev-portal.at.govt.nz/).

@param method The [API method](https://dev-portal.at.govt.nz/docs/services/) to call.

@example
```
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
*/
export default function aucklandTransport<ResolveValueType extends JsonObject | JsonArray = JsonObject | JsonArray>(method: string, options: Options): Promise<ResolveValueType>;

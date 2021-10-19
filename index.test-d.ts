import {expectType} from 'tsd';
import {JsonObject} from 'type-fest';
import aucklandTransport from './index.js';

expectType<JsonObject>(await aucklandTransport('gtfs/routes/geosearch', {
	apiKey: 'some api key',
	data: {
		lat: -36.848_395_7,
		lng: 174.760_011_3,
		distance: 100,
	},
}));
expectType<Record<string, string | number>>(await aucklandTransport<Record<string, string | number>>('gtfs/routes/geosearch', {
	apiKey: 'some api key',
	data: {
		lat: -36.848_395_7,
		lng: 174.760_011_3,
		distance: 100,
	},
}));

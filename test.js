import process from 'node:process';
import test from 'ava';
import aucklandTransport from './index.js';

test('main', async t => {
	const apiKey = process.env.AT_HOP_KEY;

	if (!apiKey) {
		console.log('Set AT_HOP_KEY to test!');
		return t.pass();
	}

	const [{route_short_name: routeShortName, route_long_name: routeLongName}] = await aucklandTransport('gtfs/routes/geosearch', {
		apiKey,
		data: {
			lat: -36.848_395_7,
			lng: 174.760_011_3,
			distance: 100,
		},
	});

	t.is(typeof routeShortName, 'string');
	t.is(typeof routeLongName, 'string');
});

const test = require("ava")
const at = require(".")

test("main", async t => {
	const key = process.env.AT_HOP_KEY

	if (!key) {
		console.log("Set AT_HOP_KEY to test!")
		return t.pass()
	}

	const data = await at("gtfs/routes/geosearch", {
		key,
		data: {
			lat: -36.8483957,
			lng: 174.7600113,
			distance: 100
		}
	})

	const { route_short_name: routeShortName, route_long_name: routeLongName } = data[0]

	t.is(typeof routeShortName, "string")
	t.is(typeof routeLongName, "string")
})

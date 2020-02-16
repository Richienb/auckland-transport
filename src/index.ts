import request from "./request"
import camelcaseArray from "./utils/camelcase-array"

interface Route {
	routeId: string
	agencyId: string
	routeShortName: string
	routeLongName: string
	routeDesc?: string
	routeType: number
	routeUrl?: string
	routeColor?: string
	routeTextColor?: string
}

export = class AucklandTransport {
	constructor(private _apiKey: string) { }

	public async agencies(): Promise<{
		agencyId: string
		agencyName: string
		agencyUrl: string
		agencyTimezone: string
		agencyLang: string
		agencyPhone: string
		agencyFareUrl?: string
	}[]> {
		const res = await request("gtfs/agency", { apiKey: this._apiKey })
		return camelcaseArray(res)
	}

	// public async timetable(data: {
	// 	routeIds?: number[]
	// 	stopCode?: number
	// 	routeShortName?: string
	// } = {}) {
	// 	const res = await request("gtfs/btf/timetable", {
	// 		apiKey: this._apiKey,
	// 		data: {
	// 			...data,
	// 			routeIds: data.routeIds ? data.routeIds.join(",") : undefined
	// 		},
	// 	})
	// }

	public async routes(): Promise<Route[]>
	public async routes(type: "btf", options: { searchString: string, routeTypes: string }): Promise<Route[]>
	public async routes(type: "location", options: { lat: number, lng: number, distance: number }): Promise<Route[]>
	public async routes(type: "longName", options: { routeLongName: string }): Promise<Route[]>
	public async routes(type: "shortName", options: { routeShortName: string }): Promise<Route[]>
	public async routes(type: "stop", options: { stopId: number }): Promise<Route[]>

	public async routes(type?: string, data?: Record<string, string | number | boolean>): Promise<Route[]> {
		const endpoints = {
			btf: "gtfs/btf/routes",
			location: "gtfs/routes/geosearch",
			longName: "gtfs/routes/routeLongName",
			shortName: "gtfs/routes/routeShortName",
			stop: "gtfs/routes/stopid"
		}

		const endpoint = endpoints[type] ?? "gtfs/routes"

		const res = await request(endpoint, { apiKey: this._apiKey, data })
		return camelcaseArray(res)
	}
}

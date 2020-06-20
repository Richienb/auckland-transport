"use strict"

const ky = require("ky-universal").extend({
	throwHttpErrors: false
})
const snakecaseKeys = require("snakecase-keys")

module.exports = async (method, { key, data = {} } = {}) => {
	if (typeof method !== "string") {
		throw new TypeError(`Expected a string, got ${typeof method}`)
	}

	if (typeof key !== "string") {
		throw new TypeError(`Expected a string, got ${typeof key}`)
	}

	const request = await ky(method, {
		prefixUrl: "https://api.at.govt.nz/v2/",
		searchParams: {
			"subscription-key": key,
			...snakecaseKeys(data)
		}
	})

	const { status, response, message } = await request.json()

	if (status !== "OK") {
		throw new Error(message)
	}

	return response
}

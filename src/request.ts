import ky from "ky-universal"
import snakecaseKeys from "snakecase-keys"

export = async function request(endpoint: string, { apiKey, data }: { apiKey: string, data?: Record<string, string | number | boolean> }): Promise<any> {
	const req = await ky(endpoint, {
		prefixUrl: "https://api.at.govt.nz/v2/",
		searchParams: {
			"subscription-key": apiKey,
			...snakecaseKeys(data ?? {}),
		}
	})
	const { status, response, error } = await req.json()

	if (status !== "OK") throw new Error(error)
	return response
}

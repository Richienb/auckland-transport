import axios from 'axios';

export default async function aucklandTransport(method, {apiKey, data} = {}) {
	if (typeof method !== 'string') {
		throw new TypeError(`Expected method to be a string, got ${typeof method}`);
	}

	if (typeof apiKey !== 'string') {
		throw new TypeError(`Expected apiKey to be a string, got ${typeof apiKey}`);
	}

	try {
		const {data: {response}} = await axios(method, {
			baseURL: 'https://api.at.govt.nz/v2/',
			params: {
				'subscription-key': apiKey,
				...data,
			},
			responseType: 'json',
		});

		return response;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data.message);
		}

		throw error;
	}
}

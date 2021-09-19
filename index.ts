type Payload = {
	[key: string]: any;
	itWorked: boolean;
}

/**
 * Test plugin implementation for Stakkr
 * @param payload 
 * @returns payload
 */
export async function testPlugin(payload: Payload): Promise<Payload> {
	await delay(1000); // simulate 1s of network activity.
	return {
		...payload,
		itWorked: true,
	};	
}

/**
 * Delay util.
 * @param ms number
 * @returns void
 */
 function delay(ms: number = 500): Promise<void> {
	return new Promise((res) => {
		setTimeout(res, ms)
	})
}
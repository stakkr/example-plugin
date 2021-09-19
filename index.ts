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

/**
 * Takes the Stakkr payload and returns a mutated version of it.
 * @param payload
 * @returns TestPluginPayload
 */

type InputPayload = {
	[key: string]: any;
}

type TestPluginPayload = {
	[key: string]: any;
	itWorked: boolean;
};

export async function testPlugin(payload: InputPayload): Promise<TestPluginPayload> {
	await delay(1000); // simulate 1s of network activity.
	return {
		...payload,
		itWorked: true,
	};	
}
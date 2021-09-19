import { delay } from './utils.ts';

/**
 * Takes the Stakkr payload and returns a mutated version of it.
 * @param payload
 */

type TestPluginPayload = {
	[key: string]: any;
	itWorked: boolean;
};

export async function testPlugin(payload): Promise<TestPluginPayload> {
	await delay(1000); // simulate 1s of network activity.
	return {
		...payload,
		itWorked: true,
	};	
}
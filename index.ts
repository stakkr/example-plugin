/**
 * Takes the Stakkr payload and returns a mutated version of it.
 * @param payload
 */
export async function testPlugin(payload) {
	return {
		...payload,
		itWorked: true,
	};	
}
/**
 * Takes the Stakkr payload and returns a mutated version of it.
 * @param payload
 */
export async function testPlugin(payload) {
	payload = {
		...payload,
		itWorked: true,
	}
	return payload;	
}
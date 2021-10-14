/**
 * Test plugin implementation for Stakkr
 * @param payload 
 * @returns payload
 */
async function testPlugin(payload) {
	console.log('console from inside');
	return {
		...payload,
		itWorked: true,
	};	
}

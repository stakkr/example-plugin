/**
 * Test plugin implementation for Stakkr
 * @param payload 
 * @returns payload
 */
 async function testPlugin(payload) {
	console.log('console from sandbox');
	return {
		...payload,
		itWorked: true,
	};	
}

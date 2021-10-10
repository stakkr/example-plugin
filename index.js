/**
 * Test plugin implementation for Stakkr
 * @param payload 
 * @returns payload
 */
async function testPlugin(payload) {
	return {
		...payload,
		itWorked: true,
	};	
}

module.exports = {
	testPlugin,
}
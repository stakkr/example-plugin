/**
 * Test plugin implementation for Stakkr
 * @param payload 
 * @returns payload
 */
async function testPlugin(payload) {
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
function delay(ms = 500) {
	return new Promise((res) => {
		setTimeout(res, ms)
	})
}

module.exports = {
	testPlugin,
}

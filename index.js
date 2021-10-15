/**
 * Test plugin implementation for Stakkr
 * @param payload 
 * @returns payload
 */
module.exports = async payload => {
	console.log('console from sandbox');
	return {
		...payload,
		itWorked: true,
	};
}

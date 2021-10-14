/**
 * Test plugin implementation for Stakkr
 * @param payload 
 * @returns payload
 */
async default async (payload) {
	console.log('console from sandbox');
	return {
		...payload,
		itWorked: true,
	};	
}

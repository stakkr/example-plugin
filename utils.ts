export function delay(ms: number = 500): Promise<void> {
	return new Promise((res) => {
		setTimeout(res, ms)
	})
}
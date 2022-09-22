export const getIp = (req: any) => {
	let ip: string
	if (req.headers['x-forwarded-for']) {
		const xForwardedFor = req.headers['x-forwarded-for'] as string
		ip = xForwardedFor.split(',')[0]
	} else if (req.headers['x-real-ip']) {
		ip = req.connection.remoteAddress
	} else {
		ip = req.connection.remoteAddress
	}
	return ip
}

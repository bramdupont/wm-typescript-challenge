export async function register() {
	if (process.env.NEXT_RUNTIME === "nodejs") {
		const { server } = await import("./app/api/cocktails/cocktails.json");
		server.listen();
	}
}

import { Client } from "whatsapp-web.js";
import { mapHandlers } from "./handlers";

async function start() {
	const client = new Client({});

    mapHandlers(client);

	await client.initialize();
}

start();

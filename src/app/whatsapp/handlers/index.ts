import { Client } from "whatsapp-web.js";
import qrHandler from "./qr";
import readyHandler from "./ready";
import messageHandler from "./message";

export function mapHandlers(client: Client) {
	client.on("ready", readyHandler);
	client.on("qr", qrHandler);
	client.on("message", messageHandler);
}

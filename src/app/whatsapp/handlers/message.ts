import { Message } from "whatsapp-web.js";

export default function messageHandler(message: Message): void {
    console.log("Message received", message);
}
import QR from "qrcode-terminal";

export default function qrHandler(qrCode: string): void {
	QR.generate(qrCode, { small: true });
}

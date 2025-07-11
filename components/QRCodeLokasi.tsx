"use client"
import QRCode from "react-qr-code"

export default function QRCodeLokasi() {
    const url = "https://maps.app.goo.gl/dUmmZ3b3CvDH35MP6"

    return (
        <div className="mt-6 flex flex-col items-start">
            <QRCode value={url} size={128} bgColor="transparent" fgColor="#1f2937" />
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs text-black-600 hover:underline"
            >
                Buka di Google Maps
            </a>
        </div>
    )
}

import QRCode from 'react-qr-code';
import './App.css';

export function GetQrCode(props) {
    return (
        <div className="qrcode-area">
            <QRCode value={props.string} />
        </div>
    )
}
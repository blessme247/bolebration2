import React, { useEffect, useRef } from 'react'
import QrScanner from 'qr-scanner';

const QRScanner = () => {

    const videoRef = useRef();

    useEffect(() => {
        console.log(videoRef)
    }, [videoRef])

    let qrScanner;

    if(videoRef.current != null) {
        qrScanner = new QrScanner(
            videoRef.current,
            result => console.log('decoded qr code:', result),
            { returnDetailedScanResult: true,
                onDecodeError: (err) => {console.log(err)},
                maxScansPerSecond: undefined
                /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
        );
        qrScanner.setCamera('environment')
    }
    

    const scanstart = () => {
        // if(videoRef != null) {
            qrScanner.start();
        // }
    }
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
        {/* <QrScanner /> */}

        <video ref={videoRef} src={videoRef.current} style={{border: "1px red solid"}}></video>
        <button onClick={scanstart}>Scan Me</button>
    </div>
  )
}

export default QRScanner
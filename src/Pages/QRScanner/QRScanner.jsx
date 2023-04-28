import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import Swal from "sweetalert2";

import "./scanner.scss";
import axiosInstance from "../../utils/axiosConfig";

const QRScanner = () => {
  const videoRef = useRef();

  // Endpoint scanned
  const [resultText, setResultText] = useState();

  const [showResultText, setShowResultText] = useState(false);

  useEffect(() => {}, [videoRef]);

  const showOutput = (result) => {
    Swal.fire({
      position: "center",
      icon: "info",
      title: result,
      showConfirmButton: true,
      timer: 3500,
    });
  };

  const verifyQR = async (data) => {
    //If resultText state has not been set yet, use a parsed result.data on line 59 directly
    let payload = resultText || data;

    let response = await axiosInstance.post("/scanned", payload);

    if (response) {
      Swal.fire({
        position: "center",
        icon: response.data == "scanned" ? "success" : "error",
        title: response.data,
        showConfirmButton: true,
        timer: 3500,
      });
    }
  };

  let qrScanner;

  if (videoRef.current != null) {
    qrScanner = new QrScanner(
      videoRef.current,
      (result) => {
        console.log(result, "whole result object");
        // showOutput(result.data);
        setResultText(() => {
          return JSON.parse(result.data);
        });
        setShowResultText(true);
        console.log("decoded qr code:", resultText);
        // console.log("decoded qr code email:", result?.data.email);
        qrScanner.stop();
        verifyQR(JSON.parse(result.data));
      },
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
        onDecodeError: (err) => {
          //   console.log(err);
        },
        maxScansPerSecond: undefined,
        /* your options or returnDetailedScanResult: true if you're not specifying any other options */
      }
    );
    qrScanner.setCamera("environment");
  }

  const scanStart = () => {
    // if(videoRef != null) {
    qrScanner?.start();
    // }
  };
  return (
    <div className="qrPageContainer">
      <div style={{ margin: "0 auto", width: "800px" }}>
        {/* <QrScanner /> */}

        <video className="video" ref={videoRef} src={videoRef.current}></video>
        <button className="scanBtn" onClick={scanStart}>
          Scan{" "}
        </button>

        {showResultText && resultText && (

        <div className="scanResultTitle">QR Code Details</div>

        )}

        {showResultText && resultText && (
          <div className="scanResult">
            <p>Email: {resultText?.email} </p>
            <p>Phone: {resultText?.phone} </p>
            <p>Name: {resultText?.name} </p>
            <p>Gender: {resultText?.gender} </p>

            {resultText?.quantity && (
              <>
                <p>Quantity: {resultText.quantity} </p>
                <p>Amount: {resultText.amount} </p>
                <p>Ticket Type: {resultText.ticketType} </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;

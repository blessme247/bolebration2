import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import axiosInstance from "../../utils/axiosConfig";
import "./scanner.scss";

const QRScanner = () => {
  const videoRef = useRef();

  // Endpoint scanned
  const [resultText, setResultText] = useState();

  const [showResultText, setShowResultText] = useState(false);

  useEffect(() => {}, [videoRef]);

  const verifyQR = async (data) => {
    //If resultText state has not been set yet, use a parsed result.data on line 60 directly
    // let payload = resultText || data;
    let payload = data;

    let response = await axiosInstance.post("/scanned", payload);

    if (response) {
      Swal.fire({
        position: "center",
        icon: response.data == "scanned" ? "success" : "error",
        title: response.data,
        showConfirmButton: true,
        timer: 15000,
      })
      
    }

    else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something Went Wrong!",
        showConfirmButton: true,
        timer: 3500,
      })
    }
  };

  let qrScanner;

  if (videoRef.current != null) {
    qrScanner = new QrScanner(
      videoRef.current,
      (result) => {
        // console.log(result, "whole result object");
        setResultText(() => {
          return JSON.parse(result.data);
        });
        setShowResultText(true);
        // console.log("decoded qr code:", resultText);
        // console.log("decoded qr code email:", result?.data.email);
        qrScanner.stop();
        verifyQR(JSON.parse(result.data));
      },
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
        onDecodeError: (err) => {
        },
        maxScansPerSecond: undefined,
        /* your options or returnDetailedScanResult: true if you're not specifying any other options */
      }
    );
    qrScanner.setCamera("environment");
  }

  const scanStart = () => {
    // if(videoRef != null) {
      setResultText()
    qrScanner?.start();
    // }
  };
  return (
    <div className="qrPageContainer">
      <div className="qrPageWrapper" >
        {/* <QrScanner /> */}

        <video className="video" ref={videoRef} src={videoRef.current}></video>
        <button className="scanBtn" onClick={scanStart}>
          Scan 
        </button>

        {showResultText && resultText && (

        <motion.div className="scanResultTitle" initial={{opacity: 0, y: 80}} animate={{opacity: 1, y: 0}}
        transition= {{
         ease: "easeInOut",
         duration: 0.8,
        }} >QR Code Details</motion.div>

        )}

        {showResultText && resultText && (
          <motion.div className="scanResult" initial={{opacity: 0, y: 80}} animate={{opacity: 1, y: 0}}
          transition= {{
           ease: "easeInOut",
           duration: 1,
           delay: 0.4
          }}>
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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;

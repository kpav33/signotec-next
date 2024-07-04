"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";

// Create a separate server for signotec library that we then call in our main Next.js application?
export default function Signature() {
  //   const [isLibraryLoaded, setIsLibraryLoaded] = useState(false);

  //   useEffect(() => {
  //     const checkLibrary = () => {
  //       if (typeof window.STPadServerLib !== "undefined") {
  //         setIsLibraryLoaded(true);
  //       }
  //     };

  //     // Check if the library is already loaded
  //     checkLibrary();

  //     // Optionally, listen for script load event if not already loaded
  //     const script = document.querySelector(
  //       'script[src="/STPadServerLib-3.3.2.js"]'
  //     );
  //     if (script) {
  //       script.addEventListener("load", checkLibrary);
  //     }

  //     // Cleanup the event listener on unmount
  //     return () => {
  //       if (script) {
  //         script.removeEventListener("load", checkLibrary);
  //       }
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (isLibraryLoaded) {
  //       // Library loaded
  //       const STPadServerLibDefault = window.STPadServerLib.STPadServerLibDefault;
  //       const STPadServerLibCommons = window.STPadServerLib.STPadServerLibCommons;
  //       const STPadServerLibApi = window.STPadServerLib.STPadServerLibApi;

  //       console.log(STPadServerLibDefault);
  //       console.log(STPadServerLibCommons);
  //       console.log(STPadServerLibApi);
  //     }
  //   }, [isLibraryLoaded]);

  //   return (
  //     <>
  //       <Head>
  //         <script src="/STPadServerLib-3.3.2.js" />
  //       </Head>
  //       <div>
  //         {isLibraryLoaded ? (
  //           <p>Library loaded successfully!</p>
  //         ) : (
  //           <p>Loading library...</p>
  //         )}
  //       </div>
  //     </>
  //   );

  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false);

  useEffect(() => {
    const checkLibrary = () => {
      if (typeof window.STPadServerLib !== "undefined") {
        setIsLibraryLoaded(true);
      }
    };

    // Check immediately in case the script has already loaded
    checkLibrary();

    // Add an event listener to handle script load
    const handleScriptLoad = () => {
      checkLibrary();
    };

    const script = document.createElement("script");
    script.src = "/STPadServerLib-3.3.2.js";
    script.async = true;
    script.onload = handleScriptLoad;
    document.body.appendChild(script);

    // Cleanup the script and event listener
    return () => {
      script.removeEventListener("load", handleScriptLoad);
    };
  }, []);

  useEffect(() => {
    if (isLibraryLoaded) {
      // The library is now loaded, you can use its methods
      const STPadServerLibDefault = window.STPadServerLib.STPadServerLibDefault;
      const STPadServerLibCommons = window.STPadServerLib.STPadServerLibCommons;
      const STPadServerLibApi = window.STPadServerLib.STPadServerLibApi;

      // Example usage
      // console.log(STPadServerLibDefault);
      // console.log(STPadServerLibCommons);
      // console.log(STPadServerLibApi);
    }
  }, [isLibraryLoaded]);

  // useEffect(() => {
  //   // Function to handle the 'onMainWindowLoad' event
  //   const onMainWindowLoad = () => {
  //     // Implement functionality here if needed
  //   };

  //   // Function to handle the 'onMainWindowBeforeUnload' event
  //   const onMainWindowBeforeUnload = () => {
  //     // Implement functionality here if needed
  //   };

  //   // Attach events on component mount
  //   window.onload = onMainWindowLoad;
  //   window.onbeforeunload = onMainWindowBeforeUnload;

  //   // Cleanup events on component unmount
  //   return () => {
  //     window.onload = null;
  //     window.onbeforeunload = null;
  //   };
  // }, []);

  return (
    <>
      <Head>
        <script src="/STPadServerLib-3.3.2.js" />
      </Head>
      <div>
        {isLibraryLoaded ? (
          <div>
            {" "}
            <p>Library loaded successfully!</p>
            {/* From example */}
            {false && (
              <div>
                <h1>signoPAD-API/Web Demo</h1>
                <p style={{ textAlign: "left", fontSize: "13px" }}>
                  This demo shows how to use the signoPAD-API/Web to easily
                  capture signatures using MS Edge, Mozilla Firefox, Google
                  Chrome, Opera...
                  <br />
                  To sign click the 'Sign' button.
                  <br />
                  The signing process will be shown in real time in the 'Live
                  Signature' element.
                  <br />
                  The signature image will be shown in the 'Signature Image'
                  element.
                  <br />
                  The SignData is as a string (Base64 encoded) and will be shown
                  in the 'SignData as Base64 string' element.
                  <br />
                  The RsaSignature is as a string (Base64 encoded) and will be
                  shown in the 'RsaSignature as Base64 string' element.
                  <br />
                  The 'Pad Type' element shows the pad type for the connected
                  signotec pad.
                  <br />
                  The 'Serial Number' element shows the serial number for the
                  connected signotec pad. It is only unique within its model
                  range.
                  <br />
                  The 'Firmware Version' element shows the firmware version for
                  the connected signotec pad.
                  <br />
                  The 'RSA Support' element shows the RSA encryption capability
                  for the connected signotec pad.
                  <br />
                  The 'Biometry Cert. ID' element shows the biometry encryption
                  certificate ID for the connected signotec pad.
                  <br />
                  The 'RSAScheme' element shows the RSA scheme of the
                  RsaSignature from connected signotec pad.
                  <br />
                  The 'Signature Cert. ID' element shows the signature
                  certificate for the connected signotec pad.
                  <br />
                  To clear refresh the browser (F5).
                  <br />
                  <br />
                  Please note that the sign data, the signature image and the
                  RSA signature should be sent back to the web application for
                  further processing.
                </p>

                <p id="status">Not connected</p>

                {/* Mode and Pad Types */}
                <table>
                  <thead>
                    <tr>
                      <th>Mode:</th>
                      <th>Pad Types:</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>
                      <select id="ModeList" size={2} onChange={() => {}}>
                        <option selected value="Default">
                          Default mode
                        </option>
                        <option value="API">API mode</option>
                      </select>
                    </td>
                    <td>
                      <select id="PadConnectionTypeList" size={2}>
                        <option value="USB">signotec signature HID pad</option>
                        <option value="Serial">
                          signotec signature Serial pad
                        </option>
                      </select>
                    </td>
                  </tr>
                </table>

                <br />

                {/* Sign and Confirm Buttons */}
                <table>
                  <tr>
                    <td>
                      <input
                        id="SignBtn"
                        name="SignBtn"
                        type="button"
                        value="Sign"
                        onClick={() => {}}
                        style={{
                          backgroundColor: "#FF6600",
                          width: "150px",
                          height: "30px",
                          color: "white",
                          fontWeight: "bold",
                          font: "8pt verdana",
                        }}
                      />
                    </td>
                    <td>
                      <input
                        id="ConfirmBtn"
                        name="ConfirmBtn"
                        type="button"
                        value="Confirm"
                        onClick={() => {}}
                        style={{
                          backgroundColor: "#FF6600",
                          width: "150px",
                          height: "30px",
                          color: "white",
                          fontWeight: "bold",
                          font: "8pt verdana",
                        }}
                      />
                    </td>
                  </tr>
                </table>

                <br />

                {/* Pad Properties */}
                <table>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Pad Type:</p>
                    </td>
                    <td>
                      <p id="PadType_0" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Serial Number:</p>
                    </td>
                    <td>
                      <p id="SerialNumber_0" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Firmware Version:</p>
                    </td>
                    <td>
                      <p id="FirmwareVersion_0" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>RSA Support:</p>
                    </td>
                    <td>
                      <p id="RSASupport_0" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Biometry Cert. ID:</p>
                    </td>
                    <td>
                      <p id="biometryCertID_0" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>RSAScheme:</p>
                    </td>
                    <td>
                      <p id="RSAScheme_0" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Signature Cert.:</p>
                    </td>
                    <td
                      style={{
                        width: "160px",
                        height: "160px",
                        border: "1px solid black",
                      }}
                    >
                      <textarea
                        id="signatureCert_0"
                        rows={10}
                        cols={40}
                        readOnly
                        style={{ borderStyle: "hidden", resize: "none" }}
                      ></textarea>
                    </td>
                  </tr>
                </table>

                <br />

                {/* Number of selection elements */}
                <table>
                  <tr>
                    <td>
                      <p
                        id="check_boxes_selectedElementsLabel"
                        style={{ fontWeight: "bold" }}
                      >
                        Number of selection elements:
                      </p>
                    </td>
                    <td>
                      <select
                        id="check_boxes_selectedElements"
                        onChange={() => {}}
                      >
                        <option value="0" selected>
                          0
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                  </tr>
                </table>

                <br />

                {/* Checkboxes */}
                <table>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Nr.</p>
                    </td>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Field ID</p>
                    </td>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Text</p>
                    </td>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Status</p>
                    </td>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Required field</p>
                    </td>
                  </tr>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <tr key={index}>
                      <td>
                        <p id={`fieldNumber${index}`}>{index}</p>
                      </td>
                      <td>
                        <input
                          id={`fieldID${index}`}
                          type="text"
                          value={`fieldID${index}`}
                        />
                      </td>
                      <td>
                        <input
                          id={`fieldText${index}`}
                          type="text"
                          value={`Here is the ${index} text`}
                        />
                      </td>
                      <td>
                        <input
                          id={`fieldChecked${index}`}
                          type="checkbox"
                          value={`fieldChecked${index}`}
                        />
                      </td>
                      <td>
                        <input
                          id={`fieldRequired${index}`}
                          type="checkbox"
                          value={`fieldRequired${index}`}
                        />
                      </td>
                    </tr>
                  ))}
                </table>

                <br />

                {/* Signature Color */}
                <table>
                  <tr>
                    <td>
                      <p
                        id="signatureColorLabel"
                        style={{ fontWeight: "bold" }}
                      >
                        Signature Color:
                      </p>
                    </td>
                    <td>
                      <select id="signaturePenColorSelect">
                        <option
                          // name="signaturePenColorBlack"
                          value="0x00000000"
                          selected
                        >
                          black
                        </option>
                        <option
                          // name="signaturePenColorGrey"
                          value="0x007f7f7f"
                        >
                          grey
                        </option>
                        <option
                          // name="signaturePenColorRed"
                          value="0x000000ff"
                        >
                          red
                        </option>
                        <option
                          // name="signaturePenColorGreen"
                          value="0x0000ff00"
                        >
                          green
                        </option>
                        <option
                          // name="signaturePenColorBlue"
                          value="0x00ff0000"
                        >
                          blue
                        </option>
                      </select>
                    </td>
                  </tr>
                </table>

                {/* Log */}
                <ul id="log"></ul>

                {/* Canvas and Textareas */}
                <table>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left" }}>Live Signature:</th>
                      <th style={{ textAlign: "left" }}>Signature Image:</th>
                      <th style={{ textAlign: "left" }}>
                        SignData as Base64 string:
                      </th>
                      <th style={{ textAlign: "left" }}>
                        RsaSignature as Base64 string:
                      </th>
                    </tr>
                  </thead>
                  <tr>
                    <td>
                      <canvas id="sigCanvas" width="640" height="480"></canvas>
                    </td>
                    <td
                      style={{
                        width: "320px",
                        height: "160px",
                        border: "1px solid black",
                      }}
                    >
                      <img id="Signature_0" alt="Signature 0" src="White.png" />
                    </td>
                    <td
                      style={{
                        width: "160px",
                        height: "160px",
                        border: "1px solid black",
                      }}
                    >
                      <textarea
                        id="SignData_0"
                        rows={30}
                        cols={40}
                        readOnly
                        style={{ borderStyle: "hidden", resize: "none" }}
                      ></textarea>
                    </td>
                    <td
                      style={{
                        width: "160px",
                        height: "160px",
                        border: "1px solid black",
                      }}
                    >
                      <textarea
                        id="RsaSignature_0"
                        rows={30}
                        cols={40}
                        readOnly
                        style={{ borderStyle: "hidden", resize: "none" }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </div>
        ) : (
          <p>Loading library...</p>
        )}
      </div>
    </>
  );
}

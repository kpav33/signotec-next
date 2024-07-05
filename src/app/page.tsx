import React from "react";
// import Signature from "./components/Signature";
import GetSignature from "./components/GetSignature";

// signotec st-gert-3-u100
// https://en.signotec.com/hardware/signature-pads/signotec-gamma/
// https://en.signotec.com/software/integration-sdk-api-/signopad-api-web/
// file:///C:/Users/kleme/Downloads/signotec_signopad_api_web_documentation_en-2.pdf
// https://en.signotec.com/software/pdf-signature-windows/signosign-2/

// Connect to left usb port, doesn't work on the right one for some reason
// C:\Program Files (x86)\signotec => Location of web api code for signotec
// C:\Program Files (x86)\signotec\signoPAD-API Web\Documentation => Documentation
// C:\Program Files (x86)\signotec\signoPAD-API Web\Sample\STPadServerLib-3.3.2.js => Library for windows
// C:\Program Files (x86)\signotec\signoPAD-API Web\Sample\STPadServer.html => Open with code editor and there is an example code here on how to use

// Can we even use the signotec library here, since when deployed its a serverless enviroment, or would we need to create a separate server for it, which we would then call?
// public/STPadServerLib-3.3.2.js => Add library to public folder, then call the script in layout file

// If we try to use signotec directly in Next there are problems, since it runs in a serverless enviroment, we should run the server directly as a separate project on the computer and then call that server from the application
// Check signotec-js folder in Learning folder for signotec server code

// We will have the new app as a web app, but it will need to communicate with a server running on a local computer, which will be handling the singotec signatures
// 8.5.9 getSignatureData => This is the function in signotec that has the data we would need in our app, check /signotec_signopad_api_web_documentation_en-2.pdf for specifics
// let getSignatureDataParams = new
// STPadServerLibDefault.Params.getSignatureData();
// getSignatureDataParams.setRsaScheme("PSS");
// try {
// let value = await
// STPadServerLibDefault.getSignatureData(getSignatureDataParams);
// alert("SignData: " + value.signData + ", CertId: " + value.certId,
// RSASignature: " + value.rsaSignature + ");
// } catch (reason) {
// alert(reason.errorMessage);
// }
// getSignatureImage => This function returns the image of the signature as an image in Base64-coded form

// We get the signature from the signature pad and then we will pass that data to some sort of pdf
// Example for react directly would be using react-signature-canvas library for signature and then react-pdf
// In this case we need to first get the signature from the separate signotec server and then somehow pass it and add it to the pdf where its needed
// https://github.com/docusealco/docuseal-react-examples => Example of implementation for a different provider, there is a separate express server app and a separate next.js app. So best would be for us as well to make a separate server app that handles the signing and then we get the data from it for our app.

export default function Home() {
  return (
    <main>
      <div>Hello World!</div>
      {/* <Signature /> */}
      <GetSignature />
    </main>
  );
}

import React from "react";
import Signature from "./components/Signature";

// signotec st-gert-3-u100
// https://en.signotec.com/hardware/signature-pads/signotec-gamma/
// https://en.signotec.com/software/integration-sdk-api-/signopad-api-web/
// https://en.signotec.com/software/pdf-signature-windows/signosign-2/

// Connect to left usb port, doesn't work on the right one for some reason
// C:\Program Files (x86)\signotec => Location of web api code for signotec
// C:\Program Files (x86)\signotec\signoPAD-API Web\Documentation => Documentation
// C:\Program Files (x86)\signotec\signoPAD-API Web\Sample\STPadServerLib-3.3.2.js => Library for windows
// C:\Program Files (x86)\signotec\signoPAD-API Web\Sample\STPadServer.html => Open with code editor and there is an example code here on how to use

// Can we even use the signotec library here, since when deployed its a serverless enviroment, or would we need to create a separate server for it, which we would then call?
// public/STPadServerLib-3.3.2.js => Add library to public folder, then call the script in layout file

export default function Home() {
  return (
    <main>
      <div>Hello World!</div>
      <Signature />
    </main>
  );
}

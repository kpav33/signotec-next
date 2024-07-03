"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";

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
      console.log(STPadServerLibDefault);
      console.log(STPadServerLibCommons);
      console.log(STPadServerLibApi);
    }
  }, [isLibraryLoaded]);

  return (
    <>
      <Head>
        <script src="/STPadServerLib-3.3.2.js" />
      </Head>
      <div>
        {isLibraryLoaded ? (
          <p>Library loaded successfully!</p>
        ) : (
          <p>Loading library...</p>
        )}
      </div>
    </>
  );
}

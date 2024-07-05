"use client";

import { useState, useEffect } from "react";

interface SignatureData {
  countedPoints?: number;
  rsaSignature?: string;
  certId?: string;
  signData?: string;
}

export default function GetSignature() {
  const [signatureData, setSignatureData] = useState<SignatureData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const fetchSignatureData = async () => {
    try {
      const response = await fetch("/api/signature");
      if (response.ok) {
        const data = await response.json();
        setSignatureData(data.signatureData);
        setError(null);
      } else {
        setError("No signature data available");
        setSignatureData(null);
      }
    } catch (error) {
      console.error("Error fetching signature data:", error);
      setError("Failed to fetch signature data");
      setSignatureData(null);
    }
  };

  return (
    <div>
      <h1>Signotec Signature Data</h1>
      <button onClick={fetchSignatureData}>Fetch Signature Data</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {signatureData && (
        <div>
          <h2>Signature Data:</h2>
          <pre>{JSON.stringify(signatureData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

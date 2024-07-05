// import { NextResponse } from "next/server";

// export async function POST(request: any) {
//   try {
//     // return NextResponse.json({
//     //   message: "Signature data received successfully",
//     // });

//     const { signatureData } = await request.json();

//     // Process the signature data as needed
//     // For example, you could save it to a database or perform some other action
//     console.log("Received signature data:", signatureData);

//     return NextResponse.json({
//       message: "Signature data received successfully",
//     });
//   } catch (error) {
//     console.error("Error processing signature data:", error);
//     return NextResponse.json(
//       { error: "Failed to process signature data" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";

// In-memory storage for simplicity, we would need to store this in database for production?
let signatureDataStore: any = null;

export async function POST(request: any) {
  try {
    // const { signatureData } = await request.json();
    const { data } = await request.json();
    // Store the signature data
    // signatureDataStore = signatureData;
    signatureDataStore = data;
    return NextResponse.json({
      message: "Signature data received successfully",
    });
  } catch (error) {
    console.error("Error processing signature data:", error);
    return NextResponse.json(
      { error: "Failed to process signature data" },
      { status: 500 }
    );
  }
}

export async function GET(request: any) {
  try {
    if (signatureDataStore) {
      return NextResponse.json({ signatureData: signatureDataStore });
    } else {
      return NextResponse.json(
        { message: "No signature data available" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching signature data:", error);
    return NextResponse.json(
      { error: "Failed to fetch signature data" },
      { status: 500 }
    );
  }
}

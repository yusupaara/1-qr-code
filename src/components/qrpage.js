import React from "react";
import qr from "../images/image-qr-code.png";

export default function Qrpage() {
  return (
    <div className="flex min-h-screen bg-tm-grey justify-center">
      <div className="flex flex-col  max-w-sm justify-center items-center">
        <div className="bg-white p-5 rounded-3xl">
          <img
            className="h-min object-cover object-center rounded-2xl"
            src={qr}
            alt="qr code"
          />
          <div className="space-y-4 p-5 font-gabarito ">
            <div className="text-center font-bold text-2xl">
              Improve your front-end skills by building projects
            </div>
            <div className="text-center px-3">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

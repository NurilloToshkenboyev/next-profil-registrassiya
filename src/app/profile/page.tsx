import React from "react";
import Image from "next/image";
import mainImage from "../../public/nurilloToshkenboyev.jpg";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={mainImage}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">Xush kelibsiz!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Salom! Men Toshkenboyev Nurillo, web dasturchiman. Men turli xil web 
          dasturlar yaratishda tajribam bor va men React, Next.js, TypeScript, 
          va Tailwind CSS kabi texnologiyalar bilan ishlashni yaxshi ko'raman.
        </p>
        <div className="text-left text-gray-600 mb-4">
          <p><strong>Yosh:</strong> 25 yosh</p>
          <p><strong>Tug'ilgan yil:</strong> 1999-yil 6-may</p>
          <p><strong>Kasbi:</strong> Xozirda Najot Talimda O'qiyapti</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300">
          Aloqa 
          +998999111422
        </button>
      </div>
    </div>
  );
}


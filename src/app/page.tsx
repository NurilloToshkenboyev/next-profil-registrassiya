import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth";
import Image from "next/image";
import mainImage from "@/public/i.webp"; 

export default async function Home() {
  const data = await getServerSession(authOptions);
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-4">
        Home bo'limiga xush kelibsiz!
      </h1>
      <div className="relative w-full max-w-2xl h-96 mb-4">
        <Image
          src={mainImage} 
          alt="Main Image"
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <p className="text-lg text-gray-700 text-center">
       
      </p>
    </div>
  );
}

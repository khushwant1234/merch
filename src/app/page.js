import Image from 'next/image';
import { Card, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    
    
    <div className="flex flex-col items-center py-10 space-y-10">
      
      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-screen-xl">
          {/* Card 1 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" /> 
              <p className="text-left px-2 py-1 font-semibold">Oversized Haunted Carnival</p>
              <p className="text-left px-2 font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
              <p className="text-left px-2 py-1 font-normal text-base">Rs.1500</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" />
              <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" />
              <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" />
              <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
          </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full max-w-screen-xl">
          {/* Image */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <div className="relative h-80 w-full"> 
              <Image
                src="/ss.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                className="rounded-lg"
              />
              <Card className="absolute inset-0 bg-transparent">
                <CardFooter className="absolute bottom-0 w-full text-center">
                  <div className="backdrop-blur-sm bg-black bg-opacity-10 py-5 px-10">
                    <p className="text-white opacity-90 font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" />
              <p className="text-left p-2 font-semibold">Hoodie hai</p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" /> 
              <p className="text-left p-2 font-semibold">Hoodie hai pt2</p>
          </div>
      </div>

      {/*Third Row*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-screen-xl">
          {/* Card 1 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" /> {/* Adjust height as needed */}
              <p className="text-left px-2 py-1 font-semibold">Oversized Haunted Carnival</p>
              <p className="text-left px-2 font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
              <p className="text-left px-2 py-1 font-normal text-base">Rs.1500</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" />
              <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" />
              <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start">
              <Card className="h-80 w-full" />
              <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
          </div>
        </div>
        
    </div>
  );
}

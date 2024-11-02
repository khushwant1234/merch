import {
  Card
} from "@/components/ui/card"

export default function Home() {
  return (
      <div className="flex justify-center py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-screen-xl">
              
              {/* Card 1 */}
              <div className="flex flex-col items-start">
                  <Card className="h-60 w-full" />
                  <p className="text-left px-2 py-1 font-semibold">Oversized Haunted Carnival</p>
                  <p className="text-left px-2 font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
                  <p className="text-left px-2 py-1 font-normal text-base">Rs.1500</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-start">
                  <Card className="h-60 w-full" />
                  <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-start">
                  <Card className="h-60 w-full" />
                  <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-start">
                  <Card className="h-60 w-full" />
                  <p className="text-left p-2 font-semibold">Oversized Haunted Carnival</p>
              </div>

          </div>
      </div>
  );
}
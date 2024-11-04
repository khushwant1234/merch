import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-1 p-10 justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="text-black border-black">
            <ChevronRight className="h-4 w-4 text-black" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-64 px-2 py-1 bg-yellow-400 border-b border-black">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b border-black">
              <AccordionTrigger className="text-black font-semibold">
                Is it legal?
              </AccordionTrigger>
              <AccordionContent className="p-2 text-black">
                e
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-black">
              <AccordionTrigger className="text-black font-semibold">
                Is it funni?
              </AccordionTrigger>
              <AccordionContent className="p-2 text-black">
                haha
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="text-black font-semibold">
                MUAHAHAHAHA
              </AccordionTrigger>
              <AccordionContent className="p-2 text-black">
                MUAAHAHAHAAHA
              </AccordionContent>
            </AccordionItem>
            
          </Accordion>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

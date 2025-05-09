import Container from "@/components/container";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import Ticket from "@/components/ui/ticket";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Container className="flex items-center justify-between h-[calc(100vh-92px)] w-full">
        <div>
          <h1 className="font-semibold leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-4xl text-primary">
            {"Spacer's Hack"} <br /> {"Conference 2025"}
          </h1>
          <p className="text-sm sm:text-base md:text-lg subtitle max-w-xl mt-2">
            Join us for a day of learning, connecting with other players in the
            industry, and unwinding. Get ready to immerse yourself in an
            inspiring atmosphere filled with Inspiration, Integration,
            Innovation, and fun.
          </p>

          <div className="flex items-center space-x-4 mt-4">
            <Button className="uppercase !px-6 !text-sm">
              Register for Hackathon
            </Button>
            <Button className="uppercase !px-6 bg-[#F0F0FB] hover:bg-[#F0F0F8]/80 text-primary !text-sm">
              View 2024 Highlights
              <ChevronRight />
            </Button>
          </div>
        </div>

        <Ticket />
      </Container>
    </>
  );
}

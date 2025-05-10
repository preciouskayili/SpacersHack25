import Container from "@/components/container";
import EventHighlights from "@/components/Index/EventHighlights";
import ThemeAndActivities from "@/components/Index/ThemeAndActivities";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import Ticket from "@/components/ui/ticket";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Container className="flex items-center justify-between h-[calc(100vh-92px)] w-full">
        <div>
          <div className="uppercase md:text-sm max-w-xl mb-2 flex items-center space-x-2">
            <p className="text-primary">New</p>
            <svg
              width={3}
              height={3}
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#5B5AD1" />
            </svg>
            <p>2025 Hackathon Submission Ongoing</p>
            <span className="rounded-full text-[#6B6AD6] bg-[#F0F0FB] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </svg>
            </span>
          </div>
          <h1 className="font-semibold uppercase leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-4xl text-primary">
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

          <div className="mt-12">
            <p className="text-sm sm:text-base md:text-xl subtitle max-w-xl">
              JUL 25TH - 30TH, 2025
            </p>
            <p className="text-sm sm:text-base md:text-xl text-primary max-w-xl mt-1 font-medium">
              SPACER'S HACK CONF 2025
            </p>
          </div>
        </div>

        <Ticket />
      </Container>
      <EventHighlights />
      <ThemeAndActivities />
    </>
  );
}

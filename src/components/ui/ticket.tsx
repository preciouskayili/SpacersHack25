import { ChevronRight } from "lucide-react";
import { Button } from "./button";

export default function Ticket() {
  return (
    <div className="relative max-w-md w-full">
      {/* Top perforated edge */}
      <div className="absolute -top-14 left-0 right-0 flex w-full -space-x-px">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`top-${i}`}
            className="h-full w-full aspect-square bg-white rounded-full transform translate-y-1/2"
          />
        ))}
      </div>

      {/* Ticket body */}
      <div className="bg-primary py-10 rounded-2xl h-[500px] flex flex-col justify-between">
        <div>
          <div className="px-5">
            <p className="mb-4 text-white text-lg uppercase">
              {"Get Your Ticket to"}
              <br />
              {"Spacer's Hack Conf 2025"}
            </p>
          </div>
          <svg
            width="500"
            height="2"
            viewBox="0 0 500 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H500"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="6 6"
            />
          </svg>
          <div className="px-6 mt-6">
            <p className="text-white text-lg uppercase mb-2">
              Early bird ticket
            </p>
            <p className="text-white text-5xl font-medium uppercase">₦30,000</p>
          </div>
        </div>

        <div className="px-6 flex flex-col w-full">
          <p className="mb-2 text-lg text-[#DEDEF6]">
            What your ticket includes:
          </p>

          <ul className="text-white space-y-2">
            <li>Access to all talks and panel sessions</li>
            <li>Hands-on Workshops and demos</li>
            <li>And more!!</li>
          </ul>

          <Button
            variant="white"
            className=" ml-auto mt-4 !pl-6 text-primary text-sm"
            size="sm"
          >
            <span>Purchase Ticket</span> <ChevronRight size={24} />
          </Button>
        </div>
      </div>

      {/* Bottom perforated edge */}
      <div className="absolute -bottom-14 left-0 right-0 flex w-full -space-x-px">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="h-full w-full aspect-square bg-white rounded-full transform -translate-y-1/2"
          />
        ))}
      </div>
    </div>
  );
}

import Container from "../container";

export default function Speakers() {
  return (
    <div className="w-full bg-[#F3FAF5] py-20">
      <Container>
        <div className="font-medium">
          <h3 className="text-xl text-[#55B76F] uppercase">
            MEET OUR SPEAKERS FOR SPACERS HACK 2025
          </h3>
          <h3 className="text-2xl uppercase">Prestigious Hosts</h3>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="bg-primary p-2">
            <div className="h-80 bg-white w-full"></div>

            <div className="text-center text-white my-5">
              <h3 className="font-medium text-lg mb-1">Mercy Benn-Itua</h3>
              <p className="">Product Designer</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

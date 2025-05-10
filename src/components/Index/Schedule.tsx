import Container from "../container";

export default function Schedule() {
  const scheduleItems = [
    {
      time: "20th to 30th Aug, 2025 • 09:00 - 17:00",
      title: "Hybrid Hackathon",
      description:
        "This is a week-long collaborative event where developers and people in tech across Africa and beyond come together to build innovative solutions to local & global problems.",
    },
    {
      time: "31st August, 2025 • 09:00 - 17:00",
      title: "Panel Session",
      description:
        "This session brings together industry experts, thought leaders, and professionals to discuss relevant topics, trends, and challenges in the tech industry.",
    },
    {
      time: "31st August, 2025 • 09:00 - 17:00",
      title: "Keynote Session",
      description:
        "These sessions feature keynote presentations from industry experts and general talks by thought leaders in their respective industries.",
    },
    {
      time: "31st August, 2025 • 09:00 - 17:00",
      title: "Product Showcase",
      description:
        "This showcase is a session where participants can present their ideas, prototypes or demos of disruptive solutions addressing a wide range of domain problems in their communities.",
    },
  ];

  return (
    <Container className="py-24">
      <div className="flex justify-between">
        <div className="text-2xl font-medium">
          <h3>{"Spacer's Hack Conf"}</h3>
          <h3 className="text-primary">2025 Event Schedule</h3>
        </div>

        <div className="flex items-center gap-x-12">
          <div className="">
            <h3>{"20th August, 2025"}</h3>
            <h3 className="text-primary text-2xl uppercase">
              Hackathon Starts
            </h3>
          </div>
          <div className="">
            <h3>{"30th August, 2025"}</h3>
            <h3 className="text-primary text-2xl uppercase">Hackathon Ends</h3>
          </div>
          <div className="">
            <h3>{"31st August, 2025"}</h3>
            <h3 className="text-primary text-2xl uppercase">Conference Day</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 mt-20 bg-[#F0F0FB] w-full rounded-2xl p-2.5">
        {scheduleItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-primary text-white rounded-lg p-8 flex justify-between items-center"
          >
            <p>{item.time}</p>
            <h3 className="text-xl uppercase">{item.title}</h3>
            <p className="max-w-96 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

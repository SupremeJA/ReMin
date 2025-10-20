import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 py-16 gap-20 h-full justify-center sm:text-wrap md:items-center md:px-10">
      <div className=" flex flex-col items-center text-center gap-4 md:gap-5 md:items-center ">
        <h1 className="title">Never forget what truly matters.</h1>
        <h3 className="text-retext text-lg sm:text-xl md:w-[60%]">
          ReMin keeps your tasks and events in sync; with smart reminders that
          reach you by email or Google Calendar.
        </h3>
        <Button>Get Started for Free</Button>
      </div>
      <div className="rounded-2xl bg-blue-300 w-full overflow-hidden shadow-lg">
        <img
          src="https://i.pinimg.com/1200x/a6/a6/5b/a6a65ba7cd4281c32baa9c9fa90920c5.jpg"
          alt="mockup"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

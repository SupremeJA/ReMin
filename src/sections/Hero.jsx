import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="section-full grid grid-cols-1 py-16 gap-20 justify-center sm:text-wrap md:items-center md:px-10 border-b-2">
      <div className=" flex flex-col items-center text-center gap-4 md:gap-5 md:items-center ">
        <h1 className="title">Never forget what truly matters.</h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
          ReMin keeps your tasks and events in sync; with smart reminders that
          reach you by email or Google Calendar.
        </p>
        <Button>Get Started for Free</Button>
      </div>
      <div className="rounded-2xl bg-blue-300 w-full overflow-hidden shadow-lg">
        <img
          src="https://i.pinimg.com/1200x/21/60/41/2160419d424db2f52946448bd2501770.jpg"
          alt="mockup"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

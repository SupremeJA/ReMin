import Button from "../components/Button";

const Hero = () => {
  return (
    <section className=" bg-red-200 flex flex-col h-dvh justify-between md:flex-row md:flex-1 px-5 md:px-10">
      <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left">
        <h1 className="text-4xl font-bold">The best out there</h1>
        <h3 className="text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis
          ipsum aspernatur nesciunt possimus eum esse impedit.
        </h3>
        <Button>Learn More</Button>
      </div>
      <div className="w-full h-40 bg-repurp rounded-2xl"></div>
    </section>
  );
};

export default Hero;

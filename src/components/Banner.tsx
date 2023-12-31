import Button from "./Button";

const Banner = () => {
  return (
    <section className="banner flex flex-col items-start justify-center px-3">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-screen-xl  lg:mx-auto">
        <div className="flex flex-col max-w-lg">
          <h2 className="uppercase font-semibold text-gray-100 mb-2 lg:text-lg">
            Welcome to Nano Academia
          </h2>
          <h1 className="text-[40px] leading-none text-white font-bold mb-5 lg:text-5xl">
            Experts in Nanotechnology Research & Education
          </h1>
          <p className="text-gray-100 leading-7 mb-5 lg:text-lg">
            One Stop place for all Nanotechnology Courses Research & its
            allied
          </p>
          <div className="flex flex-col gap-y-2 w-auto sm:flex-row sm:w-auto sm:gap-x-2">
            <Button text="Get Started Now" link href="/" />
            <Button secondary text="View Course" link href="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

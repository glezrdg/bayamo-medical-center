import "./home.css";

const Home = () => {
  return (
    <div className="h-[86vh] max-sm:h-[90vh] w-full  flex max-sm:flex-col  relative max-sm:text-xs  py-[10vh] max-sm:py-[4vh] ">
      <div className=" w-1/2 max-sm:w-full h-full max-sm:h-1/2  flex flex-col  items-start justify-start  max-sm:items-center">
        <span className="font-bold 2xl:text-2xl xl:text-2xl lg:text-lg md:text-md uppercase border-red-600 border p-2 text-red-600 shadowred  ">
          Bayamo Medical Center
        </span>
        <h1 className=" 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold mt-4 ">
          <span className="text-indigo-800 underline ">Your health</span> is our
          priority. Exceptional care{" "}
          <span className="text-indigo-800 underline ">guaranteed</span>.
        </h1>
        <p className="2xl:text-xl xl:text-xl lg:text-sm md:text-sm max-sm:text-sm lg:w-5/6 mt-4 text-slate-700">
          Dr. Luis Del Prado (Board Certified FM) and his wonderful and
          professional team is very eager to meet you, your beloved family, and
          friends!
        </p>
        <div className="2xl:w-4/5 xl:w-2/3 lg:w-4/5 md:w-full max-sm:w-4/5 flex justify-around mt-12 max-sm:mt-4">
          <a
            href="#contact_us"
            className="bg-indigo-800  px-[2vw] py-[2vh] 2xl:text-xl xl:text-xl lg:text-md md:text-sm max-sm:text-sm text-white rounded-full hover:scale-105 transition-all  shadow-lg"
          >
            Get Appointment
          </a>
          <a
            href="#doctors"
            className="border-indigo-800 border-2 rounded-full px-[2vw] py-[2vh] 2xl:text-xl xl:text-xl lg:text-md md:text-sm max-sm:text-sm  shadow-lg hover:scale-105 hover:bg-indigo-800 hover:text-white transition-all  text-indigo-800 "
          >
            Meet our team!
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <img
          className="2xl:h-[77vh] xl:h-[77vh] lg:h-[65vh] md:h-[50vh]  "
          src="../../landing-bayamo-clinic.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

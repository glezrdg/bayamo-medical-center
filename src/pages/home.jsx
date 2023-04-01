import "./home.css";

const Home = () => {
  return (
    <div className="h-[86vh] w-full  flex relative">
      <div className=" w-1/2 h-full  flex flex-col  items-start justify-start ">
        <span className="font-bold 2xl:text-2xl xl:text-2xl lg:text-lg uppercase border-red-600 border p-2 text-red-600 shadowred  ">
          Bayamo Medical Center
        </span>
        <h1 className=" 2xl:text-7xl xl:text-7xl lg:text-5xl  font-semibold mt-4 ">
          <span className="text-indigo-800 underline ">Your health</span> is our
          priority. Exceptional care{" "}
          <span className="text-indigo-800 underline ">guaranteed</span>.
        </h1>
        <p className="2xl:text-xl xl:text-xl lg:text-sm lg:w-5/6 mt-4 text-slate-700">
          Dr. Luis Del Prado (Board Certified FM) and his wonderful and
          professional team is very eager to meet you, your beloved family, and
          friends!
        </p>
        <div className="2xl:w-2/3 xl:w-2/3 lg:w-4/5 flex justify-around mt-12">
          <a
            href="#contact_us"
            className="bg-indigo-800  px-5 py-4 2xl:text-xl xl:text-xl lg:text-md text-white rounded-full hover:scale-105 transition-all  shadow-lg"
          >
            Get Appointment
          </a>
          <a
            href="#doctors"
            className="border-indigo-800 border-2 rounded-full px-5 py-4 2xl:text-xl xl:text-xl lg:text-md  shadow-lg hover:scale-105 hover:bg-indigo-800 hover:text-white transition-all  text-indigo-800 "
          >
            Meet our team!
          </a>
        </div>
      </div>
      <div>
        <img
          className="2xl:h-[77vh] xl:h-[77vh] lg:h-[65vh] "
          src="../../landing-bayamo-clinic.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

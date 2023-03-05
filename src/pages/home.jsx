import "./home.css";

const Home = () => {
  return (
    <div className="h-[80vh] flex relative" id="home">
      <div className=" w-1/2 h-full  flex flex-col pl-48 py-8 items-start justify-start ">
        <span className="font-bold text-2xl uppercase border-red-600 border p-2 text-red-600 shadowred  ">
          Stay strong, live long.
        </span>
        <h1 className=" text-7xl font-bold mt-4 ">
          <span className="text-indigo-800 underline font-medium">
            Take care
          </span>{" "}
          of your body and it will take care of{" "}
          <span className="text-indigo-800 underline font-medium">you</span>.
        </h1>
        <p className="text-xl mt-4 text-slate-700">
          Dr. Luis Del Prado MD (ARNP Specialist) and his wonderful and
          professional team, is very eager to meet you, your beloved family, and
          friends!
        </p>
        <div className="w-2/3 flex justify-around mt-12">
          <button className="bg-indigo-800  px-5  py-4 text-white rounded-full hover:scale-105 transition-all text-xl shadow-lg">
            Get Appointment
          </button>
          <button className="border-indigo-800 border-2 rounded-full px-5 py-4 shadow-lg hover:scale-105 hover:bg-indigo-800 hover:text-white transition-all  text-indigo-800 text-xl">
            Meet our team!
          </button>
        </div>
      </div>
      <div>
        <img
          className="h-[77vh] w-[40vw]"
          src="../../landing-bayamo-clinic.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

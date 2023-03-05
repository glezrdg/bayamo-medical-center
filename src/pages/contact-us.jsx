import { Calendar } from "primereact/calendar";
import { useState } from "react";

const Contact = () => {
  const [date, setDate] = useState([]);
  return (
    <div
      id="contact_us"
      className="h-[100vh] w-full bg-stone-100 relative flex flex-col justify-evenly items-center "
    >
      <div className="bg-stone-100 absolute top-0 -right-20 -left-20 bottom-0 -z-10"></div>
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-semibold ">Get in touch with us.</h1>
        <h3 className="mt-3 text-xl">For us to get in touch with you.</h3>
      </div>
      <div className="w-2/3 h-1/2  flex">
        <div className="w-1/2 p-5  ">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Last Name</label>

              <input type="text" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>

            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Select a Date</label>
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              showIcon
              showTime
              hourFormat="12"
              className="h-8"
            />
          </div>
          <div className="flex flex-col">
            <span>Description</span>
            <textarea name="" id="" rows="3" className="p-2" />
          </div>
          <button className="p-2 bg-lime-500">Submit</button>
          <div className="w-full flex justify-around mt-12">
            <button className="bg-indigo-800  px-4  py-2 text-white rounded-full hover:scale-105 transition-all text-lg shadow-lg">
              Send us a Message!
            </button>
            <button
              className="border-indigo-800 border-2 rounded-full px-3 py-2 shadow-lg hover:scale-105 hover:bg-indigo-800 hover:text-white transition-all 
             text-indigo-800 text-lg"
            >
              Get an appointment
            </button>
          </div>
        </div>
        <div className="w-1/2 p-5 ">
          <div className="flex flex-col">
            <span>In case you want to do it by yourself:</span>
            <span>Contact: (305) 639 8282 </span>
            <span>Email: bayamomedicalcenter@hotmail.com</span>
            <span>Fax: (305) 639 8296</span>
            <span>Address: 9002 SW 40st, Miami, Florida, 33165</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.5369170873325!2d-80.3424585496085!3d25.732629799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9c143efe307%3A0x5300a713544743dc!2sBayamo%20Medical%20Center!5e0!3m2!1sen!2sdo!4v1677985443737!5m2!1sen!2sdo"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-2/3 rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

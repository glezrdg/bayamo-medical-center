import { Calendar } from "primereact/calendar";
import { useState } from "react";

const Contact = () => {
  const [date, setDate] = useState([]);
  return (
    <div className="h-[100vh] w-full bg-stone-100 relative flex flex-col justify-center items-center ">
      <div className="bg-stone-100 absolute top-0 -right-20 -left-20 bottom-0 -z-10"></div>
      <h1 className="text-7xl font-semibold ">Get in touch with us.</h1>
      <h3 className="mt-3 text-xl">For us to get in touch with you.</h3>
      <div className="w-1/3 p-16 bg-green-100 ">
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
        <button className="bg-indigo-800  px-5  py-4 text-white rounded-full hover:scale-105 transition-all text-xl shadow-lg">
          Get Appointment
        </button>
        <div className="flex flex-col">
          <span>In case you want to do it by yourself:</span>
          <span>Contact: (305) 639 8282 </span>
          <span>email: bayamomedicalcenter@hotmail.com</span>
          <span>fax 305 639 8296</span>
          <span>Address: 9002 sw 40st Miami Florida 33165</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d459446.7646370322!2d-80.432604!3d25.888302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9c143efe307%3A0x5300a713544743dc!2sBayamo%20Medical%20Center!5e0!3m2!1sen!2sdo!4v1677917071855!5m2!1sen!2sdo"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
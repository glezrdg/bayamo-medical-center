import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createEmailRequest } from "../api/email.controller";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <div
      id="contact_us"
      className="h-[100vh] max-sm:h-[120vh] w-full bg-stone-100 relative flex flex-col justify-evenly  items-center "
    >
      <div className="absolute top-0 bottom-0 -z-10 2xl:-right-[14vw] xl:-right-[5vw] lg:-right-[4vw] md:-right-[5vw] 2xl:-left-[14vw] xl:-left-[5vw] lg:-left-[4vw] md:-left-[5vw]   max-sm:-left-5 max-sm:-right-5 bg-stone-100 lg:flex md:flex max-sm:flex xl:flex "></div>

      <div className="flex flex-col items-center">
        <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl max-sm:text-3xl font-bold ">
          Get in touch with us.
        </h1>
        <h3 className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-slate-700 mt-5">
          For us to get in touch with you.
        </h3>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          date: "",
          description: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Valid email required")
            .required("Required"),
          date: Yup.date("Valid date required")
            .min(new Date(2023, 2, 30), "Date must be an Actual Date")
            .required("Date required"),
          description: Yup.string().required("Required"),
        })}
        onSubmit={async (values, actions) => {
          try {
            // parse the date to a mm/dd/yyyy type
            const date = new Date(values.date);
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const year = date.getFullYear();
            values.date = `${month}/${day}/${year}`;
            console.log(values);
            await createEmailRequest(values);

            toast.success("Your message has been sent!");
            actions.resetForm();
          } catch (error) {
            console.error(error);
            toast.error("Something went wrong, please try again later.");
          }
        }}
      >
        {({ handleSubmit }) => (
          <div className="w-[60vw]  max-sm:w-full md:w-full  flex max-sm:flex-col text-md text-slate-200  bg-gray-800 rounded-md shadow-md  p-5 ">
            <Toaster />
            <Form onSubmit={handleSubmit} className="w-1/2 max-sm:w-full  p-5">
              <div className="flex justify-between">
                <div className="flex flex-col w-1/2 mr-2">
                  <label htmlFor="">First name:</label>
                  <Field
                    maxLength="20"
                    name="firstName"
                    type="text"
                    className="rounded-lg shadow-md bg-stone-100 focus:outline-none focus:ring-2 focus:ring-indigo-800 px-3 py-2 mt-1 text-sm text-slate-700 w-full"
                  />
                  <ErrorMessage
                    component="p"
                    className="text-red-500 font-semibold"
                    name="firstName"
                  />
                </div>
                <div className="flex flex-col w-1/2 ml-2">
                  <label htmlFor="">Last name:</label>
                  <Field
                    maxLength="20"
                    name="lastName"
                    type="text"
                    className="bg-stone-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-800 px-3 py-2 mt-1 text-sm text-slate-700 w-full"
                  />
                  <ErrorMessage
                    component="p"
                    className="text-red-500 font-semibold"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="">Email:</label>
                <Field
                  maxLength="40"
                  type="email"
                  name="email"
                  className="rounded-lg shadow-md bg-stone-100 focus:outline-none focus:ring-2 focus:ring-indigo-800 px-3 py-2 text-sm mt-1 text-slate-700 w-full"
                />
                <ErrorMessage
                  component="p"
                  className="text-red-500 font-semibold"
                  name="email"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="">Select a Date</label>
                <Field
                  type="date"
                  name="date"
                  className="rounded-lg shadow-md bg-stone-100 focus:outline-none focus:ring-2 focus:ring-indigo-800 px-3 py-2 text-sm mt-1 text-slate-700 w-full"
                />
                <ErrorMessage
                  component="p"
                  className="text-red-500 font-semibold"
                  name="date"
                />
              </div>
              <div className="flex flex-col mt-5">
                <span>Description</span>
                <Field
                  maxLength="200"
                  name="description"
                  as="textarea"
                  id=""
                  rows="3"
                  className="rounded-lg shadow-md bg-stone-100 focus:outline-none focus:ring-2 focus:ring-indigo-800 px-3 py-2 text-sm mt-1 text-slate-700 w-full"
                />
                <ErrorMessage
                  component="p"
                  className="text-red-500 font-semibold"
                  name="description"
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-800 mt-5 float-right  px-[1.5vw] py-[1.6vh] 2xl:text-lg xl:text-xl lg:text-md md:text-sm max-sm:text-sm text-white rounded-full hover:scale-105 transition-all  shadow-lg"
              >
                Send us a Message!
              </button>
            </Form>
            <div className="w-1/2  max-sm:w-full p-5 bg-stone-100 rounded-md shadow-sm text-slate-800">
              <div className="flex flex-col">
                <span>In case you want to do it by yourself:</span>
                <span>Contact: (305) 639 8282 </span>
                <span>Email: bayamomedicalcenter@hotmail.com</span>
                <span>Fax: (305) 639 8296</span>
                <span>Address: 9002 SW 40st, Miami, Florida, 33165</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.5369170873325!2d-80.3424585496085!3d25.732629799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9c143efe307%3A0x5300a713544743dc!2sBayamo%20Medical%20Center!5e0!3m2!1sen!2sdo!4v1677985443737!5m2!1sen!2sdo"
                loading="lazy"
                className="w-full h-2/3 rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Contact;

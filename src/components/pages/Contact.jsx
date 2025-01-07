import { useState } from "react";
import emailjs from "emailjs-com"
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const [details,setDetails]=useState({
    name:"",
    email:"",
    message:""
  })
  const handleChange=(e)=>{
   const{name,value}=e.target;
   setDetails((prevData)=>({
    ...prevData,
    [name]:value
   }));
  };
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const emailData={
      ...details
    };
    emailjs
    .send("service_oavt5cg", // Replace with your Service ID
        "template_9ipmmko", // Replace with your Template ID
        emailData,
        "cd0dB-x04ywJFsgiV" // Replace with your Public Key
  ).then(
    () => {
      alert("Email sent!")
      navigate('/');
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );

}
  return (
    <div className="bg-purple-300">
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Let us know if you have any queries.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={details.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" onClick={(e)=>handleSubmit(e)}className="flex mx-auto text-white bg-customPurple border-0 py-2 px-8 focus:outline-none hover:bg-purple-300 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

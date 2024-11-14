import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Contact = () => {
  const [contact, setcontact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userdata, setuserdata] = useState(true);

  const {user} = useAuth();

  if(userdata && user){
    setcontact({
      username: user.username,
      email: user.email,
      message: "",
    })
    setuserdata(false);
  }
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setcontact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if(response.ok){
        setcontact({message: ""})
        const data = await response.json();
        console.log(data);
        toast.success("Message Submit")
      }
    } catch (error) {
      toast.error("message not submit")
      console.log(error);
      
    }
  };
  return (
    <div className="max-w-[1170px] mx-auto px-4">
      <h1 className="text-4xl text-white font-bold mb-5 w-[200px] border-b-4 border-[#2f3dfa]">
        Contact Us
      </h1>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="/images/support.png"
            alt="contact"
            className="max-h-[500px] w-auto"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="text-white my-3" htmlFor="username">
              Username
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="username"
              value={contact.username}
              onChange={handleInput}
              type="text"
            />
            <label className="text-white my-3" htmlFor="email">
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="email"
              value={contact.email}
              onChange={handleInput}
              type="email"
            />

            <label className="text-white my-3" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={contact.message}
              onChange={handleInput}
              name="message"
              cols={30}
              rows={6}
            ></textarea>

            <br />
            <div>
              <button
                className="text-left bg-[#1423f7] hover:bg-[#2f3dfa] p-3 px-6 rounded-lg text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <section className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13996.808680592107!2d77.1160429110352!3d28.713503537788036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01c0cdf1fdb3%3A0x515bb22d4aa34a89!2sCity%20Centre%20Rohini!5e0!3m2!1sen!2sin!4v1728915573941!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
  
  };
          
          
          

export default Contact;

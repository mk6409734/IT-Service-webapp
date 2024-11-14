import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-[1170px] md:mx-auto md:mt-6 mx-3">
      <div className="flex md:flex-row sm:flex-row flex-col justify-between text-white">
        <div>
          <p className="text-xl tracking-wide mb-3">Welcome, {user ? user.username: `to our Website`}</p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold tracking-wide">
            Why Choose Us?
          </h1>
          <p className="max-w-lg p-2 my-3 tracking-wide">
            Expertise: Our team consists of experienced IT professionals who are
            passionate about staying up-to-date with the latest industry trends.
          </p>
          <p className="max-w-lg p-2 my-3 tracking-wide">
            Customization: We understand that every business is unique. Thats
            why we create solutions that are tailored to your specific needs and
            goals.
          </p>
          <p className="max-w-lg p-2 my-3 tracking-wide">
            Customer-Centric Approach: We prioritize your satisfaction and
            provide top-notch support to address your IT concerns.
          </p>
          <p className="max-w-lg p-2 my-3 tracking-wide">
            Affordability: We offer competitive pricing without compromising on
            the quality of our services.
          </p>
          <p className="max-w-lg p-2 my-3 tracking-wide">
            Reliability: Count on us to be there when you need us. We're
            committed to ensuring your IT environment is reliable and available
            24/7.
          </p>
          <div className="mt-5">
            <NavLink to="/contact" className=" bg-[#1423f7] hover:bg-[#2f3dfa] p-3 rounded-lg mx-3">
              Connect Now
            </NavLink>
            <button className="p-3 rounded-lg border border-[#1423f7] mx-3 focus:border-2 focus:outline-none focus:border-indigo-600">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img
            src="./images/about.png"
            alt=""
            className="md:min-h-[500px] md:max-w-[500px] min-h-[400px] max-w-[400px]"
          />
        </div>
      </div>

      {/* Analytics */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 bg-white rounded-lg min-h-36 my-8 items-center text-center">
        <div className="border-r border-black">
          <h1 className="text-4xl font-bold">50+</h1>
          <p className="text-gray-700 tracking-wide mt-2">
            Registered Companies
          </p>
        </div>
        <div className="border-r border-black">
          <h1 className="text-4xl font-bold">100,00+</h1>
          <p className="text-gray-700 tracking-wide mt-2">Happy Clients</p>
        </div>
        <div className="border-r border-black">
          <h1 className="text-4xl font-bold">500+</h1>
          <p className="text-gray-700 tracking-wide mt-2">
            Well known developers
          </p>
        </div>
        <div className="border-r border-black">
          <h1 className="text-4xl font-bold">24/7</h1>
          <p className="text-gray-700 tracking-wide mt-2">Service</p>
        </div>
      </div>
    </div>
  );
};

export default About;

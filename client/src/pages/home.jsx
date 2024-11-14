const Home = () => {
    return (
      <div className="max-w-[1170px] md:mx-auto mx-3">
        <div className="flex md:flex-row flex-col sm:flex-row justify-between">
          <div className="text-white flex flex-col justify-center">
            <p className="p-1 tracking-wide italic">
              We are the World Best IT Company
            </p>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold tracking-wide">
              Welcome to Mohit <br />
              Technical
            </h1>
            <p className="max-w-lg p-2 my-3 tracking-wide">
              {" "}
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Thapa Technical, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="mt-5">
              <button className=" bg-[#1423f7] hover:bg-[#2f3dfa] p-3 rounded-lg mx-3">
                Connect Now
              </button>
              <button className="p-3 rounded-lg border border-[#1423f7] mx-3 focus:border-2 focus:outline-none focus:border-indigo-600">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img
              src="./images/home.png"
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
        {/* 2nd section */}
        <div className="flex md:flex-row sm:flex-row flex-col justify-between my-10">
          <div>
            <img
              src="./images/design.png"
              alt=""
              className="md:min-h-[500px] md:max-w-[500px] min-h-[400px] max-w-[400px]"
            />
          </div>
          <div className="text-white flex flex-col justify-center">
            <p className="p-1 tracking-wide italic">We are here to help you</p>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold tracking-wide ">
              Get Started Today
            </h1>
            <p className="max-w-lg p-2 my-3 tracking-wide">
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="mt-5">
              <button className=" bg-[#1423f7] hover:bg-[#2f3dfa] p-3 rounded-lg mx-3">
                Connect Now
              </button>
              <button className="p-3 rounded-lg border border-[#1423f7] mx-3 focus:border-2 focus:outline-none focus:border-indigo-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
import { useAuth } from "../store/auth";

const Service = () => {
  const {services} = useAuth();
  console.log(services);
  
  return (
    <div className="max-w-[1170px] md:mx-auto mx-3">
      <h1 className="text-4xl text-white font-bold mb-7 w-[150px] border-b-4 border-[#2f3dfa]">
        Services
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {services.map((cur) => {
          const { _id, price, provider, description, service } = cur;
          return (
            <div key={_id} className="border-2 border-gray-400 flex flex-col">
              <div className="">
                <img
                  src="./images/design.png"
                  className=""
                  width={350}
                  alt=""
                />
              </div>
              <div>
                <div className="flex flex-row justify-around text-white p-2">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h1 className="text-white text-2xl my-2 p-2 ml-2 font-semibold">
                  {service}
                </h1>
                <p className="p-2 ml-2 text-gray-300">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-screen mx-auto bg-black text-white ">
      <div className=" px-6 py-12  max-w-7xl mx-auto ">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight  md:mx-3 xl:text-2xl ">
            Join us 
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <Link to="/register">
              {" "}
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span>Sign Up Now</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold  dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                target="_blank"
                href=""
                className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Facebook
              </a>
              <a
                target="_blank"
                href=""
                className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Linked in
              </a>
              <a
                target="_blank"
                href=""
                className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold dark:text-white">Pages</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link to="/listing">
                <a
                  href="#"
                  className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  pet listing
                </a>
              </Link>
              <Link to="/campaign">
                <a
                  href="#"
                  className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Donation Campaign
                </a>
              </Link>
              <Link to='/contract'>
                <a
                  href="/contract"
                  className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Contract
                </a>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold  dark:text-white">
              Services
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href=""
                className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Create Campaign
              </a>
              <a
                href=""
                className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Adopt & share pet
              </a>
              <a
                href=""
                className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Donation platform
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold  dark:text-white">
              Contact Us
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                01845737468
              </a>
              <a
                href="#"
                className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                smshakilahammed205@gmail.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
        <Link to="/">
          <div className=" lg:flex items-center">
            <img className="w-24" src="https://i.ibb.co/HqQF13Z/Pet-Adoption-removebg-preview.png" alt="img" />
            <a className="text-3xl font-extrabold text-primary hidden lg:block p-1 rounded-lg">Pet <span className="text-secondary">Adoption</span></a>
          </div>
        </Link>

          <p className="mt-4 sm:mt-0 dark:text-gray-300">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

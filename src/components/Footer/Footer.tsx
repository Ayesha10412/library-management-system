import { FaFacebook, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import footerImg from "../../assets/footer.jpg";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="w-full mx-auto mt-20 pb-0.5 ">
      <div
        className="w-full p-6 text-white opacity-92 bg-blend-overlay"
        style={{
          backgroundImage: `url(${footerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white/18 backdrop-blur-sm flex flex-col items-center mt-8 rounded-sm py-15">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-1">
                {" "}
                <img className="w-8 h-8 " src={logo} alt="" />
                <h2 className="text-2xl font-bold text-gray-100 ">LibraTech</h2>
              </div>
              <p className="text-gray-200 text-sm text-left font-semibold">
                Empowering readers through smart library management.
              </p>
              <div className="flex flex-row gap-4 items-center text-xl text-shadow-amber-100">
                <FaFacebook />
                <FaTwitter />
                <FaWhatsapp />
                <FaGithub />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className=" ">
                <h3 className="text-xl font-semibold mb-3">Site Info</h3>
                <ul className="list-disc pl-5 list-inside text-sm space-y-1">
                  {" "}
                  <li>
                    {" "}
                    <Link to="allBooks">All Books</Link>
                  </li>
                  <li>
                    <Link to="addBook">Add Books</Link>
                  </li>
                  <li>
                    <Link to="borrow-summary">Books Summary</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold mb-3">Credits</h3>
                <ul className="list-disc pl-5 text-sm list-inside space-y-1">
                  <li>Developed by Ayesha Khan</li>
                  <li>
                    Built with React, TypeScript, Redux Toolkit, and Tailwind
                    CSS
                  </li>
                  <li>
                    Icons provided by{" "}
                    <a
                      href="https://react-icons.github.io/react-icons/"
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React Icons
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16  text-sm text-white font-bold text-center">
            &copy; {new Date().getFullYear()} Minimal Library Management System.
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

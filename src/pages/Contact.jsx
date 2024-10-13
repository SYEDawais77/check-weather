export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-300">
        Contact Me
      </h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <p className="text-xl mb-4">
          I&#39;m Syed Awais Shah, and I&#39;d love to hear from you! Whether
          you have a question about the app, suggestions for improvements, or
          just want to connect, feel free to reach out.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          You can contact me through the following channels:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
          {/* LinkedIn */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <a
              href="https://www.linkedin.com/in/syed-awais-shah-784a8a277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <i className="fab fa-linkedin text-3xl mb-4"></i>
              <p className="font-semibold">Connect on LinkedIn</p>
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <a
              href="mailto:shah.syedawais77@yahoo.com"
              className="text-blue-500 hover:underline"
            >
              <i className="fas fa-envelope text-3xl mb-4"></i>
              <p className="font-semibold">Email Me</p>
              <p>shah.syedawais77@yahoo.com</p>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <a
              href="https://wa.me/923127415089"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <i className="fab fa-whatsapp text-3xl mb-4 text-green-500"></i>
              <p className="font-semibold">WhatsApp Me</p>
              <p>+923127415089</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

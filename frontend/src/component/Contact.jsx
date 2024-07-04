import React from "react";

function Contact() {
  return (
    <>
      <section className="flex flex-col p-14 w-6/12 bg-white rounded-2xl gap-y-4 h-5/6 overflow-y-scroll no-scrollbar">
        <div className="">
          <div className="text-3xl font-semibold">Contact</div>
          <div className=""></div>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className=" bg-orange-100 rounded-2xl p-5 w-fit">
            <div className="">
              {/* <TelephoneOutbound fill="url(#icon-gradiant)" /> */}
            </div>
            <div>
              <div className="">Phone:</div>
              <div className="">+91 7028397160</div>
            </div>
          </div>
          <div className=" bg-blue-100 rounded-2xl p-5 w-fit">
            <div className="">
              {/* <EnvelopeAt fill="url(#icon-gradiant)" /> */}
            </div>
            <div className="">
              <div className="">Email:</div>
              <div className="">bhatubairagi1610@gmail.com</div>
            </div>
          </div>
        </div>

        <div className=" bg-gray-100 rounded-2xl p-5">
          <div className="p-4">
            I am always open to discussing{" "}
            <b>new projects, opportunities in tech world, partnerships</b> and
            more so.
          </div>
          <form action="#">
            <div className="flex flex-row">
              <div className="w-1/2 pr-2 ">
                <label
                  for="firstName"
                  className="block my-2 text-left text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  for="firstName"
                  className="block my-2 text-left text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                className="block my-2 text-left text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="sample@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block my-2 text-left text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm "
                placeholder="Title"
                required
              />
            </div>
            <div>
              <label
                for="message"
                className="block my-2 text-left text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 p-2 float-right text-white rounded-lg border-green-600 bg-green-600 hover:scale-105"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

import React from "react";
import { companies } from "../constants";

const Contact = () => {
  const Input = ({ type, placeholder }) => (
    <input
      type={type}
      placeholder={placeholder}
      aria-labelledby={placeholder}
      className="w-full border-solid border-b-[1px] border-b-secondary bg-transparent pl-2 text-secondary -tracking-[0.115385px]  placeholder:font-[400] placeholder:-tracking-[0.12px] placeholder:text-secondary placeholder:opacity-[0.5] placeholder:mix-blend-normal py-1 outline-none"
    />
  );

  return (
    <section className="w-[87.2%] mx-auto md:w-[89.58%] lg:w-[66%] xl:w-[77.08%]">
      <h1 className="font-[400] text-secondary font-dmSerif text-center">
        Submit a help request
        <br /> and we’ll get in touch shortly.
      </h1>
      <div className="flex flex-col lg:flex-row gap-x-8 mt-10 lg:mt-[43px]">
        {/* form elements */}
        <form action="" className="flex flex-col gap-y-4 items-start ">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="text" placeholder="Company Name" />
          <Input type="text" placeholder="Title" />
          <textarea
            name="message"
            id="message"
            cols="10"
            rows="3"
            placeholder="Message"
            className="w-full resize-none  outline-none border-solid border-b-[1px] border-b-secondary bg-transparent pl-2"
          />
          <span className="flex gap-x-4 items-center justify-center">
            <input className="" type="checkbox" id="update" />
            <label
              htmlFor="update"
              className="text-secondary font-[400] leading-[25px] -tracking-[0.115385px]"
            >
              Stay up-to-date with company announcements and updates to our API
            </label>
          </span>
          <button className="btn btn-normal w-[40%] lg:w-[60%]">Submit</button>
        </form>
        {/* companies */}
        <div className="flex flex-col gap-y-8 mt-[80px] items-center">
          <p className="text-[24px] font-[400] leading-8 -tracking-[.18px] font-dmSerif text-center lg:text-left text-secondary whitespace-nowrap ">
            Join the thousands of
            <br className="md:hidden" /> innovators already
            <br className="hidden md:block" /> building
            <br className="md:hidden" /> with us
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-[44px]">
            {companies.map((company, index) => (
              <img src={company.logo} alt={company.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

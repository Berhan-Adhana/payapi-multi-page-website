import React from "react";
import Button from "../components/Button";
import PhoneMockup from "../assets/home/desktop/illustration-phone-mockup.svg";
import { companies, services } from "../constants";
import CTA from "../components/CTA";
import EasyToImplement from "../assets/home/desktop/illustration-easy-to-implement.svg";
import SimpleUI from "../assets/home/desktop/illustration-simple-ui.svg";
const Home = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="  text-secondary flex flex-col lg:flex-row-reverse justify-center items-center">
        <img
          src={PhoneMockup}
          alt="illustration-phone-mockup"
          className="max-w-full object-contain max-h-[500px]"
        />
        <div className="flex flex-col gap-y-[22px]">
          <h1 className="font-dmSerif space-x-[-0.25px] text-center lg:text-left whitespace-nowrap text-secondary">
            Start building
            <br className="hidden lg:block" /> with our
            <br className="block md:hideen" />
            APIs for
            <br className="hidden lg:block" /> absolutely
            <br className="block md:hidden" /> free.
          </h1>
          <div className="flex flex-col lg:justify-start lg:items-start ">
            <div className="md:bg-white pl-4 py-1 flex flex-col md:flex-row gap-y-4 justify-center md:items-center rounded-[24px] ">
              <input
                type="text"
                placeholder="Enter email address"
                className="bg-white md:bg-transparent md:w-full md:h-full border-none outline-none px-4 py-2 rounded-[24px] placeholder:text-secondary placeholder:opacity-[.5] placeholder:mix-blend-normal"
              />
              <Button primary>Schedule a Demo</Button>
            </div>
            <p className="text-center font-[400] text-lightBlue ">
              Have any questions? <span className="font-bold ">Contact Us</span>
            </p>
          </div>
        </div>
      </section>

      {/* Companies scetion */}
      <div className=" px-6 md:px-[80px] xl:px-[165px]  md:mt-[88px]  lg:mt-[88px] py-[80px]  xl:mt-[100px] lg:gap-x-[50px] xl:gap-x-[131px] my-[80px] bg-mirageBlue flex flex-col lg:flex-row-reverse items-center gap-y-[56px]">
        {/* Companies */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[50px] gap-y-[44px]">
          {companies.map((company, index) => {
            return (
              <img
                src={company.logo}
                alt={company.name}
                className="svg-img text-white"
                key={index}
              />
            );
          })}
        </div>

        {/* Info */}
        <div className="text-center lg:text-left">
          <h1 className="text-white">Who we work with</h1>
          <p className="text-white opacity-[.7] mix-blend-normal py-4">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{" "}
          </p>
          <Button secondary>About Us</Button>
        </div>
      </div>
      {/* Easy to implement */}
      <section className="  my-[80px] md:my-[100px] flex flex-col lg:flex-row lg:gap-x-[50px] xl:gap-x-[125px] items-center gap-y-6">
        <img src={EasyToImplement} alt="easy to implement" />
        <div className="text-center flex flex-col gap-y-6 lg:text-left">
          <h1 className="text-secondary space-x-[-0.276923px] md:space-x-[-0.369231px]">
            Easy to implement
          </h1>
          <p className="leading-7 text-light font-[400] text-center lg:text-left  ">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </section>
      {/* Simple UX */}
      <section className=" my-[80px]  md:my-[100px]  flex flex-col lg:flex-row-reverse lg:gap-x-[50px] xl:gap-x-[95px]  items-center justify-center gap-y-6">
        <img
          src={SimpleUI}
          alt="easy to implement"
          className="mx-auto object-cover object-center max-h-[500px]"
        />
        <div className="text-center flex flex-col gap-y-6 lg:text-left">
          <h1 className="text-secondary space-x-[-0.276923px] md:space-x-[-0.369231px]">
            Simple UI & UX
          </h1>
          <p className="leading-7 text-light font-[400] text-center lg:text-left  ">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </section>
      <section className=" grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-[10px] lg:gap-x-[30px] lg:px-[100px]">
        {services.map((service, index) => (
          <article className="flex flex-col items-center justify-center text-center">
            <img src={service.icon} alt={service.title} className="mb-8" />
            <p className="font-bold leading-[25px] space-x-[-.138px] text-secondary">
              {service.title}
            </p>
            <p className="mt-4 text-lightBlue">{service.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Home;

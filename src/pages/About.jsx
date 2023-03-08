import React from "react";
import ImageDesktop from "../assets/about/desktop/image-team-members.jpg";
import ImageTablet from "../assets/about/tablet/image-team-members.jpg";
import ImageMobile from "../assets/about/mobile/image-team-members.jpg";
import { stats } from "../constants";
const About = () => {
  const AboutComponent = ({ header, description }) => (
    <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-[10px] items-center md:items-start lg:gap-x-[30px]">
      <h2 className="text-secondary whitespace-nowrap min-w-[150px]">
        {header}
      </h2>
      <p className="text-lightBlue text-center  md:text-left">{description}</p>
    </div>
  );
  return (
    <main>
      {/* // Landing page */}
      <section className="mt-12  md:mt-[75px]   xl:mt-[82px]   lg:mt-[52px]  flex flex-col gap-y-10 md:gap-y-[54px]">
        <h1 className="text-secondary space-x-[-0.25px] md:space-x-[-0.37px] lg:space-x-[-0.43px] text-center  lg:text-left  ">
          We empower
          <br className="block md:hidden" /> innovators
          <br /> by delivering access to
          <br className="block md:hidden" /> the
          <br className="hidden md:block" /> financial system
        </h1>
        <div className="flex flex-col gap-y-12 ">
          <AboutComponent
            header="Our Vision"
            description=" Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial services
          through technology."
          />
          <AboutComponent
            header="Our Business"
            description="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers."
          />
        </div>
      </section>
      <div className="mt-[76px]  md:mt-[92px]  lg:mt-[100px]  flex w-screen">
        <picture className="max-w-full w-full">
          <source
            media="(min-width: 768px)"
            srcset={ImageTablet}
            className="w-full object-cover p-0 m-0"
          />
          <source
            media="(min-width: 1024px)"
            srcset={ImageDesktop}
            className="w-full object-cover p-0 m-0"
          />
          <img
            src={ImageMobile}
            alt="team members"
            className="w-full object-cover p-0 m-0"
          />
        </picture>
      </div>
      {/* Stats section */}
      <section className="mt-12 md:mt-[64px] xl:mt-[72px] ">
        <hr className="bg-secondary h-[1px] " />
        <div className="flex flex-col md:flex-row md:justify-between md:gap-x-[10px] gap-y-8 justify-center items-center mt-4 ">
          {stats.map((stat, index) => (
            <article key={index} className="">
              <p className="text-lightBlue font-[400] text-[16px] leading-7  text-center">
                {stat.title}
              </p>
              <p className="text-primary font-dmSerif space-x-[-.43px] text-[56px] font-[400] leading-[72px] text-center">
                {stat.value}
              </p>
            </article>
          ))}
        </div>
        <hr className="bg-secondary h-[1px] " />
      </section>
      <section className="pt-12   md:mt-[75px]   xl:mt-[82px]  lg:mt-[52px]  flex flex-col gap-y-10 md:gap-y-[54px]">
        <div className="flex flex-col gap-y-12 ">
          <AboutComponent
            header="The Culture"
            description="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
          />
          <AboutComponent
            header="The People"
            description="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
          />
        </div>
      </section>
    </main>
  );
};

export default About;

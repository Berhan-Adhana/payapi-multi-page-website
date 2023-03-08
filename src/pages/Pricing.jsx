import React from "react";
import Button from "../components/Button";
import { plans } from "../constants";
import IconCheck from "../assets/shared/desktop/icon-check.svg";
import Line from "../components/Line";

const Pricing = () => (
  <main>
    <section className=" w-[87.2%] mx-auto md:w-[89.58%] xl:w-[77.08%] flex flex-col  ">
      <h1 className="text-secondary mt-12 md:mt-[75px] lg:mt-[82px] text-center font-dmSerif -tracking-[0.25px]">
        Pricing
      </h1>
      <div className="flex flex-col gap-y-12 md:flex-row gap-x-[10px] lg:gap-x-[30px] mt-12 md:mt-[69px] lg:mt-[72px]">
        {plans.map((plan, index) => (
          <article
            key={index}
            className=" flex flex-col justify-center items-center gap-y-6 lg:items-start"
          >
            <h2 className="text-primary font-dmSerif font-[400] ">
              {plan.planType}
            </h2>
            <p className="text-center lg:text-left">{plan.desc}</p>
            <p className="text-[56px] leading-[72px] -tracking-[.43px] font-dmSerif md:text-[48px] md:-tracking-[.37px] xl:text-[56px] xl:-tracking-[.43px] text-secondary">
              {plan.price}
            </p>
            <Line />

            <ul className=" flex flex-col gap-y-6 ">
              <li className="flex flex-col justify-center items-center">
                {plan.features.map((feature, index) => (
                  <span
                    role="listitem"
                    className="flex justify-start text-center items-center min-w-[150px] gap-x-4"
                  >
                    <img
                      className={`${
                        !feature.isActive ? "opacity-0" : "opacity-1"
                      }`}
                      src={IconCheck}
                      alt="checked"
                    />
                    <p
                      className={`${
                        feature.isActive ? "opacity-1" : "opacity-[0.5]"
                      } text-secondary`}
                    >
                      {feature.feature}
                    </p>
                  </span>
                ))}
              </li>
              <Line />
              <Button normal>{plan.btn}</Button>
            </ul>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default Pricing;

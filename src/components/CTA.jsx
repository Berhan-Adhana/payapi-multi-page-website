import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between  my-[80px] lg:my-[100px] lg:gap-x-[80px] xl:gap-x-[126px] ">
      <h1 className="font-dmSerif space-x-[-0.25px] text-center lg:text-left whitespace-nowrap mb-8 lg:mb-0 text-secondary">
        Ready to start?
      </h1>

      <div className="md:bg-white pl-4  flex flex-col md:flex-row gap-y-4 justify-between md:items-center rounded-[24px] ">
        <input
          type="text"
          placeholder="Enter email address"
          className="bg-white md:bg-transparent text-secondary -tracking-[0.115385px] md:h-full border-none outline-none px-4 py-2 rounded-[24px] placeholder:text-secondary placeholder:opacity-[.5] placeholder:mix-blend-normal"
        />
        <Button primary>Schedule a Demo</Button>
      </div>
    </section>
  );
};

export default CTA;

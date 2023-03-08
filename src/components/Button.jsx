import React from "react";

const Button = ({ primary, secondary, normal,children, disabled=false }) => {
  let dynamicClassName = "";
  if (primary) dynamicClassName = "bg-primary text-white hover:bg-accent";
  if (secondary)
    dynamicClassName =
      "bg-mirageBlue text-white border-solid border-[1px] border-white hover:bg-white hover:text-mirageBlue";
  if (normal)
    dynamicClassName =
      "bg-transparent text-secondary hover:bg-secondary hover:text-white border-solid border-secondary border-[2px]";
  return (
    <button
      disabled={disabled}
      className={`${dynamicClassName} disabled:opacity-[0.5]  py-2 px-4 font-[700]  leading-[17.63px] space-x-[-0.115385px] shadow-buttonShadow rounded-[24px] transition-colors duration-150`}
    >
      {children}
    </button>
  );
};

export default Button;

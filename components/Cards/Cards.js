import React from "react";

export const CardFilledWithImage = ({ clickHandler, src, title, subTitle }) => (
  <React.Fragment>
    <div
      onClick={clickHandler}
      style={{ backgroundImage: `url('${src}')`, backgroundSize: "cover" }}
      className="cursor-pointer rounded-lg w-full h-56 m-2 bg-img"
    >
      <p className="pt-32 pb-0 p-6 text-xl text-white">{title}</p>
      <p className="pl-6 pt-0 text-xl text-white">{subTitle}</p>
    </div>
  </React.Fragment>
);

import React from "react";
import Submit from "./Submit";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="text-center">
          <div>
            <h1 className="text-3xl font-bold">Introducing</h1>
            <h1 className="text-7xl font-black">MelodyMatch</h1>
            <p className="py-6">
              Are you a musically match with your crush or significant other?
              Check now with MelodyMatch.
            </p>

              <Submit />
        </div>
        </div>
        </div>
        </>
  );
};

export default Hero;

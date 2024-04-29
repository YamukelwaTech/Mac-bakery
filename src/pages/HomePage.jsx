import React from "react";
import macD from "../assets/McDonalds.png";
import clown from "../assets/clown.png";
import burger from "../assets/Hamburger Veggie Burger.png";
import family from "../assets/family.png";
import hand from "../assets/Okay sign.png";

const HomePage = () => {
  return (
    <div className="pb-16">
      <div className="dark:bg-red-600">
        <div className="container mx-auto py-9 md:py-12 lg:py-24">
          <div className="relative mx-4">
            <img
              src={macD}
              alt="A work table with house plants"
              className="w-full h-full hidden lg:block"
            />
            <img
              src={macD}
              alt="A work table with house plants"
              className="hidden sm:block lg:hidden w-full h-full"
            />
            <img
              src={macD}
              alt="A work table with house plants"
              className="sm:hidden w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-2">
              <p className="text-xl leading-5 text-gray-800">
                Yamu's Bakery Presents
              </p>
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                McDonalds Splash!
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src={clown}
                  alt=""
                />
              </div>
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={burger}
                    alt=""
                  />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={family}
                    alt=""
                  />
                </div>
              </div>
              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src={hand}
                  alt=""
                />
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src={burger}
                  alt=""
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src={burger}
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
              </div>
            </div>
            <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src={burger}
                alt=""
              />
              <img
                className="object-center object-cover h-full w-full sm:hidden"
                src={family}
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

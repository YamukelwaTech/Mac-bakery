import React from "react";

const HomePage = () => {
  return (
    <div className="pb-16">
      <div className="dark:bg-red-600">
        <div className="container mx-auto py-9 md:py-12 lg:py-24">
          <div className="relative mx-4">
            <img
              src="https://www.kingarthurbaking.com/sites/default/files/styles/card_wide_2x/public/2024-04/Easy-Everyday-Olive-Oil-Cake_0164.jpg?itok=_2tNRIEp"
              alt=""
              className="w-full h-full hidden lg:block"
            />
            <img
              src="https://www.kingarthurbaking.com/sites/default/files/styles/card_wide_2x/public/2024-04/Easy-Everyday-Olive-Oil-Cake_0164.jpg?itok=_2tNRIEp"
              alt=""
              className="hidden sm:block lg:hidden w-full h-full"
            />
            <img
              src="https://www.kingarthurbaking.com/sites/default/files/styles/card_wide_2x/public/2024-04/Easy-Everyday-Olive-Oil-Cake_0164.jpg?itok=_2tNRIEp"
              alt=""
              className="sm:hidden w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-2">
              <p className="text-xl leading-5 text-white">
                Yamu's Bakery Presents
              </p>
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-white">
                McDonalds Splash!
              </h1>
            </div>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">
                    Welcome!
                  </h1>
                  <p className="font-normal text-base leading-6 text-white ">
                    Welcome to our bakery, where every customer is treated like
                    family, whether you're a first-time visitor or a beloved
                    regular! Just like in a warm family gathering, we open our
                    doors with arms wide open, ready to share in the joy of
                    delicious treats and heartfelt connections. For our new
                    friends, we're thrilled to welcome you into our bakery
                    family, where you'll discover a world of delectable delights
                    made with love and care. And to our cherished returning
                    customers, welcome back! Your loyalty means the world to us,
                    and we're grateful for the opportunity to continue serving
                    you with the same warmth and hospitality that you've come to
                    expect. Here, amidst the aroma of freshly baked bread and
                    the laughter of friends, we invite you to make yourself at
                    home, indulge in our homemade treats, and create beautiful
                    memories that will last a lifetime. Thank you for being a
                    part of our bakery family—we're so glad you're here!
                  </p>
                </div>
                <div className="w-full lg:w-6/12 ">
                  <img
                    className="w-full h-full"
                    src="https://www.kingarthurbaking.com/sites/default/files/styles/max_2x_4000px/public/2019-06/baking-school-hero%402x.jpg?itok=vKO_nLzI"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

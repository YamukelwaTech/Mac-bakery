import React from "react";

const AboutPage = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="lg:w-10/12 w-full">
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-white lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          Welcome to our McDonalds baking haven, where we're dedicated to making
          delightful designs accessible to all!
        </h2>
        <p className="font-normal text-base leading-6 text-white mt-6">
          Our mission is rooted in the undeniable fact that the layout and
          presentation of content can captivate a reader's attention. We are
          committed to ensuring that our delightful creations, from sweets to
          cakes and beyond, are accessible to all. Just as we are dedicated to
          crafting delicious treats, we strive to ensure that everyone can enjoy
          the full sweetness of our offerings.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full"
          src="https://www.kingarthurbaking.com/sites/default/files/styles/card_2_across_large_2x/public/2019-06/camelot-campus.jpg?itok=xAY-YbRW"
          alt=""
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://www.kingarthurbaking.com/sites/default/files/styles/card_2_across_large_2x/public/2019-06/camelot-campus.jpg?itok=xAY-YbRW"
          alt=""
        />
        <img
          className="sm:hidden block w-full"
          src="https://www.kingarthurbaking.com/sites/default/files/styles/card_2_across_large_2x/public/2019-06/camelot-campus.jpg?itok=xAY-YbRW"
          alt=""
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7  text-white">
            Yamu's Bakery Origin
          </h2>
          <p className="font-normal text-base leading-6  text-white mt-4">
            In the heart of a bustling town, Yamu, a passionate baker,
            envisioned a bakery that would captivate all who entered.
            Understanding the importance of presentation, Yamu meticulously
            crafted every detail of Yamu's Bakery to delight the senses. Word
            quickly spread about the enchanting treats and inviting atmosphere,
            making Yamu's Bakery a beloved destination. Yamu's commitment to
            making great design accessible to all ensured that every customer
            experienced a touch of magic with each visit.
          </p>
          <p className="font-normal text-base leading-6  text-white mt-6">
            As the aroma of freshly baked pastries wafted through the air and
            the warm glow of Yamu's Bakery welcomed customers day after day, it
            became more than just a place to satisfy cravings—it became a
            cherished community hub, where friends gathered, memories were made,
            and dreams took flight. And in the heart of Yamu, there was a deep
            sense of fulfillment, knowing that his passion had brought joy to so
            many. Yamu's Bakery stood as a testament to the power of creativity,
            dedication, and the simple joy of sharing something sweet with the
            world.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img
            className="lg:block hidden w-full"
            src="https://www.kingarthurbaking.com/sites/default/files/styles/kaf_thumbnail_large_2x_880x596_/public/2021-01/Kathryn%26Carla_9.jpg?itok=RvrxBXzP"
            alt=""
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src="https://www.kingarthurbaking.com/sites/default/files/styles/kaf_thumbnail_large_2x_880x596_/public/2021-01/Kathryn%26Carla_9.jpg?itok=RvrxBXzP"
            alt=""
          />
          <img
            className="sm:hidden block w-full"
            src="https://www.kingarthurbaking.com/sites/default/files/styles/kaf_thumbnail_large_2x_880x596_/public/2021-01/Kathryn%26Carla_9.jpg?itok=RvrxBXzP"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto container py-20 px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="rounded">
            <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                  Quality
                </h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">
                  Ensuring consistently high-quality ingredients and
                  craftsmanship in every baked good to delight customers.
                </p>
              </div>
            </div>
            <div className="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 font-bold mb-3">Freshness</h4>
                <p className="text-gray-800 text-sm">
                  Offering freshly baked items daily to provide customers with
                  the best tasting experience.
                </p>
              </div>
            </div>
            <div className="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 font-bold mb-3">Variety</h4>
                <p className="text-gray-800 text-sm">
                  Providing a diverse selection of products to cater to
                  different tastes and preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded">
            <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                  Hygiene
                </h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">
                  Maintaining impeccable cleanliness and hygiene standards in
                  all aspects of bakery operations.
                </p>
              </div>
            </div>
            <div className="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 font-bold mb-3">Transparency</h4>
                <p className="text-gray-800 text-sm">
                  Clearly communicating ingredients and nutritional information
                  to customers for informed choices.
                </p>
              </div>
            </div>
            <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                  Sustainability
                </h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">
                  Committing to environmentally friendly practices, such as
                  reducing waste and sourcing local ingredients when possible.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded">
            <div className="w-full h-64 flex flex-col justify-between items-start dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                  Authenticity
                </h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">
                  Staying true to traditional recipes and techniques to preserve
                  the authenticity of baked goods.
                </p>
              </div>
            </div>
            <div className="w-full h-64 flex flex-col justify-between bg-gray-300 dark:bg-gray-700 dark:border-gray-700 rounded-lg border border-gray-300 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                  Innovation
                </h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">
                  Continuously experimenting with new flavors and creations to
                  keep the menu fresh and exciting.
                </p>
              </div>
            </div>
            <div className="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 font-bold mb-3">
                  Customer Service
                </h4>
                <p className="text-gray-800 text-sm">
                  Offering friendly and attentive service to create a welcoming
                  and satisfying experience for every customer.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded">
          <div className="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 font-bold mb-3">
                  Community Engagement
                </h4>
                <p className="text-gray-800 text-sm">
                  Engaging with the local community through events,
                  partnerships, and outreach initiatives.
                </p>
              </div>
            </div>
            <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                  Fair Pricing
                </h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">
                  Pricing products fairly to ensure accessibility without
                  compromising on quality.
                </p>
              </div>
            </div>
            <div className="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 font-bold mb-3">Passion</h4>
                <p className="text-gray-800 text-sm">
                  Infusing every aspect of the bakery with a genuine passion for
                  baking and a love for creating delicious treats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

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
          src="https://www.mcdonalds.co.za/media/blocks/Caramel-Chai-Web-banner.webp"
          alt="Group of people Chilling"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://www.mcdonalds.co.za/media/blocks/Caramel-Chai-Web-banner.webp"
          alt="Group of people Chilling"
        />
        <img
          className="sm:hidden block w-full"
          src="https://www.mcdonalds.co.za/media/blocks/Caramel-Chai-Web-banner.webp"
          alt="Group of people Chilling"
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
            src="https://www.knowourfood.co.za/wp-content/uploads/2023/07/LETTUCE_1.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src="https://www.knowourfood.co.za/wp-content/uploads/2023/07/LETTUCE_1.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://www.knowourfood.co.za/wp-content/uploads/2023/07/LETTUCE_1.png"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

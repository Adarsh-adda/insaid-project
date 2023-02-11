import React from "react";
import { HomeSlider } from "../components/HomeSlider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import content1 from "./../assets/content1.png";
import content2 from "./../assets/content2.png";

const homevariant = {
  hidden: { x: 150 },
  imagehidden: { x: -150 },
  hover: { scale: 1.1, backgroundColor: "teal", transition: { duration: 0.4 } },
  inview: {
    x: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 200 },
  },
  imageview: {
    x: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 200 },
  },
};
const HomeScreen = () => {
  return (
    <div className="bg-primary">
      <HomeSlider />
      <div className="flex sm:flex-row flex-col items-center justify-around h-[60vh] sm:px-20 px-6 space-x-5">
        <motion.div
          className="text-4xl text-white font-bold "
          variants={homevariant}
          initial="hidden"
          whileInView="inview"
        >
          Get the Best Products <br />
          <span className="text-secondary">Reasonable Price</span> <br />
          <motion.div className="pt-8">
            <Link
              to={"contact"}
              className="text-white text-lg flex items-center"
            >
              <motion.button
                className="border-2 border-teal-600 bg-black rounded-3xl px-4 py-1"
                variants={homevariant}
                initial="hidden"
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                whileInView="inview"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="sm:h-[300px] h-[200px] sm:w-[550px] w-[300px] "
          variants={homevariant}
          initial="imagehidden"
          whileInView="imageview"
        >
          <img
            src={content1}
            alt=""
            loading="lazy"
            className="h-full w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeScreen;

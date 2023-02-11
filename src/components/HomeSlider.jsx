import React, { Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import banner1 from "./../assets/banner1.png";
import banner2 from "./../assets/banner2.png";
import banner3 from "./../assets/banner3.png";

export const HomeSlider = () => {
  let items = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
  ];

  return (
    <>
      <Carousel
        stopAutoPlayOnHover={true}
        indicators={false}
        navButtonsAlwaysVisible={true}
        timeout={5000}
      >
        {items.map((item, i) => (
          <Fragment key={i}>
            <Banner item={item} />
          </Fragment>
        ))}
      </Carousel>
    </>
  );
};

const Banner = (props) => {
  return (
    <Fragment>
      <Paper>
        <div className="h-[30vh] sm:h-[60vh] md:h-[75vh] xl:h-[90vh] w-full">
          <img
            src={props.item.image}
            alt={"Please wait..."}
            draggable={false}
            className="w-full h-full"
          />
        </div>
      </Paper>
    </Fragment>
  );
};

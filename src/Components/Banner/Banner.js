import { Container, Typography } from "@material-ui/core";
import React from "react";
import "./Banner.css";
import Carousel from "./Carousel/Carousel";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagLine">
          <Typography
            style={{
              fontWeight: "bold",
              marginbottom: 15,
              fontFamily: "Montserrat",
            }}
            variant="h2"
          >
            Crypto Tracker
          </Typography>
          <Typography
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
            variant="subtitle2"
          >
            Get All the info regarding your favorite crypto currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;

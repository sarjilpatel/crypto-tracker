import React from "react";
import { Typography } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from "../../../Components/Banner/Carousel/Carousel";
import { CryptoState } from "../../../CryptoContext";
import "./SideBar.css";

const SideBar = ({ coin }) => {
  const { currency, symbol } = CryptoState();
  return (
    <div className="sidebar">
      <img
        src={coin?.image.large}
        alt={coin?.name}
        height="200"
        style={{ marginBottom: 20 }}
      />
      <Typography variant="h3" className="heading">
        {coin?.name}
      </Typography>

      <Typography variant="subtitle1" className="description">
        {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
      </Typography>

      <div className="marketData">
        <span style={{ display: "flex" }}>
          <Typography variant="h5" className="heading">
            Rank :
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
            {coin?.market_cap_rank}
          </Typography>
        </span>

        <span style={{ display: "flex" }}>
          <Typography variant="h5" className="heading">
            Current Price :
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.current_price[currency.toLowerCase()]
            )}
          </Typography>
        </span>

        <span style={{ display: "flex" }}>
          <Typography variant="h5" className="heading">
            Market Cap :
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)
            )}
          </Typography>
        </span>
      </div>
    </div>
  );
};

export default SideBar;

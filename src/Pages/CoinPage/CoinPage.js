import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import axios from "axios";
import CoinInfo from "../../Components/CoinInfo/CoinInfo";
import "./CoinPage.css";
import { LinearProgress } from "@material-ui/core";
import SideBar from "./SideBar/SideBar";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, coin]);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="container">
      <SideBar coin={coin} />
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;

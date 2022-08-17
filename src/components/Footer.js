import React from "react";
import Toggle from "./Toggle";

const Footer = () => {
  return (
    <div className="flex items-center justify-between rounded-div mt-8 pt-8 text-primary">
      <Toggle />

      <p className="text-center py-4">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;

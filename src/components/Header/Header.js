import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app-header-container">
      <div className="app-header-elements">
        <div className="left">
          <div> logo</div>
        </div>
        <div className="right">
          <div> profile </div>
          <div> videos </div>
          <div> meet </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

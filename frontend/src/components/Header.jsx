import React from "react";
import profileImage from "../assets/profile.png";

const Header = () => {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    padding: 0,
    gap: "10px",
    position: "absolute",
    width: "calc(100% - 260px)",
    height: "80px",
    top: 0,
    left: "270px",
    background: "#FFFFFF",
    boxShadow: "0px 1px 0px #E2E8F0",
    zIndex: 0,
    justifyContent: "flex-end",
  };

  const headerContentStyle = {
    display: "flex",
    alignItems: "center",
    width: "auto",
    height: "100%",
    padding: "0 20px",
    boxSizing: "border-box",
  };

  const headerTitleStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
    textAlign: "right",
  };

  const titleStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#212B36",
    margin: 0,
  };

  const subtitleStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#637381",
    margin: 0,
  };

  const profileContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const profileStyle = {
    width: "46px",
    height: "46px",
    backgroundImage: `url(${profileImage})`,
    backgroundSize: "cover",
    marginRight: "15px",
  };

  const dropdownStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <div style={headerTitleStyle}>
          <h1 style={titleStyle}>Thomas Anree</h1>
          <p style={subtitleStyle}>Admin</p>
        </div>
        <div style={profileContainerStyle}>
          <div style={profileStyle}></div>
          <div style={dropdownStyle}>
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9L17 1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

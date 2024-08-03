import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  const sidebarStyle = {
    width: "230px",
    height: "100vh",
    background: "#1C1C1C",
    color: "white",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
  };

  const logoStyle = {
    width: "178px",
    height: "64px",
    marginRight: "10px",
  };

  const menuTitleStyle = {
    color: "#9E9E9E",
    fontSize: "14px",
    marginBottom: "20px",
  };

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
  };

  const activeItemStyle = {
    ...menuItemStyle,
    backgroundColor: "#A51535",
  };

  const menuTextStyle = {
    marginLeft: "10px",
    fontSize: "16px",
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Sagara Tech Logo" style={logoStyle} />
      </div>
      <div style={menuTitleStyle}>MENU</div>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => (isActive ? activeItemStyle : menuItemStyle)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 3h7v7H3V3zm0 9h7v7H3v-7zm9-9h7v7h-7V3zm0 9h7v7h-7v-7z" />
        </svg>
        <span style={menuTextStyle}>Dashboard</span>
      </NavLink>
      <NavLink
        to="/students"
        style={({ isActive }) => (isActive ? activeItemStyle : menuItemStyle)}
      >
        <svg
          width="20"
          height="13"
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0002 0.862549L9.80457 0.921924L1.99207 3.53942L0.21582 4.12505L1.2502 4.4563V9.92505C0.87707 10.1419 0.625195 10.5375 0.625195 11C0.625195 11.3316 0.756891 11.6495 0.991312 11.8839C1.22573 12.1184 1.54367 12.25 1.8752 12.25C2.20672 12.25 2.52466 12.1184 2.75908 11.8839C2.9935 11.6495 3.1252 11.3316 3.1252 11C3.1252 10.5375 2.87332 10.1419 2.5002 9.92505V4.88755L3.7502 5.29692V8.50005C3.7502 9.01255 4.0627 9.43755 4.43395 9.7313C4.8052 10.0232 5.26645 10.2294 5.8202 10.4144C6.92895 10.7832 8.3902 11 10.0002 11C11.6102 11 13.0714 10.7838 14.1802 10.4138C14.7339 10.2294 15.1952 10.0232 15.5664 9.73067C15.9377 9.43755 16.2502 9.01255 16.2502 8.50005V5.29692L18.0083 4.71067L19.7846 4.12505L18.0077 3.5388L10.1952 0.921924L10.0002 0.862549ZM10.0002 2.17192L15.8596 4.12505L10.0002 6.07817L4.14082 4.12505L10.0002 2.17192ZM5.0002 5.72692L9.80519 7.32817L10.0002 7.38692L10.1958 7.32755L15.0002 5.7263V8.50005C15.0002 8.5063 15.0027 8.5788 14.8046 8.73442C14.6071 8.89067 14.2527 9.08755 13.7889 9.24255C12.8627 9.55067 11.4971 9.75005 10.0002 9.75005C8.50332 9.75005 7.1377 9.5513 6.21082 9.24192C5.74832 9.08755 5.39332 8.89005 5.19582 8.73442C4.99707 8.57817 5.0002 8.5063 5.0002 8.50005V5.72692Z"
            fill="#9E9E9E"
          />
        </svg>
        <span style={menuTextStyle}>Students</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;

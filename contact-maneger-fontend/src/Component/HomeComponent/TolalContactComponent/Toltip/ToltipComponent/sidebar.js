const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div style={{ width: "100%" }}>
          <p
            className="dashbord"
            style={{ width: "40%", margin: "auto", marginTop: "20px" }}
          >
            Logo
          </p>
        </div>
        <div className="dashbordVecotrcontainer" style={{ margin: "20px" }}>
          <img
            src="vector.png"
            style={{ marginLeft: "10px", width: "16px", marginRight: "0" }}
          />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            Dashboard
          </p>
        </div>
        <div>
          <div
            style={{
              margin: "0",
              marginLeft: "20px",
              width: "80%",
              border: "1px",
              height: "fit-content",
              background: "#2DA5FC",
              borderRadius: "6px",
              display: "grid",
              gridTemplateColumns: "5% 90% 5%",
            }}
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "10px" }}
            >
              <path
                d="M18 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18 18H2V6H18V18ZM2 0H18V2H2V0ZM2 22H18V24H2V22ZM10 12C11.38 12 12.5 10.88 12.5 9.5C12.5 8.12 11.38 7 10 7C8.62 7 7.5 8.12 7.5 9.5C7.5 10.88 8.62 12 10 12ZM10 8.5C10.55 8.5 11 8.95 11 9.5C11 10.05 10.55 10.5 10 10.5C9.45 10.5 9 10.05 9 9.5C9 8.95 9.45 8.5 10 8.5ZM15 15.99C15 13.9 11.69 13 10 13C8.31 13 5 13.9 5 15.99V17H15V15.99ZM6.81 15.5C7.42 14.98 8.84 14.5 10 14.5C11.17 14.5 12.59 14.98 13.2 15.5H6.81Z"
                fill="white"
              />
            </svg>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                display: "block",
                gridTemplateColumns: "none",
                margin: "15px 0 15px 15px",
                color: "#FFFFFF",
              }}
            >
              Total Contacts
            </p>
            <svg
              width="2"
              height="35"
              viewBox="0 0 2 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "relative",
                right: "0",
                top: "50%",
                transform: "TranslateY(-50%)",
              }}
            >
              <path
                d="M1 1L0.999998 33"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="logout-button">
          <img
            className="logout-icon"
            src="/logout.png"
            alt="logout-icon"
            style={{ height: "20px" }}
          ></img>{" "}
          Logout
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import { Avatar, debounce } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import { useState, useContext, useEffect } from "react";
import { userData } from "../../../../CommonUtils/Context";
import "reactjs-popup/dist/index.css";
import { AutoComplete } from "antd";

const Navbar = () => {
  const { usercontacts, setSearchOutputSelected, outputArray, setOutputArray } =
    useContext(userData);
  const [searchoutput, setSearchOutput] = useState([]);
  const [selectedOuput, setSelectedOuput] = useState("");
  console.log(searchoutput);

  const debounce = (fun) => {
    let timer;
    return (...arg) => {
      let context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(context, arg);
      }, 500);
    };
  };

  const filter = (e) => {
    if (!e) {
      setSearchOutput([]);
    }
    

    const output = usercontacts.filter((element) => {
      return element.Email.includes(e);
    });

    setOutputArray(output);

    outputArray.forEach((element) => {
      setSearchOutput([
        ...searchoutput,
        { lable: element.Email, value: element.Email },
      ]);
    });
  };

  useEffect(() => {
    if (selectedOuput) {
      console.log(selectedOuput);
      const output = usercontacts.filter((element) => {
        if (element.Email === selectedOuput) return element;
      });
      setOutputArray(output);
    }
  }, [selectedOuput]);

  const search = debounce(filter);

  let arr = [
    { lable: "abc", value: "abc" },
    { lable: "efd", value: "efd" },
  ];
  return (
    <>
      <nav
        class="navbar navbar-light bg-light justify-content-between"
        className="navbar"
      >
        <p style={{ fontSize: "25px", marginLeft: "10px", width: "100%" }}>
          Total Contact
        </p>
        <AutoComplete
          style={{ width: "300px", marginLeft: "auto" }}
          placeholder="search"
          options={searchoutput}
          filterOption={true}
          onSelect={(value) => {
            setSelectedOuput(value);
          }}
          onSearch={(value) => {
            search(value);
          }}
        />
        <div
          Classname="UserProfile"
          style={{ display: "grid", gridTemplateColumns: "auto auto" }}
        >
          <Avatar style={{ marginLeft: "auto" }} />
          <div
            style={{ marginRight: "10px", marginLeft: "5px", marginTop: "5px" }}
          >
            <p style={{ fontSize: "10px", margin: "0px" }}>Ram Dravin</p>
            <p style={{ fontSize: "10px", margin: "0px", Opacity: "70%" }}>
              Super Admin
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

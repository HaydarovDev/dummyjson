import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
// import AuthContext from "../AuthContext";
import { api } from "../../api";

const Dashboard = () => {
  //   const { data } = useContext(AuthContext);
  // console.log(data);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const [getMe, setGetMe] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await api.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setGetMe(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    const loginIn = localStorage.getItem("login");

    if (loginIn === "true") {
      setShowMessage(true);
      const timeOut = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      localStorage.removeItem("login");
      return () => clearTimeout(timeOut);
    }
  }, [navigate]);

  return (
    <>
      <Header
        getMe={getMe}
        children={
          <div
            className={`transition-all duration-100 ${
              showMessage ? "top-2" : ""
            } text-[lime] shadow-sm bg-white absolute -top-13 p-2 rounded`}
          >
            <h1>Login Successfuly :)</h1>
          </div>
        }
      />
    </>
  );
};

export default Dashboard;

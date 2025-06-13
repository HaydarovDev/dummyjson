import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import AuthContext from "../AuthContext";

const Dashboard = () => {
  //   const { data } = useContext(AuthContext);
  // console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    const data = JSON.parse(localStorage.getItem("data") || []);
    console.log(data);
  }, [navigate]);

  return (
    <>
      <Header />
    </>
  );
};

export default Dashboard;

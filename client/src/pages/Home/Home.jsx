import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-yellow-500">hi is tailwind is working</div>
      <button className="btn btn-neutral" onClick={() => navigate("/login")}>
        login
      </button>
    </div>
  );
};

export default Home;

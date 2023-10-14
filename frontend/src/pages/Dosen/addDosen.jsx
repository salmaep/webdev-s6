import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const AddDosen = () => {
  let navigate = useNavigate();
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("Dosen");

  const submitAddDosen = () => {
    fetch("http://localhost:5000/account", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nip: nip,
        password: password,
        role: role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Registrasi berhasil") {
          console.log("Dosen added successfully!");
          navigate("/");
        } else {
          console.error(data.error);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="h-screen w-screen">
      <div className="h-full flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col items-start">
              <label htmlFor="nip">NIP</label>
              <input
                id="nip"
                type="text"
                placeholder="Insert NIP"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setNip(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Insert Password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="card-actions justify-between mt-2">
              <button type="button" onClick={() => navigate("/")} className="btn btn-sm">
                <BiArrowBack /> Back
              </button>
              <button type="button" onClick={submitAddDosen} className="btn btn-sm btn-primary">
                Add Dosen
              </button>
            </div>
          </div>
          <div className="card-footer">
            <p className="text-sm">
              Already have an account? <Link to={"/login"}> This way please </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDosen;

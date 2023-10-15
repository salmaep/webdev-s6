// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Topbar from "../../components/topbar";
import { useNavigate } from "react-router-dom";

const Dosen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getListDosen();
  }, []);

  const getListDosen = () => {
    fetch("http://localhost:5000/lecturer", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="h-screen w-screen">
      <Topbar />
      <div className="mt-20">
        <div className="flex justify-center items-center">
          <h1>Staf Dosen</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-3 ml-3">
          {data.map((item) => (
            <div
              key={item.id_dosen}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure className="text-center p-4">
                <img
                  src={item.profile_picture} // Assuming item.profile_picture contains the image URL
                  alt="Profile"
                  className="rounded-full h-44 w-44 mx-auto"
                />
              </figure>
              <div className="card-body text-center">
                <p className="text-lg font-bold">{item.full_name}</p>
                <p>{item.major}</p>
                <p>{item.study_program}</p>
                <p className="font-semibold">{item.email}</p>
                <div className="card-actions justify-center mt-4">
                  <button
                    onClick={() => navigate(`/dosen/${item.id_dosen}`)}
                    className="btn btn-primary"
                  >
                    Profil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dosen;

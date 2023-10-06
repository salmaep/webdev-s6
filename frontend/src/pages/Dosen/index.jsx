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
    <div className="h-screen w-full">
      <Topbar />
      <div className="mt-20">
        <h1>Staf Dosen</h1>
        {!loading && !error && (
          <div className="grid grid-cols-3">
            {data.map((item) => (
              <div key={item.id_dosen} className="card w-96 bg-base-100 shadow-xl mt-3 ml-3 p-4">
                <p className="text-lg font-bold">{item.full_name}</p>
                <p>{item.major}</p>
                <p>{item.study_program}</p>
                <p className="font-semibold">{item.email}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => navigate(`/dosen/${item.id_dosen}`)}
                    className="btn btn-primary flex grow"
                  >
                    Profil
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dosen;

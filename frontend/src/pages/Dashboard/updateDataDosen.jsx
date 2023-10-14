import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const UpdateDataDosen = () => {
  const { dosenId } = useParams();
  console.log(dosenId);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    place_of_birth: "",
    date_of_birth: "",
    gender: "Laki-Laki",
    email: "",
    profile_picture: "",
    bio: "",
    major: "",
    position: "",
    study_program: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/lecturer/${dosenId}`
        );
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dosenId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profile_picture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = () => {
    // Validasi data sebelum pengiriman
    if (!formData.full_name || !formData.email) {
      console.error("Full Name and Email are required.");
      return;
    }

    fetch(`http://localhost:5000/lecturer/${dosenId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Dosen data updated successfully!");
          navigate("/dashboard");
        } else {
          console.error("Error updating Dosen data");
        }
      })
      .catch((error) => {
        console.error("Error updating Dosen data:", error);
      });
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Profil Dosen</h2>
            <div className="flex flex-col items-start">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id="full_name"
                className="border rounded p-2 w-full"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="profile_picture">Profile Picture</label>
              <input
                id="profile_picture"
                type="file"
                className="border rounded p-2 w-full"
                onChange={handleFileChange}
              />
              {formData.profile_picture && (
                <img
                  src={formData.profile_picture}
                  alt="Profile"
                  style={{ maxWidth: "100px", marginTop: "10px" }}
                />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                className="border rounded p-2 w-full"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="major">Major</label>
              <input
                id="major"
                type="text"
                className="border rounded p-2 w-full"
                value={formData.major}
                onChange={(e) =>
                  setFormData({ ...formData, major: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                type="text"
                className="border rounded p-2 w-full"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="study_program">Study Program</label>
              <input
                id="study_program"
                type="text"
                className="border rounded p-2 w-full"
                value={formData.study_program}
                onChange={(e) =>
                  setFormData({ ...formData, study_program: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="place_of_birth">Place of Birth</label>
              <input
                id="place_of_birth"
                type="text"
                className="border rounded p-2 w-full"
                value={formData.place_of_birth}
                onChange={(e) =>
                  setFormData({ ...formData, place_of_birth: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="date_of_birth">Date of Birth</label>
              <input
                id="date_of_birth"
                type="date"
                className="border rounded p-2 w-full"
                value={formData.date_of_birth}
                onChange={(e) =>
                  setFormData({ ...formData, date_of_birth: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                className="border rounded p-2 w-full"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="border rounded p-2 w-full"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* ... Form Input Fields ... */}
            <div className="card-actions justify-between mt-2">
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="btn btn-sm"
              >
                <BiArrowBack /> Back
              </button>
              <button
                type="button"
                onClick={handleFormSubmit}
                className="btn btn-sm btn-primary"
                disabled={loading}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDataDosen;

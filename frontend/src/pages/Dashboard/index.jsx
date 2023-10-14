import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [dosen, setDosen] = useState([]);

  useEffect(() => {
    // Mengambil data akun dosen dari endpoint /lecturer
    fetch("http://localhost:5000/lecturer")
      .then((response) => response.json())
      .then((lecturerData) => {
        // Mengambil data akun dari endpoint /accounts
        fetch("http://localhost:5000/accounts")
          .then((response) => response.json())
          .then((accountsData) => {
            // Gabungkan data berdasarkan id_user_account
            const mergedData = lecturerData.map((lecturer) => {
              const account = accountsData.find(
                (account) =>
                  account.id_user_account === lecturer.id_user_account
              );
              return {
                ...lecturer,
                nip: account ? account.nip : "Tidak Ditemukan",
              };
            });
            // Urutkan data berdasarkan id_dosen sebelum disimpan dalam state
            mergedData.sort((a, b) => a.id_dosen - b.id_dosen);
            setDosen(mergedData);
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  }, []); // Efek ini hanya berjalan sekali saat komponen dimuat

  const handleDelete = (id) => {
    // Send a DELETE request to the server to delete the specific item with the given id
    fetch(`http://localhost:5000/lecturer/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Dosen deleted successfully!");
          // After successful deletion, update the state to re-render the component without the deleted item
          setDosen(dosen.filter((item) => item.id_dosen !== id));
        } else {
          console.error("Error deleting Dosen");
        }
      })
      .catch((error) => {
        console.error("Error deleting Dosen:", error);
      });
  };

  return (
    <div className="h-screen w-screen">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="max-w-md mb-5">
          <h1 className="text-5xl font-bold">List Dosen</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>ID Dosen</th>
                <th>NIP</th>
                <th>FullName</th>
                <th>Major</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Menampilkan data dosen */}
              {dosen.map((d) => (
                <tr key={d.id_dosen}>
                  <td>{d.id_dosen}</td>
                  <td>{d.nip}</td>
                  <td>{d.full_name}</td>
                  <td>{d.major}</td>
                  <td>{d.position}</td>
                  <td className="border px-4 py-2">
                    {/* Tombol-tombol CRUD */}
                    <button
                      className="btn-primary hover:bg-primary-900 text-white font-bold py-2 px-4 mx-2 rounded"
                      onClick={() => navigate(`/updatedosen/${d.id_dosen}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
                      onClick={() => handleDelete(d.id_dosen)} // Call handleDelete function with the dosen id
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Topbar from "../../components/topbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <table className="min-w-full table-auto">
        {/* head */}
        <thead>
          <tr>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Profesi</th>
            <th className="px-4 py-2">NIP</th>
            <th className="px-4 py-2">Ubah</th> {/* Kolom untuk tombol CRUD */}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Agustinus Bambang Jusana</td>
            <td className="border px-4 py-2">Profesor</td>
            <td className="border px-4 py-2">211524020</td>
            <td className="border px-4 py-2">
              {/* Tombol-tombol CRUD */}
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded">
                Hapus
              </button>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Agustinus Bambang Jusana</td>
            <td className="border px-4 py-2">Profesor</td>
            <td className="border px-4 py-2">211524021</td>
            <td className="border px-4 py-2">
              {/* Tombol-tombol CRUD */}
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded">
                Hapus
              </button>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">Agustinus Bambang Jusana</td>
            <td className="border px-4 py-2">Profesor</td>
            <td className="border px-4 py-2">211524022</td>
            <td className="border px-4 py-2">
              {/* Tombol-tombol CRUD */}
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Login;
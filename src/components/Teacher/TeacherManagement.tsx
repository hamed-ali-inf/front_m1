import { useState } from "react";
import type { Teacher } from "../../types/Teacher";

const teachersMock: Teacher[] = [
  {
    id: 1,
    name: "Dr. Hamad Bachir",
    email: "hamad.bachir@univ.edu",
    speciality: "Informatique",
    grade: "Professeur",
    experience: "15 ans",
    contact: "0557441122",
  },
  {
    id: 2,
    name: "Dr. Leila Khelal",
    email: "leila.khelal@univ.edu",
    speciality: "Mathématique",
    grade: "Maitre de conférences",
    experience: "12 ans",
    contact: "0667775533",
  },
  {
    id: 3,
    name: "Dr. Omar Messoud",
    email: "omar.messoud@univ.edu",
    speciality: "Base de données",
    grade: "Professeur",
    experience: "10 ans",
    contact: "0778564533",
  },
];

export default function TeacherManagement() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredTeachers = teachersMock.filter((t) => {
    return (
      t.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? t.speciality === filter : true)
    );
  });

  return (
    <div className="p-8 w-full">

      {/* ---- TITLE ---- */}
      <h1 className="text-3xl font-bold text-[#2E236C] mb-8">
        Gestion des enseignants
      </h1>

      {/* ---- STAT CARDS ---- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-[#2E236C]">
            {teachersMock.length}
          </h2>
          <p className="text-gray-600 mt-2">Total enseignants</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-[#2E236C]">
            {teachersMock.filter((t) => t.grade === "Professeur").length}
          </h2>
          <p className="text-gray-600 mt-2">Professeurs</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-[#2E236C]">
            {teachersMock.filter((t) => t.grade.includes("Maitre")).length}
          </h2>
          <p className="text-gray-600 mt-2">Maitres de conférences</p>
        </div>
      </div>

      {/* ---- SEARCH + FILTER ---- */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="Rechercher un enseignant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl flex-1"
        />

        <select
          className="border border-gray-300 p-3 rounded-xl w-full md:w-64"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Filtrer par spécialisation</option>
          <option value="Informatique">Informatique</option>
          <option value="Mathématique">Mathématique</option>
          <option value="Base de données">Base de données</option>
        </select>
      </div>

      {/* ---- TABLE ---- */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#2E236C] text-white">
            <tr>
              <th className="p-4 text-left">Enseignant</th>
              <th className="p-4 text-left">Spécialité</th>
              <th className="p-4 text-left">Grade</th>
              <th className="p-4 text-left">Expérience</th>
              <th className="p-4 text-left">Contact</th>
            </tr>
          </thead>

          <tbody>
            {filteredTeachers.map((t) => (
              <tr
                key={t.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">
                  <div className="font-semibold text-[#2E236C]">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.email}</div>
                </td>
                <td className="p-4">{t.speciality}</td>
                <td className="p-4">{t.grade}</td>
                <td className="p-4">{t.experience}</td>
                <td className="p-4">{t.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

"use client";

import { useStore } from "@/store";
import { useState } from "react";

export default function Home() {
  // Local state for the input field
  const [name, setName] = useState("");
  const { users, addUser, deleteUser } = useStore();

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Next.js CRUD</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 mr-2"
      />
      <button
        onClick={() => {
          addUser(name);
          setName("");
        }}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Add
      </button>

      <ul className="mt-6 space-y-2">
        {users.map((user, idx) => (
          <li key={idx} className="flex justify-between border p-2">
            {user}
            <button onClick={() => deleteUser(idx)} className="text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

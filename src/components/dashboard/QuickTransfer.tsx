import { useEffect, useState } from "react";
import axios from "axios";
import { MdSend } from "react-icons/md";

type User = {
  id: number;
  login: string;
  avatar_url: string;
};

export default function QuickTransfer() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users?per_page=5")
      .then((res) => setUsers(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <h3 className="font-semibold text-slate-900 mb-4">
        Quick Transfer
      </h3>

      {/* Users */}
      <div className="flex items-center gap-4 mb-6 overflow-x-auto">

        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center min-w-16"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="h-12 w-12 rounded-full object-cover border"
            />
                {/* centralise the text with image and add truncate with min width to prevent overflow */}
            <p className="text-xs text-slate-600 mt-1 truncate w-full text-center">
              {user.login}
            </p>
          </div>
        ))}

      </div>

      {/* Transfer */}
      <div className="flex items-center gap-3">

        <input
          type="number"
          placeholder="Write Amount"
          className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        {/* send should not show on small screen, only show the icon, on medium and above show both text and icon */}
        <span className="hidden md:inline">Send</span>
          <MdSend />
        </button>

      </div>

    </div>
  );
}

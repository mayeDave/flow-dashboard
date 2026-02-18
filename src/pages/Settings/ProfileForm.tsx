import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { updateProfile } from "../../services/userApi";
import { snackbar } from "../../components/ui/Snackbar";
import CustomButton from "../../components/ui/CustomButton";

import type { UserProfile } from "../../types/user";

const initialState: UserProfile = {
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  dob: "1990-01-25",
  address: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
};

export default function ProfileForm() {
  const [form, setForm] = useState(initialState);

  const mutation = useMutation({
    mutationFn: updateProfile,

    onSuccess() {
      snackbar.success("Profile updated");
    },

    onError() {
      snackbar.error("Update failed");
    },
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate(form);
  }

  return (
    <form onSubmit={submit}>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT - AVATAR */}
        <div className="lg:col-span-3 flex flex-col items-center">

          <div className="relative">

            <img
              src="https://i.pravatar.cc/150"
              className="
                w-28
                h-28
                rounded-full
                object-cover
              "
            />

            {/* Edit */}
            <button
              type="button"
              className="
                absolute
                bottom-1
                right-1
                h-7
                w-7
                rounded-full
                bg-black
                text-white
                text-xs
                flex
                items-center
                justify-center
              "
            >
              ✎
            </button>

          </div>

        </div>

        {/* RIGHT - FORM */}
        <div className="lg:col-span-9">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="User Name"
              name="username"
              value={form.username}
              onChange={handleChange}
            />

            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <Input
              label="Password"
              type="password"
              value="********"
              readOnly
            />

            <Input
              label="Date of Birth"
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />

            <Input
              label="Present Address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />

            <Input
              label="Permanent Address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />

            <Input
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
            />

            <Input
              label="Postal Code"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
            />

            <Input
              label="Country"
              name="country"
              value={form.country}
              onChange={handleChange}
            />

          </div>

          {/* SAVE */}
          <div className="flex justify-end mt-10">

            <CustomButton
              type="submit"
              loading={mutation.isPending}
              className="px-10 rounded-xl"
            >
              Save
            </CustomButton>

          </div>

        </div>

      </div>
    </form>
  );
}

/* ---------------- INPUT ---------------- */

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>

      <label className="block text-sm text-slate-600 mb-1">
        {label}
      </label>

      <input
        {...props}
        className="
          w-full
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          px-4
          py-2.5
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />

    </div>
  );
}

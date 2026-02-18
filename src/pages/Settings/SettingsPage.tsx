import { useState } from "react";

import PageLayout from "../../components/layout/PageLayout";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

import type { UserProfile } from "../../types/user";

const initialData: UserProfile = {
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  password: "********",
  dob: "1990-01-25",
  address: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
  avatar: "https://i.pravatar.cc/150",
};

export default function SettingsPage() {
  const [form, setForm] =
    useState<UserProfile>(initialData);

  const { mutate, isPending } =
    useUpdateProfile();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    mutate(form);
  }

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-2xl font-semibold mb-6">
          Settings
        </h1>

        {/* Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">

          {/* Tabs */}
          <div className="flex gap-6 border-b mb-6 text-sm">

            <button className="pb-2 border-b-2 border-indigo-600 font-medium">
              Edit Profile
            </button>

            <button className="text-slate-400">
              Preferences
            </button>

            <button className="text-slate-400">
              Security
            </button>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* Avatar */}
            <div className="md:col-span-2 flex items-center gap-4">

              <img
                src={form.avatar}
                className="h-20 w-20 rounded-full object-cover"
                alt="Avatar"
              />

              <button
                type="button"
                className="text-sm text-indigo-600"
              >
                Change Photo
              </button>

            </div>

            {/* Inputs */}
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
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />

            <Input
              label="Date of Birth"
              name="dob"
              type="date"
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

            {/* Submit */}
            <div className="md:col-span-2 flex justify-end">

              <button
                type="submit"
                disabled={isPending}
                className="
                  bg-black text-white
                  px-8 py-2
                  rounded-lg
                  hover:bg-slate-800
                  disabled:opacity-50
                "
              >
                {isPending ? "Saving..." : "Save"}

              </button>

            </div>

          </form>

        </div>
      </div>
    </PageLayout>
  );
}

/* Reusable Input */
type InputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function Input({
  label,
  name,
  value,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <div>

      <label className="text-sm text-slate-500 block mb-1">
        {label}
      </label>

      <input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        className="
          w-full
          border
          rounded-lg
          px-3 py-2
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />
    </div>
  );
}

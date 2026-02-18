import { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

type ProfileData = {
  name: string;
  username: string;
  email: string;
  city: string;
  country: string;
};

export default function ProfileForm() {
  const [form, setForm] = useState<ProfileData>({
    name: "Charlene Reed",
    username: "charlene",
    email: "charlene@gmail.com",
    city: "San Jose",
    country: "USA",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Profile Saved:", form);

    setOpen(true);
  };

  return (
    <>
      <Paper className="p-6 max-w-3xl">
        <h2 className="mb-4 text-lg font-semibold">
          Edit Profile
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="City"
            name="city"
            value={form.city}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
            fullWidth
          />

          <div className="md:col-span-2 flex justify-end mt-4">
            <Button
              type="submit"
              variant="contained"
            >
              Save
            </Button>
          </div>
        </form>
      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">
          Profile updated successfully
        </Alert>
      </Snackbar>
    </>
  );
}

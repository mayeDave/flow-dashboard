import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateProfile } from "../services/userApi";
import type { UserProfile } from "../types/user";

export function useUpdateProfile() {
  return useMutation({
    mutationFn: (data: UserProfile) =>
      updateProfile(data),

    onSuccess: () => {
      toast.success("Profile updated successfully");
    },

    onError: () => {
      toast.error("Failed to update profile");
    },
  });
}

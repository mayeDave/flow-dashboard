import type { UserProfile } from "../types/user";

export async function updateProfile(
  data: UserProfile
): Promise<UserProfile> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random failure (20%)
      if (Math.random() < 0.2) {
        reject(new Error("Network error"));
        return;
      }

      resolve(data);
    }, 1500);
  });
}

import toast from "react-hot-toast";

type ToastOptions = {
  duration?: number;
};

class Snackbar {
  success(message: string, options?: ToastOptions) {
    toast.success(message, {
      duration: options?.duration || 3000,
    });
  }

  error(message: string, options?: ToastOptions) {
    toast.error(message, {
      duration: options?.duration || 4000,
    });
  }

  info(message: string, options?: ToastOptions) {
    toast(message, {
      duration: options?.duration || 3000,
    });
  }

  loading(message: string) {
    return toast.loading(message);
  }

  dismiss(id?: string) {
    toast.dismiss(id);
  }
}

export const snackbar = new Snackbar();

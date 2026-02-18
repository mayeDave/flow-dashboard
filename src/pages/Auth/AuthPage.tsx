export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow">

        <h1 className="text-center text-xl font-semibold">
          Welcome to Flow
        </h1>

        <button className="w-full rounded bg-blue-600 py-2 text-white">
          Sign up
        </button>

        <button className="w-full rounded border py-2">
          Log in
        </button>

      </div>
    </main>
  );
}

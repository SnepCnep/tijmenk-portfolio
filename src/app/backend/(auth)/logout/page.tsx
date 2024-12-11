// NextAuth
import { signOut } from "next-auth/react";

// UI Components
import Navbar from "@/components/navbar";

function LogoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-900 to-black text-foreground">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full bg-zinc-800 border border-zinc-700 rounded-lg p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-6">Sign Out</h1>
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Are you sure you want to log out of your account?
          </p>
          <form
            action={async () => {
              "use server";
              await signOut({ callbackUrl: "/" });
            }}
            className="flex flex-col space-y-4"
          >
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-medium rounded hover:bg-red-500 hover:text-white transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
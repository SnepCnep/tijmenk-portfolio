// NextAuth
import { signIn } from "@/lib/auth";

// UI Components
import Navbar from "@/components/navbar";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-900 to-black text-foreground">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full bg-zinc-800 border border-zinc-700 rounded-lg p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Access your account by signing in below.
          </p>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/backend" });
            }}
            className="flex flex-col space-y-4"
          >
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-zinc-900 font-medium rounded hover:bg-primary-foreground hover:text-zinc-900 transition-colors"
            >
              Sign in (Google)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

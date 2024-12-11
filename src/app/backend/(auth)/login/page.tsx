// NextAuth
import { signIn } from "@/lib/auth";

// UI Components
import Navbar from "@/components/navbar";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-900 to-black text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-sm w-full bg-zinc-800 border border-zinc-700 rounded-lg p-8 shadow-lg">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-center mb-4 text-primary">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Log in to your account and get started.
          </p>

          {/* Login Form */}
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/backend" });
            }}
            className="flex flex-col space-y-6"
          >
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary text-zinc-900 font-medium text-lg rounded-lg hover:bg-primary-foreground hover:text-zinc-900 transition-all duration-200"
              aria-label="Sign in with Google"
            >
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
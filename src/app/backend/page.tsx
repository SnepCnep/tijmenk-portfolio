import { auth } from "@/lib/auth";

async function backendHomePage() {
    return (
        <div>
            <h1>Backend Page</h1>
            <p>This is a backend page.</p>
        </div>
    );
}

export default backendHomePage;
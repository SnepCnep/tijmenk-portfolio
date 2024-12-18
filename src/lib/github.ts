import { githubUsername } from '@/config';

const baseUrl = 'https://api.github.com';

async function fetchGithubUser(username: string = githubUsername) {
    const response = await fetch(`${baseUrl}/users/${username}`, {
        next: {
            revalidate: 3600
        }
    });

    return response.json();
}

async function fetchGithubFollowers(username: string = githubUsername) {
    const response = await fetch(`${baseUrl}/users/${username}/followers`, {
        next: {
            revalidate: 600
        }
    });

    return response.json();
}



export {
    fetchGithubUser,
    fetchGithubFollowers
}
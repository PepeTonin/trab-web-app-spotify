import { Recommendations, UserProfile, UsersTopTracks } from "../interfaces/spotifyAPI";

export async function fetchProfile(token: string): Promise<UserProfile> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

export async function fetchTopTracks(token: string): Promise<UsersTopTracks> {
  const result = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  return await result.json();
}

export async function fetchRecommendations(token: string, topTracksIds: string[]): Promise<Recommendations> {
  const result = await fetch(
    `https://api.spotify.com/v1/recommendations/?limit=5&seed_tracks=${topTracksIds.join(
      ","
    )}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    }
  );
  return await result.json();
}

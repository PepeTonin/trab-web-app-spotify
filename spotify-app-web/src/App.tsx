import React, { useEffect, useState } from "react";
import { UserProfile, Track } from "./interfaces/spotifyAPI";
import { getAccessToken, redirectToAuthCodeFlow } from "./util/authSpotifyAPI";
import {
  fetchProfile,
  fetchRecommendations,
  fetchTopTracks,
} from "./util/requestsSpotifyAPI";
import { Puff } from "react-loader-spinner";
import { FaSpotify } from "react-icons/fa6";
import { IconContext } from "react-icons";

import "./App.css";
import RenderTrackList from "./components/RenderTrackList";

function App() {
  const clientId = "4eff4599f5244abead69fbd53c7590e9";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  console.log(params);
  console.log(code);
  

  const [isFetchingData, setIsFetchingData] = useState(true);

  const [authToken, setAuthToken] = useState("");

  const [profile, setProfile] = useState<UserProfile | undefined>(undefined);
  const [topTracks, setTopTracks] = useState<Track[] | undefined>(undefined);
  const [recommendations, setRecommendations] = useState<Track[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function initialize() {
      if (!code) {
        redirectToAuthCodeFlow(clientId);
      } else {
        const accessToken = await getAccessToken(clientId, code);
        setAuthToken(accessToken);

        const fetchedProfile = await fetchProfile(accessToken);
        setProfile(fetchedProfile);

        const fetchedTopTracks = await fetchTopTracks(accessToken);
        setTopTracks(fetchedTopTracks.items);

        setIsFetchingData(false);
      }
    }
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getRecommendationsHandler() {
    setIsFetchingData(true);
    const topTrackIds: string[] = [];
    topTracks?.forEach((track) => {
      topTrackIds.push(track.id);
    });
    const fetchedRecommendations = await fetchRecommendations(
      authToken,
      topTrackIds
    );
    setRecommendations(fetchedRecommendations.tracks);
    setIsFetchingData(false);
  }

  if (isFetchingData) {
    return (
      <div>
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#cbf55c"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  } else {
    return (
      <div className="root-container">
        {profile && (
          <div className="profile-container">
            <img
              className="profile-image"
              src={profile.images[0].url}
              alt="Profile"
            />
            <p className="profile-name">{profile.display_name}</p>
          </div>
        )}

        {topTracks && (
          <div className="tracks-container">
            <RenderTrackList tracks={topTracks} />
          </div>
        )}

        <div className="button-container">
          <button
            className="recommendation-button"
            onClick={getRecommendationsHandler}
          >
            <IconContext.Provider
              value={{ color: "#400073", className: "icon" }}
            >
              <div className="button-inner-container">
                <FaSpotify />
                <p>Get Recommendations</p>
              </div>
            </IconContext.Provider>
          </button>
        </div>

        {recommendations && (
          <div className="tracks-container">
            <RenderTrackList tracks={recommendations} />
          </div>
        )}
      </div>
    );
  }
}

export default App;

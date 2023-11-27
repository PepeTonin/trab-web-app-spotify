import React from "react";
import { Track } from "../../interfaces/spotifyAPI";

import "./style.css";

interface RenderTrackListProps {
  tracks: Track[];
}

export default function RenderTrackList({ tracks }: RenderTrackListProps) {
  return (
    <>
      {tracks.map((item, index) => (
        <div className="track-container" key={item.id + index.toString()}>
          <p className="ranking-number">{index + 1}</p>
          <div className="track-name-artist_container">
            <p className="track-name">{item.name}</p>
            <div className="track-artist_container">
              {item.artists.map((artist, index) => (
                <p className="track-artist" key={artist.id}>
                  {index === item.artists.length - 1
                    ? artist.name
                    : artist.name + ", "}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

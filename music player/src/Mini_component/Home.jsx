import React, { useEffect, useState } from "react";

function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          "https://saavn.dev/api/search/songs?query=ek%20radha%20ek%20meera"
        );
        const data = await response.json();
        console.log(data);
        setSongs(data.data.results); // Adjust based on API response structure
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="flex h-[90vh] w-[100vw]">
      <div className="rounded-lg p-4 ">
        <h1 className="text-lg font-bold mb-2">Songs List</h1>
        {songs.length !== 0 ? (
          <ul>
            {songs.map((song, index) => (
              <li
                key={index}
                className="px-2 py-1 flex flex-col items-center justify-between"
              >
                <img src={song.image[0].url} alt="" />
                <strong>{song.name}</strong>
                <div className="text-xs">Duration: {song.duration}</div>
                {song.downloadUrl && song.downloadUrl[0] ? ( // Adjust based on API response
                  <audio controls>
                    <source src={song.downloadUrl[0].url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  <p>No audio available</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading songs...</p>
        )}
      </div>
    </div>
  );
}

export default Home;

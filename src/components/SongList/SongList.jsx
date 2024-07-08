import React, { useState, useEffect } from "react";
import SongListItem from "./SongListItem";
import { FetchSongs } from "../../Api/SongData";
import { useSongContext } from "../../context/SongContext";

const SongList = ({ isTopTrack, searchQuery }) => {
  const [songs, setSongs] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const { songList, setSongList, setCurrentSong } = useSongContext();

  const fetchData = async () => {
    try {
      const data = await FetchSongs();
      if (data) {
        const allSongs = data.data;
        setSongList(allSongs);
        setSongs(allSongs);
        const filteredTopSongs = allSongs.filter((song) => song.top_track);
        setFilteredSongs(isTopTrack ? filteredTopSongs : allSongs);
      }
    } catch (error) {
      console.error("Failed to fetch songs:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterSongs = (songs) => {
      if (!searchQuery) return songs;
      return songs.filter((song) =>
        song.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    };

    if (isTopTrack) {
      setFilteredSongs(filterSongs(topSongs));
    } else {
      setFilteredSongs(filterSongs(songs));
    }
  }, [searchQuery, isTopTrack, songs, topSongs]);

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };
  return (
    <div className="overflow-scroll h-full px-5 mb-24">
      {filteredSongs.length > 0 ? (
        filteredSongs.map((song, index) => (
          <SongListItem
            key={index}
            songTitle={song.name}
            songCover={song.cover}
            songUrl={song.url}
            onClick={() => handleSongClick(song)}
          />
        ))
      ) : (
        <p>No songs found</p>
      )}
    </div>
  );
};

export default SongList;

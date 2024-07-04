import React from 'react'
import SongListItem from './SongListItem'

const SongList = ({isTopTrack}) => {
    const songs = [
        { title: "Song 1", cover: "cover1.jpg", duration: "03:45" },
        { title: "Song 2", cover: "cover2.jpg", duration: "04:20" },
        { title: "Song 3", cover: "cover3.jpg", duration: "02:50" },
     
       
      ];
      const topSongs = [
        { title: "Top Song 1", cover: "top_cover1.jpg", duration: "03:45" },
        { title: "Top Song 2", cover: "top_cover2.jpg", duration: "04:20" },
        { title: "Top Song 3", cover: "top_cover3.jpg", duration: "02:50" },
        { title: "Top Song 4", cover: "top_cover4.jpg", duration: "05:10" },
        { title: "Top Song 5", cover: "top_cover5.jpg", duration: "03:30" },
        { title: "Top Song 3", cover: "top_cover3.jpg", duration: "02:50" },
        { title: "Top Song 4", cover: "top_cover4.jpg", duration: "05:10" },
        { title: "Top Song 5", cover: "top_cover5.jpg", duration: "03:30" },
        { title: "Top Song 3", cover: "top_cover3.jpg", duration: "02:50" },
        { title: "Top Song 4", cover: "top_cover4.jpg", duration: "05:10" },
        { title: "Top Song 5", cover: "top_cover5.jpg", duration: "03:30" },
        { title: "Top Song 3", cover: "top_cover3.jpg", duration: "02:50" },
        { title: "Top Song 4", cover: "top_cover4.jpg", duration: "05:10" },
        { title: "Top Song 22", cover: "top_cover5.jpg", duration: "03:30" },
        { title: "Top Song 4", cover: "top_cover4.jpg", duration: "05:10" },
        { title: "Top Song 5", cover: "top_cover5.jpg", duration: "03:30" },
        { title: "Top Song 3", cover: "top_cover3.jpg", duration: "02:50" },
        { title: "Top Song 4", cover: "top_cover4.jpg", duration: "05:10" },
        { title: "Top Song 5", cover: "top_cover5.jpg", duration: "03:30" },
        { title: "Top Song 3", cover: "top_cover3.jpg", duration: "02:50" },
        { title: "Top Song 4", cover: "top_cover4.jpg", duration: "05:10" },
        { title: "Top Song 22", cover: "top_cover5.jpg", duration: "03:30" }
      ];
      
  return (
    <div className="overflow-scroll h-[98%] px-5 mb-24">
    
     {!isTopTrack? <>
     {songs.map((song, index) => (
      <SongListItem key={index} songTitle={song.title} songCover={song.cover} songDurantion={song.duration}/>
      ))}</>:<>{topSongs.map((topSong, index) => (
        <SongListItem key={index} songTitle={topSong.title} songCover={topSong.cover} songDurantion={topSong.duration}/>
        ))}</>}
        </div>
  )
}

export default SongList

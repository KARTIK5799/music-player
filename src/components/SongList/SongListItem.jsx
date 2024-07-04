import React from 'react'

const SongListItem = ({songTitle,songCover,songDurantion}) => {
  return (
    <div className='flex  p-4 h-20'>
      <div className='flex items-center w-[90%]'>
        <img src='default' alt="Song" className='h-[3rem] w-[3rem] rounded-full mr-4' />
        <h2 className='text-lg font-medium'>{songTitle}</h2>
      </div>
      <p className='text-sm w-[10%]'>{songDurantion}</p>
    </div>
  )
}

export default SongListItem

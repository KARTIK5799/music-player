import React from 'react';
import cover from '../../assets/cover.jpg';
import Controls from '../Controls/Controls';

const Player = () => {
  return (
    <div className=' w-[480px] h-[700px] p-5 '>
        <div className='text-white h-30 w-auto'>
            <h2 className='text-3xl font-bold'>Song Name</h2>
            <p className='text-gray-400 text-xl'>artist</p>
        </div>
        <div className='w-full bg-slate-500 h-[480px] rounded-md'>
          <img src={cover} alt="" className='object-cover h-full w-full'/>  
        </div>
        <div>
            <Controls isPlaying={true}/>
        </div>
    </div>
  );
}

export default Player;

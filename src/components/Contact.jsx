import React from 'react'
import SwipeableButton from './shared/SwipeableButton';

const Contact = () => {

    const handleSuccess = () => {
        console.log("Button unlocked!");
    };

  return (
    <div className='flex flex-col items-start gap-2'>
        <div className='py-1 px-4 rounded-full border border-pink-600 text-sm font-extralight text-pink-600'>Contact</div>
        <div>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text'>Qu'est ce que vous attendez ?</h1>
        </div>
        <div>
            <SwipeableButton 
            onSuccess={handleSuccess} 
            text="SLIDE TO CONFIRM" 
            />
        </div>
    </div>
  )
}

export default Contact
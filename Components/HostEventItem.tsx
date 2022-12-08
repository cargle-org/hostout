import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function HostEventItem({text}) {
  return (
    <div className='host-event-item'>
        <StarIcon fontSize='medium'/>
        <p>{text}</p>
    </div>
  )
}

export default HostEventItem
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function HostEventItem({color, text}) {
  return (
    <div className={color} >
        <span><StarIcon fontSize='medium'/></span>
        <p>{text}</p>
    </div>
  )
}

export default HostEventItem
import Tag from './Tag';
import Image from 'next/image'


 const Picture = () => {
  return (
    <div className='input-picture'>
    <Image 
        src='/A.jpg'
        width={250}
        height={250}
    />  
  </div>
  )
}
export default  Picture
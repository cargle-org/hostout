import Image from 'next/image';
import Tag from './Tag';

 const Past = () => {
  return (
    <div id='past-reviews'>
    <div className='past-card'>
    <div className='past-img'>
        <Image 
            src='/A.jpg'
            width={560}
            height={500}
            alt='image'
        />
        </div>
    <div className='past-title'>
    <h2>Chilling with wizkid</h2>
    <a>view event</a>

    </div>
    <div className='past-detail'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatu...</p>
    </div>
    <div className='past-tag'>
    <Tag />  <Tag />
    </div>
    <div className='past-price'>
    <p>From:</p>
    <h2>₦3000</h2>
    </div>
    <p className='past-imgs-p'>Images</p>
    <div className='past-imgs'>
    <div className='past-image'>
    <Image 
            src='/A.jpg'
            width={120}
            height={120}
            alt='image'
        />
    </div>
    <div className='past-image'>
    <Image 
            src='/A.jpg'
            width={120}
            height={120}
            alt='image'
        />
    </div>
    <div className='past-image'>
    <Image 
            src='/A.jpg'
            width={120}
            height={120}
            alt='image'
        />
    </div>
    <div className='past-image'>
    <Image 
            src='/A.jpg'
            width={120}
            height={120}
            alt='image'
        />
    </div>
    </div>
    </div>

    <div className='past-card'>
    <div className='past-img'>
        <Image 
            src='/A.jpg'
            width={560}
            height={500}
            alt='image'
        />
        </div>
    <div className='past-title'>
    <h2>Chilling with wizkid</h2>
    <a>view event</a>

    </div>
    <div className='past-detail'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatu...</p>
    </div>
    <div className='past-tag'>
    <Tag />  <Tag />
    </div>
    <div className='past-price'>
    <p>From:</p>
    <h2>₦3000</h2>
    </div>
    <p className='past-imgs-p'>Images</p>
    <div className='past-imgs'>
    <div className='past-image'>
    <Image 
            src='/A.jpg'
            width={120}
            height={120}
            alt='image'
        />
    </div>
    <div className='past-image'>
    <Image 
            src='/A.jpg'
            width={120}
            height={120}
            alt='image'
        />
    </div>
    <div className='past-image'>
    <Image 
            src='/A.jpg'
            width={120}
            height={120}
            alt='image'
        />
    </div>
    <div className='past-image'>
    <Image 
            src='/A.jpg'
            width={120}
            height={120}
            alt='image'
        />
    </div>
    </div>
    </div>

    

    </div>
  )
}

export default Past

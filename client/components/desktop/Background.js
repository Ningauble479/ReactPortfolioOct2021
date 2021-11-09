import DTImage from '../../images/background.jpg'
import Image from 'next/image'

export default function Background () {
    return (
        <Image 
            className='backgroundImage'
            src={DTImage}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            />
    )
}
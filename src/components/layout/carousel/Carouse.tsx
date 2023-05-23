import { Carousel } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

const pictureArray = [
    {
        id: 1,
        src: '/time-cart.jpeg',
        alt: 'card__image',
        width: '600',
        height: '400'
    },
    {
        id: 2,
        src: '/page1.jpeg',
        alt: 'card__image',
        width: '600',
        height: '400'
    }
    ,{
        id: 3,
        src: '/time-cart.jpeg',
        alt: 'card__image',
        width: '600',
        height: '400'
    },
    {
        id: 4,
        src: '/page1.jpeg',
        alt: 'card__image',
        width: '600',
        height: '400'
    }
]
export interface ICarouse {
    isPageLink: boolean;
  }

export default function Carouse({ isPageLink = false }){
    const router = useRouter()
    function handleClick() {
        router.push('/menu')
      }
    return (
        <Carousel style={{ width: '600px' }} autoplay>
            { pictureArray.map((item) => (
                <div
                key={item.id}
            >
                <Image src={item.src} alt={item.alt} width="600" height="400" onClick={ isPageLink ? handleClick : undefined} />
            </div>
            )) }
        </Carousel>
    )
}

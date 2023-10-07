import Image from 'next/image';

interface CardVenturesProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

const CardVentures = ({
  href,
  image,
  title,
  description,
}: CardVenturesProps) => {
  return (
    <a href={href} target='_blank' className='block group'>
      <div className='relative w-14 h-14 rounded-xl mb-5'>
        <Image
          src={image}
          alt='Image'
          fill
          className='object-cover rounded-xl'
        />
      </div>
      <h3 className='text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300'>
        {title}
      </h3>
      <p className='text-gray-500'>{description}</p>
    </a>
  );
};

export default CardVentures;

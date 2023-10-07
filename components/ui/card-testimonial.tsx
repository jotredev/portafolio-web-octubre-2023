import Image from 'next/image';

interface CardTestimonialProps {
  message: string;
  image: string;
  name: string;
  position: string;
}

const CardTestimonial = ({
  message,
  image,
  name,
  position,
}: CardTestimonialProps) => {
  return (
    <div className='p-10 rounded-xl border border-gray-500/30'>
      <p className='mb-10 font-medium'>
        {`"`}
        {message}
        {`"`}
      </p>
      <div className='flex items-center gap-4'>
        <div className='relative w-12 h-12 rounded-full'>
          <Image
            src={image}
            alt='Image'
            fill
            className='object-cover rounded-full'
          />
        </div>
        <div>
          <h3 className='text-white font-medium text-xl'>{name}</h3>
          <h5 className='text-gray-500 uppercase font-medium tracking-widest text-sm'>
            {position}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;

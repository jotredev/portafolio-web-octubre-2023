import Container from '@/components/ui/container';
import Subtitle from '@/components/ui/subtitle';
import Image from 'next/image';

const SectionTheProject = () => {
  return (
    <section
      id='SectionTheProject'
      className='border-b border-gray-500/30 py-10'
    >
      <Container>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-5'>
          <Subtitle subtitle='The Project' className='my-0' />
          <ul className='space-y-8'>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Challenge</h4>
              <p className='text-sm text-gray-500'>
                One of the significant challenges was to strike a balance
                between presenting a vast variety of content and maintaining a
                clean, uncluttered interface. The challenge was to enhance
                content discoverability while ensuring that users were not
                overwhelmed by choices.
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Outcome</h4>
              <p className='text-sm text-gray-500'>
                The collaborative efforts and strategic design decisions
                resulted in a successful outcome — average session duration and
                articles read per session saw an impressive increase of 50%
                within the first two months post-launch.
              </p>
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl mb-10'>
          <Image
            src='https://img.freepik.com/foto-gratis/pantalla-telefono-inteligente-que-muestra-pantalla-bloqueo-espacio-diseno_53876-105167.jpg?w=1480&t=st=1696896571~exp=1696897171~hmac=17425c1f3227fbe8dcb051dc8a55d69247eae6a9a15c6540e446b5f1e444d0f3'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10'>
          <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
            <Image
              src='https://img.freepik.com/vector-gratis/plantilla-elegante-pantalla-inicio-smartphone_23-2148737261.jpg?w=1060&t=st=1696896613~exp=1696897213~hmac=273c9a76f611734d36749643d35a04cb5ff2c5bd1454f9471305de39ba25f1c0'
              alt='Image'
              fill
              className='object-cover rounded-xl'
            />
          </div>
          <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
            <Image
              src='https://img.freepik.com/vector-gratis/plantilla-elegante-pantalla-inicio-smartphone_23-2148737261.jpg?w=1060&t=st=1696896613~exp=1696897213~hmac=273c9a76f611734d36749643d35a04cb5ff2c5bd1454f9471305de39ba25f1c0'
              alt='Image'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionTheProject;

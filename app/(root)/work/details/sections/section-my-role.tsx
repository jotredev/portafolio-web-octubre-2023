import Container from '@/components/ui/container';
import Subtitle from '@/components/ui/subtitle';
import Image from 'next/image';

const SectionMyRole = () => {
  return (
    <section id='sectionMyRole' className='border-b border-gray-500/30 py-10'>
      <Container>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10'>
          <Subtitle subtitle='My Role' className='my-0' />
          <ul className='space-y-8'>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>
                Responsibilities
              </h4>
              <p className='text-sm text-gray-500'>
                As the lead Product Designer, my responsibilities encompassed
                the entire design lifecycle from user research to visual design
                and user experience.
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>
                Collaboration
              </h4>
              <p className='text-sm text-gray-500'>
                Collaboration was vital in creating a cohesive and successful
                product. I worked closely with developers, product managers, and
                content creators.
              </p>
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
          <Image
            src='https://img.freepik.com/psd-gratis/plantilla-maqueta-pantalla-dispositivos-digitales_53876-65698.jpg?w=1480&t=st=1696896001~exp=1696896601~hmac=ee8c2fbaa76f8990a2dd3048a40719d176ed153597549814d45c7f9b8e203421'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionMyRole;

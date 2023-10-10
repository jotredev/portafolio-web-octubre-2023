'use client';

import Button from '@/components/ui/button';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const SectionHeader = () => {
  return (
    <section id='sectionHeader' className='border-b border-gray-500/30 py-10'>
      <Container>
        <Title title='Mindful Blog Mobile App' className='mb-5' />
        <p>
          The goal of the app was to create a user-friendly platform that
          seamlessly connects readers with captivating blog content.
        </p>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between mt-5 gap-5'>
          <Button
            type='button'
            label='View Live App'
            className='w-auto'
            onClick={() => {}}
          />
          <ul className='space-y-3 mb-10 ml-6'>
            <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>
              Industry: Blogging
            </li>
            <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>
              Timeline: 2 weeks
            </li>
            <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>
              Product design
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
          <Image
            src='https://img.freepik.com/psd-gratis/diseno-mock-up-pantalla-telefono-movil_1292-27.jpg?1&w=1060&t=st=1696641156~exp=1696641756~hmac=e30fc34d95a175082a2a923725491dc5837f0e75ecc248754677cca4ecc6aad4'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionHeader;

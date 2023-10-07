'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/ui/button';
import CardFeaturedWork from '@/components/ui/card-featured-work';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';

const FeaturedWorkSection = () => {
  const router = useRouter();

  return (
    <section id='featuredWork' className='border-b border-gray-500/30 py-10'>
      <Container>
        <Title title='Featured Work' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
          <CardFeaturedWork
            href='/featured-1'
            image='https://img.freepik.com/psd-gratis/diseno-mock-up-pantalla-telefono-movil_1292-27.jpg?1&w=1060&t=st=1696641156~exp=1696641756~hmac=e30fc34d95a175082a2a923725491dc5837f0e75ecc248754677cca4ecc6aad4'
            category='Blogging'
            title='Mindful Blog Mobile App'
          />
          <CardFeaturedWork
            href='/featured-1'
            image='https://img.freepik.com/foto-gratis/bicicleta-al-aire-libre-calle_23-2148889108.jpg?w=1480&t=st=1696641806~exp=1696642406~hmac=c6c4a898ddaff0dadce00c8ddf39944e66061f84693bce93c39628a89e12491b'
            category='E-Commerce'
            title='Pedals Website'
          />
          <CardFeaturedWork
            href='/featured-1'
            image='https://img.freepik.com/foto-gratis/restaurante-iluminado-ciudad-noche_23-2149001294.jpg?w=1480&t=st=1696641853~exp=1696642453~hmac=69e36a43fc9c857763c842dfd10f7491f333c60f7bb2834ee1f0587ae633e1d8'
            category='E-Commerce'
            title='Nike Web App'
          />
        </div>
        <Button label='View All Work' onClick={() => router.push('/work')} />
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;

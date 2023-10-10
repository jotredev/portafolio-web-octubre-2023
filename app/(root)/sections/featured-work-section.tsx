'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/ui/button';
import CardFeaturedWork from '@/components/ui/card-featured-work';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import ListFeaturedWork from '@/components/list-featured-work';

const FeaturedWorkSection = () => {
  const router = useRouter();

  return (
    <section id='featuredWork' className='border-b border-gray-500/30 py-10'>
      <Container>
        <Title title='Featured Work' />
        <ListFeaturedWork />
        <Button label='View All Work' onClick={() => router.push('/work')} />
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;

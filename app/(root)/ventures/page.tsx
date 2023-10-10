import ListVentures from '@/components/list-ventures';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';

const VenturesPage = () => {
  return (
    <main className='border-b border-gray-500/30'>
      <Container>
        <Title title='Ventures' />
      </Container>
      <hr className='border-gray-500/30' />
      <Container className='py-10'>
        <ListVentures className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1' />
      </Container>
    </main>
  );
};

export default VenturesPage;

import CardTestimonial from '@/components/ui/card-testimonial';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';

const TestimonialsSection = () => {
  return (
    <section id='testimonials' className='border-b border-gray-500/30 py-10'>
      <Container>
        <Title title='Testimonials' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <CardTestimonial
            message='Jackson possesses an exceptional talent for translating complex
        ideas into stunning and user-centric designs. He consistently goes above
        and beyond to understand the core essence of a product and its intended
        audience, resulting in designs that are not only visually appealing but
        also highly functional.'
            image='https://img.freepik.com/foto-gratis/retrato-hombre-barbudo-pelirrojo-anteojos-vestido-elegante-traje-lana-sobre-fondo-gris_613910-611.jpg?w=1480&t=st=1696643149~exp=1696643749~hmac=610abcd5f9abfa5dce3a3d05e3d34697695ad32ee220247b4f92eec2f112f318'
            name='John Smith'
            position='CEO AT MINDFUL'
          />
          <CardTestimonial
            message='I cant recommend Jackson enough. He brought a fresh perspective to our project and consistently delivered designs that were not only visually appealing but also aligned with our project goals. His collaborative approach and commitment to excellence make him an invaluable asset to any design endeavor.'
            image='https://img.freepik.com/foto-gratis/mujer-sonriente-tenencia-libro_329181-20952.jpg?w=1480&t=st=1696643697~exp=1696644297~hmac=8d502ff9b77a4df90684bc88d7fba95c464522b3108f92fcb0b9282af637fbf7'
            name='Stacy Sampson'
            position='LEAD ENGINEER AT LUXE ARCHITECTS'
          />
          <CardTestimonial
            message='Jackson is a design wizard! He took our vague ideas and transformed them into sleek, intuitive designs that exceeded our expectations. His ability to balance creativity with practicality resulted in a product thats both aesthetically pleasing and user-friendly.'
            image='https://img.freepik.com/foto-gratis/retrato-primer-plano-apuesto-hombre-barbudo-moda-camisa-blanca-sombrero-panama-gafas-sol-aislado-sobre-fondo-oscuro_613910-19333.jpg?w=996&t=st=1696643839~exp=1696644439~hmac=f30d6abb630ce5f93cc907234ed80aa5ad21560b5236853b05d8c14e19c68ee4'
            name='Jackie Johnson'
            position='STAFF PRODUCT DESIGNER AT NIKE'
          />
          <CardTestimonial
            message='Jackson effortlessly translated our concepts into visually stunning designs that not only captured our brand essence but also resonated with our target audience. His attention to detail and innovative thinking truly set him apart.'
            image='https://img.freepik.com/foto-gratis/linda-chica-camisa-beige-tocando-gafas-sosteniendo-portatil-sonrisa_197531-6704.jpg?w=1480&t=st=1696643753~exp=1696644353~hmac=7058376916710ceea9eb35d98e62e3e77946e64d610f910cef10bef585d1957f'
            name='Angelina Corales'
            position='HEAD OF DESIGN AT PEDALS'
          />
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;

import Badge from '@/components/ui/badge';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const BlogDetails = () => {
  return (
    <main className='py-10 border-b border-gray-500/30'>
      <Container>
        <Badge label='Design' className='text-primary' />
        <Title
          title='Whats the Difference Between UX and UI?'
          className='mt-0 mb-10'
        />
        <article className='space-y-10'>
          <div className='relative w-full h-[500px] rounded-xl'>
            <Image
              src='https://img.freepik.com/vector-gratis/fondo-degradado-ui-ux_23-2149052117.jpg?w=1480&t=st=1696898972~exp=1696899572~hmac=0c8fdc531ba2938fb26f650e305ab861d744ce2d3697a9fd45409c5434d67b5f'
              alt='Image'
              fill
              className='object-cover rounded-xl'
            />
          </div>
          <p className='text-gray-500'>
            In the world of design, two terms often come up in conversations:
            User Experience (UX) and User Interface (UI). While they might sound
            similar and are closely related, they represent distinct aspects of
            the design process, each playing a crucial role in creating
            effective and user-friendly products. In this article, well delve
            into the key differences between UX and UI, shedding light on their
            individual contributions to crafting exceptional user-centric
            designs.
          </p>
          <h3 className='text-white text-2xl'>User Experience (UX)</h3>
          <p className='text-gray-500'>
            User Experience, commonly referred to as UX, focuses on the overall
            interaction that users have with a product. Its about understanding
            the users needs, behaviors, emotions, and goals, and then designing
            an experience that meets and exceeds those expectations. UX design
            is concerned with the holistic journey a user takes when interacting
            with a product or service, from the moment they first encounter it
            to their long-term engagement.
          </p>
          <h5 className='text-lg text-white'>
            Key aspects of UX design include:
          </h5>
          <ul className='text-gray-500 list-decimal space-y-5 ml-4'>
            <li>
              Research: UX designers conduct user research to gather insights
              into user preferences, pain points, and behaviors. This involves
              methods like surveys, interviews, and usability testing.
            </li>
            <li>
              Information Architecture: Organizing and structuring content in a
              way that makes it intuitive and easy for users to navigate. This
              often involves creating sitemaps and user flows.
            </li>
            <li>
              Wireframing and Prototyping: Creating low-fidelity wireframes and
              interactive prototypes to visualize the layout and functionality
              of a product before development begins.
            </li>
            <li>
              Usability and Accessibility: Ensuring that the product is easy to
              use and accessible to a wide range of users, including those with
              disabilities.
            </li>
            <li>
              User Testing: Iteratively testing the product with real users to
              identify pain points and areas for improvement.
            </li>
          </ul>
        </article>
      </Container>
    </main>
  );
};

export default BlogDetails;

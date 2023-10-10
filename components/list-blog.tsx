import CardBlog from '@/components/ui/card-blog';

const ListBlog = () => {
  return (
    <div className='space-y-5'>
      <CardBlog
        image='https://img.freepik.com/vector-gratis/fondo-azul-tecnologico_1035-1691.jpg?w=1060&t=st=1696645827~exp=1696646427~hmac=8d40426e2c8aefb780b4baa7073185a17ffd789652d08606ae293f3ab2a33a2a'
        href='/blog/details'
        title='Whats the Difference Between UX and UI?'
        category='Design'
        ago='4 min'
      />
      <CardBlog
        image='https://img.freepik.com/vector-gratis/fondo-azul-tecnologia-formas-abstractas_23-2147671811.jpg?w=1060&t=st=1696646219~exp=1696646819~hmac=ac42711e463e14125b56ef7db37638a237d2612d5272ab2820ac82982d8b059a'
        href='/blog/details'
        title='Take It one Step At a Time'
        category='Productivity'
        ago='4 min'
      />
      <CardBlog
        image='https://img.freepik.com/vector-gratis/fondo-tecnologia-puntos-lineas_23-2147836936.jpg?w=1060&t=st=1696646269~exp=1696646869~hmac=db973c1d969be735c8782352ff8a9ae363e60f03f5b847ce378dbb8a7c44fe72'
        href='/blog/details'
        title='How Do I Design a Website?'
        category='Design'
        ago='4 min'
      />
      <CardBlog
        image='https://img.freepik.com/vector-gratis/copia-espacio-azul-circuitos-fondo-digital_23-2148821699.jpg?w=1480&t=st=1696646324~exp=1696646924~hmac=b84f3183cf88e5f79f92f9e633ee4c3fc5579de2449f47a836504b323313a071'
        href='/blog/details'
        title='3 Simple Steps to Boost Your Productivity'
        category='Productivity'
        ago='4 min'
      />
      <CardBlog
        image='https://img.freepik.com/foto-gratis/fondo-azul-poligonal-abstracto-3d_1048-11983.jpg?w=1480&t=st=1696646355~exp=1696646955~hmac=e15cc1760be8c77bbe4d2016c9afd1483b9c9510ac4b58cb6344e3147fcab8d5'
        href='/blog/details'
        title='5 Digital Product Ideas for Designers'
        category='Manky Money'
        ago='4 min'
      />
    </div>
  );
};

export default ListBlog;

import { cn } from '@/libs/utils';

import CardVentures from '@/components/ui/card-ventures';

interface ListVenturesProps {
  className?: string;
}

const ListVentures = ({ className }: ListVenturesProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10',
        className
      )}
    >
      <CardVentures
        href='https://kevinbhagat.lemonsqueezy.com/checkout/buy/c7022897-3823-482c-a39b-3578443f50cd'
        image='https://img.freepik.com/vector-gratis/logotipo-motor-busqueda_1071-76.jpg?w=1060&t=st=1696644908~exp=1696645508~hmac=dfe821d0da2e52defdfa491c48fffce96a35d22b89611cffa052d89aebbcc02f'
        title='Framer Templates'
        description='Creating Framer templates for designers, agencies, and content creators.'
      />
      <CardVentures
        href='https://kevinbhagat.lemonsqueezy.com/checkout/buy/c7022897-3823-482c-a39b-3578443f50cd'
        image='https://img.freepik.com/vector-gratis/lema-empresa-creativa-azul_53876-118325.jpg?w=1060&t=st=1696645261~exp=1696645861~hmac=17edbdb10f24a3252f8fa86c7aaafbe4746ec8345729c68aed6d9fbbb9940646'
        title='Curated To Create'
        description='A directory of hand-picked tools for the creator economy.'
      />
      <CardVentures
        href='https://kevinbhagat.lemonsqueezy.com/checkout/buy/c7022897-3823-482c-a39b-3578443f50cd'
        image='https://img.freepik.com/vector-gratis/plantilla-logotipo-datos-dibujados-mano_23-2149204607.jpg?w=1060&t=st=1696645340~exp=1696645940~hmac=cc0c8ce14aaa2fd24e3961de8e2959c627a935e96736f0a777e75633fb1f8fca'
        title='Minimal Visuals'
        description='An Etsy store curated from my own photography.'
      />
    </div>
  );
};

export default ListVentures;

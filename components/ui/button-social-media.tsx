import { IconType } from 'react-icons';

interface ButtonSocialProps {
  icon: IconType;
  href: string;
}

const ButtonSocialMedia = ({ icon: Icon, href }: ButtonSocialProps) => {
  return (
    <a
      href={href}
      target='_blank'
      className='w-14 h-14 flex items-center justify-center border border-gray-500/30 rounded-lg text-gray-500 hover:text-white transition-colors duration-300 hover:bg-gray-500/10'
    >
      <Icon size={20} />
    </a>
  );
};

export default ButtonSocialMedia;

import { cn } from '@/libs/utils';
import { IconType } from 'react-icons';

interface ButtonIconProps {
  icon: IconType;
  onClick: () => void;
  className?: string;
}

const ButtonIcon = ({ icon: Icon, className, onClick }: ButtonIconProps) => {
  return (
    <button type='button' className={cn('', className)} onClick={onClick}>
      <Icon size={20} />
    </button>
  );
};

export default ButtonIcon;

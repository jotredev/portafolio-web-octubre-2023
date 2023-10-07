import { cn } from '@/libs/utils';

interface ButtonProps {
  type?: 'button' | 'submit';
  label: string;
  className?: string;
  onClick: () => void;
}

const Button = ({
  type = 'button',
  label,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'py-3 px-4 border border-primary text-primary w-full rounded-lg hover:bg-primary/10 transition-colors duration-300 font-medium',
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;

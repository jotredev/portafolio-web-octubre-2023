import { cn } from '@/libs/utils';

interface BadgeProps {
  label: string;
  className?: string;
}

const Badge = ({ label, className }: BadgeProps) => {
  return (
    <h5
      className={cn(
        'text-gray-500 uppercase tracking-widest text-xs',
        className
      )}
    >
      {label}
    </h5>
  );
};

export default Badge;

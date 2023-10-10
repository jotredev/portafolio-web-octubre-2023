import { cn } from '@/libs/utils';

interface SubtitleProps {
  subtitle: string;
  className?: string;
}

const Subtitle = ({ subtitle, className }: SubtitleProps) => {
  return (
    <h2
      className={cn(
        'text-2xl ml-6 font-light text-white my-10 relative before:absolute before:w-3 before:h-3 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2',
        className
      )}
    >
      {subtitle}
    </h2>
  );
};

export default Subtitle;

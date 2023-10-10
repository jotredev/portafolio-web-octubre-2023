import { cn } from '@/libs/utils';

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <h1 className={cn('text-3xl font-light text-white my-10', className)}>
      {title}
    </h1>
  );
};

export default Title;

import type { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
}

const PageTitle = ({ title, subtitle, className = '' }: PageTitleProps) => {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h1 className="text-4xl md:text-5xl font-headline text-primary mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;

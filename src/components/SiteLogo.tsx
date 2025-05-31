import Link from 'next/link';

const SiteLogo = () => {
  return (
    <Link href="/" className="text-3xl font-headline text-primary hover:text-primary/90 transition-colors" aria-label="TerreForm Home">
      TerreForm
    </Link>
  );
};

export default SiteLogo;

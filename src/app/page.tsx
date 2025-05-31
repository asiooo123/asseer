import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderCourses, placeholderWorkshops, Course, Workshop } from '@/lib/placeholder-data';
import PageTitle from '@/components/PageTitle';
import { ArrowRight, Users, BookOpen, CalendarDays, Sparkles } from 'lucide-react';

const Home = () => {
  const latestCourses = placeholderCourses.slice(0, 2);
  const latestWorkshops = placeholderWorkshops.slice(0, 2);

  const testimonials = [
    {
      quote: "Une expérience incroyable ! J'ai découvert une passion pour l'argile grâce à leurs formations.",
      author: "Sophie D.",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "woman portrait"
    },
    {
      quote: "L'atelier était très bien organisé et l'ambiance chaleureuse. Je recommande vivement !",
      author: "Marc L.",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "man portrait"
    }
  ];

  const quickLinks = [
    { href: "/formations", label: "Nos Formations", icon: <BookOpen className="mr-2 h-5 w-5" /> },
    { href: "/ateliers", label: "Nos Ateliers", icon: <CalendarDays className="mr-2 h-5 w-5" /> },
    { href: "/galerie", label: "Notre Galerie", icon: <Sparkles className="mr-2 h-5 w-5" /> },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-card rounded-lg shadow-lg">
        <PageTitle
          title="TerreForm : L'Art de Façonner l'Argile"
          subtitle="Explorez votre créativité avec nos formations et ateliers uniques."
        />
        <p className="max-w-2xl mx-auto mb-8 text-foreground">
          Chez TerreForm, nous croyons au pouvoir transformateur de l'argile. Que vous soyez débutant curieux ou artiste confirmé, rejoignez notre communauté pour apprendre, créer et vous inspirer.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/formations">Découvrir les Formations <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/ateliers">Voir les Ateliers</Link>
          </Button>
        </div>
      </section>

      {/* Latest Formations */}
      <section>
        <h2 className="text-3xl font-headline text-primary text-center mb-8">Dernières Formations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {latestCourses.map((course: Course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={course.image} alt={course.title} width={600} height={300} className="w-full h-48 object-cover" data-ai-hint={course.dataAiHint} />
              <CardHeader>
                <CardTitle className="text-primary">{course.title}</CardTitle>
                <CardDescription>{course.level} - {course.format}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                <p className="text-sm"><strong>Durée :</strong> {course.duration}</p>
                <p className="text-sm"><strong>Tarif :</strong> {course.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/formations#${course.id}`}>S'inscrire</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Workshops */}
      <section>
        <h2 className="text-3xl font-headline text-primary text-center mb-8">Prochains Ateliers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {latestWorkshops.map((workshop: Workshop) => (
            <Card key={workshop.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={workshop.image} alt={workshop.title} width={600} height={300} className="w-full h-48 object-cover" data-ai-hint={workshop.dataAiHint} />
              <CardHeader>
                <CardTitle className="text-primary">{workshop.title}</CardTitle>
                <CardDescription>{workshop.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2"><strong>Thème :</strong> {workshop.theme}</p>
                <p className="text-sm"><strong>Places disponibles :</strong> {workshop.availablePlaces}</p>
                <p className="text-sm"><strong>Tarif :</strong> {workshop.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={`/ateliers#${workshop.id}`}>Réserver une place</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card rounded-lg shadow-lg py-12">
        <h2 className="text-3xl font-headline text-primary text-center mb-8">Ce qu'ils en disent</h2>
        <div className="grid md:grid-cols-2 gap-8 px-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Image src={testimonial.avatar} alt={testimonial.author} width={60} height={60} className="rounded-full" data-ai-hint={testimonial.dataAiHint}/>
                  <div>
                    <p className="italic text-foreground">"{testimonial.quote}"</p>
                    <p className="mt-2 font-semibold text-primary">- {testimonial.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="text-center">
        <h2 className="text-3xl font-headline text-primary mb-8">Explorez TerreForm</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {quickLinks.map((link) => (
            <Button key={link.href} asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href={link.href}>
                {link.icon}
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

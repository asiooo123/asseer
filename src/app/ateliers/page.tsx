import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderWorkshops, Workshop } from '@/lib/placeholder-data';
import PageTitle from '@/components/PageTitle';
import { Badge } from '@/components/ui/badge';
import { CalendarClock, Users, Euro } from 'lucide-react';

const AteliersPage = () => {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Nos Ateliers Créatifs"
        subtitle="Participez à nos ateliers pour explorer différentes techniques et thèmes autour de l'argile."
      />

      {placeholderWorkshops.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {placeholderWorkshops.map((workshop) => (
            <Card key={workshop.id} id={workshop.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={workshop.image} alt={workshop.title} width={600} height={300} className="w-full h-56 object-cover" data-ai-hint={workshop.dataAiHint} />
              <CardHeader>
                <CardTitle className="text-primary">{workshop.title}</CardTitle>
                <CardDescription className="flex items-center text-muted-foreground">
                  <CalendarClock className="mr-2 h-4 w-4" /> {workshop.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <p className="text-sm"><strong>Thème :</strong> {workshop.theme}</p>
                <div className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4 text-primary" /> 
                  <strong>Places disponibles :</strong> <Badge variant="outline" className="ml-2">{workshop.availablePlaces}</Badge>
                </div>
                <div className="flex items-center text-sm">
                  <Euro className="mr-2 h-4 w-4 text-primary" /> 
                  <strong>Prix :</strong> {workshop.price}
                </div>
                <p className="text-xs text-muted-foreground mt-2"><strong>Modalités :</strong> {workshop.terms}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={`/contact?subject=Réservation atelier: ${workshop.title}`}>Réserver une place</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg py-8">Aucun atelier programmé pour le moment. Revenez bientôt !</p>
      )}
    </div>
  );
};

export default AteliersPage;

import PageTitle from '@/components/PageTitle';
import { ContactForm } from './components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Suspense } from 'react';

// Helper component to parse search params safely on the client
function ContactFormWrapper({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const initialSubject = typeof searchParams?.subject === 'string' ? searchParams.subject : undefined;
  return <ContactForm initialSubject={initialSubject} />;
}


export default function ContactPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  return (
    <div className="space-y-12">
      <PageTitle
        title="Contactez-Nous"
        subtitle="Nous sommes à votre écoute pour toute question ou demande d'information."
      />

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Envoyez-nous un message</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Chargement du formulaire...</div>}>
              <ContactFormWrapper searchParams={searchParams} />
            </Suspense>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Nos Coordonnées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-accent" />
                <a href="mailto:contact@terreform.example.com" className="hover:text-accent transition-colors">contact@terreform.example.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-accent" />
                <a href="tel:+33123456789" className="hover:text-accent transition-colors">+33 1 23 45 67 89</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-accent mt-1" />
                <div>
                  <p>123 Rue de l'Argile</p>
                  <p>75000 Paris, France</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
             <CardHeader>
                <CardTitle className="text-2xl text-primary">Carte</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Emplacement de la carte Google Maps ici</p>
                 {/* Replace with actual Google Maps embed when API key is available */}
                 {/* Example: <iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_PARAMS" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe> */}
                <Image src="https://placehold.co/600x400.png?text=Carte+Google+Maps" alt="Carte" width={600} height={400} className="rounded-md w-full h-auto" data-ai-hint="map location" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

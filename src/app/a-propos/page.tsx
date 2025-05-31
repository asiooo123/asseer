import Image from 'next/image';
import PageTitle from '@/components/PageTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Home } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="space-y-12">
      <PageTitle
        title="À Propos de TerreForm"
        subtitle="Notre passion pour l'argile, notre histoire et notre équipe."
      />

      <section>
        <Card className="shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Heart className="mr-2 h-6 w-6 text-accent"/>Notre Histoire et Philosophie</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              TerreForm est né d'une passion profonde pour l'art de la céramique et le désir de partager la joie de créer avec l'argile. 
              Fondé par des artisans dévoués, notre espace se veut un lieu d'apprentissage, d'expérimentation et de communauté.
            </p>
            <p>
              Nous croyons que travailler l'argile est une expérience méditative et enrichissante, accessible à tous. 
              Notre philosophie repose sur le respect de la matière, l'encouragement de la créativité individuelle et le partage des savoir-faire.
            </p>
            <p>
              Nos valeurs fondamentales sont la patience, la persévérance et la beauté trouvée dans l'imperfection de chaque pièce unique faite à la main.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Users className="mr-2 h-6 w-6 text-accent"/>L'Équipe</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              Notre équipe est composée d'artistes céramistes et de pédagogues passionnés, chacun apportant son expertise unique. 
              Nous sommes là pour vous guider, vous inspirer et vous accompagner dans votre parcours créatif.
            </p>
            {/* Example team member - repeat for more */}
            <div className="flex items-center space-x-4 p-4 border-b border-border">
              <Image src="https://placehold.co/100x100.png" alt="Membre de l'équipe" width={80} height={80} className="rounded-full" data-ai-hint="artist portrait" />
              <div>
                <h4 className="font-semibold text-lg text-primary">Jeanne Céramique</h4>
                <p className="text-sm text-muted-foreground">Fondatrice & Formatrice principale</p>
                <p className="text-xs mt-1">Spécialisée en tournage et émaux haute température.</p>
              </div>
            </div>
             <div className="flex items-center space-x-4 p-4">
              <Image src="https://placehold.co/100x100.png" alt="Membre de l'équipe" width={80} height={80} className="rounded-full" data-ai-hint="craft person" />
              <div>
                <h4 className="font-semibold text-lg text-primary">Léo Modeleur</h4>
                <p className="text-sm text-muted-foreground">Formateur Sculpture & Modelage</p>
                <p className="text-xs mt-1">Passionné par les formes organiques et les techniques de modelage expressif.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Home className="mr-2 h-6 w-6 text-accent"/>Notre Atelier</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Notre atelier est un espace lumineux et inspirant, équipé pour toutes les pratiques de la céramique. 
              Nous disposons de tours de potier, de plans de travail pour le modelage, d'un four professionnel et d'une variété d'outils et d'argiles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-video">
                <Image src="https://placehold.co/600x400.png" alt="Atelier de poterie" layout="fill" objectFit="cover" className="rounded-md" data-ai-hint="pottery studio" />
              </div>
              <div className="relative aspect-video">
                <Image src="https://placehold.co/600x400.png" alt="Salle de formation" layout="fill" objectFit="cover" className="rounded-md" data-ai-hint="art classroom" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AboutPage;

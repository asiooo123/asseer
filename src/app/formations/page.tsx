'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { placeholderCourses, Course } from '@/lib/placeholder-data';
import PageTitle from '@/components/PageTitle';
import { Badge } from '@/components/ui/badge';
import { Filter } from 'lucide-react';

const FormationsPage = () => {
  const [levelFilter, setLevelFilter] = useState<'all' | Course['level']>('all');
  const [formatFilter, setFormatFilter] = useState<'all' | Course['format']>('all');

  const levels: Course['level'][] = ['débutant', 'intermédiaire', 'avancé'];
  const formats: Course['format'][] = ['en ligne', 'présentiel'];

  const filteredCourses = useMemo(() => {
    return placeholderCourses.filter(course => {
      const levelMatch = levelFilter === 'all' || course.level === levelFilter;
      const formatMatch = formatFilter === 'all' || course.format === formatFilter;
      return levelMatch && formatMatch;
    });
  }, [levelFilter, formatFilter]);

  return (
    <div className="space-y-8">
      <PageTitle
        title="Nos Formations"
        subtitle="Développez vos compétences et votre créativité avec nos cours d'argile."
      />

      <Card className="p-6 shadow-lg">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl flex items-center text-primary">
            <Filter className="mr-2 h-6 w-6" /> Filtrer les formations
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="level-filter" className="block text-sm font-medium text-foreground mb-1">Par niveau :</label>
            <Select value={levelFilter} onValueChange={(value: string) => setLevelFilter(value as 'all' | Course['level'])}>
              <SelectTrigger id="level-filter" className="w-full">
                <SelectValue placeholder="Tous les niveaux" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                {levels.map(level => (
                  <SelectItem key={level} value={level} className="capitalize">{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="format-filter" className="block text-sm font-medium text-foreground mb-1">Par format :</label>
            <Select value={formatFilter} onValueChange={(value: string) => setFormatFilter(value as 'all' | Course['format'])}>
              <SelectTrigger id="format-filter" className="w-full">
                <SelectValue placeholder="Tous les formats" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les formats</SelectItem>
                {formats.map(format => (
                  <SelectItem key={format} value={format} className="capitalize">{format}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {filteredCourses.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} id={course.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={course.image} alt={course.title} width={600} height={400} className="w-full h-56 object-cover" data-ai-hint={course.dataAiHint} />
              <CardHeader>
                <CardTitle className="text-primary">{course.title}</CardTitle>
                <div className="flex space-x-2 mt-1">
                  <Badge variant="secondary" className="capitalize">{course.level}</Badge>
                  <Badge variant="outline" className="capitalize">{course.format}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                <p className="text-sm"><strong>Durée :</strong> {course.duration}</p>
                <p className="text-sm"><strong>Tarif :</strong> {course.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact?subject=Inscription formation: ">{`S'inscrire à "${course.title}"`}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg py-8">Aucune formation ne correspond à vos critères de recherche.</p>
      )}
       <Card className="mt-8 p-6 bg-accent/10">
        <CardHeader>
          <CardTitle className="text-accent">Supports Téléchargeables</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Certaines formations peuvent inclure des supports de cours téléchargeables. Ceux-ci seront accessibles après inscription.
          </p>
          <Button variant="outline" disabled>Voir les supports (accès restreint)</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormationsPage;

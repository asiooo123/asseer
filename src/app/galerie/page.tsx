'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { placeholderGalleryItems, GalleryItem } from '@/lib/placeholder-data';
import PageTitle from '@/components/PageTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Maximize, Filter } from 'lucide-react';

const GaleriePage = () => {
  const [categoryFilter, setCategoryFilter] = useState<'all' | GalleryItem['category']>('all');
  
  const categories: GalleryItem['category'][] = ['sculpture', 'poterie', 'modelage'];

  const filteredItems = useMemo(() => {
    if (categoryFilter === 'all') {
      return placeholderGalleryItems;
    }
    return placeholderGalleryItems.filter(item => item.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <div className="space-y-8">
      <PageTitle
        title="Galerie d'Inspirations"
        subtitle="Découvrez les créations issues de nos ateliers et l'imagination de nos artistes."
      />

      <Card className="p-6 shadow-lg mb-8">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl flex items-center text-primary">
           <Filter className="mr-2 h-6 w-6" /> Filtrer par catégorie
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Select value={categoryFilter} onValueChange={(value: string) => setCategoryFilter(value as 'all' | GalleryItem['category'])}>
            <SelectTrigger className="w-full md:w-1/3">
              <SelectValue placeholder="Toutes les catégories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les catégories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category} className="capitalize">{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <DialogTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.dataAiHint}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <Maximize className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </DialogTrigger>
                <CardContent className="p-4">
                  <h3 className="text-lg font-headline text-primary group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                </CardContent>
              </Card>
              <DialogContent className="sm:max-w-[600px] bg-card">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-primary">{item.title}</DialogTitle>
                  <DialogDescription className="capitalize text-muted-foreground">{item.category}</DialogDescription>
                </DialogHeader>
                <div className="relative aspect-video w-full my-4">
                   <Image src={item.imageUrl} alt={item.title} layout="fill" objectFit="contain" data-ai-hint={item.dataAiHint} />
                </div>
                <p className="text-foreground">{item.description}</p>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-4">Fermer</Button>
                </DialogTrigger>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ) : (
         <p className="text-center text-muted-foreground text-lg py-8">Aucune création ne correspond à cette catégorie.</p>
      )}
    </div>
  );
};

export default GaleriePage;

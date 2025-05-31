import PageTitle from '@/components/PageTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RegistrationForm } from './components/RegistrationForm';

export default function InscriptionPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <PageTitle title="Inscription" />
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-primary">Créez votre compte TerreForm</CardTitle>
          <CardDescription>Rejoignez notre communauté et accédez à nos services.</CardDescription>
        </CardHeader>
        <CardContent>
          <RegistrationForm />
        </CardContent>
      </Card>
    </div>
  );
}

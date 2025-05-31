import PageTitle from '@/components/PageTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LoginForm } from './components/LoginForm';

export default function ConnexionPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <PageTitle title="Connexion" />
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-primary">Accédez à votre espace</CardTitle>
          <CardDescription>Connectez-vous pour gérer vos réservations et formations.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

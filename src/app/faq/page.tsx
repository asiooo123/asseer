import PageTitle from '@/components/PageTitle';
import { FaqClient } from './components/FaqClient';

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Foire Aux Questions (FAQ)"
        subtitle="Trouvez rapidement des réponses à vos interrogations grâce à notre assistant intelligent."
      />
      <FaqClient />
    </div>
  );
}

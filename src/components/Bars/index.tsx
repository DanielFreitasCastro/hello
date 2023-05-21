import { Card } from './Card';

export function Bars(): JSX.Element {
  return (
    <section className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-3">
      <Card
        title="Front-end"
        items={[
          { title: 'React', rating: 90 },
          { title: 'Angular', rating: 70 },
          { title: 'Vue', rating: 40 },
        ]}
      />

      <Card
        title="Mobile"
        items={[
          { title: 'React Native', rating: 90 },
          { title: 'Flutter', rating: 30 },
          { title: 'Expo', rating: 50 },
        ]}
      />

      <Card
        title="Back-end"
        items={[
          { title: 'Node', rating: 90 },
          { title: 'Serverless Framework', rating: 90 },
          { title: 'Express', rating: 90 },
          { title: 'Rest API', rating: 90 },
        ]}
      />
    </section>
  );
}

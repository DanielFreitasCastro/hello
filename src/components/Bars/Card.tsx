import { Bar } from './Bar';

interface CardProps {
  title: string;
  items: Array<{
    title: string;
    rating: number;
  }>;
}

export function Card({ title, items }: CardProps): JSX.Element {
  return (
    <div>
      <h3 className="mb-1 text-2xl font-bold text-primary">{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={`${title}_${item.title}`} className="mb-2">
            <h4 className="text-lg">{item.title}</h4>
            <Bar width={item.rating} />
          </li>
        ))}
      </ul>
    </div>
  );
}

interface BarProps {
  width: number;
}

export function Bar({ width = 0 }: BarProps): JSX.Element {
  return (
    <div className="h-1 w-full rounded-full bg-primary/25 ">
      <div
        className={`h-full rounded-full bg-primary`}
        style={{ width: `${width}%` }}></div>
    </div>
  );
}

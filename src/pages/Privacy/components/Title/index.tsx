import type { ReactNode } from 'react';

type ITitleProps = {
  children: ReactNode;
};

export function Title({ children }: ITitleProps) {
  return <h1 className="mt-4 font-bold text-lg">{children}</h1>;
}

import type { ReactNode } from 'react';

type ITextProps = {
  children: ReactNode;
};

export function Text({ children }: ITextProps) {
  return <p className="mt-4 text-justify">{children}</p>;
}

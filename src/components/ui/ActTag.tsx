import type { ReactNode } from "react";

interface ActTagProps {
  children: ReactNode;
}

export function ActTag({ children }: ActTagProps) {
  return <p className="act-tag">{children}</p>;
}

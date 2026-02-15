import type { ReactNode } from "react";

interface BulletProps {
  children: ReactNode;
}

export function Bullet({ children }: BulletProps) {
  return <div className="bullet">{children}</div>;
}

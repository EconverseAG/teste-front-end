"use client";

import { CommerceProvider } from "@/src/shared/store/CommerceContext";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <CommerceProvider>{children}</CommerceProvider>;
}

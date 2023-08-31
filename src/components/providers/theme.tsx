'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { PropsWithChildren, useEffect, useState } from 'react';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};

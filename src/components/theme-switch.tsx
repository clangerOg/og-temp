'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-1">
      <button
        onClick={() => setTheme('light')}
        className={cn(
          'p-2 rounded-full text-primary-500',
          theme == 'light' && 'bg-primary-100'
        )}
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={cn(
          'p-2 rounded-full text-primary-500',
          theme == 'dark' && 'bg-primary-800'
        )}
      >
        <Moon size={20} />
      </button>
    </div>
  );
};

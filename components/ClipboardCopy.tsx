// components/ClipboardCopy.tsx
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Copy, Check } from 'lucide-react';

export default function ClipboardCopy({ baseUrl }: { baseUrl: string }) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${baseUrl}${pathname}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 bg-zinc-200 rounded-full dark:bg-zinc-800 cursor-pointer text-zinc-500 dark:text-zinc-500"
      title="Copy URL"
    >
      
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" /> }
    </button>
  );
}
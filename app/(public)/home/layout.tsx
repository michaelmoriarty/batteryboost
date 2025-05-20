// app/(public)/home/layout.tsx
'use client';

import { Demo7Layout } from '@/app/components/layouts/demo7/layout';

export default function PublicHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Demo7Layout>
      {children}
    </Demo7Layout>
  );
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'diploma',
  description: 'diploma'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
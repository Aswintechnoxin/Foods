import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'service',
  description: 'service'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

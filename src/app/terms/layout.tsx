import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions Page'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'MEETLY',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>{children}</div>
  )
}

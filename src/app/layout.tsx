import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Modern app with App Router',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = "bg-black" >
        <Navbar />
        <Link href = "/"></Link>
        <main>{children}</main>
      </body>
    </html>
  );
}

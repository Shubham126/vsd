import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'VSD',
  description: 'Engineering and Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = "bg-black md:px-12 lg:px-16" >
        <Navbar />
        <Link href = "/"></Link>
        <main>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';  // Optional: Global styles (create if needed)

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
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '3rem' }}>
            <li className = "text-white" ><Link href="/">Home</Link></li>
            <li className = "text-white" ><Link href="/about">About</Link></li>
            <li className = "text-white" ><Link href="/contact">Contact Me</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

import { GeistSans } from 'geist/font/sans';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      {/* We apply Geist globally, and we'll use a custom utility class for Apple fonts where needed */}
      <body className="antialiased bg-neutral-950 text-white">
        {children}
      </body>
    </html>
  );
}
// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Zynex Studio — Digital Creative Agency',
  description:
    'Premium websites, branding & automation solutions for startups and growing businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
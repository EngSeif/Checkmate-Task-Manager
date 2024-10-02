import "./globals.css";
import logo from './favicon.ico';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={logo.src} />
      </head>
      <body>{children}</body>
    </html>
  );
}

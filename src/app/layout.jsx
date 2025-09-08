import './globals.css';

export const metadata = {
  title: 'Auth Test',
  description: 'An authentication page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

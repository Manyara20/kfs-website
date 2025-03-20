
import "./styles/globals.css";



export const metadata = {
  title: 'Kenya Forest Service',
  description: 'Trees For Better Lives',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

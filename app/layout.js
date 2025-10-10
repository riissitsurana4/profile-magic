import "./globals.css";
export const metadata = {
  title: "Profile Magic",
  description: "My profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

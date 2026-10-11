import type {ReactNode} from "react";

export const metadata = {title: "Lighthouse log", description: "A Next.js test app for Strux."};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body style={{margin: 0, fontFamily: "system-ui, sans-serif", background: "#0b1220", color: "#e6edf6"}}>
        <main style={{maxWidth: 680, margin: "0 auto", padding: "48px 20px"}}>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Lato, Bitter} from "next/font/google";
import "./globals.css";
import ThemeModeButton from "@/components/ui/ThemeModeButton";
import { ThemeProvider } from "next-themes";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bitter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raid Wings",
  description: "Raid Wings TTRPG",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${bitter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          storageKey="raid-wings-theme"
        >
          {children}
          <ThemeModeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

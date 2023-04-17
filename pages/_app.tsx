import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Inter } from "next/font/google";
import ScrollUp from "@/components/ScrollUp";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <NextNProgress
        color="#951B81"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />

      <Component {...pageProps} />
      <ScrollUp />
    </main>
  );
}

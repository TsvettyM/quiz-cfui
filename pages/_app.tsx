import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/global.css";
import axios from "axios";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = "https://quiz-kappa-eosin.vercel.app/api";

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>

      <main className={beVietnamPro.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

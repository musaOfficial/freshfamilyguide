import "@/styles/globals.css";
import AuthProviders from "./api/Providers";
import { Roboto } from "next/font/google";
const inter = Roboto({ subsets: ["latin"], weight: ["100", "300", "500", "700", "900"] });
export default function App({ Component, pageProps }) {
  return (<main className={inter.className}>
    <AuthProviders>
    <Component {...pageProps} />
    </AuthProviders>
  </main>);
}

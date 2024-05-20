import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Header from "@/components/ui/Header";
import RichTextEditor from "@/components/tools/RichTextEditor";
import Forum from "@/components/pages/Forum";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "300", "500", "700", "900"] });

export default function Home() {



  return (
    <>
      <Head>
        <title>Freshfamilyguide | Homepage</title>
        <meta name="description" content="Homepage of freshfamilyguide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Forum />
    </>
  );
}
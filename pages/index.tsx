import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { HomeCardProps } from "../types";
import { CardDataList } from "../utils/constant";

const HomeCard = ({ title, desc, url, openNewTag = true }: HomeCardProps) => {
  const isA = ["http", "https"].includes(url.split(":")[0]);
  if (isA) {
    return (
      <a href={url} target={openNewTag ? "_blank" : ""} rel="noreferrer">
        <div className={styles.card}>
          <>
            <h2>{title} &rarr;</h2>
            <p>{desc}</p>
          </>
        </div>
      </a>
    );
  }
  return (
    <Link href={url} passHref>
      <div className={styles.card}>
        <>
          <h2>{title} &rarr;</h2>
          <p>{desc}</p>
        </>
      </div>
    </Link>
  );
};

const Home: NextPage = () => {
  return (
    <div className="py-8 px-8">
      <Head>
        <title>Toys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 px-0 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-center m-0 text-6xl">
          Welcome to <span className="text-blue-500">My Toys Space!</span>
        </h1>

        <p className="text-center my-16 mx-0 text-2xl">
          <code className="bg-[#fafafa] rounded-[5px] p-3 text-xl font-next">
            Just for fun
          </code>
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-[800px]">
          {CardDataList.map((item) => {
            return <HomeCard key={item.url} {...item} />;
          })}
        </div>
      </main>

      <footer className="flex flex-1 py-8 px-0 border-t-2 border-solid border-[#eaeaea] justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center grow"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

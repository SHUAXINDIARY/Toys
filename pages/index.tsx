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
    <div className={styles.container}>
      <Head>
        <title>Toys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https:/blog.shuaxindiary.cn"
            target="_blank"
            rel="noreferrer"
          >
            My Toys Space!
          </a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Just for fun</code>
        </p>

        <div className={styles.grid}>
          {CardDataList.map((item) => {
            return <HomeCard key={item.url} {...item} />;
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

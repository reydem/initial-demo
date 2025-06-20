// /webapps/next/next/01-initial-demo/components/layouts/MainLayout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Fernando</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};
import Head from "next/head";
import { FC } from "react";
import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Animalio - Show your pet to the world</title>
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;

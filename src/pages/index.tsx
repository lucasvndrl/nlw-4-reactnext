import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { CountdownContextProvider } from "../contexts/CountdownContext";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";

import styles from "../styles/pages/Home.module.css";
import { Countdown } from "../components/Countdown/Countdown";

import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Ronaldo</title>
      </Head>
      <ExperienceBar />
      <CountdownContextProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownContextProvider>
    </div>
  );
}

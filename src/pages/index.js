import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortchut icon" href="favicon.png" type="image/x-icon"/>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}

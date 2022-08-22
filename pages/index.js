import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Charles Maynard C. Yabut</b>. Hello, Good Day! and Welcome to my Blog! MAYNARD is a Computer Engineering Student from University of the Assumption. His daily hobbies includes Basketball, Online Games, watching Korean Stuffs and Animes. 
        
        <Link href="https://www.facebook.com/Maynard.Yabut24/"> Facebook.</Link></p>
        <p>
        </p>
      </section>
    </Layout>
  );
}
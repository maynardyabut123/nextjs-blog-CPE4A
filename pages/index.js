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
<p><b>Contact Information:</b></p>

      <p><Link href="https://https://www.facebook.com/Maynard.Yabut24/">Facebook Page</Link></p>

      <p><b>Description:</b></p>
      <div>
      <p style={{textAlign: "justify"}}>
      <p>A Computer Engineer will be tasked to develop and design computer-related equipment for commercial and industrial use. a Computer Engineer must keep up with the dynamic nature of the industry. having good programming ability, scientific problem solving ability, understanding and troubleshooting a problem, logical reasoning.  </p>
      </p>
      </div>

      <p><b>Skills:</b></p>

      <li>Knowledgeable Video Editing.</li>
      <li>Computer Networking Skills.</li>
      <li>Capable of editing videos. </li>
      <li>Training and Development Skills.</li>
      <li>Problem Solving. </li>
      <li>Time Management Skills.</li>


      <p><b>Educational Attainment:</b></p>
      <div>
        <p style={{textAlign: "left"}}><b>Tertiary</b></p>
        <p style={{textAlign: "center"}}>
        Bachelor of Science in Computer Engineering (Degree)
        </p>
        <p style={{textAlign: "center"}}>
        <i>University of the Assumption Unisite Subdivision,</i>
        </p>
        <p style={{textAlign: "center"}}>
        <i>Barangay Del Pilar, City of San Fernando Pampanga</i>
        </p>
        <p style={{textAlign: "center"}}>
        <i>2019-Present</i>
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Secondary</b></p>
        <p style={{textAlign: "center"}}>
        <i>Saint Nicholas Academy : CCEI</i>
        </p>
        <p style={{textAlign: "center"}}>
        <i>San Nicholas. Poblacion, Macabebe, Pampanga</i>
        </p>
        <p style={{textAlign: "center"}}>
        <i>2017-2019 (Senior High School)</i>
        </p><br></br>
        <p style={{textAlign: "center"}}>
        <i>Saint Nicholas Academy : CCEI </i>
        </p>
        <p style={{textAlign: "center"}}>
        <i>San Nicholas. Poblacion, Macabebe, Pampanga </i>
        </p>
        <p style={{textAlign: "center"}}>
        <i>2013-2017 (Junior High School)</i>
        </p>
      </div>

        <div>
        <p style={{textAlign: "left"}}><b>Primary</b></p>
        <p style={{textAlign: "center"}}>
        <i>Saint Michael School.</i>
        </p>
        <p style={{textAlign: "center"}}>
        <i>Poblacion Municipal Rd, Masantol, Pampanga</i>
        </p>
        <p style={{textAlign: "center"}}>
        <i>2006-2013</i>
        </p>
      </div>



        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
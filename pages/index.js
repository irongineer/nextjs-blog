import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a programmer at an HR Tech company. Has experience in developing
          face search photo sales apps, health management apps, and side
          business platform apps as a side business. TypeScript / Java / React /
          RN / Vue / Jest / AWS / Serverless / CDK / OIDC etc. Designing,
          studying DDD. My hobbies are health and triathlon. Experienced in
          completing the IRONMAN race
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

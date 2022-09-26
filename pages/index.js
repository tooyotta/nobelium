import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import LinkEx from "/components/link-ex"
import HeadingLine from '/components/heading-line';
import TimeLineExperience from '/components/timeline-experience';
import TimeLineEducation from '/components/timeline-education';
import GradientBox from '/components/gradient-box';
import SocialSet from '/components/social-set';
import SocialMail from '/components/social-mail';
import RecommendModule from '../components/recommend-module';
import { useTranslate } from '/hooks/use-translate';

export default function Home() {
    const { t } = useTranslate()
    return (
        <>
            <Head>
                <title>Link | Naoya Toyota</title>
            </Head>
            <div className='my-2 grid gap-8 font-medium text-gray-900'>
              <div className='my-4 grid gap-8'>
                <section className=''>
                  <h1 className='mb-2 text-3xl font-bold'>I&apos;m Toyota 🖖🏻</h1>
                    <p className=''>
                      <b>Naoya Toyota</b> is a software developer, product manager, trekker and skier lives in Tsukuba, Japan.
                    </p>
                    <Link href={'/about'} passHref>
                      <a className=''>{t.SEE_MORE}</a>
                    </Link>
                </section>  
              <section className='grid sm:grid-cols-3'>
              <div className='sm:col-span-2'>
                <RecommendModule title='📌'>
                  <div className='grid gap-3'>
                    <LinkEx href='https://medium.dotsarc.com/%E4%B8%96%E3%81%AE%E4%B8%AD%E3%81%AB%E3%81%AF2%E7%A8%AE%E9%A1%9E%E3%81%AEcpu%E3%81%8C%E3%81%82%E3%82%8B-cisc%E3%81%A8risc%E3%81%A0-a9a69d5d9275'>
                      <a target="_blank" rel="noopener noreferrer">
                        <span className='block text-lg font-bold display'>Mediumに書いた人気記事</span>
                        <span className='block text-lg'>「世の中には2種類のCPUがある。 CISCとRISCだ。」</span>
                      </a>
                    </LinkEx>
                  </div>
                </RecommendModule>
              </div>
            </section>
              <section className=''>
                <div className='m-auto py-1 bg-white rounded-3xl bg-opacity-50'>
                  <SocialSet />
                  <SocialMail />
                </div>
                </section>
              </div>
            </div>
        </>
    );
};
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
import { useTranslate } from '/hooks/use-translate';

export default function Home() {
    const { t } = useTranslate()
    return (
        <>
            <Head>
                <title>about | Naoya Toyota</title>
            </Head>
            <div className='my-2 grid gap-8 font-medium text-gray-900'>
                <section>
                    <GradientBox>
                        <div className='grid gap-2'>
                            <div className='grid md:grid-cols-3 gap-1'>
                                <div className='m-auto'>
                                    <div class="m-auto w-4/5">
                                        <Image src="/about-img/aboutme.png" alt="profile image" width={300} height={300} />
                                    </div>
                                    <div>
                                        <h1 className='text-3xl font-bold text-center'>Naoya Toyota</h1>
                                        <h2 className='text-xl font-medium text-center text-gray-600'>豊田 直哉</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-2 grid-rows-3'>
                                    <p className='p-2 mt-2 sm:py-10 inline-block align-middle'>
                                        <b>{t.AUTHOR_NAME_EN}</b>  &nbsp;
                                        {t.AUTHOR_DESC}
                                    </p>
                                    <div className='m-auto py-1 bg-white rounded-3xl bg-opacity-50'>
                                            <SocialSet />
                                            <SocialMail />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GradientBox>
                </section>

                <section>
                    <HeadingLine>
                        <h2>Skills</h2>
                    </HeadingLine>
                    <div className='prose'>
                        <ul>
                            <li>
                                <span className='inline'>
                                    React, Python
                                </span>
                                <span className='ml-2 text-sm'>
                                    (The website was built with React. &nbsp;
                                   <LinkEx href='https://github.com/tooyotta/toyotaim'>
                                    source code
                                    </LinkEx>
                                    )
                                </span>
                            </li>
                            <li>Skiing, Trekking</li>
                            <li>Making curry</li>
                        </ul>
                    </div>
                </section>

                <section className=''>
                    <HeadingLine>
                        <h2>Interest</h2>
                    </HeadingLine>
                    <div className='prose'>
                        <ul>
                            <li>Human-computer interaction</li>
                            <li>Knowledge management</li>
                            <li>Product management</li>
                            <li>Skiing</li>
                            <li>Trekking</li>
                            <li>Apple product</li>
                            <li>YouTube</li>
                            <li>学費回収</li>
                        </ul>
                    </div>
                </section>

                <section className=''>
                    <HeadingLine>
                        <h2>Experience</h2>
                    </HeadingLine>
                    <TimeLineExperience />
                </section>

                <section className=''>
                    <HeadingLine>
                        <h2>Education</h2>
                    </HeadingLine>
                    <TimeLineEducation />
                </section>

                <section className=''>
                    <HeadingLine>
                        <h2>Works & Projects</h2>
                    </HeadingLine>
                    <div className='prose'>
                        <ul>
                            <li>attractor.fm</li>
                            <li>からあげドン</li>
                            <li>ビジネスコンテストのやつ</li>
                            <li>アガタディア</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};
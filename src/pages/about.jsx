import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
    const metaDescription = `I'm Eluert Mukja. I live in London, where build the future of web.`;
  return (
    <>
      <Head>
        <title>About - Eluert Mukja</title>
        <meta
          name="description"
          content={metaDescription}
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {`I'm`} Eluert Mukja. I live in London, where build the future of web.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hi there! My name is Eluert Mukja and {`I'm`} a lead software engineer based in London, United Kingdom.
                {`I've`} always been passionate about computers and technology, and that passion led me to pursue a career in software engineering. {`I'm`} excited to share my knowledge and experience with you and look forward to connecting.
              </p>
              <p>
                I began my career as a junior software engineer, honing my skills and learning from more experienced colleagues.
                I quickly progressed to a mid-level role, where I was given more responsibilities and opportunities to lead projects.
              </p>

              <p>
                Over the years, I have gained a wealth of experience in various programming languages and technologies.
                I am particularly skilled in PHP and Javascript, and have experience with a variety of frameworks and libraries.
              </p>
              <p>
                As a lead software engineer, I now take on a management role,
                overseeing the development of software projects and mentoring junior engineers.
                I am committed to delivering high-quality, efficient and maintainable software solutions,
                while ensuring that the team is motivated and productive.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/mukja_e" target="_blank" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/Erth0" icon={GitHubIcon} target="_blank" className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/eluert-mukja/" icon={LinkedInIcon} target="_blank" className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:contact@mukja.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@mukja.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

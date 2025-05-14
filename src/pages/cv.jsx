import Head from 'next/head'
import Link from 'next/link'
import { Skill } from '@/components/Skill'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import clsx from 'clsx'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
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

function LocationPinIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function TelephoneIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function CV() {
  return (
    <>
      <Head>
        <title>CV - Eluert Mukja</title>
        <meta name="description" content="Thank you for checking out my CV" />
      </Head>
      <div className="page print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 mx-auto max-w-5xl bg-white p-6 dark:bg-zinc-900 sm:p-9 md:p-16">
        <header className="mb-8 flex items-center md:mb-11">
          <div
            className="initials-container mr-5 rounded bg-teal-600 px-3 text-base font-medium leading-none text-white"
            style={{
              paddingBottom: '0.6875rem',
              paddingTop: '0.6875rem',
            }}
          >
            <div
              className="initial text-center"
              style={{ paddingBottom: '0.1875rem' }}
            >
              E
            </div>
            <div className="initial text-center">M</div>
          </div>
          <h1 className="pb-px text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Eluert Mukja
          </h1>
        </header>

        <div className="col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">
          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                ABOUT ME
              </h2>
              <section className="mb-4 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    Senior Software Engineer
                  </h3>
                </header>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  As a senior full stack web developer, I have accrued a wealth
                  of knowledge and skills that I put to use developing
                  cutting-edge platforms. I continue to expand my knowledge and
                  skills constantly, figuring out new ways to push the limits of
                  web technology. Passionate about computer science, I have
                  learned more and more since completing my computer science
                  degree. I am a strong believer in the value of ongoing
                  education, embracing a mindset grounded in curiosity and
                  vigor. Pushing myself, I strive to do projects that I can be
                  proud of.
                </p>
              </section>
            </div>
          </section>

          <section className="print:col-count-1 mt-8 grid grid-cols-1 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                EXPERIENCE
              </h2>
              <section className="mb-4 break-inside-avoid">
                <header>
                  <h3 className="leading-snugish text-lg font-semibold text-gray-700 dark:text-gray-200">
                    360AI
                  </h3>
                  <p className="text-md leading-normal text-gray-600 dark:text-gray-300">
                    Apr 2025 – Present | Co-Founder & CTO
                  </p>
                </header>
                <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Lead the design, development, and deployment of 360AI’s core
                  platform, enabling companies to source and hire top tech
                  talent 10X faster using AI-powered sourcing and accurate data.
                </p>
                <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Own the overall technical strategy, system architecture, and
                  infrastructure decisions to ensure scalability, reliability,
                  and high performance.
                </p>
                <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Collaborate closely with the CEO to align product development
                  with business goals, ensuring rapid iteration, clear
                  prioritisation, and user-driven outcomes.
                </p>
                <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Build and maintain full-stack features across the platform,
                  from frontend interfaces to backend services and data
                  pipelines.
                </p>
                <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Define and implement engineering best practices, including
                  code quality standards, testing strategies, and CI/CD
                  processes.
                </p>
                <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Manage and optimise databases and data workflows, ensuring
                  fast and accurate access to enriched candidate and company
                  data.
                </p>
                <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Prepare the engineering foundation for future team growth by
                  documenting processes, planning for scale, and contributing to
                  early hiring decisions.
                </p>
              </section>
            </div>
            <section className="mb-4 break-inside-avoid">
              <header>
                <h3 className="leading-snugish text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Talentic Ltd
                </h3>
                <p className="text-md leading-normal text-gray-600 dark:text-gray-300">
                  Apr 2023 – Mar 2025 | Lead Software Engineer
                </p>
              </header>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Ensured tight cooperation with other engineer and designers
                through active listening, systematic communication, and
                leadership skills.
              </p>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Fixed bugs and problems across the entire 360WORK&apos;s
                codebase in an efficient, timely manner.
              </p>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Manage multiple and sometimes competing priorities and tasks
                within work team.
              </p>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Lead a team developing high quality software solutions.
              </p>
            </section>

            <section className="mb-4 break-inside-avoid">
              <header>
                <h3 className="leading-snugish text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Prolancer
                </h3>
                <p className="text-md leading-normal text-gray-600 dark:text-gray-300">
                  Jun 2018 – March 2023 | Senior Software Engineer
                </p>
              </header>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Designed and developed a robust payment system integrating
                Stripe to enable seamless, secure transactions across the
                platform.
              </p>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Architected and implemented a comprehensive payouts system to
                efficiently manage disbursements to multiple stakeholders.
              </p>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Developed complex funds distribution logic to ensure accurate
                allocation and tracking of payments within the platform.
              </p>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Collaborated closely with cross-functional teams to align
                payment workflows with business requirements and compliance
                standards.
              </p>
              <p className="text-md mt-2 leading-normal text-gray-700 dark:text-gray-200">
                <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                  ›
                </span>
                Ensured high reliability, scalability, and security of financial
                operations through rigorous testing and continuous optimization.
              </p>
            </section>
            <section className="mb-4 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  COINS (Construction Industry Solutions Ltd)
                </h3>
                <p className="text-md text-zinc-600 dark:text-zinc-300">
                  Feb 2017 – Apr 2018 | Software Developer
                </p>
              </header>
              <ul className="">
                <li className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Participated in creating scalable systems for supply chain.
                </li>
                <li className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Resolve complex technical design issues.
                </li>
                <li className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Gave weekly reports to executive management regarding current
                  developments, and tracked changes in existing software.
                </li>
              </ul>
            </section>
            <section className="mb-4 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Exnet Hellas
                </h3>
                <p className="text-md text-zinc-600 dark:text-zinc-300">
                  May 2015 – Dec 2016 | Junior Software Developer (Internship)
                </p>
              </header>
              <ul className="">
                <li className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Maintained and updated HTML/CSS templates on a regular basis
                  and as required.
                </li>
                <li className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Developing static and dynamic websites.
                </li>
                <li className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Developing e-shops with wordpress.
                </li>
                <li className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3">
                    ›
                  </span>
                  Developing custom CMS(Content Management System).
                </li>
              </ul>
            </section>
          </section>
          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                EDUCATION
              </h2>
              <section className="mb-4 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    IEK AKMI
                  </h3>
                  <p className="text-md text-zinc-600 dark:text-zinc-300">
                    2014 – 2016 | Vocational training diploma (IEK) in Computer
                    Science
                  </p>
                </header>
              </section>
            </div>
            <section className="mb-4 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  2 EPAL KATERINIS
                </h3>
                <p className="text-md text-zinc-600 dark:text-zinc-300">
                  2011 – 2014 | Vocational upper secondary school (EPAL) in
                  Computer Science
                </p>
              </header>
            </section>
          </section>

          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                SKILLS
              </h2>
              <section className="mb-4 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    Main
                  </h3>
                </header>
                <div className="my-3 last:pb-2">
                  <ul className="text-md -mb-2 -mr-2 flex flex-wrap leading-relaxed">
                    <Skill name="PHP" />
                    <Skill name="MYSQL" />
                    <Skill name="ELASTICSEARCH" />
                    <Skill name="JAVASCRIPT" />
                    <Skill name="CSS" />
                    <Skill name="HTML" />
                  </ul>
                </div>
              </section>
            </div>

            <section className="mb-4 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Frameworks, Libraries & CMS
                </h3>
              </header>
              <div className="my-3 last:pb-2">
                <ul className="text-md -mb-2 -mr-2 flex flex-wrap leading-relaxed">
                  <Skill name="LARAVEL" />
                  <Skill name="INERTIAJS" />
                  <Skill name="LIVEWIRE" />
                  <Skill name="VUE" />
                  <Skill name="JQUERY" />
                  <Skill name="BOOTSTRAP" />
                  <Skill name="AJAX" />
                  <Skill name="TAILWINDCSS" />
                  <Skill name="WORDPRESS" />
                </ul>
              </div>
            </section>

            <section className="mb-4 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Other
                </h3>
              </header>
              <div className="my-3 last:pb-2">
                <ul className="text-md -mb-2 -mr-2 flex flex-wrap leading-relaxed">
                  <Skill name="GIT" />
                  <Skill name="SASS" />
                  <Skill name="API INTEGRATIONS" />
                  <Skill name="DevOps" />
                  <Skill name="JSON" />
                  <Skill name="AJAX" />
                  <Skill name="XML" />
                  <Skill name="SCRUM" />
                  <Skill name="AWS" />
                  <Skill name="ORACLE" />
                  <Skill name="FORGE" />
                  <Skill name="ENVOYER" />
                  <Skill name="STRIPE" />
                  <Skill name="PAYPAL" />
                  <Skill name="WORLDPAY" />
                  <Skill name="CI/CD" />
                  <Skill name="PHPSTAN" />
                  <Skill name="Laravel NOVA" />
                </ul>
              </div>
            </section>
          </section>
          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                CONTACT
              </h2>
              <section className="mb-4 break-inside-avoid">
                <ul className="list-inside pr-7">
                  <SocialLink
                    href="https://github.com/Erth0"
                    target="_blank"
                    icon={GitHubIcon}
                  >
                    https://github.com/Erth0
                  </SocialLink>
                  <SocialLink
                    href="https://twitter.com/mukja_e"
                    target="_blank"
                    icon={TwitterIcon}
                    className="mt-4"
                  >
                    https://twitter.com/mukja_e
                  </SocialLink>
                  <SocialLink
                    href="https://linkedin.com/in/eluert-mukja/"
                    icon={LinkedInIcon}
                    target="_blank"
                    className="mt-4"
                  >
                    https://linkedin.com/in/eluert-mukja/
                  </SocialLink>
                  <SocialLink
                    href="mailto:hey@mukja.dev"
                    target="_blank"
                    icon={MailIcon}
                    className="mt-4"
                  >
                    hey@mukja.dev
                  </SocialLink>
                  <SocialLink
                    href="https://www.google.com/maps/place/London/@51.5286416,-0.1015987,11z/data=!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862"
                    target="_blank"
                    icon={LocationPinIcon}
                    className="mt-4"
                  >
                    London, United Kingdom
                  </SocialLink>
                  <SocialLink
                    href="tel:07464816930"
                    target="_blank"
                    icon={TelephoneIcon}
                    className="mt-4"
                  >
                    (+44) 7464816930
                  </SocialLink>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

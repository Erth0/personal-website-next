import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Skill } from '@/components/Skill'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import clsx from 'clsx'
import avatarImage from '@/images/avatar.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-4 w-4 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-2">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
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

function GlobeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function CV() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Function to check if dark mode is active
    const checkDarkMode = () => {
      // Check if document has dark class (for manual theme switching)
      if (document.documentElement.classList.contains('dark')) {
        return true
      }
      // Check system preference
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        return true
      }
      return false
    }

    // Set initial state
    setIsDarkMode(checkDarkMode())

    // Listen for changes in system theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setIsDarkMode(checkDarkMode())

    mediaQuery.addListener(handleChange)

    // Listen for manual theme changes (if using a theme switcher)
    const observer = new MutationObserver(() => {
      setIsDarkMode(checkDarkMode())
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      mediaQuery.removeListener(handleChange)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Head>
        <title>CV - Eluert Mukja</title>
        <meta name="description" content="Thank you for checking out my CV" />
      </Head>
      <div className="page print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 mx-auto max-w-5xl bg-white p-6 dark:bg-zinc-900 print:bg-white sm:p-9 md:p-16">
        <header className="mb-8 md:mb-10">
          {/* Main Profile Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={avatarImage}
                  alt="Eluert Mukja"
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                  Eluert Mukja
                </h1>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 md:text-base">
                  Senior Full Stack Developer
                </p>
                <div className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-300">
                  <LocationPinIcon className="h-3 w-3" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Social Links - Screen Only */}
            <div className="flex items-center gap-3 print:hidden">
              <a
                href="https://github.com/Erth0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white print:text-zinc-300"
                title="GitHub"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/eluert-mukja/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white print:text-zinc-300"
                title="LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/mukja_e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-gray-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white print:text-zinc-300"
                title="X (formerly Twitter)"
              >
                <XIcon className="h-6 w-6" />
              </a>
              <div className="mx-2 h-6 w-px bg-zinc-300 dark:bg-zinc-500"></div>
              <a
                download={`eluert-mukja-cv.pdf`}
                href={isDarkMode ? '/resume-dark.pdf' : '/resume.pdf'}
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-teal-50 hover:text-teal-600 dark:text-zinc-200 dark:hover:bg-teal-900/40 dark:hover:text-teal-400 print:text-zinc-300"
                title="Download CV as PDF"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>

            {/* Social Links - Print Only */}
            <div className="hidden print:flex print:flex-col print:gap-1 print:text-xs dark:print:text-zinc-300">
              <a
                href="https://github.com/Erth0"
                className="flex items-center gap-2 print:no-underline dark:print:text-zinc-300"
              >
                <GitHubIcon className="h-3 w-3" />
                <span>https://github.com/Erth0</span>
              </a>
              <a
                href="https://linkedin.com/in/eluert-mukja/"
                className="flex items-center gap-2 print:no-underline dark:print:text-zinc-300"
              >
                <LinkedInIcon className="h-3 w-3" />
                <span>https://linkedin.com/in/eluert-mukja/</span>
              </a>
              <a
                href="https://x.com/mukja_e"
                className="flex items-center gap-2 print:no-underline dark:print:text-zinc-300"
              >
                <XIcon className="h-3 w-3" />
                <span>https://x.com/mukja_e</span>
              </a>
            </div>
          </div>

          {/* Contact Info Row */}
          <div className="mt-4 flex flex-wrap items-center gap-6 border-b border-zinc-200 pb-6 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300 print:border-zinc-300 dark:print:text-zinc-300">
            <a
              href="mailto:hey@mukja.dev"
              className="flex items-center gap-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400 dark:print:text-zinc-300"
            >
              <MailIcon className="h-4 w-4 print:h-3 print:w-3" />
              <span>hey@mukja.dev</span>
            </a>
            <a
              href="tel:07464816930"
              className="flex items-center gap-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400 dark:print:text-zinc-300"
            >
              <TelephoneIcon className="h-4 w-4 print:h-3 print:w-3" />
              <span>(+44) 7464816930</span>
            </a>
            <a
              href="https://mukja.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400 dark:print:text-zinc-300"
            >
              <GlobeIcon className="h-4 w-4 print:h-3 print:w-3" />
              <span>mukja.dev</span>
            </a>
          </div>
        </header>

        <div className="col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">
          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                ABOUT ME
              </h2>
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Senior Full Stack Developer with 9+ years of experience
                delivering scalable, high-quality web applications, primarily
                using Laravel, PHP, and MySQL. I specialize in backend
                architecture, complex APIs, and modern frontend development with
                Vue 3, Inertia.js, and React. While my core expertise lies in
                the Laravel ecosystem, I&apos;m also proficient with Node.js and
                Express.js. I bring hands-on experience with Elasticsearch, AWS,
                Oracle Cloud, and Hetzner infrastructure, along with solid
                DevOps skills to ensure smooth deployment and scalability.
                Passionate about clean code, performance, and building software
                that drives real value.
              </p>
            </div>
          </section>

          <section className="print:col-count-1 mt-8 grid grid-cols-1 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                EXPERIENCE
              </h2>
            </div>

            <section className="mb-6 break-inside-avoid">
              <header>
                <h3 className="leading-snugish text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Talentic Ltd
                </h3>
                <p className="text-md leading-normal text-gray-600 dark:text-gray-300">
                  Lead Software Engineer | Apr 2023 – Mar 2025
                </p>
              </header>
              <p className="sm:text-md mt-2 text-sm leading-normal text-gray-700 dark:text-gray-200">
                Lead developer of a scalable AI-driven recruitment platform
                handling massive real-time datasets.
              </p>
              <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  Led a team of 4 engineers building high-scale infrastructure
                  to process and manage 150M+ records.
                </li>
                <li>
                  Architected backend systems using Laravel, MySQL, and
                  Elasticsearch for real-time and batch processing.
                </li>
                <li>
                  Developed full-stack features using Vue 3, Inertia.js, and
                  Tailwind CSS with a focus on performance and usability.
                </li>
                <li>
                  Designed and maintained CI/CD pipelines and
                  infrastructure-as-code workflows using AWS and Hetzner.
                </li>
                <li>
                  Managed DevOps tasks, cloud cost optimization, and production
                  monitoring for critical services.
                </li>
                <li>
                  Collaborated with product managers and designers to align
                  technical delivery with business goals.
                </li>
              </ul>
            </section>

            <section className="mb-6 break-inside-avoid">
              <header>
                <h3 className="leading-snugish text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Prolancer
                </h3>
                <p className="text-md leading-normal text-gray-600 dark:text-gray-300">
                  Senior Software Engineer | Jun 2018 – Mar 2023
                </p>
              </header>
              <p className="sm:text-md mt-2 text-sm leading-normal text-gray-700 dark:text-gray-200">
                Senior engineer on a freelancer marketplace platform supporting
                complex payments and user workflows.
              </p>
              <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  Owned and scaled the entire payments and payouts system using
                  Stripe, PayPal, and Worldpay — processing six-figure monthly
                  transaction volumes.
                </li>
                <li>
                  Built modular Laravel services with custom fund distribution
                  and multi-party payout logic.
                </li>
                <li>
                  Implemented Elasticsearch for advanced search, analytics, and
                  reporting features.
                </li>
                <li>
                  Developed dynamic dashboards and internal tooling using Vue.js
                  and Livewire.
                </li>
                <li>
                  Collaborated with operations and compliance teams to ensure
                  accuracy and integrity of financial workflows.
                </li>
                <li>
                  Led technical decisions and code reviews across multiple
                  cross-functional projects.
                </li>
              </ul>
            </section>

            <section className="mb-6 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  COINS (Construction Industry Solutions Ltd)
                </h3>
                <p className="text-md text-zinc-600 dark:text-zinc-300">
                  Software Developer | Feb 2017 – Apr 2018
                </p>
              </header>
              <p className="sm:text-md mt-2 text-sm leading-normal text-gray-700 dark:text-gray-200">
                Developer on ERP software products used in the construction
                industry.
              </p>
              <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  Contributed to core backend features for large-scale supply
                  chain and finance modules.
                </li>
                <li>
                  Resolved performance bottlenecks and technical issues in
                  production-critical systems.
                </li>
                <li>
                  Participated in refactoring legacy codebases to modernize
                  internal architecture.
                </li>
                <li>
                  Communicated regularly with product and QA teams to ensure
                  timely and stable feature delivery.
                </li>
              </ul>
            </section>

            <section className="mb-6 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Exnet Hellas
                </h3>
                <p className="text-md text-zinc-600 dark:text-zinc-300">
                  Junior Software Developer (Internship) | May 2015 – Dec 2016
                </p>
              </header>
              <p className="sm:text-md mt-2 text-sm leading-normal text-gray-700 dark:text-gray-200">
                Full-stack developer building websites and custom CMS platforms
                for small businesses.
              </p>
              <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  Built responsive static and dynamic websites using PHP,
                  HTML/CSS, and WordPress.
                </li>
                <li>
                  Developed and customized e-commerce features and CMS
                  functionality for clients.
                </li>
                <li>
                  Maintained clean, reusable frontend templates and optimized
                  for SEO and performance.
                </li>
                <li>
                  Gained real-world experience delivering web solutions in a
                  client-facing role.
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
                  <h3 className="leading-snugish text-lg font-semibold text-gray-700 dark:text-gray-200">
                    IEK AKMI
                  </h3>
                  <p className="text-md leading-normal text-gray-600 dark:text-gray-300">
                    2014 – 2016 | Vocational training diploma (IEK) in Computer
                    Science
                  </p>
                </header>
              </section>
            </div>
            <section className="mb-4 break-inside-avoid">
              <header>
                <h3 className="leading-snugish text-lg font-semibold text-gray-700 dark:text-gray-200">
                  2 EPAL KATERINIS
                </h3>
                <p className="text-md leading-normal text-gray-600 dark:text-gray-300">
                  2011 – 2014 | Vocational upper secondary school (EPAL) in
                  Computer Science
                </p>
              </header>
            </section>
          </section>
          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                LANGUAGES
              </h2>
              <div className="flex gap-8">
                <div>
                  <div className="text-sm font-medium text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    English
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 dark:print:text-zinc-400">
                    Professional Working
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    Greek
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 dark:print:text-zinc-400">
                    Native or Bilingual
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    Albanian
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 dark:print:text-zinc-400">
                    Native or Bilingual
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-teal-700">
                SKILLS
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    Backend & Languages
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 dark:print:text-zinc-400">
                    PHP, Laravel, MySQL, PostgreSQL, Elasticsearch, Redis,
                    Node.js, Express.js, API Development, REST APIs, Database
                    Migration, Internationalization
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    Frontend & UI
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 dark:print:text-zinc-400">
                    JavaScript, Vue.js, React, Inertia.js, Livewire, Tailwind
                    CSS, HTML5, CSS3, SASS, Bootstrap
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    Architecture & Leadership
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 dark:print:text-zinc-400">
                    System Architecture, Team Leadership, Code Reviews,
                    Performance Optimization, Database Design, Technical
                    Mentoring
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    Testing & Quality
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 dark:print:text-zinc-400">
                    PHPUnit, Pest PHP, Unit Testing, Integration Testing,
                    PHPStan, Rector PHP, Code Quality
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    DevOps & Cloud
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 dark:print:text-zinc-400">
                    AWS, Hetzner, Oracle Cloud, CI/CD, Docker, Infrastructure as
                    Code, Monitoring, Laravel Forge, Git, AWS S3, Queue Systems,
                    Logging & Analytics, Backup & Recovery
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    APIs & Integration
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 dark:print:text-zinc-400">
                    Third-party APIs, Webhooks, API Authentication, Data
                    Synchronization, Microservices, Event-driven Architecture,
                    API Documentation, Mobile API Design, Real-time Features,
                    Email Systems
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    Security & Performance
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 dark:print:text-zinc-400">
                    Security Best Practices, PCI Compliance, Data Protection,
                    Performance Tuning, Caching Strategies, Load Optimization
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100 dark:print:text-zinc-300">
                    Development Tools & Frameworks
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 dark:print:text-zinc-400">
                    Stripe, PayPal, Worldpay, Laravel Nova, Filament, Laravel
                    Telescope, Laravel Horizon, Postman, Composer, NPM, Vite,
                    Webpack
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

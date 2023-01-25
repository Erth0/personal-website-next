import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Eluert Mukja</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Apple MacBook Pro 2019, Intel i9 8Core, 32GB, 1TB SSD">
              {`
                First time owning a MacBook Pro and can't say much about it. It's incredibly powerful which was my main concern.
                Having jumped from Windows and Linux-based systems as a developer,
                I can't say more about macOS as it combines both worlds into one beautiful-looking operating system.
              `}
            </Tool>
            <Tool title="SAMSUNG C34J791 Quad HD 34 Curved LED Monitor - White & Silver">
              {`
                This monitor gives power to MacBook Pro with one single type "C" cable and has changed the way I work.
                I don't regret buying it however It's missing the 4K display.
              `}
            </Tool>
            <Tool title="Logitech MX Keys, Wireless Keyboard for Mac">
              Well, I took the plunge and paid the hefty price for this keyboard and
              I have to say, from the moment I took it out of the box I knew that I was not going to be disappointed.
            </Tool>
            <Tool title="Logitech MX Master 3">
             This is one of the best wireless mouses and has increased my productivity by far.
             It is worth the extra money.
            </Tool>
            <Tool title="AWAVO Laptop Stand">
              Having a very expensive laptop has to be well maintained at least this gives it a better air circulation and I can make use of it as a second screen.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code (Primary)">
              I use VS Code as my primary text editor as it gives me the ability to be productive
              and allows me to have some of the features of an IDE but without the overload of an IDE.
            </Tool>
            <Tool title="Sublime Text 4 (For easy fixes)">
              {`
                Sublime Text has been my favorite text editor I have stick with it since the day I first tried it.
                The simplicity of the sublime text and that speed can’t be found in any other text editor however
                there are some missing features and a lack of configuration.
              `}
            </Tool>
            <Tool title="PHPStorm (For heavy refactoring)">
              {`
                PHPStorm, in my opinion, is the best IDE for PHP however even with such a powerful machine
                I often find it a bit slower and I have got used to the speed of Sublime Text so most of the time
                I avoid using PHPStorm if I don't need it but I use it for heavy refactoring.
              `}
            </Tool>
            <Tool title="SequelPro/Sequel Ace">
              {`
                Since I was working from a Windows/Linux environment I always loved the simplicity of SequelPro
                for macOS however couldn't be found anywhere in the other operating systems so since
                I switched to macOS I have stick to it.
              `}
            </Tool>
            <Tool title="Tinkerwell">
              Tinkerwell allows me to quickly test and tinker around with things that I am thinking of in a very
              nicely put-together environment, and besides that,
              I am trying to support as much as I can the PHP Community!
            </Tool>
            <Tool title="HELO">
              {`
                HELO is one of the best money spent on my entire list.
                I can't thank enough BeyondCode for making such a nice tool.
                Before using HELO I was with mailtrap but there were limitations and wasn't fast.
                With HELO I can say I am 101% satisfied and can't describe how much time has saved me while working with emails.
              `}
            </Tool>
            <Tool title="Expose">
              {`
                Expose is a ngrok alternative built with PHP however it doesn't have limitations like ngrok so I prefer using this.
                Also comes with a nice dashboard where you can inspect requests while testing webhooks.
              `}
            </Tool>
            <Tool title="Warp">
              {`
                Fig was added to my list of tools lately and I can't say enough about it why so
                far hasn't been something like this available for developers.
                This helps me with unknown commands as it autocompletes almost everything.
              `}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              {`
                We started using Figma as just a design tool but now it’s become
                our virtual whiteboard for the entire company. Never would have
                expected the collaboration features to be the real hook.
              `}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              {`
                It’s not the newest kid on the block but it’s still the fastest.
                The Sublime Text of the application launcher world.
              `}
            </Tool>
            <Tool title="Bear">
              From brainstorming and writing articles in markdown Bear allows me to do this in a very clean and beautiful interface.
            </Tool>
            <Tool title="1Password">
              {`
                1Password is very nice password management which includes the 2fa option.
                Having been with BitWarden for a while using it on my mobile and Mac I switched recently and I don't regret it.
                Spent almost a day switching all my passwords from BitWarden but was worth it.
              `}
            </Tool>
            <Tool title="Spark for Mac & Android">
              Spark has taken away the investigations I was doing every now and then for a perfect email client which can work on my Mac
              and on my phone. It is a beautiful email client and it just works.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Other">
            <Tool title="IKEA Bekant 160x80 cm">
              {`
                We started using Figma as just a design tool but now it’s become
                our virtual whiteboard for the entire company. Never would have
                expected the collaboration features to be the real hook.
              `}
            </Tool>
            <Tool title="IKEA MARKUS">
              {`
                We started using Figma as just a design tool but now it’s become
                our virtual whiteboard for the entire company. Never would have
                expected the collaboration features to be the real hook.
              `}
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}

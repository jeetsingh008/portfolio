'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hello! My name is Jeet Singh, a current Master of Computer
            Applications student at{' '}
            <Link
              href="https://www.bitmesra.ac.in/"
              target="_blank"
              className="text-accent"
            >
              Birla Institute Of Technology, Mesra
            </Link>
            . <br /> I'm a passionate web developer focused on building robust
            and user-friendly applications.
          </p>
          <p>
            I recently had the privilege of working as a Frontend Developer
            Intern at{' '}
            <Link
              href="https://www.techavtar.com/"
              target="_blank"
              className="text-accent"
            >
              Techavtar
            </Link>
            , where I contributed to a client-centric SaaS platform by building
            dashboards, integrating APIs, and engineering dynamic data tables
            for over 1,000 records.
          </p>
          <p>
            My main focus these days is honing my skills and finding an exciting
            opportunity to contribute to challenging projects.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;

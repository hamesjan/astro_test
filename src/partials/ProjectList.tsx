import type { MarkdownInstance } from 'astro-boilerplate-components';
import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import type { IFrontmatter } from '../customTypes/IFrontMatter';

type IRecentProjectsProps = {
  projectList: MarkdownInstance<IFrontmatter>[];
};

const ProjectList = (props: IRecentProjectsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          <GradientText>Projects</GradientText>
        </div>

        <div className="text-sm">
          <a href="/projects/">View all Projects →</a>
        </div>
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      {props.projectList.map((elt) => (
        <Project
          key={elt.url}
          name={elt.frontmatter.title}
          description={elt.frontmatter.description}
          link={elt.frontmatter.link}
          img={{
            src: elt.frontmatter.imgSrc,
            alt: elt.frontmatter.imgAlt,
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
              <Tags color={ColorTags.LIME}>Web design</Tags>
              <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            </>
          }
        />
      ))}
    </div>
  </Section>
);

export { ProjectList };

import type { MarkdownInstance } from 'astro-boilerplate-components';

import type { IFrontmatter } from '../customTypes/IFrontMatter';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

import { FooterCopyright } from '../components/FooterCopyright';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };

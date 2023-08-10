import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello, I'm <GradientText>James Han</GradientText> 👋
        </>
      }
      description={
        <>
          I come from a wildly diverse background that enables me to have great
          breadth in{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            technical
          </a>{' '}
          and{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            social
          </a>{' '}
          experience.
        </>
      }
      avatar={
        <img
          className="hidden h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/jameshan310/" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCUGrCmGgxLqBKV1KeoIK1mg"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };

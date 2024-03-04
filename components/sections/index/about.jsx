// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/Profile-Photo.jpg" alt="Nelson family photo" />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Softskills that pay the bills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="As a dedicated web developer, I bring technical expertise and creative problem-solving to each project. With a proven track record and a keen eye for detail, I've honed my skills through managing my own business and juggling family responsibilities. My leadership and multitasking complement my web development proficiency, ensuring results that exceed expectations. Beyond coding, my active lifestyle, fueled by a passion for hockey and snowboarding, keeps me energized. I stay current with industry trends, approaching each project with a unique perspective and unwavering determination to deliver excellence."
            />
            <BadgesBlock
              title="Reasearch and planning"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "User Research", type: "fad" },
  { key: "qrcode", name: "Digital Strategy", type: "fad" },
  { key: "window", name: "Design Systems", type: "fad" },
  { key: "cubes", name: "Product Strategy", type: "far" },
  { key: "layer-plus", name: "Brand Strategy", type: "fad" },
  { key: "solar-system", name: "Operations", type: "fad" },
];

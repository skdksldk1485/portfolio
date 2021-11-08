import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, H1Title, H2, Link } from 'styles/styles';
import { revealText } from 'styles/animations';
import Button from 'components/UI/Button/Button';

const ProjectWrapper = styled.div`
  opacity: 0;
  transform: translateY(60px);

  p,
  ul,
  h2 {
    opacity: 1;
    transform: translateY(0);
  }

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  li {
    line-height: 1.7;
  }

  p {
    font-family: 'Merriweather', 'Spoqa Han Sans';
    font-weight: 300;
  }
`;

interface PropjectObj {
  title: string;
  des: string;
  github: string;
  link: string;
  techStacks: string;
}

interface ProjectProp {
  project: PropjectObj;
}

const Project = ({ project }: ProjectProp) => {
  const { title, des, github, link, techStacks } = project;
  return (
    <ProjectWrapper id="work-text">
      <H2>{title}</H2>
      <p>{des}</p>
      <ul>
      {link &&
        <li>
          <Link href={link} target="_blank">
            {link}
          </Link>
        </li>
      }
      {github &&
        <li>
          <a href={github} target="_blank">
            Github Repo
          </a>
        </li>
      }
        <li>{techStacks}</li>
      </ul>
    </ProjectWrapper>
  );
};

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          project {
            work1
            work2
            work3
            work4
          }
        }
      }
    }
  `);

  useEffect(() => {
    revealText(sectionRef.current, '#work-text');
  }, []);

  const projects: PropjectObj[] = [
    {
      title: 'MobX Movie',
      des: data.site.siteMetadata.project.work1,
      link: 'https://isu-mobx-movie.netlify.app/',
      github: 'https://github.com/skdksldk1485/react-mobx-movie',
      techStacks:
        'HTML5 / CSS3, React, React Hooks, MobX, SCSS, material-ui',
    },
    {
      title: 'Seoul-WifiFinder',
      des: data.site.siteMetadata.project.work2,
      link: '',
      github: 'https://github.com/skdksldk1485/seoul-wifiFinder',
      techStacks: 'HTML5 / CSS3, JavaScript(ES6+), React, Styled-components',
    },
    {
      title: 'ISU Online Shopping',
      des: data.site.siteMetadata.project.work3,
      link: 'https://isu-shopping.herokuapp.com/',
      github: 'https://github.com/skdksldk1485/ISU_Online_Shopping',
      techStacks: 'HTML5 / CSS3, JavaScript(ES6+), React, Redux, Redux-thunk, MongoDB, Mongoose, Node.js, Express, SCSS, Gsap',
    },
    {
      title: 'Life Manager',
      des: data.site.siteMetadata.project.work4,
      link: 'https://life-manager.herokuapp.com/',
      github: 'https://github.com/skdksldk1485/Life_Manager',
      techStacks: 'HTML5 / CSS3, Typescript, React, GraphQL, next.js, Apollo, Styled-components, material-ui',
    },
  ];

  return (
    <Wrapper padding="6rem 15rem" bgColor="white" id="work" ref={sectionRef}>
      <H1Title align="left" id="work-text">
        PROJECT:
      </H1Title>
      <div>
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
      <Button text={'더 알아보기'} paddingTop="6rem" />
    </Wrapper>
  );
};

export default Work;

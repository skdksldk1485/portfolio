import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, H1Title, H2, Bold, Capital, Link } from 'styles/styles';
import heroImg from 'images/hero.jpg';
import { revealText } from 'styles/animations';

const Tag = styled.p`
  color: #3997ed;
  cursor: pointer;
`;

const Description = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Merriweather', 'Spoqa Han Sans';
  font-weight: 300;
  opacity: 0;
  transform: translateY(60px);

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  img {
    width: 30%;
    margin: 1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    img {
      width: 70%;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Merriweather', 'Spoqa Han Sans';
  font-style: italic;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(60px);

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 2.5rem;
  }
`;

const SkillWrapper = styled.div`
  opacity: 0;
  transform: translateY(60px);

  h2,
  p {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CareerWrapper = styled.div`
  opacity: 0;
  transform: translateY(60px);

  h2,
  ul {
    opacity: 1;
    transform: translateY(0);
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Merriweather', 'Spoqa Han Sans';
    font-weight: 300;
  }

  li {
    line-height: 1.7;
    font-family: 'Merriweather', 'Spoqa Han Sans';
    font-weight: 300;
    list-style-position: inside;
    text-indent: -20px;
    padding-left: 20px;
  }
`;

const Text = styled.div`
  margin: 3rem;
`;

interface SkillProp {
  title: string;
  tags: string;
}

const Skill: React.FC<SkillProp> = ({ title, tags }) => {
  return (
    <SkillWrapper style={{ marginBottom: '3rem' }} id="skill-text">
      <H2>{title}</H2>
      <Tag>{tags}</Tag>
    </SkillWrapper>
  );
};

interface CareerProp {
  title: string;
  work: string;
  tag1: string;
  tag2: string;
  tag3: string;
}

const Career: React.FC<CareerProp> = ({ title, work, tag1, tag2, tag3 }) => {
  return (
    <CareerWrapper style={{ marginBottom: '3rem' }} id="skill-text">
      <H2>{title}</H2>
      <p>{work}</p>
      <ul>
        <li>{tag1}</li>
        <li>{tag2}</li>
        <li>{tag3}</li>
      </ul>
    </CareerWrapper>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about {
            title
            description1
            description2
          }
        }
      }
    }
  `);

  useEffect(() => {
    revealText(sectionRef.current, '#about-text');
    revealText(skillRef.current, '#skill-text');
    revealText(careerRef.current, '#career-text');
  }, []);
  
  const techSkills: string =
    '#html5 #css #scss #styled-components #javascript #react #redux #mobx #gatsby.js #next.js #typescript';
  const otherSkills: string =
    '#git #github';
  const postLink: string =
    'https://velog.io/@suyeonme/%EC%96%B4%EC%A9%8C%EB%8B%A4-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EB%90%98%EC%97%88%EB%82%98';
  const career1: string =
    '농림수산식품교육문화정보원(농정원) 개발 유지보수 [2021.07 - 현재]';
  const career2: string =
    '팁스 사업관리시스템(SMTECH) 운영 및 유지보수 [2020.01 - 2021.04]';  
  const career3: string =
    '국방 군수통합정보체계 구축사업 [2019.03 ~ 2019.12]';
    const work: string =  
    'SI 웹개발 구축 및 유지보수 업무';

  return (
    <Wrapper padding="6rem 15rem" bgColor="white" id="about" ref={sectionRef}>
      <div style={{ marginBottom: '6rem' }}>
        <Title id="about-text">
          &ldquo;
          {data.site.siteMetadata.about.title}
          &rdquo;
        </Title>
        <Description id="about-text">
          <Capital>{''}</Capital>
          <img src={heroImg} alt="image"></img>
          <div>
          <Text>
          {data.site.siteMetadata.about.description1}
          <p></p><br></br>
          {data.site.siteMetadata.about.description2}
          </Text>
          </div>
        </Description>
      </div>
      <div ref={skillRef} style={{ marginBottom: '6rem' }}>
        <H1Title align="left" id="skill-text">
          SKILLS:
        </H1Title>
        <Skill title="FRONT-END" tags={techSkills} />
        <Skill title="OTHERS" tags={otherSkills} />
      </div>
      <div ref={careerRef}>
        <H1Title align="left" id="skill-text">
          CAREERS:
        </H1Title>
        <Career title="KCC정보통신 [2018년 입사 ~ 현재]" work={work} tag1={career1} tag2={career2} tag3={career3} />
      </div>       
    </Wrapper>
  );
};

export default About;

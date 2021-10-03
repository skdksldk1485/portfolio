const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'IsuKim',
    description: "IsuKim's portfolio website",
    keyword:
      'portfolio, portfolio website, frontend developer, frontend, web developer, IsuKim',
    siteUrl: 'https://Isu.me',
    image: '',
    author: 'IsuKim',
    profiles: {
      phone: '+82 01052032463',
      email: 'skdksldk1485@naver.com',
      linkedin: '',
      instagram: '',
      github: 'https://github.com/skdksldk1485',
      velog: 'https://velog.io/@skdksldk14',
      medium: '',
      resume: 'https://www.notion.so/Ordinary-Code-7bb4a4036d944090909b9cc87d3c609e',
    },
    about : {
      title : '뜨거운 열정보다 중요한 것은 지속적인 열정이다.',
      description1 : '뜨거운 열정보다 중요한 것은 지속적인 열정이다라는 말이 있습니다. 저에게 있어서 가슴에 와닿는 말이었으며, 지난 3년간 웹개발 유지보수 업무를 수행하며 자신이 맡은 업무에 책임감을 느끼며 잠깐동안이 아닌 지속적인 열정을 가지며 업무를 수행하는 것이 중요하다는 것을 느낄 수 있었습니다.',
      description2 : '저는 그동안 유지보수 업무를 수행해오면서, 직접 서비스를 개발해보고 싶다는 포부를 가지게 되었습니다. 그런 생각을 하다보니, React 등 여러 기술을 공부하면서 스스로 새로운 기술을 습득하는 것에 관심과 재미를 느끼고 있다는 것을 알 수 있었습니다. 이러한 마음을 알게된 이후, 프론트엔드 개발자를 목표로 공부를 시작했습니다. 지속적인 열정과 함께 3년간 웹개발 유지보수 업무를 수행하며 얻은 협업 경험을 토대로 실력 있는 개발자가 되어가는 모습을 보여드리겠습니다.',      
    },
    project : {
      work1 : 'React Hooks, MobX로 개발한 영화소개사이트',
      work2 : '카카오 지도 API와 서울시 열린데이터 광장 API를 이용한 프로젝트',
      work3 : 'E-commerce형태의 웹 서비스를 구현한 쇼핑몰 프로젝트',
      work4 : '자기계발 동영상 stream Storage 서비스 사이트',
    }
  },
  plugins: [
    `gatsby-plugin-typescript`, // 추가!
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/my-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        icons: path.join(__dirname, 'src/assets/icons'),
        fonts: path.join(__dirname, 'src/assets/fonts'),
        images: path.join(__dirname, 'src/assets/images'),
        styles: path.join(__dirname, 'src/styles'),
        hooks: path.join(__dirname, 'src/hooks'),
      },
    },    
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

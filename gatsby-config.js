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
      email: 'skdksldk1148@gmail.com',
      linkedin: '',
      instagram: '',
      github: 'https://github.com/skdksldk1485',
      velog: 'https://velog.io/@skdksldk14',
      medium: '',
      resume: '',
    },
    about : {
      title : '뜨거운 열정보다 중요한 것은 지속적인 열정이다.',
      description1 : '뜨거운 열정보다 중요한 것은 지속적인 열정이다라는 말이 있습니다. 저에게 있어서 가슴에 와닿는 말이었으며, 개발자로서는 필수적인 덕목이라고 생각합니다. 저는 새로운 기술을 습득하는 것에 관심이 있으며, 웹개발 및 유지보수 경험을 바탕으로 UI/UX 관점을 고려하며 확장 가능한 웹 애플리케이션에 대해 고민하고 있습니다. 저의 다양한 경험과 배경은 창의적 사고를 가능하게 하고 다른 부서와의 소통 능력을 향상할 수 있다고 생각합니다.',
      description2 : '저는 리액트와 자바스크립트에 관심이 많습니다. 그리고 개발에 있어서, 심플한 UI를 구상하고 직관적이며 간결한 코드를 작성하도록 하는 “미니멀리즘”에 관심이 많습니다. 심플한 UI는 모든 유저가 손쉽게 서비스에 사용 및 접근할 수 있게 하고, 직관적이며 간결한 코드는 개발자 사이에서 협업을 수월하게 합니다. 실력 있는 개발자는, 잘 갖춰진 기술을 바탕으로 복잡하고 어려운 것들을 누구나 이해할 수 있도록 쉽게 풀어낼 수 있고, 커뮤니케이션에 능통하여 편안하고 원활한 협업이 가능하게 하는 사람이라고 생각합니다. 이러한 개발자가 되기 위해서 끊임없이 학습하고 노력하고 있습니다.'
    },
    project : {
      work1 : 'React Hooks, MobX를 사용한 영화 프로젝트',
      work2 : 'React Hooks, MobX를 사용한 프로젝트',
      work3 : '카카오 지도 API와 서울시 열린데이터 광장 API를 이용한 프로젝트',
      work4 : 'E-commerce형태의 웹 서비스를 구현한 쇼핑몰 프로젝트',
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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

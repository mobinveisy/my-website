const AboutPage = () => {
  return (
    <>
      <h4>I'm junior front-end developer 
      and really love and enjoy my job and I'm trying to be better .
What made me fall in love with web development and front-end is the capability to create interfaces and in some kind make art,
 when developing I feel like I'm making art with coding.</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;

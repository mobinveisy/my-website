import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mobin Veisy is Frontend developer building websites  you'd love to use"
      />
      <meta
        name="keywords"
        content="Mobin Veisy, Mobin, Veisy, web developer portfolio, Mobin web developer, mobin frontend developer, mobin web, mobin veisy portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Mobin Veisy's Portfolio" />
      <meta
        property="og:description"
        content="A  frontend developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/a/mFL9u4z" />
      <meta property="og:url" content="https://mobinveisy.ir" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mobin Veisy',
};

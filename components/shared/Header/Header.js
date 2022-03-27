import Head from "next/head";

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

Header.defaultProps = {
  title: "Qwikskills",
};

export default Header;

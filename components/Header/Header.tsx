import Head from "next/head";
import { StyledHeader, StyledNav } from "./Header.style";
import Button from "@components/Button/Button";

const Header = (props: any) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.default ? <DefaultHeading /> : <ExceptionalHeading />}
    </>
  );
};

const DefaultHeading = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <span>로고</span>
        <Button>로그인</Button> || <Button>로그아웃</Button>
      </StyledNav>
    </StyledHeader>
  );
}

const ExceptionalHeading = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <button>뒤로가기</button>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
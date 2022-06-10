import Head from "next/head";
import { StyledHeader, StyledNav } from "./Header.style";
import { Button, Icon } from '@components/index';
import { AiOutlineLeft } from "react-icons/ai";

interface Props {
  default?: boolean;
}

const Header = ({ ...props }: Props) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { props.default ? <DefaultHeading /> : <ExceptionalHeading /> }
    </>
  );
};
// FIXME : 로그인 정보가 있을때 없을때 구분하여 버튼컴포넌트 하나만 보이도록 설정한다. (차후 db연동 시)
const DefaultHeading = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <span>로고</span>
        <Button active>로그인</Button>
        {/* <Button>로그아웃</Button> */}
      </StyledNav>
    </StyledHeader>
  );
}
const ExceptionalHeading = () => {
  return (
    <StyledHeader>
      <StyledNav>

        <Button size={32}>
          <Icon size={32}>
            <AiOutlineLeft />
          </Icon>
        </Button>

      </StyledNav>
    </StyledHeader>
  );
}


export default Header;
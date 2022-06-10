import { ReactElement } from 'react';
import { AiOutlineEllipsis, AiOutlineHeart, AiOutlineLike, AiOutlineMessage, AiOutlineShareAlt } from 'react-icons/ai';
import { CardWrapper, ContentWrapper, Introduce, ProfileWrapper, TabMenu, TabMenuList } from "./Card.style";
import { Button, Icon } from '@components/index'

const randomBackgroundColor = () => {
  const randomNum = Math.floor(Math.random()*10);
  const backgroundColor = [
    '#FFDE09', 
    '#E82246', 
    '#10A9EF',
    '#EE8822',
    '#EE8822', // FIXME
    '#EE8822',
    '#EE8822',
    '#EE8822',
    '#EE8822',
    '#EE8822',
  ];

  return backgroundColor[randomNum];
};

// FIXME
// random color 함수 잘 작동되는지 테스트필요
// - 유저가 로그인 했을 때, 하지 않았을때 return값 다르게..
// - ProfileWrapper 내부 내용은 차후, 로그인db에서 사용자의 정보를 불러온다.
// - ContentWrapper 내부 내용은 차후, 로그인db && 포스팅db에서 불러온다.
// - LikeButton, MessageButton, BookmarkButton 기능개발 (릴리즈2 버전에 작업)
const Card = (): ReactElement => {
  const randomColor = randomBackgroundColor();

  return (
    <BeforeLogin randomColor={randomColor} />
  );
}

const BeforeLogin = ({...props}: any) => {

  return (
    <CardWrapper 
      bgColor={props.randomColor}
    >
      <ProfileWrapper>
        <img alt="profile" />
        <Introduce>
          <h2>홍길동</h2>
          <p>자기소개1</p>
          <p>자기소개2</p>
        </Introduce>
        <OptionButton />
      </ProfileWrapper>

      <ContentWrapper>
        <h2>
          제목
        </h2>
        <p>
          내용
        </p>
      </ContentWrapper>
      
      <TabMenuList>
        <TabMenu>
          <ul>
            <li>
              {/* <LikeButton /> */}
            </li>
            <li>
              {/* <MessageButton /> */}
            </li>
          </ul>
        </TabMenu>

        <TabMenu>
          <ul>
            <li>
              {/* <BookmarkButton /> */}
            </li>
            <li>
              <SharedButton />
            </li>
          </ul>
        </TabMenu>
      </TabMenuList>
    </CardWrapper>
  );
}

const OptionButton = (): ReactElement => {

  return (
    <Button size={32} onClick={() => console.log('옵션실행')}>
      <Icon size={32} active={true}>
        <AiOutlineEllipsis />
      </Icon>
    </Button>
  );
};

const LikeButton = (): ReactElement => {

  return (
    <Button 
      svgAndText={true} 
      small={true} 
      onClick={() => console.log('좋아요 버튼')}
    >
      <Icon size={24} active={true} route={''}>
        <AiOutlineLike />
        <span>0</span>
      </Icon>
    </Button>
  );
};

const MessageButton = (): ReactElement => {

  return (
    <Button 
      svgAndText={true} 
      small={true} 
      onClick={() => console.log('댓글버튼')}
    >
      <Icon size={24} active={true} route={''}>
        <AiOutlineMessage />
        <span>0</span>
      </Icon>
    </Button>
  );
}

const BookmarkButton = (): ReactElement => {

  return (
    <Button 
      svgAndText={true} 
      small={false} 
      onClick={() => console.log('북마크 버튼')}
    >
      <Icon size={24} active={true} route={''}>
        <AiOutlineHeart />
      </Icon>
      <span>저장하기</span>
    </Button>
  );
}

const SharedButton = (): ReactElement => {

  return (
    <Button 
      svgAndText={true} 
      small={false} 
      onClick={() => console.log('공유하기')}
    >
      <Icon size={24} active={true} route={''}>
        <AiOutlineShareAlt />
      </Icon>
      <span>공유하기</span>
    </Button>
  );
}

export default Card;
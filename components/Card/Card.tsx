import { ReactElement } from 'react';
import { CardWrapper, ContentWrapper, ImageWrapper, TabMenu, TabMenuList } from "./Card.style";
import { Button, Icon } from '@components/index'
import Image from 'next/image';
import { BsFillHeartFill } from 'react-icons/bs';
import Link from 'next/link';

const Card = (): ReactElement => {

  // FIXME: 실 데이터가 없어서 하드코딩한 내용. 추후 삭제 예정 (11라인 - 13라인, 이미지)
  const tempString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const tempTitle = tempString.slice(0, 25);
  const tempContent = tempString.slice(0, 115);
  const tempDate = new Date().toLocaleDateString();
  const tempNumberOfComments = '10개의 댓글';
  const tempUserName = '신수경';

  return (
    // FIXME: link수정
    <Link href="/write">
    <a>
      <CardWrapper>
        <ImageWrapper>
          <Image 
            src={'/cat.webp'}
            width={320}
            height={167}
            alt="profile" 
          />
        </ImageWrapper>

        <ContentWrapper>
          <h2>{tempTitle}...</h2>
          <p>{tempContent}...</p>
          <p>
            <span>{tempDate}</span>
            {' '}
            <span>{tempNumberOfComments}</span>
          </p>
        </ContentWrapper>
        
        <TabMenuList>
          <TabMenu>
            <ul>
              <li>
                <Image 
                  src={'/cat.webp'}
                  width={24}
                  height={24}
                  style={{ borderRadius: '50%'}}
                  alt="프로필사진" 
                />
              </li>
              <li>
                by{' '}
                <strong>{tempUserName}</strong>
              </li>
            </ul>
          </TabMenu>

          <TabMenu>
            <li>
              <LikeButton />
            </li>
          </TabMenu>
        </TabMenuList>
      </CardWrapper>
    </a>
    </Link>
  );
}

const LikeButton = (): ReactElement => {

  return (
    <Button 
      svgAndText={true} 
      small={true} 
      onClick={() => console.log('좋아요 버튼')}
    >
      <Icon size={24} active={true}>
        <BsFillHeartFill />
      </Icon>
      <span>0</span>
    </Button>
  );
}

export default Card;
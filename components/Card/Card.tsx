import { ReactElement } from 'react';
import { CardWrapper, ContentWrapper, ImageWrapper, TabMenu, TabMenuList } from './Card.style';
import { Button, Icon } from '@components/index';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillHeartFill } from 'react-icons/bs';
import { useAPI } from '@utils/useAPI';

interface IPost {
  id: number;
  title: string;
  content: string;
  createDate: string;
  imgSrc: string;
  postUrl: string;
  user: IUser;
  likeInfo: ILikeInfo;
  commentInfo: ICommentInfo;
};
interface IUser {
  id: number;
  name: string;
  userId: string;
};
interface ILikeInfo {
  numberOfLikes: number;
  isLikeClickUser: boolean;
};
interface ICommentInfo {
  numberOfComments: number;
};

const API_URL = 'posts';
const Card = (): ReactElement => {
  const {loading, error, data} = useAPI(API_URL);  
  if (loading) return <h1>로딩중</h1>;
  if (error) return <h1>error</h1>;
  if (data === null) return <h1>data null</h1>;

  return (
    // FIXME: postUrl변경 (db.json)
    <>
    {
      data.map((d: IPost) => (
      <Link 
        key={data ? d.id : 0}
        href={data ? d.postUrl : '/'}
      >
      <a>
        <CardWrapper>
          <ImageWrapper>
            <Image 
              src={`${d.imgSrc}`}
              width={320}
              height={167}
              alt={`${d.title} 이미지`} 
            />
          </ImageWrapper>

          <ContentWrapper>
            <h2>{d.title.slice(0, 25)}...</h2>
            <p>{d.content.slice(0, 115)}...</p>
            <p>
              <span>{d.createDate}</span>
              {' '}
              <span>{d.commentInfo.numberOfComments}개의 댓글</span>
            </p>
          </ContentWrapper>
          
          <TabMenuList>
            <TabMenu>
              <ul>
                <li>
                  <Image 
                    src={`${d.imgSrc}`}
                    width={24}
                    height={24}
                    style={{ borderRadius: '50%'}}
                    alt={`${d.user.name}님의 프로필사진`}
                  />
                </li>
                <li>
                  by{' '}
                  <strong>{d.user.name}</strong>
                </li>
              </ul>
            </TabMenu>

            <TabMenu>
              <li>
                <LikeButton {...d} />
              </li>
            </TabMenu>
          </TabMenuList>
        </CardWrapper>
      </a>
      </Link>
      ))
    }
    </>
  );
};

const LikeButton = ({...props}: any): ReactElement => {

  return (
    <Button 
      svgAndText={true} 
      small={true} 
      onClick={() => console.log('좋아요 버튼', props.id)}
    >
      <Icon size={24} active={true}>
        <BsFillHeartFill />
      </Icon>
      <span>
        {props.likeInfo.numberOfLikes}
      </span>
    </Button>
  );
};

export default Card;

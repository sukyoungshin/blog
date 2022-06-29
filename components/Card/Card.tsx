import { ReactElement } from 'react';
import { CardWrapper, ContentWrapper, ImageWrapper, TabMenu, TabMenuList } from './Card.style';
import { Button, Icon } from '@components/index';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillHeartFill } from 'react-icons/bs';
import { useQuery, gql} from '@apollo/client';

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
}
interface IUser {
  id: number;
  name: string;
  userId: string;
}
interface ILikeInfo {
  numberOfLikes: number;
  isLikeClickUser: boolean;
}
interface ICommentInfo {
  numberOfComments: number;
}

const POSTS = gql`
  query Query {
    postForHome {
      id
      title
      content
      createDate
      imgSrc
      postUrl
      user {
        id
        name
        userId
      }
      likeInfo {
        numberOfLikes
        isLikeClickUser
      }
      commentInfo {
        numberOfComments
      }
    }
  }
`;

const Card = (): ReactElement => {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error! {error.message}</h1>;
  if (data === null) return <h1>data null</h1>;

  return (
    <>
      {data?.postForHome?.map((post: IPost) => (
        <Link key={post.id} href={post.postUrl}>
          <a>
            <CardWrapper>
              <ImageWrapper>
                <Image
                  src={`${post.imgSrc}`}
                  width={320}
                  height={167}
                  layout={'responsive'}
                  alt={`${post.title} 이미지`}
                  priority
                />
              </ImageWrapper>

              <ContentWrapper>
                <h2>{post.title.slice(0, 25)}...</h2>
                <p>{post.content.slice(0, 115)}...</p>
                <p>
                  <span>{post.createDate}</span> <span>{post.commentInfo.numberOfComments}개의 댓글</span>
                </p>
              </ContentWrapper>

              <TabMenuList>
                <TabMenu>
                  <ul>
                    <li>
                      <Image
                        src={`${post.imgSrc}`}
                        width={24}
                        height={24}
                        style={{ borderRadius: '50%' }}
                        alt={`${post.user.name}님의 프로필사진`}
                      />
                    </li>
                    <li>
                      by <strong>{post.user.name}</strong>
                    </li>
                  </ul>
                </TabMenu>

                <TabMenu>
                  <li>
                    <LikeButton {...post} />
                  </li>
                </TabMenu>
              </TabMenuList>
            </CardWrapper>
          </a>
        </Link>
      ))}
    </>
  );
};

const LikeButton = ({ ...props }: any): ReactElement => {
  return (
    <Button svgAndText={true} small={true} onClick={() => console.log('좋아요 버튼', props.id)}>
      <Icon size={24} active={true}>
        <BsFillHeartFill />
      </Icon>
      <span>{props.likeInfo.numberOfLikes}</span>
    </Button>
  );
};

export default Card;

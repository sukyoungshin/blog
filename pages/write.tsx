import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { ReactElement, ReactNode, useState } from "react";
import { Button, Layout } from '@components/index'
import { ButtonWrapper, EditorWrapper, Form } from '@styles/pages/write';

// FIXME: 
// - 로그인안했을 시, 해당 페이지 접속불가
// - 상단에 로그아웃 헤더로 변경 (로그인정보에 따라)
// - Button 선택 시, DB연동한 액션보여주도록 로직추가
const Write = () => {
  const [ initialVal, setInitialVal ] = useState('여기에 입력하세요');
  const handleWritePosting = (prevVal: any) => {
    return setInitialVal(prevVal);
  }

  return (
    <>
    <EditorWrapper>
      <Editor
        initialValue={initialVal}
        previewStyle="vertical"
        height="628px"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={handleWritePosting}
      />
    </EditorWrapper>
      <Form>
        <ButtonWrapper>
          <Button 
            type="button"
            active={false}
            onClick={(e: any) => {
              e.preventDefault();
              console.log('임시작성')}
            }
          >
            임시작성
          </Button>
          <Button 
            type="button"
            active={initialVal.length !== 0}
            onClick={(e: any) => {
              e.preventDefault();
              console.log('글쓰기 버튼')}
            }
          >
            글쓰기
          </Button>
        </ButtonWrapper>
      </Form>
    </>
  );
}

Write.getLayout = function getLayout(page: ReactElement): ReactNode {
  return (
    <Layout default>
      {page}
    </Layout>
  );
}
export default Write;
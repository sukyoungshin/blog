import { useState } from "react";
import { Button, Icon } from '@components/index';
import { BsCaretDownFill } from "react-icons/bs";
import { CustomSelectMenuWrapper, SelectMenu, SelectMenuItem, SelectMenuWrapper } from "./CustomSelectMenu.style";

interface TSelectedMenuLists {
  id: number;
  text: string;
}
const SelectMenuLists: TSelectedMenuLists[] = [
  {id: 0, text: '오늘'},
  {id: 1, text: '이번 주'},
  {id: 2, text: '이번달'},
  {id: 3, text: '올해'},
];

const CustomSelectMenu = () => {
  // 기본 설정된 리스트목록
  const [ selectedId, setSelectedId ] = useState(1);
  const handleSelectedId = (currId: number) => {
    setSelectedId(currId);
    handleSelectMenuToast(); // 토스트팝업 닫기
  };

  // 리스트 팝업
  const [ visible, setVisible ] = useState(false);
  const handleSelectMenuToast = () => setVisible(!visible);

  return (
    <CustomSelectMenuWrapper>
    <SelectMenuWrapper>
      <button 
        type="button"
        onClick={handleSelectMenuToast} 
        className="initial-select"
      >
        {SelectMenuLists[selectedId]?.text}
      </button>
      <SelectMenuButton 
        handleSelectMenuToast={handleSelectMenuToast} 
      />
    </SelectMenuWrapper>
    {
      visible && (
        <SelectMenuToast 
          selectedId={selectedId}
          handleSelectedId={handleSelectedId} 
        />
      )
    }
    </CustomSelectMenuWrapper>
  );
}

const SelectMenuToast = ({...props}: any) => {

  return (
    <SelectMenu>
      {
        SelectMenuLists.map((list) => (
          <SelectMenuItem 
            key={list.id}
            active={list.id === props.selectedId} 
            onClick={() => props.handleSelectedId(list.id)}
          >
            {list.text}
          </SelectMenuItem>  
        ))
      }
    </SelectMenu>  
  );
}

const SelectMenuButton = ({...props} : any) => {

  return (
    <Button 
      size={32} 
      active={false} 
      onClick={props.handleSelectMenuToast}
    >
      <Icon size={16} borderRadius={false}>
        <BsCaretDownFill />
      </Icon>
    </Button>
  );
}


export default CustomSelectMenu;
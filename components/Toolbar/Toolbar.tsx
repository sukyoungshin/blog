import Link from "next/link";
import Icon from "@components/Icon/Icon";
import { IconType } from "react-icons";
import { 
  AiOutlineBook, 
  AiOutlineEdit, 
  AiOutlineHome, 
  AiOutlineSearch, 
  AiOutlineSetting,
} from "react-icons/ai"; 
import { 
  StyledLi, 
  StyledMain, 
  StyledToolbar, 
  StyledUl 
} from "./Toolbar.style";
interface NavListsType {
  id: number;
  name?: string;
  size: number;
  iconName: IconType;
  route: string;
}
// FIXME: enum ?
const NavLists: NavListsType[] = [
  {id: 0, name: 'home', size: 48, iconName: AiOutlineHome, route: '/'},
  {id: 1, name: 'search', size: 48, iconName: AiOutlineSearch, route: '/search'},
  {id: 2, name: 'write', size: 48, iconName: AiOutlineEdit, route: '/write'},
  {id: 3, name: 'bookmark', size: 48, iconName: AiOutlineBook, route: '/bookmark'},
  {id: 4, name: 'mypage', size: 48,  iconName: AiOutlineSetting, route: '/mypage'},
];

const Toolbar = () => {

  return (
    <StyledToolbar>
      <StyledMain>
        <StyledUl>
        {
          NavLists.map((list) => {
            return (
              <Link key={list.id} href={list.route}>
                <StyledLi>
                  <Icon {...list}>
                    <list.iconName />
                  </Icon>
                </StyledLi>
              </Link>
            );
          })
        }
        </StyledUl>
      </StyledMain>
    </StyledToolbar>
  );
}

export default Toolbar;
import { StyledToolbar } from "./Toolbar.style";

const Toolbar = (props: any) => {
  return (
    <>
      {/* {props.default? <DefaultToolbar /> : <InvisibleToolbar />} */}
      <DefaultToolbar /> 
    </>
  );
}

const DefaultToolbar = () => {
  return (
    <StyledToolbar>
      default toolbar
    </StyledToolbar>
  );
}

const InvisibleToolbar = () => {
  return (
    <StyledToolbar>
      exceptional toolbar
    </StyledToolbar>
  );
}

export default Toolbar;
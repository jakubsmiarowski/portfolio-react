import React, {useState, useEffect} from "react";
import {withRouter,Link} from 'react-router-dom';
import Menu from '../Menu/Menu';
import styled from 'styled-components';


const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 300px;
    z-index: 999;
    @media(max-width: 1080px){
        padding: 0 150px;
    }
    @media(max-width: 800px){
        padding: 0 100px;
    }
    @media(max-width: 575px){
        padding: 0 30px;
    }
`;

const StyledLink = styled(Link)`
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    color: #191919;
    z-index: 999;
`;
const StyledButton = styled.button`
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    font-weight:800;
    font-size: 1rem;
    mix-blend-mode: difference;
    z-index: 999;
    color: #1e272e;
    transition: 0.3s;
`;

const Header = ({history}) => {

  //State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu'
  });

  //State for disabled button
  const [disabled, setDisabled] = useState(false);

  //Use effect for page changes
  useEffect(() => {
    //listen for page changes
    history.listen(() => {
      setState({clicked:false, menuName:'Menu'})
    })
  })
//Function for disabled menu
  const handleMenu = () => {
    disabledMenu();
    if(state.initial === false ) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close'
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu'
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close'
      });
    }
  }

  //Determine if menu should be disabled
  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  }
  
  return (
    <StyledContainer>
      <StyledLink to='/home'>JAKUBŚMIAROWSKI.</StyledLink>
      <StyledButton disabled={disabled} onClick={handleMenu}>{state.menuName}</StyledButton>
      <Menu state={state} />
    </StyledContainer>
  );
};

export default withRouter(Header);

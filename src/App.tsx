import styled from "styled-components"

const Background = styled.img`
  position: absolute;
   min-width: 100%;
  height: 10.75rem;
  object-fit: cover;

  @media screen and (min-width: 599px) {
    height: 12.5rem;
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`

const App = () => {
  return <>
    <Background src="images/bg-sidebar-mobile.svg" alt=""/>
  </>
}

export default App

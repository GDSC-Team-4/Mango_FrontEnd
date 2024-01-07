import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #25252d;
  color: white;
  width: 100%;
  height: 12vh;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const FooterTxt = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0;
  margin-right: auto;
  cursor: pointer;
  font-size: 15px;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 30px;
    }
  }
`;

const Button = styled.a`
  border: none;
  background-color: transparent;
  margin-left: 10px;
  color: #ffffff;
  font-size: 15px;
  text-decoration: none;
`;
export const Footer = () => {
  return (
    <Wrapper>
      <Contents>
        <FooterTxt>Copyright ⓒ 2023 GDSC CUK</FooterTxt>
        <Navigation>
          <ul>
            <li>
              <Button href="https://github.com/GDSC-Team-4">GitHub</Button>
            </li>
            <li>
              <Button href="https://www.instagram.com/gdsc_cuk?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                Instagram
              </Button>
            </li>
          </ul>
        </Navigation>
      </Contents>
    </Wrapper>
  );
};

import styled from "styled-components"

export const FooterWrapper = styled.footer`
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-bottom: 10px;
    padding-right: 10px;
    width: 100%;
    & span {
        color: ${({ theme: { colors } }) => colors.primary};
        font-family: ${({ theme: { fonts } }) => fonts.Raleway};
    }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <span>Created by Siaraa. All Rights reserved, {new Date().getFullYear()}.</span>
    </FooterWrapper>
  )
}

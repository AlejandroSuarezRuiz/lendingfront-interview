import { createGlobalStyle } from 'styled-components'

/* GLOBAL STYLES
A very simple global styles was defined. Principally the font family
and a cool letter-spacing. Also the clases for the icons, to perform
the call via <span /> tag and the corresponding css class. */

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.5px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: cover;
  }

  .icon-edit {
    background-image: url("/edit.svg");
  }

  .icon-close {
    background-image: url("/close.svg");
  }

  .icon-save {
    background-image: url("/save.svg");
  }

  .icon-profile {
    background-image: url("/contact.svg");
  }

  .icon-profile-circle {
    background-image: url("/profile-user.svg");
  }

  .icon-caret-down {
    background-image: url("/caret-down.svg");
  }

  .icon-search {
    background-image: url("/search.svg");
  }
`

export default GlobalStyle;
import styled from 'styled-components';

export const NavContainer = styled.nav`
  padding-block: 12px;
  .navBtn {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    //fill: rgba(255, 255, 255, 0.4);
  }
  .navSign {
    display: none;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
  @media screen and (min-width: 768px) {
    padding: 42px 0 30px 0;
    .currency {
      display: none;
    }
    .menu {
      flex-direction: column;
      align-items: start;
      gap: 12px;
    }
    .navLink {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .navBtn {
      border-radius: 4px;
      width: 24px;
      height: 24px;
    }
    .navSign {
      display: block;
      font-size: 18px;
      color: var(--main-font-color);
    }
    .active {
      font-weight: 700;
    }
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
  }
`;
/*
  @media screen and (min-width: 768px) {
    padding: 40px 0 0 0;
  }
  @media screen and (max-width: 1279.9px) {
    padding: 40px 0 0 0;
    .menu {
      width: 100%;
      flex-direction: column;
      gap: 12px;
    }
    .currency {
      display: none;
    }
    .navLink {
      display: flex;
      gap: 20px;
      align-items: center;
      width: 150px;
    }
    .navBtn {
      border-radius: 4px;
      width: 24px;
      height: 24px;
    }
    .navSign {
      font-size: 18px;
      color: var(--main-font-color);
    }
    .hiddenItem {
      display: none;
    }
    //some css classes
  }

  @media screen and (max-width: 767.9px) {
    padding: 12px 0 0 0;
    
    .currency {
      display: block;
    }
    .navLink {
      gap: 0px;
      align-items: center;
      width: 50px;
    }
    .

  
  } */
// .nav-link {
// font-size: 24px;
//  }

/* .link {
    font-size: 24px;
    text-decoration: none;
    color: inherit;
    font-weight: 900;
}

.navigationContainer {
    display: flex;
    align-items: center;
    gap: 20px;
} */

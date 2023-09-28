import styled from "styled-components";
//import { NavLink } from "react-router-dom";


export const NavContainer = styled.nav`
    
    background: linear-gradient(220deg, rgba(109, 84, 235, 0.60) 28.31%, rgba(101, 35, 146, 0.60) 66.76%);

 @media screen and (min-width: 768px) {
        padding: 40px 0 0 0;
        .menu{
            width: 100%;
            flex-direction: column;
            gap: 12px;
            margin-left: 16px;
        }
        
        .currency{
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
        padding: 40px 0 0 0;

        .menu{
            width: 100%;
            flex-direction: column;
            gap: 12px;
            margin-left: 32px;
        }

       .currency{
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

@media screen and (max-width: 320px){
    padding: 12px 0 0 0;
    .menu{
        width: 320px; 
        margin: 0;
        flex-direction: row;
        display: flex;
        gap: 32px;
        justify-content: center;
        align-items: center;
    }

   .currency{
            display: block;
        }

    .navLink {
        
        gap: 0px;
        align-items: center;
        width: 50px;        
       
        
    }

    .navBtn{
        width: 44px;
        height: 44px;
        border-radius: 8px;
        //background-color: red;
        //fill: rgba(255, 255, 255, 0.4);
    }
   
    .navSign {
        display: none;
    }
}
`;



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
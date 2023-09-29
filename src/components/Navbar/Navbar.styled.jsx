import styled from "styled-components";
//import { NavLink } from "react-router-dom";


export const NavContainer = styled.nav`
    
background-image: url(/moneyguard_project/static/media/MobileBg.7e4e1fe8ebaf957790c5.jpg);
    background-repeat: no-repeat;
    background-size: cover;

 @media screen and (min-width: 768px) {
        padding: 40px 0 0 0;
        .menu{
            list-style: none;
            width: 100%;
            flex-direction: column;
            gap: 12px;
            margin-left: 16px;
        }
        
        .currency{
            display: none;
        }
        .navLink {
            text-decoration: none;
            display: flex;
            gap: 20px;
            align-items: center;
            width: 150px;

             .navBtn {
            border-radius: 4px;
            width: 24px;
            height: 24px;
            }
            .navSign {
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            color: var(--main-font-color);
            }

            &.active {
                .navSign{
                font-weight: 700;
                color: var(--main-font-color);
                }
                

                .navBtn{                
                background-color: var(--main-font-color);
                }
                .navBtn path{
                fill: #4A56E2;
                fill-opacity: 1;
                    } 
            }
        }          

       .navLink:hover .navSign{
            font-weight: 700;
        }
        .navBtn path:hover {
            fill-opacity: 1;
                } 
        
        
    }

    @media screen and (max-width: 767.9px) {
        padding: 40px 0 0 0;

        .menu{
            list-style: none;
            width: 100%;
            flex-direction: column;
            gap: 12px;
            margin-left: 32px;
        }

       .currency{
            display: none;
        }

        .navLink {
            text-decoration: none;
            display: flex;
            gap: 20px;
            align-items: center;
            width: 150px;

            .navBtn {
            border-radius: 4px;
            width: 24px;
            height: 24px; 
            }

            .navSign {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: var(--main-font-color);
            }

            &.active {
                .navSign{
            font-weight: 700;
            color: var(--main-font-color);
                    }

                .navBtn{
                background-color: var(--main-font-color);
                    }
                .navBtn path{
                fill: #4A56E2;
                fill-opacity: 1;
                    } 
            }
        } 

         .navLink:hover .navSign{
            font-weight: 700;
        }
        .navBtn path:hover {
            fill-opacity: 1;
                }            
        
    }   

@media screen and (max-width: 320px){
    padding: 12px 0 0 0;
    .menu{
        list-style: none;
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
        text-decoration: none;
        gap: 0px;
        align-items: center;
        width: 50px; 

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

        &.active {
            .navBtn{
            background-color: var(--main-font-color);
                }
            .navBtn path{
            fill: #4A56E2;
            fill-opacity: 1;
                } 
        }
    }

    .navBtn path:hover {
            fill-opacity: 1;
                } 
   /* .navBtn path{
    fill-opacity: 1;
   } */
    
}
`;



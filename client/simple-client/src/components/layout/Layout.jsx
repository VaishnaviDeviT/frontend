import React from "react";
import { ToastContainer } from "react-toastify";
import {Container} from "react-bootstrap";
import TopNavigation from "./TopNavigation";
import { createGlobalStyle} from 'styled-components';
import Footer from "./Footer";



const BackgroundColor = createGlobalStyle`
body{
background-color: ${(props)=>(props.light? "#f2f2f2" : "#333")} ;
} 
`;

const Layout = ({children}) =>{

    return(
        <>
        <Container fluid className="mb-5">
        <BackgroundColor light/>
        <TopNavigation/>
            <ToastContainer />
            <Container className="mt-5">
              {children}
            </Container>
        </Container>

        <Footer/>
            </>
    )

}

export default Layout;
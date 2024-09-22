import React, { useState, useEffect } from "react";
import { Col, Row } from 'react-bootstrap';
import {List} from "react-content-loader";
import * as userService from '../../services/user.service';
import Layout from "../../components/layout/Layout"; 
import UserCard from "../../components/layout/user/UserCard";

const UsersList = ()=>{
    
    const [ users, setUsers ] = useState({});
    const [ errorMessage, setErrorMessage ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);


    const fetchUsers = async () => {
        try{
            setIsLoading(true);
        const users = await userService.retriveAllUsers();
        setUsers(users); 
        }catch(error){
            const retriveErrorMessage = () =>{
            const apiErrorMessage = error?.response?.data?.message;
            return apiErrorMessage ?? 'Error while connecting to server';
        }; 
            setErrorMessage(retriveErrorMessage()); 
        }finally{
            setIsLoading(false);
        }
    }


useEffect(() =>{
    fetchUsers();
}, []);


return (
    <Layout>
             {isLoading ? (
                <div className="text-center">
                <List />
                </div>
            ) : errorMessage ? (
            <h3 className="text-center text-danger">{errorMessage}</h3>
        ) : (
           <>
            <h4 className='text-center mb-3'>Users</h4>
            <Row className='justify-content-center'>
       {Object.values(users).map(user =>(
         <Col  key={user.id} lg={4} className="p-1">
            <UserCard user={user} />
        </Col>
        
        ))} 
        </Row>
            </>

        )}
    </Layout>
);

};
export default UsersList;

import * as userService from '../../services/user.service';
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from '../../components/layout/Layout';

const RetriveUser = () =>{
    const {userId} = useParams();
    

    const[user, setUser] = useState({});

    const fetchUser = async()=>{
        try{
        const user = userService.RetriveUser(userId);


        setUser(user);
        }catch(err){
            setUser(null);
        }
    };

    useEffect(()=>{
        fetchUser()
    },[userId]);


    return(
        <>
        <Layout>
            {user ? (
            
            <Row className="justify-content-center">
                <Col lg={6}>
                <h3 className="text-center mb-3">{user.name}</h3>
                 <Card>
                    <Card.Body >
                        <p>{user.email}</p>
                        {user.city && user.country && (
                            <p>
                                {user.city} - {user.country}
                            </p>
                        )}
                    </Card.Body>
                 </Card>
                </Col>
            </Row>
            ): (
                <div className="text-center text-danger fw-bold">User cannot be found</div>
            )}
        </Layout>
        </>
    )

}

export default RetriveUser;
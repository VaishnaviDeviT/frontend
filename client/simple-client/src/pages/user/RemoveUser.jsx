import React from "react"; 
import Layout from "../../components/layout/Layout";
import * as userService from '../../services/user.service';
import { Button, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RemoveUser = () => {

    const DELAY_BEFORE_REDIRECTION_MS = 1000;

    const {userId} = useParams();
    const submitAction = async () =>{
        try{
        const response = await userService.removeUser(userId);

        if(response?.status){
            toast.success('user has been Successfully removed');

            
            }else{
                toast.warn(`User couldn't be removed.`)
            }
            setTimeout(() =>{
                window.location.href = "/";
            }, DELAY_BEFORE_REDIRECTION_MS);
        }catch(error){
            toast.error(`User cannot be removed`);
            console.error(error.message);

        }
    };
    const cancelAction = () =>{
        window.location.href="/";
    };

    return(

        <Layout> 
             <h3 className="text-center">Are you sure to remove this user? #{userId}</h3>
            <Row className='justify-content-center'>
                <Col md={4}>
                <Form className='mt-4'>
            <Button variant="danger" onClick={submitAction} className="mt-1 m-1"> Yes, remove this user</Button>
            <Button variant="primary" onClick={cancelAction} className="m-1">No, revert my action</Button>
            </Form>
            </Col>
            </Row>
        </Layout>
    )

}

export default RemoveUser;
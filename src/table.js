import React, { useState, Fragment,useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import {nanoid} from 'nanoid';
import Table from 'react-bootstrap/Table';
import data from './table_data.json';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Pagination_icon from './Pagination';



function Function_table() {
    const [contacts,setContacts] = useState(data);   

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cancelshow, setCancelshow] = useState(false);
    const cancelClose = () => setCancelshow(false);
    const cancelShow = () => setCancelshow(true);
    
  

    const[editContactId,setEditContactId] =useState(null);
    

    const[addData, setAdddata] = useState(
      {
        project_name: '',
        admin_name: '',
        whether_count: '',
        sending_method:'',
        status:'',
        starting_time:'',
        ending_time:'',
    },)

    const[editFormData, setEditFormData] = useState(
        {
            project_name: '',
            admin_name: '',
            whether_count: '',
            sending_method:'',
            status:'',
            starting_time:'',
            ending_time:'',
    },)

    const handleAddformchange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
      const newFormData ={...addData};
      newFormData[fieldName] = fieldValue;
      setAdddata(newFormData)
    }

    const handleEditformchange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData ={...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData)
      }

    const handleAddformSubmit = (event) => {
      event.preventDefault();
      const newContacts = {
        id: nanoid(),
        project_name: addData.project_name,
        admin_name: addData.admin_name,
        whether_count: addData.whether_count,
        sending_method: addData.sending_method,
        status: addData.status,
        starting_time: addData.starting_time,
        ending_time: addData.starting_time,
        
      } 
      const newDATA = [...contacts,newContacts];
      setContacts(newDATA);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
          id: nanoid(),
          project_name: editFormData.project_name,
          admin_name: editFormData.admin_name,
          whether_count: editFormData.whether_count,
          sending_method: editFormData.sending_method,
          status: editFormData.status,
          starting_time: editFormData.starting_time,
          ending_time: editFormData.starting_time,
          
        } 
        const newDATA = [...contacts];
        const index = contacts.findIndex((contact)=>contact.id === editContactId);
        newDATA[index] = editedContact;
        setContacts(newDATA);
        setEditContactId(null);
      };
  



    const handleEditClick = (event, contact) =>{
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues ={
            id: contact.id,
            project_name: contact.project_name,
            admin_name: contact.admin_name,
            whether_count: contact.whether_count,
            sending_method: contact.sending_method,
            status: contact.status,
            starting_time: contact.starting_time,
            ending_time: contact.ending_time,

        }
        setEditFormData(formValues);

    }

    const handleCancelClick = () =>{
        setEditContactId(null);
    }

    const handleDeleteClick = (contactId) => {
        const newDATA = [...contacts];
        const index = contacts.findIndex((contact)=>contact.id === contactId);
        newDATA.splice(index,1);
        setContacts(newDATA);

    }

    const [currentpage,setcurrentPage] = useState(1);
    const [postsPerpage,setpostsPerpage] = useState(4);

    const indexOfLastPost = currentpage * postsPerpage;
    const indexOfFirstPost = indexOfLastPost - postsPerpage;
    const currentPosts = contacts.slice(indexOfFirstPost,indexOfLastPost);

    const Paginate = (pageNumbers) => setcurrentPage(pageNumbers);


    



    return (
        <div>
            <br />
            <h1 className = 'App-table'>??????<br />
            <br />
            <Button variant="primary" onClick = {handleShow}>??????</Button>{' '}
            <br />
            <Table striped bordered hover size="sm" onSubmit = {handleEditFormSubmit}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>????????????</th>
                        <th>?????????</th>
                        <th>????????????</th>
                        <th>????????????</th>
                        <th>??????</th>
                        <th>????????????</th>
                        <th>????????????</th>
                        <th>??????</th>
                    </tr>
                </thead>
          
                <tbody>
                    {currentPosts.map((contact)=> (
                        <Fragment>
                            { editContactId === contact.id ? (
                            <EditableRow editFormData  = {editFormData} 
                            handleEditformchange = {handleEditformchange}
                            handleCancelClick = {handleCancelClick}
                            handleEditFormSubmit ={handleEditFormSubmit}
                            /> 
                            ) : (
                                <ReadOnlyRow contact = {contact} 
                                handleEditClick = {handleEditClick}
                                handleDeleteClick = {handleDeleteClick}
                                cancelShow = {cancelShow}
                                cancelshow ={cancelshow}
                                cancelClose = {cancelClose}
                                />  

                            )}
                        </Fragment>

                                          
                ))}
                </tbody>


            


          <Modal show = {show}>
                <Modal.Header closeButton onClick = {handleClose}>
                    <Modal.Title>??????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>????????????</Form.Label>
                            <Form.Control type="text" name = 'project_name' required = 'required'placeholder="?????????????????????" onChange={handleAddformchange} />
                            <Form.Text className="text-muted">??????2020??????????????????</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>????????????</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>?????????</Form.Label>
                          
                          <Form.Select >
                            <option name = 'admin_name' required = 'required' onChange={handleAddformchange} >??????</option>
                            <option name = 'admin_name' required = 'required' onChange={handleAddformchange} >??????</option>
                            <option name = 'admin_name' required = 'required' onChange={handleAddformchange} >?????????</option> 
                            </Form.Select>
                            
                        
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>????????????</Form.Label>
                          <Form.Select defaultValue="Choose..." onChange={handleAddformchange}>
                            <option name ='sending_method'>????????????</option>
                            </Form.Select>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>????????????</Form.Label>
                          <Form.Select defaultValue="Choose..."onChange={handleAddformchange}>
                            <option name = 'whether_count'>??????</option>
                            <option name = 'whether_count'>?????????</option>
                            </Form.Select>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>??????</Form.Label>
                          <Form.Select defaultValue="Choose..."onChange={handleAddformchange}>
                            <option name = 'status'>??????</option>
                            <option name = 'status'>??????</option>
                            </Form.Select>
                         </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>????????????</Form.Label>
                            <Form.Control type="Datetime" name = 'starting_time' placeholder="" onChange={handleAddformchange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>????????????</Form.Label>
                            <Form.Control type="Datetime" name ='ending_time' placeholder="" onChange={handleAddformchange}/>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer><Button variant="primary" type="submit" onClick = {handleAddformSubmit}>??????</Button></Modal.Footer>
            </Modal>
        </Table>

        <Pagination_icon postPerpage = {postsPerpage} currentpage = {currentpage} totalPosts = {contacts.length} Paginate = {Paginate}/>

        
        
        </h1>

        
        </div>
        
            
     
          
        
    )
}


export default Function_table;
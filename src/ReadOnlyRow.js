import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ReadOnlyRow = ({contact,handleEditClick,handleDeleteClick,cancelShow,cancelshow,cancelClose}) => {
    return (
            <tr>
                <Modal show = {cancelshow} aria-labelledby="contained-modal-title-vcenter"centered>
                <Modal.Header closeButton onClick = {cancelClose}>
                    <Modal.Title>删除项目</Modal.Title>
                </Modal.Header>
                
                <Modal.Footer><Button variant="primary" type="submit" onClick = {() => {cancelClose();handleDeleteClick(contact.id);}} >确认删除</Button>
                <Button variant="primary" type="submit" onClick = {cancelClose}>取消</Button></Modal.Footer>
                </Modal>
                <td>{contact.id}</td>
                <td>{contact.project_name}</td>
                <td>{contact.admin_name}</td>
                <td>{contact.whether_count}</td>
                <td>{contact.sending_method}</td>
                <td>{contact.status}</td>
                <td>{contact.starting_time}</td> 
                <td>{contact.ending_time}</td>      
                <td>
                    <Button variant="primary" onClick = {(event) => handleEditClick(event,contact)} size="sm">编辑</Button>{' '}
                    <Button variant="secondary" onClick = {cancelShow} size="sm">删除</Button>{' '}
                </td>
            </tr>
            
            
    )
}

export default ReadOnlyRow

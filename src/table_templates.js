import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import {nanoid} from 'nanoid';



const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'ID'  
    },
    {
        Header: '项目名称',
        accessor: 'project_name',
    },
    {
        Header: '管理员',
        accessor: 'admin_name',
    },
    {
        Header: '是否记分',
        accessor: 'whether_count',
    },
    {
        Header: '发送方式',
        accessor: 'sending_method',
    },
    {
        Header: '状态',
        accessor: 'status',
    },
    {
        Header: '开始时间',
        accessor: 'starting_time',
    },
    {
        Header: '结束时间',
        accessor: 'ending_time',
    },

];

const DATA = [
    {
        ID: 1,
        project_name: '测试项目1',
        admin_name: 'qzc',
        whether_count: '计分',
        sending_method:'登录系统',
        status:'启用',
        starting_time:'2021-02-04',
        ending_time:'2021-05-14',
    },
    {
        ID: 19,
        project_name: 'ceshi2',
        admin_name: 'qzc',
        whether_count: '计分',
        sending_method:'登录系统',
        status:'启用',
        starting_time:'2021-02-02',
        ending_time:'2021-03-12',
    },
    {
        ID: 20,
        project_name: '2020年信息化评估',
        admin_name: 'qzc',
        whether_count: '计分',
        sending_method:'登录系统',
        status:'启用',
        starting_time:'2020-12-15',
        ending_time:'2021-01-15',
    },
];




function TableForm() {


    const [contacts,setContacts] = useState(DATA);
    


    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cancelshow, setCancelshow] = useState(false);
    const cancelClose = () => setCancelshow(false);
    const cancelShow = () => setCancelshow(true);

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

    const handleAddformchange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
      const newFormData ={...addData};
      newFormData[fieldName] = fieldValue;
      setAdddata(newFormData)


    }
    const handleAddformSubmit = (event) => {
      event.preventDefault();
      const newContacts = {
        ID: nanoid(),
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

    return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>项目名称</th>
              <th>管理员</th>
              <th>是否积分</th>
              <th>发送方式</th>
              <th>状态</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>操作</th>
            </tr>
          </thead>
          
          <tbody>
            {contacts.map((contact)=> (
              <tr>
                <td>{contact.ID}</td>
                <td>{contact.project_name}</td>
                <td>{contact.admin_name}</td>
                <td>{contact.whether_count}</td>
                <td>{contact.sending_method}</td>
                <td>{contact.status}</td>
                <td>{contact.starting_time}</td> 
                <td>{contact.ending_time}</td>      
                <td>
                   <Button variant="primary" onClick = {handleShow} size="sm">编辑</Button>{' '}
                   <Button variant="secondary" onClick = {cancelShow} size="sm">删除</Button>{' '}
                </td>
                </tr>
            ))}
          </tbody>


          <tfoot>
            <tr>
              <th>ID</th>
              <th>项目名称</th>
              <th>管理员</th>
              <th>是否积分</th>
              <th>发送方式</th>
              <th>状态</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>操作</th>      
            </tr>
          </tfoot>
          <Modal show = {cancelshow} aria-labelledby="contained-modal-title-vcenter"centered>
                <Modal.Header closeButton onClick = {cancelClose}>
                    <Modal.Title>删除项目</Modal.Title>
                </Modal.Header>
                
                <Modal.Footer><Button variant="primary" type="submit" onClick = {cancelClose}>确认删除</Button>
                <Button variant="primary" type="submit" onClick = {cancelClose}>取消</Button></Modal.Footer>
          </Modal>


          <Modal show = {show}>
                <Modal.Header closeButton onClick = {handleClose}>
                    <Modal.Title>编辑</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>项目名称</Form.Label>
                            <Form.Control type="text" name = 'project_name' required = 'required'placeholder="请输入项目名称" onChange={handleAddformchange} />
                            <Form.Text className="text-muted">例：2020年信息化评估</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>绑定机构</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>管理员</Form.Label>
                          <Form.Select name ='admin-name' defaultValue="Choose...">
                            <option>张三</option>
                            <option>李四</option>
                            <option>王麻子</option>
                            </Form.Select>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>发送方式</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>登陆系统</option>
                            </Form.Select>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>计分方式</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>计分</option>
                            <option>不计分</option>
                            </Form.Select>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>状态</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>启用</option>
                            <option>禁用</option>
                            </Form.Select>
                         </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>开始时间</Form.Label>
                            <Form.Control type="Datetime" name = 'starting_time' placeholder="" onChange={handleAddformchange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>结束时间</Form.Label>
                            <Form.Control type="Datetime" name ='ending_time' placeholder="" onChange={handleAddformchange}/>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer><Button variant="primary" type="submit" onClick = {handleAddformSubmit}>Submit</Button></Modal.Footer>
            </Modal>
        </Table>

      )
    }



function BasicTable(props) {

  return (
    <div>
      <TableForm/>
    </div>
  )
}

    
 

export default BasicTable;
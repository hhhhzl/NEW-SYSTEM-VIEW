import React,{ useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const EditableRow = ({editFormData,handleEditformchange,handleEditFormSubmit,handleCancelClick}) => {
    
    return (
        <Modal show = {true}>
                <Modal.Header closeButton onClick = {handleCancelClick}>
                    <Modal.Title>编辑</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>项目名称</Form.Label>
                            <Form.Control type="text" name = 'project_name' required = 'required' placeholder="请输入项目名称" value = {editFormData.project_name} onChange={handleEditformchange} />
                            <Form.Text className="text-muted">例：2020年信息化评估</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>绑定机构</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridState">
                          <Form.Label>管理员</Form.Label>
                          <Form.Select  defaultValue="Choose..." value = {editFormData.admin_name} onChange={handleEditformchange}>
                            <option name ='admin-name' >张三</option>
                            <option name ='admin-name'>李四</option>
                            <option name ='admin-name'>王麻子</option>
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
                            <Form.Control type="Datetime" name = 'starting_time' placeholder="" value = {editFormData.starting_time} onChange={handleEditformchange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>结束时间</Form.Label>
                            <Form.Control type="Datetime" name ='ending_time' placeholder="" value = {editFormData.ending_time} onChange={handleEditformchange}/>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick = {handleEditFormSubmit}>提交</Button>
                    <Button variant="primary" type="submit" onClick = {handleCancelClick}>取消</Button>
                    </Modal.Footer>
            </Modal>
    )
}

export default EditableRow

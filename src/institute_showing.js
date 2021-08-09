import React from 'react'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';



function Institute_showing() {
    return (
        <div>
            <br />
            <h1 className = 'App-table'>欢迎<br />
            <br />
            机构展示
            <br />
            <br />
            <>
            <Button variant="secondary" size="sm" active>导出</Button>{' '}
            <Button variant="secondary" size="sm" active>上传模板</Button>{' '}
            <Button variant="secondary" size="sm" active>下载模板</Button>{' '}
            </>
            
            <br />

            <br />
            <><Button variant="primary" size="lg" active>机构列表</Button>{' '}</>
            <br /><br />
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">中国科学院</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">中国农业科学院</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">中华人民共和国教育部</Nav.Link>
                </Nav.Item>
            </Nav>
            </h1>
            <Modal show = {false}>
                <Modal.Header closeButton onClick ={false}>
                    <Modal.Title>添加下属机构</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>机构名称</Form.Label>
                            <Form.Control type="text" name = 'project_name' required = 'required'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>机构代码</Form.Label>
                            <Form.Control type="text" placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>机构地址</Form.Label>
                            <Form.Control type="text" placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>邮编</Form.Label>
                            <Form.Control type="text" placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>领域</Form.Label>
                            <Form.Control type="text" placeholder=" " />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer><Button variant="primary" type="submit">提交</Button>
                <Button variant="secondary" type="submit">取消</Button></Modal.Footer>
                
            </Modal>
            
            
            
        </div>
    )
}


export default Institute_showing


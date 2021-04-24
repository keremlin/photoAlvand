import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateCategory from './createCategory.component'
import styles from './../admin.module.css'

export default function Modals(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => {props.onRefresh();setShow(false);}
    const handleShow = () => setShow(true);
    return (
        <>
            <Fab onClick={() => handleShow()} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            > <div className={styles.modals}>
                     <div className={styles.chips}> 
                     <Modal.Header closeButton>
                        <Modal.Title>ایجاد دسته بندی جدید</Modal.Title>
                    </Modal.Header>
                    </div>
                    <Modal.Body>
                        <CreateCategory onClick={handleClose}></CreateCategory>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            انصراف
                    </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}
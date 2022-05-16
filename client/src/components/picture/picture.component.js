import React from 'react';
import styles from './picture.module.css';
import CategoryChips from './categoryChips.component';
import Button from 'react-bootstrap/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AlarmIcon from '@material-ui/icons/Alarm';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import IconButton from '@material-ui/core/IconButton';
import {useEffect,useState} from 'react';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
import {date2convert} from './../../services/jalali';
import {useParams,Link} from 'react-router-dom';
import Filepreview from './../Admin/filePreview.component';
import Popup from '../popup/Popup';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import Slider from '../effects/Slider';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'

 function Picture(props) {
     const [file, setFile] = useState({ data: { formname: "arash" } });
     const [isLoaded, setIsLoaded] = useState(false);
     const { pictureId } = useParams();

     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShowModal = () => setShow(true);
     const [order, setOrder] = useState({ message: "Message" });

     const [showException, setShowException] = useState(false);
     const handleCloseException = () =>{ setShowException(false);a(-1);}
     const handleShowExceptionModal = () => setShowException(true);
     const [exception, setException] = useState({ message: "Message" });
const a=useNavigate();

    


    useEffect( () => {
        window.scrollTo(0, 0);
        console.log("picture>useEffect>called ");
        if (isLoaded === false)
            http.get('/file/fileInfo/'+pictureId,
                { headers: authHeader() })
                .then((response) => {
                    if (response.data != null) {
                        console.log(response.data);
                        const newData = { data: response.data };
                        setFile(newData);
                        setIsLoaded(true);
                    }
                }).catch(function (err) {
                    console.log(err);
                });
                console.log(isLoaded);   
    });
    function addToKart(){
        console.log("addToKart clicked");
        http.post('/order/setNewOrder',pictureId,
            { headers: authHeader() })
            .then(orders=>{
                console.log(orders.data);
                setOrder(orders.data);
                handleShowModal();
                console.log(order.message)
            })
            .catch(err=>{
                console.log(err);
            })
    }
     async function handleDeletePicture(id) {
        
         console.log('Delete clicked ' + id);
         await http.get('/file/delete/' + id, { headers: authHeader() })
             .then((response) => {
                 console.log('Deleted : ' + id + response.data);
                 if(response.data===false){
                     setException({message:'این عکس به یک مشتری فروخته شده و نمی توان تا تمام شدن فرایند آن را پاک کرد.'});
                     handleShowExceptionModal();
                 }
                 else{
                    setException({message:'عکس پاک شد'});
                    handleShowExceptionModal();
                 }
             })
             .catch((ex) => {
                 console.log('error on delete file :' + ex.message);
             })
     }
     function checkIfAdminLoggedIn() {
         return (
             typeof props.user !== "undefined" &&
                 props.user !== null &&
                 props.user.username === 'admin'
                 ? true : false);
     }
    var dateTime=date2convert(new Date("2021-05-13T12:45:45.000+00:00"))+"";
    return (
        <div className={styles.bg}>
        <Slider isLoaded={true} timeOut={500} sliderTime={700}>
        
            <div className={"row"}>
                <div className="col-sm-1 col-sx-0"></div>
                <div className={"col-sm-4 col-sx-12 " + styles.pictureWrap}>
                    <div className="row">
                        <div className={"col-sx-12 "+styles.title}>
                            مشخصات فایل عکس
                        </div>
                    </div>
                    <dl className="row">
                        
                            <dt className="col-sm-3 col-xs-12">نام فایل</dt>
                            <dd className="col-sm-7 col-xs-12">{file.data.formname}</dd>

                            <dt className="col-sm-3 col-xs-12">عکاس</dt>
                            <dd className="col-sm-7 col-xs-12">مسیح رافتی شرباف</dd>

                            <dt className="col-sm-3 col-xs-12"> ادیتور</dt>
                            <dd className="col-sm-7 col-xs-12">آرش یگانه راد</dd>

                            <dt className="col-sm-3 col-xs-12 text-truncate">کد</dt>
                            <dd className="col-sm-7 col-xs-12">991117-13708-06-{file.data.id}</dd>

                            <dt className="col-sm-3 col-xs-12">تاریخ </dt>
                            <dd className="col-sm-7 col-xs-12">{dateTime}</dd>

                            <dt className="col-sm-3 col-xs-12">توضیحات </dt>
                            <dd className="col-sm-7 col-xs-12"><h6>{file.data.formdescription}</h6></dd>
                    </dl>
                    <div className="row">
                        <div className={"col-sx-12 "+styles.title}>
                            برچسب ها
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sx-12">
                            <CategoryChips categories={file.data.cat}></CategoryChips>
                            
                        </div>
                    </div>
                        <div className="row">
                            <div className={"col-sx-12 " + styles.title}>
                                <div className={styles.leftAlign}>
                                    <IconButton color="default" aria-label="add an alarm">
                                        <AlarmIcon />
                                    </IconButton>
                                    <IconButton color="secondary" aria-label="Fav">
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                    <IconButton color="primary" aria-label="Share Icon">
                                        <ShareIcon />
                                    </IconButton>
                                    {(checkIfAdminLoggedIn() ?
                                        <IconButton color="default" aria-label="Delete Icon" onClick={() => handleDeletePicture(file.data.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        : <></>)}
                                </div>

                            </div>
                            <div className={"col-sx-12"}>
                                <div className={styles.price}>قیمت : {file.data.formprice + " "}تومان</div>
                            </div>
                        </div>
                </div>
                <div className={"col-sx-12 col-sm-6 " + styles.pictureWrap}>
                    <Filepreview src={file.data.filePath}></Filepreview>
                    <div className={styles.buttonWraper}><Button onClick={addToKart} className={styles.button} variant="success">افزودن به سبد خرید<ShoppingCartIcon /></Button></div>
                    <div className={styles.buttonWraper}><Button className={styles.button} variant="primary"> خرید سریع<CreditCardIcon /></Button></div>
                    <div className={styles.buttonWraper}><Button className={styles.button} variant="warning">جزییات <HelpOutlineIcon /></Button></div>
                </div>
                {(show?
                <Popup show={show} heading={""} 
                    body={<div className={styles.picturePopupBody}><CheckCircleOutlineIcon className={styles.picturePopupIcon}></CheckCircleOutlineIcon> {order.message}</div>}
                    close={<span className={styles.picturePopupCloseButt}><OpenInBrowserIcon></OpenInBrowserIcon> بستن</span>} 
                    save={<span className={styles.picturePopupCloseButt}><Link className='react-router-link' to = "/profile"><ShoppingCartIcon></ShoppingCartIcon> سبد خرید</Link></span>} 
                    handleClose={handleClose} 
                    handleSave={handleClose}>
                </Popup>
                :<></>)}

                {(showException?
                <Popup show={showException} heading={""} 
                    body={<div className={styles.picturePopupBody}><CheckCircleOutlineIcon className={styles.picturePopupIcon}></CheckCircleOutlineIcon> {exception.message}</div>}
                    close={<span className={styles.picturePopupCloseButt}><OpenInBrowserIcon></OpenInBrowserIcon> متوجه شدم</span>} 
                    handleClose={handleCloseException} 
                >
                </Popup>
                :<></>)}

                <div className="col-sm-1 col-sx-0"></div>
            </div>
            </Slider>
            <div className="row">
                <div className="col-sm-12"></div>
            </div>
        </div>
    );

}
function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
}
export default connect(mapStateToProps)(Picture);
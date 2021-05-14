import React from 'react';
import styles from './picture.module.css';
import CategoryChips from './categoryChips.component';
import Button from 'react-bootstrap/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AlarmIcon from '@material-ui/icons/Alarm';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import IconButton from '@material-ui/core/IconButton';
import {useEffect,useState} from 'react';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
import {date2convert} from './../../services/jalali';
import {useParams} from 'react-router-dom';
import Filepreview from './../Admin/filePreview.component';

export default function Picture() {
    const [file, setFile] = useState({ data: { formname: "arash" } });
    const [isLoaded, setIsLoaded] = useState(false);
    const {pictureId} =useParams();
    console.log(pictureId);
    useEffect(() => async () => {
        console.log("picture>useEffect>called");
        if (isLoaded === false)
            await http.get('/file/fileInfo/'+pictureId,
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
    var dateTime=date2convert(new Date("2021-05-13T12:45:45.000+00:00"))+"";
    return (
        <>
            <div className={"row " + styles.bg}>
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
                        <div className={"col-sx-12 "+styles.title}>
                            <div className={ styles.leftAlign}>
                                <IconButton color="default" aria-label="add an alarm">
                                    <AlarmIcon />
                                </IconButton>
                                <IconButton color="secondary" aria-label="add an alarm">
                                    <FavoriteBorderIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="add an alarm">
                                    <ShareIcon />
                                </IconButton>
                            </div>

                        </div>
                        <div className={"col-sx-12"}>
                            <div className={styles.price}>قیمت : {file.data.formprice+" "}تومان</div>
                        </div>
                    </div>
                </div>
                <div className={"col-sx-12 col-sm-6 " + styles.pictureWrap}>
                    <Filepreview src={file.data.filePath}></Filepreview>
                    <div className={styles.buttonWraper}><Button className={styles.button} variant="success">افزودن به سبد خرید<ShoppingCartIcon /></Button></div>
                    <div className={styles.buttonWraper}><Button className={styles.button} variant="primary"> خرید سریع<CreditCardIcon /></Button></div>
                    <div className={styles.buttonWraper}><Button className={styles.button} variant="warning">جزییات <HelpOutlineIcon /></Button></div>
                </div>

                <div className="col-sm-1 col-sx-0"></div>
            </div>
            <div className="row">
                <div className="col-sm-12"></div>
            </div>
        </>
    );
}
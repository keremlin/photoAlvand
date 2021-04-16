import styles from './footer.module.css';
import CopyrightIcon from '@material-ui/icons/Copyright';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkIcon from '@material-ui/icons/Link';
import CallIcon from '@material-ui/icons/Call';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ico from './../header/dc.svg';
export default function Footer() {
    return (
        <div className={[styles.footerUI, "row", "bg-dark"].join(" ")}>
            <div className="col-sm-12 col-xs-12 minHeight200 ">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="row  bg-secondary  pr-4">
                            <div className="col-xs-12"> لینک های مفید</div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><LinkIcon  style={{margin:"5px"}}></LinkIcon>سایت حوزه هنری</div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><LinkIcon  style={{margin:"5px"}}></LinkIcon>وب سایت وزارت ارشاد</div>
                        </div><div className="row  pr-5">
                            <div className="col-xs-12"><LinkIcon  style={{margin:"5px"}}></LinkIcon>سایت رسمی شاتر استوک</div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row bg-secondary">
                            <div className="col-xs-12   pr-4">درباره ی ما</div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><CallIcon  style={{margin:"5px"}}></CallIcon>تماس با ما</div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><MenuBookIcon  style={{margin:"5px"}}></MenuBookIcon>قوانین و مقررات</div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><HelpOutlineIcon  style={{margin:"5px"}}></HelpOutlineIcon>راهنمایی </div>
                        </div></div>
                    <div className="col-sm-3">
                        <div className="row bg-secondary">
                            <div className="col-xs-12   pr-4"> شبکه های اجتماعی</div>
                        </div><div className="row">
                            <div className="col-xs-12   pr-5"><TelegramIcon style={{margin:"5px"}}></TelegramIcon>کانال تلگرام</div>
                        </div><div className="row">
                            <div className="col-xs-12   pr-5"><InstagramIcon  style={{margin:"5px"}}></InstagramIcon>اینستاگرام</div>
                        </div><div className="row">
                            <div className="col-xs-12   pr-5"><FacebookIcon  style={{margin:"5px"}}></FacebookIcon>فیسبوک</div>
                        </div></div>
                    <div className="col-sm-3">
                    <img src={ico} width="200" height="200" className="d-inline-block align-top" alt="Events Panel"></img>
                    <p className={styles.footerP}>فتوالوند</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-sm-12 col-xs-12">
                    Copyright 2020 PhotoAlvand<CopyrightIcon></CopyrightIcon> 
              </div>
                </div>
            </div>
        </div>
    )
}
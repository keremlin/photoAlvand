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
import HUIT from '../h3UI/HUIT';
export default function Footer() {
    return (
        <div className={[styles.footerUI, "row", "bg-dark"].join(" ")}>
            <div className="col-sm-12 col-xs-12 minHeight200 ">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="row  bg-secondary  pr-4">
                            <div className="col-xs-12" style={{padding:"0 0 0 15px"}}> <HUIT>links</HUIT></div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><LinkIcon  style={{margin:"5px"}}></LinkIcon><HUIT>hozeh</HUIT></div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><LinkIcon  style={{margin:"5px"}}></LinkIcon><HUIT>ershad</HUIT></div>
                        </div><div className="row  pr-5">
                            <div className="col-xs-12"><LinkIcon  style={{margin:"5px"}}></LinkIcon><HUIT>shutter</HUIT></div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row bg-secondary">
                            <div className="col-xs-12   pr-4"><HUIT>aboutUs</HUIT></div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><CallIcon  style={{margin:"5px"}}></CallIcon><HUIT>contact</HUIT></div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><MenuBookIcon  style={{margin:"5px"}}></MenuBookIcon><HUIT>rules</HUIT></div>
                        </div><div className="row   pr-5">
                            <div className="col-xs-12"><HelpOutlineIcon  style={{margin:"5px"}}></HelpOutlineIcon><HUIT>help</HUIT> </div>
                        </div></div>
                    <div className="col-sm-3">
                        <div className="row bg-secondary">
                            <div className="col-xs-12   pr-4"><HUIT>socialMedia</HUIT></div>
                        </div><div className="row">
                            <div className="col-xs-12   pr-5"><TelegramIcon style={{margin:"5px"}}></TelegramIcon><HUIT>telegram</HUIT></div>
                        </div><div className="row">
                            <div className="col-xs-12   pr-5"><InstagramIcon  style={{margin:"5px"}}></InstagramIcon><HUIT>instagram</HUIT></div>
                        </div><div className="row">
                            <div className="col-xs-12   pr-5"><FacebookIcon  style={{margin:"5px"}}></FacebookIcon><HUIT>facebook</HUIT></div>
                        </div></div>
                    <div className="col-sm-3">
                    <img src={ico} width="200" height="200" className="d-inline-block align-top" alt="Events Panel"></img>
                    <p className={styles.footerP}>فتوالوند</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-sm-12 col-xs-12">
                    Copyright 2021 Photo Alvand<CopyrightIcon></CopyrightIcon> 
              </div>
                </div>
            </div>
        </div>
    )
}
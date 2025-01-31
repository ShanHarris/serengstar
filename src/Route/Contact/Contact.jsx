import React, {useEffect} from 'react'
import classes from './Contact.module.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '../../Components/Footer';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.contact}>
      <div className={classes.contactTitle}>Contact</div>
      <div className={classes.contacts}>
        <div className={classes.contact1}>
          <div className={classes.contact1Line}>
            <WhatsAppIcon sx={{fontSize: 60}} style={{position: 'relative', bottom: '20px'}}/>
            <div className={classes.title}>Text Us</div>
           <a href="https://wa.me/918709880415" target="_blank" rel="noreferrer"> <div className={classes.desc1}> +91&nbsp; 8709&nbsp;880&nbsp;415</div></a>
          </div>
        </div>
        <div className={classes.contact2}>
        <div className={classes.contact2Line}>
            <InstagramIcon sx={{fontSize: 60}} style={{position: 'relative', bottom: '20px'}}/>
            <div className={classes.title}>DM</div>
           <a href="https://www.instagram.com/sereng_star" target="_blank" rel="noreferrer"> <div className={classes.desc2}>@sereng_star</div></a>
          </div>
        </div>
        <div className={classes.contact3}>
        <div className={classes.contact3Line}>
            <LinkedInIcon sx={{fontSize: 60}} style={{position: 'relative', bottom: '20px'}}/>
            <div className={classes.title}>Drop text</div>
           <a href="https://www.linkedin.com/company/sereng-star/" target="_blank" rel="noreferrer"> <div className={classes.desc3}>Sereng Star</div></a>
          </div>
        </div>
        <div className={classes.contact4}>
        <div className={classes.contact4Line}>
            <EmailIcon sx={{fontSize: 60}} style={{position: 'relative', bottom: '20px'}}/>
            <div className={classes.title}>Mail Us</div>
          <a href="mailto:serengstar@gmail.com" target="_blank" rel="noreferrer"><div className={classes.desc4}>serengstar@gmail.com</div></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

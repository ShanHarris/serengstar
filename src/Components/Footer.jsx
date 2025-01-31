import React from 'react'
import classes from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Icon from '../Assets/croc.png';
const Footer = () => {
  return (
    <div className={classes.footer}>
    <div className={classes.social}>
      <img className={classes.iconFooter} src={Icon} alt="" />
      <div className={classes.footerSpan}>
     <span className={classes.social1}><a href="https://www.facebook.com/p/Sereng-Star-100086778484715/" target='blank'><FacebookIcon color="success" sx={{ fontSize: 40 }}/></a></span>
     <span className={classes.social1}><a href="https://www.youtube.com/@serengstar" target='blank'> <YouTubeIcon color="success" sx={{ fontSize: 40 }}/></a></span>
     <span className={classes.social1}><a href='https://www.instagram.com/sereng_star/' target='blank'> <InstagramIcon color="success" sx={{ fontSize: 40 }} /></a></span>
    <span className={classes.social1}><a href="https://www.linkedin.com/company/sereng-star/"><LinkedInIcon color="success" sx={{ fontSize: 40 }}/></a></span>
      </div>
    </div>
</div>
  )
}

export default Footer

import React, {useEffect} from 'react'
import classes from './About.module.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Manish from '../../Assets/manish.jpg'
import Ruchika from '../../Assets/ruchika.jpg'
import Anand from '../../Assets/anand.jpeg'
import Sangita from '../../Assets/sangita.jpg'
import Manjoy from '../../Assets/manjoy.jpeg'
import Santosh from '../../Assets/santosh.jpeg'
import Enter from '../../Assets/enter.jpg'
import Prakash from '../../Assets/prakash.jpg'
import Bikash from '../../Assets/bikash.jpeg'
import Prem from '../../Assets/prem.jpg'
import Amresh from '../../Assets/amresh.jpg'
import Footer from '../../Components/Footer';
import Riya from '../../Assets/riya.png'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.about}>
      <div className={classes.aboutTitle}>About</div>
      <div className={classes.intro}>
        <div className={classes.sereng}>
          <div className={classes.serengText}>Sereng Star - <span className={classes.big}>Biggest</span> </div>
          <div className={classes.big}>Santhali Singing</div>
          <div className={classes.big}>Reality Show</div>
        </div>
        <div className={classes.info}>
          Sereng Star stands as the first-ever
          Santhali singing reality show, providing 
          an exclusive platform for tribal talent 
          to shine nationally. The show's
          mission is rooted in supporting and 
          preserving tribal cultures, aiming to 
          unearth hidden musical gems and inspire 
          a new generation of tribal artists.
        </div>
      </div>
      <div className={classes.mission}>
      <div className={classes.missionTitle}>Mission</div>
      <div className={classes.upper}>
        <div className={classes.card}>
          <AcUnitIcon />
          <div className={classes.missions}>Empowerment through Music</div>
          <div className={classes.desc}>Sereng Star aims to empower tribal communities by providing a dedicated platform for their musical talents, fostering self-confidence and self-expression.</div>
        </div>
        <div className={classes.card}>
          <AcUnitIcon />
          <div className={classes.missions}>Cultural Preservation</div>
          <div className={classes.desc}>The show is committed to preserving and promoting the rich cultural heritage of tribal communities, ensuring that traditional elements are seamlessly integrated into the modern musical landscape.</div>
        </div>
      </div>
      <div className={classes.middle}>
      <div className={classes.card}>
          <AcUnitIcon />
          <div className={classes.missions}>Talent Discovery</div>
          <div className={classes.desc}>Sereng Star seeks to unearth hidden talents within tribal communities, offering a national stage for aspiring singers to showcase their abilities and pursue a career in music.</div>
        </div>
      <div className={classes.card}>
          <AcUnitIcon />
          <div className={classes.missions}>Community Building</div>
          <div className={classes.desc}>Sereng Star aims to create a supportive community where participants not only compete but also collaborate, forging connections that extend beyond the show.</div>
        </div>
      </div>
      <div className={classes.last}>
      <div className={classes.card}>
          <AcUnitIcon />
          <div className={classes.missions}>Global Recognition</div>
          <div className={classes.desc}>Beyond national borders, Sereng Star aims to showcase the extraordinary talent of tribal singers on the global stage, fostering cross-cultural understanding.</div>
        </div>
      </div>
      </div>
      <div className={classes.team}>
        <div className={classes.teamTitle}>Team</div>
        <div className={classes.teamImages}>
          <div className={classes.member}>
            <img className={classes.image} src={Manish} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Manish Murmu</span>
              <span className={classes.designation}>Co-Founder</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Ruchika} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Usha Hembrom</span>
              <span className={classes.designation}>Co-Founder</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Anand} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Anand Kisku</span>
              <span className={classes.designation}>Co-Founder</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Sangita} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Sangita Hansda</span>
              <span className={classes.designation}>Co-Founder</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Santosh} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Santosh Murmu</span>
              <span className={classes.designation}>COO</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Riya} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Riya Tudu</span>
              <span className={classes.designation}>Anchor</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Prem} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Prem Hansda</span>
              <span className={classes.designation}>Social Media</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Enter} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Enter Marandi</span>
              <span className={classes.designation}>Management</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Manjoy} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Manjoy</span>
              <span className={classes.designation}>Script Writer</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Prakash} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Prakash Marandi</span>
              <span className={classes.designation}>Editor</span>
            </div>
          </div>

          <div className={classes.member}>
            <img className={classes.image} src={Bikash} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Bikash Marandi</span>
              <span className={classes.designation}>Editor</span>
            </div>
          </div>
          <div className={classes.member}>
            <img className={classes.image} src={Amresh} alt="" />
            <div className={classes.memberInfo}>
              <span className={classes.name}>Amresh Tirkey</span>
              <span className={classes.designation}>Editor</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About

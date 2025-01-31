import React, {useEffect} from 'react'
import classes from './Season1.module.css'
import Tom from '../../Assets/tom.png'
import Dagar from '../../Assets/dagar.png'
import Monali from '../../Assets/monali.jpeg'
import Pritam from '../../Assets/pritam.jpeg'
import Manjula from '../../Assets/manjula.jpeg'
import Top1 from '../../Assets/Binod Hembrom.png'
import Top2 from '../../Assets/Ipsita Murmu.png'
import Top3 from '../../Assets/Surendranath Murmu.png'
import Top4 from '../../Assets/Sumitra Besra.png'
import Top5 from '../../Assets/Sankar Soren.png'
import Top6 from '../../Assets/Sanjit Mandi.png'
import Top7 from '../../Assets/Samuel Soren.png'
import Top11 from '../../Assets/Pinturam Marndi.png'
import Top12 from '../../Assets/Ananta Hembram.png'
import Top13 from '../../Assets/Saimon Soren.jpg'
import Footer from '../../Components/Footer'
import Trophy from '../../Assets/winner1.gif'


const Season1 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.season1}>

      <div className={classes.judges}>
        <div className={classes.judgesTitle}>Season 1 Judges</div>
        <div className={classes.judgeContent}>Your expertise and passion as a judge on Sereng Star have elevated the show to extraordinary heights. Thank you for being a vital part of our musical journey, inspiring both contestants and viewers alike with your invaluable contributions.</div>
        <div className={classes.judge}>
          <img className={classes.judgeImg} src={Tom} alt="" />
          <img className={classes.judgeImg} src={Dagar} alt="" />
        </div>
        <div className={classes.judgeNames}>
          <span>Tom Murmu</span>
          <span>Dagar Tudu</span>
        </div>
      </div>

      <div className={classes.top3}>
        <div className={classes.winnerTitle}> <img className={classes.trophy} src={Trophy} alt="" />  &nbsp;&nbsp;&nbsp; <span className={classes.winnerHello}>Winners</span> &nbsp;&nbsp;&nbsp; <img className={classes.trophy} src={Trophy} alt="" /></div>
        <div className={classes.winners}>
          <img className={classes.winnerImg} src={Monali} alt="" />
          <img className={classes.winnerImg} src={Pritam} alt="" />
          <img className={classes.winnerImg} src={Manjula} alt="" />
        </div>
      </div>

      <div className={classes.top13}>
      <div className={classes.top13Title}>Season 1 Top 13</div>
      <div className={classes.top13Images}>
        <div className={classes.four}>
          <img className={classes.image} src={Top1} alt="" />
          <img className={classes.image} src={Top2} alt="" />
          <img className={classes.image} src={Top3} alt="" />
          <img className={classes.image} src={Top4} alt="" />
          <img className={classes.image} src={Top5} alt="" />
          <img className={classes.image} src={Top6} alt="" />
          <img className={classes.image} src={Top7} alt="" />
          <img className={classes.image} src={Top11} alt="" />
          <img className={classes.image} src={Top12} alt="" />
          <img className={classes.image} src={Top13} alt="" />
          </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Season1

import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import Marquee from "react-fast-marquee";
import Judge1 from '../../Assets/judge1.mp4'
import Judge2 from '../../Assets/judge2.mp4'
import How1 from '../../Assets/how1.png'
import How2 from '../../Assets/how2.png'
// import Sponsor1 from '../../Assets/Camringo Pictures.png'
// import Sponsor2 from '../../Assets/sponsor2.png'
// import Sponsor3 from '../../Assets/sponsor3.png'
// import Sponsor4 from '../../Assets/sponsor4.png'
// import Sponsor5 from '../../Assets/sponsor5.png'
// import Sponsor6 from '../../Assets/sponsor6.png'
import Supporter1 from '../../Assets/supporter1.jpg'
import Supporter2 from '../../Assets/supporter2.jpg'
import Supporter3 from '../../Assets/supporter3.jpg'
import Supporter4 from '../../Assets/supporter4.jpg'
import Supporter5 from '../../Assets/supporter5.jpg'
import Supporter6 from '../../Assets/supporter6.jpeg'
import Supporter7 from '../../Assets/supporter7.jpg'
import Supporter8 from '../../Assets/supporter8.jpg'
import Supporter9 from '../../Assets/supporter9.jpg'
import Supporter10 from '../../Assets/supporter10.jpg'
import Supporter11 from '../../Assets/supporter11.jpg'
import Carousel from '../../Components/Carousel';
import NumberCounter from '../../Components/NumberCounter';
// import Banner from '../../Assets/banner.png'
import Footer from '../../Components/Footer'
import New1 from '../../Assets/new1.jpg'
import New2 from '../../Assets/new2.jpeg'
import New3 from '../../Assets/new3.jpg'
import New4 from '../../Assets/new4.jpg'
import New5 from '../../Assets/new5.jpg'
import Win1 from '../../Assets/win1.jpeg'
import Win2 from '../../Assets/win2.jpeg'
import Win3 from '../../Assets/win3.jpeg'
import Win4 from '../../Assets/win4.jpeg'
import Win5 from '../../Assets/win5.jpeg'
import Win6 from '../../Assets/win6.jpeg'
import Win7 from '../../Assets/win7.jpeg'
// import Left from '../../Assets/left.png'
// import Right from '../../Assets/right.png'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: "Image 2",
      title: "Raj Hembrom",
      description: "\"Sereng Star has become a weekly ritual for me\".",
    },
    {
      src: "https://images.pexels.com/photos/7104386/pexels-photo-7104386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Image 1",
      title: "Preety Murmu",
      description: "\"Kudos to Sereng Star Team for making this platform\".",
    },
    {
      src: "https://images.pexels.com/photos/1253811/pexels-photo-1253811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Image 3",
      title: "Ayush Tudu",
      description: "\"Sereng Star has redefined the singing competition genre\".",
    },
    {
      src: "https://images.pexels.com/photos/8721970/pexels-photo-8721970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Image 4",
      title: "Sweta Hansda",
      description: "\"Kudos to Sereng Star Team for making this platform\".",
    }
    // Add more image objects as needed
  ];

  return (
    <div className={classes.home}>
      {/* Hero */}
      <div className={classes.banner}>
      </div>
      {/* What is Sereng Star */}
      <div className={classes.season2}>
        <div className={classes.centerDiv}>
        <div className={classes.leftName}>
          <span>Sereng Star</span>
          <span>Season 2</span>
        </div>
        <div className={classes.rightDesc}>
          Sereng Star: Elevating tribal voices on a national 
          stage, celebrating cultural heritage through 
          the universal language of music.
        </div>
        </div>
      </div>
      {/* meet judges */}
      <div className={classes.judges}>
        <div className={classes.meet}>Meet Judges of Season 2</div>
        <div className={classes.season2Judges}>
        <div className={classes.judge1}>
        <video
            className={classes.judgeOne}
            src={Judge1}
            autoPlay
            loop
            muted
          />
          <div className={classes.judgeDetails1}>
            <div className={classes.judgeName}>Reveal Soon</div>
            <div>Santhali Singer</div>
          </div>
        </div>

        <div className={classes.judge2}>
       <div className={classes.judgeDetails2}>
            <div className={classes.judgeName}>Reveal Soon</div>
            <div>Mundari Singer</div>
          </div>
        <video
            className={classes.judgeTwo}
            src={Judge2}
            autoPlay
            loop
            muted
          />

        </div>
        </div>
      </div>


      {/* summary */}

      <div className={classes.summary}>
        <NumberCounter />
      </div>

      {/* what's new */}
      <div className={classes.new}>
        <div className={classes.newTitle}>What's new in Season 2</div>
        <div className={classes.what}>
          <div className={classes.new1}>
            <div>More Prize Money</div>
            <img className={classes.newImage} src={New1} alt="" />
          </div>
          <div className={classes.new2}>
          <div>3 Anchors</div>
            <img className={classes.newImage} src={New2} alt="" />
          </div>
          <div className={classes.new3}>
          <div>Gifts - random 3 participants</div>
            <img className={classes.newImage} src={New3} alt="" />
          </div>
          <div className={classes.new4}>
          <div>New Judges</div>
            <img className={classes.newImage} src={New4} alt="" />
          </div>
          <div className={classes.new5}>
          <div>Medals - Top 3</div>
            <img className={classes.newImage} src={New5} alt="" />
          </div>
        </div> 
      </div>

      {/* how to participate */}

      <div className={classes.how}>
        <div className={classes.howTitle}>How to participate ?</div>
        <div className={classes.steps}>
        <div className={classes.step1}>
          <img className={classes.how1} src={How1} alt="" />
          <div className={classes.stepOne}>
          <span className={classes.step1Span}>Step 1.</span> <br />  Record your video in a landscape mode, singing santhali song and the length of the video should be minimum 1 minute and maximum 2 minute.
          </div>
        </div>
        <div className={classes.step2}>
        <div className={classes.stepTwo}>
        <span className={classes.step2Span}>Step 2.</span> <br /> Upload your video on the website with video size no more than 500MB. The video should be continuous without any edits. Use of instrument is not allowed.
        </div>
          <img className={classes.how2} src={How2} alt="" />
        </div>
        </div>
      </div>

      {/* rules and regulations */}

      <div className={classes.rAndR}>
        <div className={classes.rulesTitle}>Rules and Regulations</div>
        <div className={classes.rules}>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>Record your video in landscape mode.</div>
        </div>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>Only santhali song is allowed to sing.</div>
        </div>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>Video length should be minimum 1 minute & maximum 2 minute.</div>
        </div>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>No editing is allowed in the video.</div>
        </div>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>Use of instruments is not allowed.</div>
        </div>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>Video size should not be more than 500MB.</div>
        </div>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>Record your video in a plain background and try to avoid noise.</div>
        </div>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>No age limit, anyone can participate.</div>
        </div>
        <div className={classes.r}>
      <svg className={classes.star} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path stroke="currentColor" d="M15 0v30M7.5 27.99l15-25.98M2.01 22.5l25.98-15M0 15h30M2.01 7.5l25.98 15M7.5 2.01l15 25.98"></path>
      </svg>
      <div className={classes.rTitle}>Winners are not allowed to participate.</div>
        </div>
        </div>
      </div>

      {/* Rewards */}

      <div className={classes.rewards}>
        <div className={classes.rewardsTitle}>Awards</div>
        <div className={classes.rewardsImages}>
        <img className={classes.win} src={Win1} alt="" />
        <img className={classes.win} src={Win2} alt="" />
        <img className={classes.win} src={Win3} alt="" />
        <img className={classes.win} src={Win4} alt="" />
        <img className={classes.win} src={Win5} alt="" />
        <img className={classes.win} src={Win6} alt="" />
        <img className={classes.win} src={Win7} alt="" />
        </div>
      </div>

      {/* Season 1 Highlight Video */}

      <div className={classes.highlight}>
        <div className={classes.highlightTitle}>Season 1 Highlight</div>
        <iframe className={classes.highlightVideo} width="560" height="315" src="https://www.youtube.com/embed/vH6tlvVYuks?si=pgyGfftRp_u0Yz9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>



      {/* Our Supporters */}

      <div className={classes.supporters}>
        <div className={classes.supportersTitle}>Sereng Star Supporters</div>

        <div className={classes.supporterBackground}>
        <div className={classes.supportersDesc}>
        Your unwavering enthusiasm transforms each note into a symphony of shared dreams. Thank you for being the heartbeat behind the melodies and the stars that light up our musical journey.
        </div>
        <Marquee speed={70} className={classes.supporter}>
          <img className={classes.supporterImage} src={Supporter1} alt="" />
          <img className={classes.supporterImage} src={Supporter2} alt="" />
          <img className={classes.supporterImage} src={Supporter3} alt="" />
          <img className={classes.supporterImage} src={Supporter4} alt="" />
          <img className={classes.supporterImage} src={Supporter5} alt="" />
          <img className={classes.supporterImage} src={Supporter6} alt="" />
          <img className={classes.supporterImage} src={Supporter7} alt="" />
          <img className={classes.supporterImage} src={Supporter8} alt="" />
          <img className={classes.supporterImage} src={Supporter9} alt="" />
          <img className={classes.supporterImage} src={Supporter10} alt="" />
          <img className={classes.supporterImage} src={Supporter11} alt="" />
        </Marquee>
        </div>
      </div>

      {/* Sponsors */}

      <div className={classes.sponsors}>
        <div className={classes.sponsorsTitle}>Sponsors</div>
        <div className={classes.sponsor}>
        {/* <a href="https://camringopictures.com" target="_blank" rel="noreferrer"><img className={classes.sponsor1} src={Sponsor1} alt="" /></a> */}
          <div className={classes.sponsor1}>Reveal Soon</div>
          <div className={classes.sponsor1}>Reveal Soon</div>
          <div className={classes.sponsor1}>Reveal Soon</div>
          <div className={classes.sponsor1}>Reveal Soon</div>
          <div className={classes.sponsor1}>Reveal Soon</div>
          <div className={classes.sponsor1}>Reveal Soon</div>
        </div>
      </div>

      {/* reviews */}

      <Carousel carouselData={images} />

      {/* footer */}

      <Footer />

    </div>
  )
}

export default Home


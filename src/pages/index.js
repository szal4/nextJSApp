import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { faSearch, faPhone, faUser, faExternalLink, faInr } from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // import the icons you need

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>leverage Edu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

       <div className={styles.ad}>
        <p className={styles.adTitle}>Leverage Edu Scholarship Worth <span className={styles.rupeeIcon}><FontAwesomeIcon icon={faInr} color={'whitesmoke'}></FontAwesomeIcon></span> 7,00,00,000 </p>
        <button className={styles.adButton}>Apply now</button>
       </div>

       <div className={styles.header}>
        <div className={styles.headerLogo}><img src='https://tse1.mm.bing.net/th?id=OIP.BBY7G4-kDMabODYCx214GAHaDt&pid=Api&P=0&h=180' width={80}  alt='icon'></img></div>
        <div className={styles.headerTab}>study Abroad</div>
        <div className={styles.headerTab}>Accommodation</div>
        <div className={styles.headerTab}>Test Prep</div>
        <div className={styles.headerTab}>Finanace</div>
        <div className={styles.headerTab}>Community</div>
        <div className={styles.headerTab}>Products</div>
        <div className={styles.headerTab}>More</div>
        <div className={styles.headerIcon}>
          <FontAwesomeIcon icon={faSearch} color={'whitesmoke'}></FontAwesomeIcon>
        </div>
        <div className={styles.headerIcon}>
        <FontAwesomeIcon icon={faPhone} color={'whitesmoke'}></FontAwesomeIcon>
        </div>
        <div className={styles.headerIcon}>
        <FontAwesomeIcon icon={faUser} color={'whitesmoke'}></FontAwesomeIcon>
        </div>
       </div>
       <div className={styles.halfLine}></div>

      <div className={styles.mainContainer}>

       <div className={styles.mainLeft}>
        <div className={styles.mainLHeading}>
          <h1>FIRST IN THE <br/> FAMILY</h1>
        </div>
        <div className={styles.mainLDis}>
          <p className={styles.mainLDisMin}>They are the global citizens of <br/> tomorrow. Start your study <br/> abroad journey today.</p>
        </div>
        <div className={styles.mainLIcon}>
          <div className={styles.linkIcon}><FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon></div>
          <p className={styles.mainLIconLive}>Live on</p>
          <Image src='/dds.png' width={50} height={50} alt='disney'></Image>
        </div>
        <div className={styles.mainLButton}>
          <button className={styles.mainLButtonFree}> Get Your Shortlist for FREE</button>
        </div>
        <div className={styles.mainLButton}>
          <button className={styles.mainLButtonExpert}> Talk to an Expert </button>
        </div>
        <div className={styles.mainLBottomDis}>
          <p className={styles.colorWhite}> 95% of our students get an admit in less than 4 vweeks</p>
        </div>
        <div className={styles.mainLBottomGlobal}>
          <p className={styles.colorWhite}> Our students finished university to work at global office of:</p>
        </div>
        <div className={styles.mainLBottomOffice}>
         
        </div>

       </div>

       <div className={styles.mainRight}>
        <div className={styles.mainRImgContainer1}></div>
        <div className={styles.mainRImgContainer2}></div>
        <div className={styles.mainRImgContainer3}></div>
        <div className={styles.mainRImgContainer4}></div>
        <div className={styles.mainRImgContainer5}></div>
        <div className={styles.mainRImgContainer6}></div>
       </div>
      </div>
      </main>
    </>
  )
}


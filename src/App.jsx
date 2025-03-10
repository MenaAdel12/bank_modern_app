import React from 'react'
import styles from './style'
import { 
  Navbar, 
  Hero,           
  Stats,
  Billing,
  Business,
  CardDeal,
  Testimonials,
  Clients, 
  CTA, 
  Footer,
} from './components'

export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients /> 
          <CTA /> 
          <Footer />
        </div>
      </div>
    </div>
  )
}

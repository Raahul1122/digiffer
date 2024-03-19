import React from 'react'
import './footer.scss'
const Footer = () => {
  const menuItems = [
    { text: 'News', link: '#' },
    { text: 'Academy Courses', link: '#' },
    { text: 'Careers', link: '#' },
    { text: 'About', link: '#' },
    { text: 'Contact', link: '#' },

  ];
  const menuItem2 = [
    { text: 'Blockchain Security', link: '#' },
    { text: 'Gamification', link: '#' },
    { text: 'Non-Fungible Tokens (NFT)', link: '#' },
    { text: 'Proof of Concept', link: '#' },
    { text: 'Tokenomics', link: '#' },
    { text: 'Cryptocurrency', link: '#' },

  ];

  const menuItem3 = [
    { text: 'Corporate Structure and Tax Strategy', link: '#' },
    { text: 'DAO Formation & Governance', link: '#' },
    { text: 'Non-Fungible Tokens (NFT)', link: '#' },
    { text: 'International Licenses', link: '#' },
    { text: 'International Law Compliance', link: '#' },
    { text: 'Tokenization', link: '#' },

  ];

  const menuItem4 = [
    { text: 'Smart Contract', link: '#' },
    { text: 'ICO', link: '#' },
    { text: 'Wallet Development', link: '#' },
    { text: 'Blockchain Fork', link: '#' },
    { text: 'NFT Marketplace', link: '#' },
    { text: 'Gaming', link: '#' },

  ];

  const menuItem5 = [
    { text: 'White Label NFT Marketplace', link: '#' },
    { text: 'Web3 Wallets', link: '#' },
    { text: 'Rarity Tools', link: '#' },
    { text: 'STO Platform', link: '#' },


  ];
  return (
    <>
      <div className="footer-wrapper">
        <div className="container footer-container">
          <div className="footer-logo-section">
            <img src="/assets/footer-logo.png" alt="" />
            <div className='call-div'>
              <p>Speak with an expert</p>
              <button> <img src="/assets/Vector.png" alt="" className='img-fluid' style={{ width: "16px", height: "16px" }} />1300 462 562</button>
            </div>
          </div>

          <div className='row'>
            <div className="col-lg-2 p-0">
              <div className="footer-nav">
                <h1>Company</h1>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
            <div className="col-lg-2 p-0">
              <div className="footer-nav">
                <h1>Consulting</h1>
                <ul>
                  {menuItem2.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
            <div className="col-lg-3 p-0">
              <div className="footer-nav">
                <h1>Legal</h1>
                <ul>
                  {menuItem3.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
            <div className="col-lg-2 p-0">
              <div className="footer-nav">
                <h1>Web 3.0 Development</h1>
                <ul>
                  {menuItem4.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
            <div className="col-lg-3 p-0">
              <div className="footer-nav">
                <h1>Products</h1>
                <ul>
                  {menuItem5.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-lg-9  ">
              <form>
                <div class="form-row align-items-center d-flex">
                  <div>
                    <h1 className="newsletter-text me-5 ">Join our newsletter</h1>
                  </div>

                  <div class="col-auto me-2">
                    <input type="text" class="form-control " id="inlineFormInput" placeholder="Name" />
                  </div>

                  <div class="col-auto me-2">
                    <div class="input-group ">
                      <input type="email" class="form-control" id="inlineFormInputGroup" placeholder="Email" />
                    </div>
                  </div>

                  <div class="col-auto">
                    <button type="submit" class="btn">Submit</button>
                  </div>

                </div>
              </form>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-content-end  ">
              <div className='footer-icons'>
                <img src="/assets/facebook.png" alt="" />
                <img src="/assets/twitter.png" alt="" />
                <img src="/assets/insta.png" alt="" />
                <img src="/assets/linkedin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
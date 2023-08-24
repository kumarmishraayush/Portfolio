import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted '>
      <section className='d-flex  justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>For more information check out the Navbar</span>
        </div>

        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Ayush Mishra
              </h6>
              <p>
               You can follow me on website mentioned in the navbar.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Key Skill</h6>
              <p>
                <a href='#!' className='text-reset'>
                  MERN Stack
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  DSA (programming problem solving)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  OOPS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Critical Thinking
                </a>
              </p>
            </MDBCol>

           

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                E-mail: kumarmishraayush@gmail.com ,  kumarmishraayush@outlook.com.
              </p>
              
              <p>
                <MDBIcon icon="phone" className="me-3" /> 8800332377
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 8076980553
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold'  href='https://www.google.com'>
          Ayush Mishra
        </a>
      </div>
    </MDBFooter>
    </div>
    </>
  )
}

export default Footer
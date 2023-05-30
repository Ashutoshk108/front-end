import React from 'react';


import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:
        
        </span>
      </div>

      <div>
      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              BIRCTC
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <p class="mb-0" >Made with <MDBIcon fas icon="heart" /> by<a class="ml-1" href="https://wrapbootstrap.com/user/DesigningWorld"> BHAVNA CORP</a></p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>About</h6>
            <p>
              <a href='#!' className='text-reset'>
                About Us
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Corporate Sale
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Term & Policy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Community
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
            <p>
              <a href='#!' className='text-reset'>
                Enquiry NUmber 139
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Privacy 
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              NOIDA, LOGEXTIC PARK, IND
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@birctc.org.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> +91 99880 99880
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> +91 99880 99880
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        BIRCTC.com
      </a>
    </div>
  </MDBFooter>
);
}

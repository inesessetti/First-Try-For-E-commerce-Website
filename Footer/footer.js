import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css';
const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="F">
        <MDBRow>
          <MDBCol md="6" className="Links">
            <h5 className="title">Links</h5>
            <ul className="KtibetL">
                <br/>
              <div className='ines' >
            <li style={{display:"inline"}}>
                <a href="Home" className="Links" >Home</a>
              </li>
              <li style={{display:"inline"}}>
                <a href="Men" className="Links">Men</a>
              </li>
              <li style={{display:"inline", paddingTop:'20%', wordSpacing:'2em'}}>
                <a href="Women"  className="Links">Women</a>
              </li>
              <li style={{display:"inline"}}>
                <a href="Contact" className="Links">Contact</a>
              </li>
              </div>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://coreui.io/"> ClothesStore.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
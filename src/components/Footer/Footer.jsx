import Nav from "react-bootstrap/Nav";
import "./footer.css";

const Footer = () => {
  const menuItems = [
    { label: "서비스이용약관", eventKey: "link-1" },
    { label: "개인정보처리방침", eventKey: "link-2" },
    { label: "이메일무단수집거부", eventKey: "link-3" },
  ];

  return (
    <div className="footer-container">
      <Nav className="nav-container-footer" activeKey="/home">
        {menuItems.map((menuItem, index) => (
          <Nav.Item key={index} className="nav-item-footer">
            <Nav.Link eventKey={menuItem.eventKey} className="nav-link-footer">
              {menuItem.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className="footer-description">
        <p className="logo-footer">(로고인입)</p>
        <div className="info-footer">
          <p className="info-footer-content">
            (주)의료감정분석원 l OOO l T. 02-0000-0000 l F. 02-0000-0000
          </p>
          <p className="info-footer-content">
            사업자등록번호 : 000-00-00000 l E. ddd@gmail.com
          </p>
          <p className="info-footer-content">
            01234 무슨시 무슨구 무슨로 347 무슨빌딩 1302호
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Nav from 'react-bootstrap/Nav';
import './header.css'


const Header = () => {
  const menuItems = [
    { label: '회사소개', href: '/home' },
    { label: '의료자문', eventKey: 'link-1' },
    { label: '의료분석', eventKey: 'link-2' },
    { label: '동시감정', eventKey: 'link-3' },
    { label: '고객서비스', eventKey: 'link-4' }
  ];

  return (
    <Nav className='nav-container' activeKey="/home">
      {menuItems.map((menuItem, index) => (
        <Nav.Item key={index} className='nav-item'>
          {menuItem.href ? (
            <Nav.Link href={menuItem.href} className='nav-link'>{menuItem.label}</Nav.Link>
          ) : (
            <Nav.Link eventKey={menuItem.eventKey} className='nav-link'>{menuItem.label}</Nav.Link>
          )}
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Header;

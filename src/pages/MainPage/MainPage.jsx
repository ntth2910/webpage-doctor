import Header from '../../components/Header/Header';
import './mainpage.css'


const MainPage = () => {
  return (
    <div className='main-page-container'>
      <div className='button-group'>
      <button className='button-login'>로그인</button>
      <button className='button-signup'>회원가입</button>
      </div>
      <p className="logo">(로고인입)</p>
       <Header/>
       <div>
        <div>
          <p>OO의료감정분석원은</p>
          <h1>신뢰를 바탕으로 한 전문 컨설팅이</h1>
      <h1>이루어집니다.</h1>
      <p>전문성과 공정성을 기반으로 최고 수준의 의료감정서비스를 제공합니다.</p>
      <button>자세히보기</button>
        </div>

       <img src='src/assets/CK_wmtg211188 1.png'/>
       </div>
       
    </div>
  )
}

export default MainPage

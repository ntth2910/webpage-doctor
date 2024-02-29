import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./mainpage.css";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="button-group">
        <button className="button-login">로그인</button>
        <button className="button-signup">회원가입</button>
      </div>
      <p className="logo">(로고인입)</p>
      <Header />
      <div className="slider-container">
        <div className="slider-description pt-[70px] pl-[120px]">
          <p className="des-1">OO의료감정분석원은</p>
          <h1 className="des-2">
            <span className="text-[#AAFF9C]">신뢰를 바탕</span>으로 한 전문
            컨설팅이
          </h1>
          <h1 className="des-2">이루어집니다.</h1>
          <p className="des-3 mb-[40px]">
            전문성과 공정성을 기반으로 최고 수준의 의료감정서비스를 제공합니다.
          </p>
          <button className="button-des">자세히보기</button>

          <div className="dot-footer mt-[80px]">
            <div className="dot blue-dot"></div>
            <div className="dot white-dot"></div>
            <div className="dot white-dot"></div>
          </div>
        </div>
        <img className="img-slider" src="./public/CK_wmtg211188 1.png" />
      </div>
      <div className="group-container">
        <div className="group1">
          <p className="title">의료자문</p>
          <div className="description">
            <p>공정하고 신뢰할 수 있는</p>
            <p>정확한 분석으로 진행됩니다.</p>
          </div>

          <button className="arrow-group1">
            <img src="./public/group 6.png" />
          </button>
        </div>
        <div className="vertical-line"></div>
        <div className="group2">
          <p className="title">의료자문 신청내역</p>
          <div className="description">
            <p>의료자문을 신청했었다면,</p>
            <p>빠르게 확인해보세요.</p>
          </div>

          <button>
            <img src="./public/group 6.png" />
          </button>
        </div>
        <button className="button-direct">Direct</button>
      </div>
      <div className="about-section mb-[120px] pl-[174px]">
        <div className="QA-container flex flex-col ml-[66px] mr-[87px] w-[415px]">
          <div className="QA-title flex">
            <p className="underline-title mb-0">공지사항</p>
            <p className="pr-[246px] pl-[60px] text-[#cccccc]">Q&A</p>
            <img
              src="./public/plus.png"
              className="w-[17px] h-[17px] mt-[8px]"
            />
          </div>
          <div className="QA-description flex">
            <div>
              <p className="text-[#cccccc]">24.01.01</p>
              <p className="text-[#cccccc]">24.01.01</p>
              <p className="text-[#cccccc]">24.01.01</p>
            </div>
            <div className="ml-[26px]">
              <p>공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...</p>
              <p>공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...</p>
              <p>공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...</p>
            </div>
          </div>
        </div>
        <div className="account-phone">
          <div className="account bg-[#1B80DC] w-auto">
            <p className="text-[#ffffff]">계좌정보</p>
            <p className="text-[#ffffff] font-bold">국민 000000-00-000000</p>
            <p className="text-[#AAFF9C]">예금주 OOO</p>
          </div>
          <div className="phone bg-[#263848]">
            <p className="text-[#ffffff]">대표전화</p>
            <p className="text-[#ffffff] font-bold">
              T. 02-0000-0000
              <span className="text-[#AAFF9C]"> Fax. 02-0000-0000</span>
            </p>
            <p className="text-[#ffffff]">
              오전 9시 ~ 오후 6시 (토,일,공휴일 휴무)
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

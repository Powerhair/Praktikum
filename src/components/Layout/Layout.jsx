import "./Layout.css";
import MainPage from "../MainPage/MainPage.jsx";
import VideoPage from "../VideoPage/VideoPage";
import AnswerPage from "../AnswerPage/AnswerPage";

function Layout({ showMainPage, showVideoPage, showAnswerPage }) {
  return (
    <div className="layout">
      {showMainPage && <MainPage />}
      {showVideoPage && <VideoPage />}
      {showAnswerPage && <AnswerPage />}
    </div>
  );
}

export default Layout;

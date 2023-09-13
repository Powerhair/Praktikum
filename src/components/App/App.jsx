import React from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Layout from "../Layout/Layout.jsx";
import Footer from "../Footer/Footer.jsx";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(true);
  const [isShowAnswerPage, setIsShowAnswerPage] = useState(false);

  const [showMainPage, setShowMainPage] = useState(true);
  const [showVideoPage, setShowVideoPage] = useState(false);
  const [showAnswerPage, setShowAnswerPage] = useState(false);

  const handleShowMainPage = () => {
    setShowMainPage(true);
    setShowVideoPage(false);
    setShowAnswerPage(false);
  };

  const handleShowVideoPage = () => {
    setShowMainPage(false);
    setShowVideoPage(true);
    setShowAnswerPage(false);
  };

  const handleShowAnswerPage = () => {
    setShowMainPage(false);
    setShowVideoPage(false);
    setShowAnswerPage(true);
  };

  // function handleChangePage() {
  //   switch (isShow) {
  //     case true:
  //       setIsShow(false);
  //       break;
  //     case false:
  //       setIsShow(true);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // function handleChangeMainPage() {
  //   setIsShow(true);
  // }

  // function handleChangeVideoPage() {
  //   setIsShow(false);
  // }

  // console.log(isShow);

  return (
    <div className="page">
      <Header
        handleShowMainPage={handleShowMainPage}
        handleShowVideoPage={handleShowVideoPage}
        handleShowAnswerPage={handleShowAnswerPage}
        isShow={isShow}
      />
      <Layout
        showMainPage={showMainPage}
        showVideoPage={showVideoPage}
        showAnswerPage={showAnswerPage}
      />
      <Footer />
    </div>
  );
}

export default App;

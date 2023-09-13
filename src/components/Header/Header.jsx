import "./Header.css";
import telegram from "../../image/telegram-icon.svg";
import github from "../../image/github-icon.svg";

function Header({
  handleShowMainPage,
  handleShowVideoPage,
  handleShowAnswerPage,
}) {
  return (
    <div className="header">
      <div className="header__container">
        <a href="https://t.me/stupidhair" target="_blank" rel="noreferrer">
          <img className="link__image" src={telegram} alt="TG" />
        </a>
        <a href="https://github.com/Powerhair" target="_blank" rel="noreferrer">
          <img className="link__image" src={github} alt="GH" />
        </a>
      </div>
      <div className="header__container">
        <button
          className="header__button"
          type="button"
          onClick={handleShowMainPage}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Обо мне
        </button>

        <button
          className="header__button"
          type="button"
          onClick={handleShowVideoPage}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Немного о CSS
        </button>
        <button
          className="header__button-answer"
          type="button"
          onClick={handleShowAnswerPage}
        >
          <span>Ответы на вопросы</span>
        </button>
      </div>
    </div>
  );
}

export default Header;

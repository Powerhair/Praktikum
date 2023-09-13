import "./MainPage.css";
import myPhoto from "../../image/myphoto.jpg";
import capy from "../../image/capy.png";

function MainPage() {
  return (
    <div className="mainpage">
      <h2 className="mainpage__title">Обо мне</h2>
      <div className="mainpage__container">
        <div className="mainpage__container-image">
          <img className="mainpage__image" src={capy} alt="" />
          <p className="mainpage__image-description">
            К сожалению фотографии из школы нет, но эта свинка даже лучше!
          </p>
        </div>
        <div className="mainpage__container-image">
          <img className="mainpage__image" src={myPhoto} alt="" />
          <p className="mainpage__image-description">А вот такой я сейчас</p>
        </div>
      </div>
      <div className="mainpage__text-container">
        <p className="mainpage__description">
          Знакомство с программированием началось со знакомства с промышленными
          роботами. Управление, настройка мощного механизма посредством внесения
          изменений в стрчоки кода, очень увлекло меня.
        </p>
        <p className="mainpage__description">
          Потом я узнал о веб-разработке, и эта сторона программирования
          понравилась мне гораздо больше и вот почему.
        </p>
        <p className="mainpage__description">
          Во-первых, веб-разработка позволяет мне воплощать свою творческую
          сторону. Я могу создавать красивые и функциональные веб-сайты, которые
          нравятся пользователю.
        </p>
        <p className="mainpage__description">
          Во-вторых, каждый проект веб-разработки представляет собой уникальную
          задачу, требующую логического мышления.
        </p>
        <p className="mainpage__description">
          В целом, программирование является для меня путем для саморазвития,
          реализации своих творческих и аналитических способностей, а также
          возможностью вносить важный вклад в современный мир технологий.
        </p>
      </div>
    </div>
  );
}

export default MainPage;

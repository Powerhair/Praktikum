import "./VideoPage.css";

function VideoPage() {
  const videoUrl = `https://www.youtube.com/embed/mIYoasoNa5M?si=TCbFwUgjuvtrWWvA`;
  return (
    <div className="videopage">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/1CiekqAjOFY?si=j21vWKwzC8RntZzk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPage;

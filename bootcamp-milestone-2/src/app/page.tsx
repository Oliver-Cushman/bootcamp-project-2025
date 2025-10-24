import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.page}>
      <div className={style.about_wrapper}>
        <div className={style.img_with_speech}>
          <a
            className={style.about_image}
            href="https://github.com/Oliver-Cushman"
          >
            <img src="/about-pic.jpg" alt="about picture" />
          </a>
          <div className={style.speech_bubble_horizontal}>
            <div className={style.speech_tri_left}></div>
            <div className={style.speech_bubble_small}>
              <div className={style.about_text}>
                <h2>
                  <em>Hello World!</em>
                </h2>
                <p>
                  I'm <strong>Oliver Cushman</strong>, an aspiring software
                  engineer studying computer science at Cal Poly SLO!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.speech_bubble_vertical}>
          <div className={style.speech_tri_up}></div>
          <div className={style.speech_bubble}>
            <div className={style.about_text}>
              <p>
                I love <strong>programming</strong>, <strong>movies</strong>,
                <strong>music</strong>, and <strong>games</strong>. I'm always
                open to recommendations of what to code, watch, listen to, or play
                next!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

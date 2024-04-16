import Bubble from "./Bubble/Bubble";
import classes from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={classes.landingPage}>
        <Bubble/>
      <div className={classes.title}>
        <h1>CSEP ROBERT</h1>
        <h2>PHOTOGRAPHY</h2>
      </div>
      <div className={classes.about}>
      <h1>About Me</h1>
      <p>Capturing moments, freezing time, and telling stories through the lens is not just my passion—it's my way of life. I'm <b>Csép Robert</b>, a photographer with a deep-rooted love for visual storytelling.</p>
    <p>My journey into the world of photography began with a fascination for the way a single image could evoke a myriad of emotions, spark memories, or convey powerful messages without saying a word. Over the years, I've honed my craft, delving into various genres from portrait to landscape, documentary to fine art.</p>
    <p>What drives me as a photographer is the opportunity to connect with people and places, to uncover the essence of each subject and bring it to life through my work. Whether I'm capturing the raw emotion in a candid moment, the breathtaking beauty of nature, or the intricate details of everyday life, I strive to create images that resonate with viewers on a profound level.</p>
    <p>Through my lens, I seek to not only document the world as it is but to also inspire others to see it through a new perspective—to notice the beauty in the ordinary, the magic in the mundane, and the stories waiting to be told in every corner of the globe.</p>
    <p>Every photograph I take is a piece of my heart, a reflection of my passion for storytelling and my reverence for the art of photography. Join me on this visual journey, and let's discover the world together—one frame at a time.</p>
    </div>
    </div>
  );
};

export default LandingPage;

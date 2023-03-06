import "../styles/home.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import twitterIcon from "../images/icon-twitter.svg";
import facebookIcon from "../images/icon-facebook.svg";
import linkedinIcon from "../images/icon-linkedin.svg";
const Home = () => {
  return (
    <>
      <div className="home__container wrapper">
        <div className="home__headline">
          <a href="/news" className=" me-3 text-blue">
            news
          </a>
          <a href="/control-articles" className="text-blue">
            {" "}
            articles
          </a>
          <h1 className="home__title">ALL ABOUT CLIMATE CHANGE</h1>
        </div>
        <div className="c-change">
            <div className="c-image1"></div>
            <div className="c-image2"></div>
        </div>
        <article className="mb-5 shadow-sm p-4 mb-4 bg-white w-75 mx-auto">
          The climate is seen as the normal weather in a specific area. For
          example, the temperatures in the Amazon are always high and it is
          raining almost every day, while on the Antarctic it is always freezing
          and almost no rain falls. When the normal temperature and the amount
          of rain in a specific area changes, there is a transition in the
          normal weather. This is climate change. Not only in specific areas
          climate change is observed, all over the world the consequences of
          climate change are felt.
        </article>
        <article className="save_the_planet w-100  my-3">
          <h1 className="save-planet">
            WHAT CAN I DO TO HELP CLIMATE CHANGE AND SAVE PLANENT?
          </h1>
          <p>
            Climate change is happening. The situation can feel overwhelming.
            But there are small, achievable changes we can all make in our lives
            to lessen the impact. Start today. Find out what you can do right
            now to make a real difference.
          </p>
          <p>
            Climate change won’t wait. We’ve arrived at a fork in the road and
            we need to join together to act, now.
          </p>
          <p>
            We can all contribute in small ways by reducing our personal carbon
            footprint to help mitigate the speed and effects of climate change
          </p>
          <h5 className="w-25 bg-sucess">
            <a href="/control-articles">Learn more</a>
          </h5>
        </article>
        <div className="climate-change-img mt-5 mb-4 card">
          <div className="change-article card-body">
            <h3 className="my-3">
              Changes in the climate are not something new.
            </h3>
            <p>
              In the past, natural factors, such as volcanic eruptions and El
              Niño, caused fluctuations in the temperature and rainfall. What is
              new, is the influence of humans on climate change. We drive our
              cars, are heating our houses when it is cold outside, and use
              energy to cook. These day to day activities cause the emission of
              greenhouse gasses, such as methane and carbon. These gasses
              prevent the heat emitted by the earth to escape, causing global
              warming.
            </p>
          </div>
          <div className="change-img"></div>
          <a href="/news" className="mb-2 mx-auto">
            get latest climate article
          </a>
        </div>
      </div>
      <footer className="footer">
        <div className="contact">
          <h1 className="contact__title">CLIMATE GEOGRAPHIC</h1>
          <a href="/">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="/">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a href="/">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </div>
        <div className="about__us">
          <h3>About us</h3>
          <h5>
            <a href="/newsletter">contact us/newsletter</a>
          </h5>
          <h5>
            <a href="/control-articles">Get climate articles</a>
          </h5>
          <h5>
            <a href="/news">Latest climate news</a>
          </h5>
        </div>
        <div className="mission">
          <h3>Mission</h3>
          <p>
            Climate Geographic believes access to information is crucial to
            achieve good climate governance and to secure nature for upcoming
            generations. We help people to access data,updates and information
            related to climate
          </p>
          <h4>samutech144@gmail.com</h4>
        </div>
      </footer>
    </>
  );
};
export default Home;

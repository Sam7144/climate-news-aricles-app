import '../styles/controls.scss'
import twitterIcon from "../images/icon-twitter.svg";
import facebookIcon from "../images/icon-facebook.svg";
import linkedinIcon from "../images/icon-linkedin.svg";
const ClimateArticle = () => {
  return (
    <>
      <div className="news">
        <div className="wrapper">
            <a className="me-3" href='/news'>news</a><a href="/" className="text-blue">home</a>
          <h3 className="headline pt-3">defend the planent</h3>
          <h1 className="headline__climate text-white">
            What is climate change really about?
          </h1>
          <h4 className="quote text-warning">
            Did you know By 2040, theworld is projected to be 2 degrees warmer
            than it is today...
          </h4>
          <p className="w-75 mx-auto">
            That may seem like a tiny change but in reality it will have a huge
            impact. Let me be clear however. Stopping climate change isn’t an
            environmental issue. It’s not about the polar bears, it’s not about
            the glaciers, and it’s not even about saving the Earth.
          </p>
          <h5 className="w-75 text-white mb-0 justice">
            It’s about justice for the world’s poor. Let me tell you why:
            According to the United Nations Development Program, developing
            countries will suffer 99% of the casualties attributable to climate
            change. This is in spite of the fact that the 50 least developed
            nations have had a tiny, 1% impact on greenhouse gas emissions.[1]
            More heat waves, crop failures, natural disasters, droughts and
            famines will be hard for the developed world, but it will be a
            catastrophe for those living with very little.
          </h5>
          <p className="people">
            The 1.2 billion people living in extreme poverty will be more
            dramatically affected by a changing climate primarily because of
            poor infrastructure: both in terms of the way they grow crops and in
            the way their countries cope with extreme weather. The crisis has
            the potential to undo all the progress we've made toward making
            poverty a thing of the past. But it isn’t inevitable. There’s still
            a lot we can do to both prevent the worst consequences of climate
            change. In the long run species may disappear, sea levels may rise
            and rainforests may wither, but over the course of hundreds of
            years, the planet will recover. What we will never get back is our
            chance to live in a world without extreme poverty.
          </p>
          <div className="preserve-article">
            <h5>
              below articles show some ways to preserve and conserve climate
            </h5>
            <div className="conserve__articles">
              <div className="electric-car preserve card p-3 m-3">
                <a href="https://www.un.org/en/actnow/ten-actions">
                  <h5 className="mb-5">Electric vehicle</h5>
                  <img
                    src="/p1.jpg"
                    alt="ímage1"
                    width="100%"
                    className="car mb-3"
                    height={400}
                  />
                  <p className="bg-transparent p-3 w-100 card-body">
                    electric cars help reduce air pollution and cause
                    significantly fewer greenhouse gas emissions than gas or
                    diesel-powered vehicles. Switching from a gasoline or
                    diesel-powered car to an electric vehicle can reduce your
                    carbon footprint by up to 2 tons of CO2e per year. 
                  </p>
                </a>
              </div>
              <div className="card solar-energy m-3 preserve px-3">
                <h5 className="text-success pt-3">Solar Energy</h5>
                <a href="https://www.zenenergy.com.au/knowledge-base/popular-topic/5-advantages-of-solar-energy-on-the-environment/">
                  <h5 className="text-white bg-white w-75 ">Go solar to reduce climate change</h5>
                  <img
                    src="/p5.jpg"
                    alt="solar"
                    width="100%"
                    height={400}
                    className=" solar mb-3"
                  />
                  <h6>
                    solar energy helps in reducing our reliance on fossil fuels
                  </h6>
                  <p className="bg-transparent p-3 w-100 card-body">
                    The sunshine used in solar energy production is free,
                    and clean to environment. On the other hand, fossil fuels are
                    running out, and fast. Reducing our reliance on these finite
                    resources and taking advantage of an abundant, free source
                    of energy, such as sunlight, could mean lower energy prices,
                    reduced greenhouse gas emissions and a stronger, more stable
                    energy future.
                  </p>
                </a>
              </div>
              <div className="card wind-energy p-3 preserve m-3">
              <a href="https://education.nationalgeographic.org/resource/wind-energy">
                <h5 className="mb-5">Wind Energy</h5>
                <img src='/p4.jpg'className="mb-3" alt='turbines' width='100%' height={400}/>
                <p className="bg-transparent p-3 w-100 card-body">
                  Scientists and engineers are using energy from the wind to
                  generate electricity. Wind energy, or wind power, is created
                  using a wind turbines. Wind power is a clean and renewable
                  energy source. Not only is wind an abundant and inexhaustible
                  resource, but it also provides electricity without burning any
                  fuel or polluting the air.
                </p>
              </a>
              </div>
            </div>
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
              <a href="/control-articles">Get climate updates</a>
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
      </div>
    </>
  );
};
export default ClimateArticle;

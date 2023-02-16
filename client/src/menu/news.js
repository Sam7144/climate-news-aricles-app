import { useState, useEffect, useRef } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/news.scss";
import twitterIcon from "../images/icon-twitter.svg";
import facebookIcon from "../images/icon-facebook.svg";
import linkedinIcon from "../images/icon-linkedin.svg";
const Climatenews = () => {
  const [data, setData] = useState([]);
  const newspaper = useRef();
  const buttonClick = useRef();
  useEffect(() => {
    fetchFake();
  }, []);
  function fetchFake() {
    fetch("http://localhost:5005/news")
      .then((response) => {
        return response.json();
      })
      .then((response) => setData(response));
  }
  function fetchFakeOne(id) {
    fetch(`http://localhost:5005/news/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => setData(response));
  }
  useEffect(() => {
    const btn = buttonClick.current;
    btn.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        const id = newspaper.current.value;
        fetchFakeOne(id);
      },
      []
    );
  });
  return (
    <>
      <section className="news-container w-100 wrapper">
        <form className="mt-5  mx-auto w-50 mb-4 form-data p-2">
          <input type="text" ref={newspaper} placeholder="search by newspaper eg thetimes" className="w-75 p-2  rounded-2" />
          <button
            type="submit"
            ref={buttonClick}
            className="btn btn-primary ms-2 form-btn rounded-2"
          >
            search
          </button>
        </form>
        <div className="parent-container">
          <div className="container-news w-75 mx-auto">
            {data.map((val, index) => {
              return (
                <div key={index} className="card news-card">
                  <a href={val.url}>
                  <div className="card-body">
                    <h5>{val.title}</h5>
                    <p>{val.source}</p>
                  </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <footer className="footer mt-2">
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
export default Climatenews;

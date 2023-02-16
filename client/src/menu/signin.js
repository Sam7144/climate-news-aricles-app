import {useRef,useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/sign.scss';
import twitterIcon from '../images/icon-twitter.svg';
import facebookIcon from '../images/icon-facebook.svg';
import linkedinIcon from '../images/icon-linkedin.svg';;
const Signin = () => {
  const[message,setMessage]=useState('');
  const emailAddress=useRef();
  const userComments=useRef();
  const submitForm=async(e)=>{
    e.preventDefault();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailValue=emailAddress.current.value;
    const comentsvalue=userComments.current.value;
    if(!emailValue.match(validRegex)){
      setMessage('please provide a correct email');
    }
    try{
      const response=await fetch('http://localhost:5005/signin',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({email:emailValue,comments:comentsvalue})
    })
           const data=await response.json();
            setMessage(data.msg);
            emailAddress.current.value='';
            userComments.current.value='';

    }catch(err){
      throw err;
    }
  }
  return (
    <>
      <div className='sign mx-3 wrapper'>
        <div className='container-fluid mt-5'>
          <a href='/' className='me-3'>home</a>
          <a href='/news' className='me-3'>news</a>
          <a href='/control-articles'>articles</a>
        </div>
        <div className='sign__headline my-3 text-success'>NEWSLETTER</div>
        <div className='sign_content'>
          <h4>Inspired by – or just curious about – our work and want to make
            sure you don’t miss any of our new resources, events and announcements?
          </h4>
          <h4>
            Our Communications team sends out a monthly newsletter with all our updates.
          </h4>
          <p>
            After signing up below, look out for a welcome message in the bottom of the form – if you don’t see it, check your email and resend it  so our future newsletters
            go straight to your inbox. Do send us any feedback – we’d love to hear from you.
          </p>
        </div>
        <div className='form w-50 mx-auto'>
          <form onSubmit={submitForm}>
            <h2 className=' w-100 mx-auto text-secondary'>Sign up to our newsletter</h2>
            <div class="mb-3 mt-3">
              <label for="email" class="form-label">Email:</label>
              <input class="form-control" ref={emailAddress} id="email" placeholder="Enter email" name="email"/>
            </div>
            <label for="comment">Comments:</label>
            <textarea class="form-control" ref={userComments} rows="5" id="comment" name="text"></textarea>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
          </form>
          <p>{message}</p>
        </div>
      </div>
      <footer className="footer mt-5">
                <div className="contact">
                <h1 className="contact__title">CLIMATE GEOGRAPHIC</h1>
                <a href='/'><img src={facebookIcon} alt='facebook'/></a>
                <a href='/'><img src={twitterIcon} alt='twitter'/></a>
                <a href='/'><img src={linkedinIcon} alt='linkedin'/></a>
                </div>
                <div className="about__us">
                    <h3>About us</h3>
                    <h5><a href='/newsletter'>contact us/newsletter</a></h5>
                    <h5><a href="/news">Get climate updates news</a></h5>
                </div>
                <div className="mission">
                    <h3>Mission</h3>
                    <p>
                    Climate Geographic believes access to information is
                    crucial to achieve good climate governance and to secure nature for upcoming generations.
                    We help people to access data,updates and information related to climate
                    </p>
                    <h4>samutech144@gmail.com</h4>
                </div>
            </footer>
    </>
  )
}
export default Signin;
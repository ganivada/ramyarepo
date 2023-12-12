import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './home.css'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src="http://www.massyart.com/uploads/images/web-design.jpg" />
        <Carousel.Caption>
          <h3>1-0n-1 advantage</h3>
          <p>The Web Designing Course Online Program at FITA Academy enables you to master the concepts of the Web Designing from the basics to advanced level.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png" />
        <Carousel.Caption>
          <h3>Flexiable dates</h3>
          <p>Our Expert Mentors will provide you hands-on training with HTML5, CSS3, JavaScript, jQuery, Bootstrap and PHP with MySQL to make you build an interactive, responsive and dynamic Websites.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://jbsoftware.ca/wp-content/uploads/web-design.jpg" />
        <Carousel.Caption>
          <h3>4-hours session</h3>
          <p>
          These courses cover various aspects of web design, including HTML, CSS, responsive design, user experience (UX) design, and web development principles.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
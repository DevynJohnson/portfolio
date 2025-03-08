import { Col, Container, Row, Image } from "react-bootstrap";
import LinkedInProfilePic from "../images/LinkedInProfilePic.jpg";
function AboutMe() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6} md={4}>
            <Image style={{textAlign: "center"}} src={LinkedInProfilePic} alt="photo of devyn johnson" thumbnail />
          </Col>
        </Row>
      </Container>
    <div className='aboutMePage'>
      <p>
        I am a Full Stack Developer with a passion for designing, building, and
        maintaining applications that deliver seamless user experiences. With a
        strong foundation in both front-end and back-end development, I have
        honed my skills in web design, server creation and deployment, database
        management, and Full Stack projects within the React framework.
      <br></br>
      <br></br>
        My approach to development is rooted in problem-solving and continuous
        learning. Whether it be crafting intuitive user interfaces, optimizing
        server performance, or structuring efficient databases, I enjoy tackling
        challenges and refining my expertise to create scalable and effective
        solutions.
      <br></br>
      <br></br>
        Beyond coding, I have a full and vibrant life. I love cooking - either
        experimenting with new recipes or perfecting family favorites. I also
        cherish spending time with my wife and our four boys — two teenagers
        and twin toddlers — who keep life exciting and always on the move.
      <br></br>
      <br></br>
        When I get the chance, I hit the ice to play hockey or immerse myself in
        a game of Dungeons and Dragons, where strategy and creativity go hand in
        hand. I am eager to bring my technical skills, problem-solving mindset,
        and passion for development to new and exciting projects. Let's build
        something great together!
      </p>
    </div>
    </div>
  );
}

export default AboutMe;

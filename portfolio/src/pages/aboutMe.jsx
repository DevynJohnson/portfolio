import { Container, Image } from "react-bootstrap";
import LinkedInProfilePic from "../images/LinkedInProfilePic.jpg";
function AboutMe() {
  return (
    <div>
      <Container className="profilePicContainer">
            <Image
              src={LinkedInProfilePic}
              alt="photo of devyn johnson"
              thumbnail
            />
      </Container>
      <div className="aboutMePage">
        <p>
          I am a Full Stack Developer with a passion for designing, building,
          and maintaining applications that deliver seamless user experiences.
          With a strong foundation in both front-end and back-end development, I
          have honed my skills in web design, server creation and deployment,
          database management, and Full Stack projects within the React
          framework.
          <br></br>
          <br></br>
          My approach to development is rooted in problem-solving and continuous
          learning. Whether it be crafting intuitive user interfaces, optimizing
          server performance, or structuring efficient databases, I enjoy
          tackling challenges and refining my expertise to create scalable and
          effective solutions. With a professional background in food service
          management, I am used to working in fast-paced environments and
          collaborating with diverse teams to achieve common goals.
          <br></br>
          <br></br>
          Outside of coding, I love spending time
          with my wife and our four boys — two teenagers and twin toddlers, who ensure there is never a dull moment at our home. When I get the chance, I hit the ice to play hockey or immerse myself
          in a game of Dungeons and Dragons with friends, where strategy and creativity go
          hand in hand. 
          <br></br>
          <br></br>
          I am eager to bring my technical skills, problem-solving
          mindset, and passion for development to new and exciting projects.
          <br></br>
          <br></br>
          Let's build something great together!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

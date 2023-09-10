import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={8}>
          <h1 className='text-center mt-5 mb-4'>About Our Platform</h1>
          <p>
            Welcome to our platform, a comprehensive networking and career
            development hub for professionals in various industries.
          </p>
          <p>
            Our platform offers a wide range of features to help you grow your
            network, share industry insights, find job opportunities, and offer
            your freelance services.
          </p>
          <h2 className='mt-4'>Key Features:</h2>
          <ul>
            <li>Connect with professionals from various fields</li>
            <li>
              Share your knowledge and industry insights through articles and
              posts.
            </li>
            <li>
              Browse and apply for job opportunities tailored to your skills.
            </li>
            <li>Offer your freelance services to businesses and individuals</li>
            <li>
              Build a comprehensive professional profile to showcase your
              expertise
            </li>
          </ul>
          <p>
            Whether you're a seasoned professional or just starting your career,
            our platform is designed to provide you with valuable connections
            and resources to advance in your field.
          </p>
          <p className='mb-5'>
            Join our community today and take your career to the next level!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Untitled Pages</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://github.com/untitled-pages">
                GitHub
              </Nav.Link>
              <Nav.Link href="/founder">Founder</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="bg-light">
        <Container className="py-5">
          <Row className="m-0">
            <Col className="p-5" md={6} sm={12} xs={12}>
              <h1 className="display-4 fw-bold">Turn visitors into leads</h1>
              <p className="lead">
                Start relationships on the right foot with a friendly page that
                invite people to leave their email.
              </p>

              <Button size="lg" variant="primary">
                Get started for free
              </Button>
            </Col>
            <Col>
              <Image
                alt="Illustration"
                height={528.67134}
                src="/images/undraw_landing_page_re_6xev.svg"
                unoptimized={true}
                width={873}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="p-5">
        <footer>
          <Row>
            <Col className="py-2" md={2} sm={12} xs={12}>
              <h5>Untitled Pages</h5>
              <ul className="flex-column nav">
                <li className="mb-2 nav-item">
                  <Link href="/">
                    <a className="nav-link p-0 text-muted">Home</a>
                  </Link>
                </li>
                <li className="mb-2 nav-item">
                  <Link href="https://github.com/untitled-pages">
                    <a className="nav-link p-0 text-muted">GitHub</a>
                  </Link>
                </li>
                <li className="mb-2 nav-item">
                  <Link href="/founder">
                    <a className="nav-link p-0 text-muted">Founder</a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col className="py-2" md={{ offset: 6, span: 4 }} sm={12} xs={12}>
              <form>
                <h5>Don&apos;t miss out</h5>
                <p>Sign up for our newsletter to stay in the loop</p>
                <div className="d-flex gap-2 w-100">
                  <label className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </Col>
          </Row>

          <div className="border-top d-flex justify-content-between my-4 py-4">
            <p>&copy; {new Date().getFullYear()} Untitled Pages</p>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Home;

export async function getStaticProps({ params }: { params: any }) {
  return {
    props: {
      meta: {
        description:
          "Start relationships on the right foot with a friendly page that invite people to leave their email.",
        image: "/images/open-graph-image.jpg",
        title: "Untitled Pages - Turn visitors into leads",
        url: "https://untitledpages.com",
      },
    },
  };
}

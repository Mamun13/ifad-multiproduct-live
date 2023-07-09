import PageAbout from "../../../styles/About.module.scss";
import BeatLoader from "react-spinners/BeatLoader";
import Head from "next/head";
import { linkBreak } from "../../../utils/common.js";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import MissionImage from "../../../public/mission.png";
import VisionImage from "../../../public/vision.png";
import { Container, Row } from "react-bootstrap";
import ValuePicOne from "../../../public/values/1.png";
import ValuePicTwo from "../../../public/values/2.png";
import ValuePicThree from "../../../public/values/3.png";
import ValuePicFour from "../../../public/values/4.png";
import ValuePicFive from "../../../public/values/5.png";
import ValuePicSix from "../../../public/values/6.png";

const PageMilestone = ({ sendcompanyData, MissionVission, ValusData }) => {
  const contectLoop = sendcompanyData?.content_item.map((content, idx) => {
    return (
      <div className="row g-4" key={idx}>
        <div className="col-lg-8 col-md-6">
          <h2 className="font-calibri fw-bold p-2 font-poppins ">
            {content.item_name}
          </h2>
          <p className="justify p-2">{linkBreak(content.item_long_desc)}</p>
        </div>

        <div className="col-lg-4 col-md-6">
          <img
            src={content.item_image}
            alt={content.item_name}
            className="img-fluid img-size rounded-5"
          />
        </div>
      </div>
    );
  });

  const MissionVissionLoop = MissionVission?.content_item.map((ctx, idx) => {
    return (
      <section id="missionVission" className="values">
        <div className="position-relative">
          <img
            src={ctx.item_image}
            alt={ctx.item_name}
            className="missionVissoo-bg-img"
          />
        </div>
      </section>
    );
  });

  const valusCard = ValusData[0]?.content_item.map((valus, idx) => {
    return (
      <div className="col-lg-3 text-center">
        <div className="space-content">
          <Card className="value-content-bg rounded-4">
            <div className="text-center">
              <img
                src={valus.item_image}
                className="mx-4 mt-5 imgSize text-center"
                alt={valus.item_name}
              />
            </div>
            <Card.Body>
              <Card.Title className="font-poppins text-white mt-2">
                <h4 className="fw-700">{valus.item_name}</h4>
              </Card.Title>
              <Card.Text className="card-align text-white text-center pb-3 pt-2 ">
                {valus.item_long_desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Company Review | IFAD Multi-product</title>
      </Head>
      <section id="company-review" className={PageAbout.milestone}>
        <img
          src={sendcompanyData?.module_image}
          alt={sendcompanyData?.module_name}
          className={PageAbout.bgimg}
        />
        <div className={PageAbout.image}></div>
      </section>

      <section id="milestone" className="py-5">
        <div className="container">
          {contectLoop ? contectLoop : <BeatLoader />}
        </div>
      </section>

      {/* {MissionVissionLoop ? MissionVissionLoop : "loading.."} */}

      {/* mission part start */}

      <section id="missionVission" className="values">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="d-flex justify-content-between">
                <div className="text-center">
                  <Image
                    src={MissionImage}
                    alt="mission"
                    height={150}
                    width={150}
                    className="mission-img"
                  />
                </div>
                <h1 className="text-center text-capitalize font-poppins fw-bold pt-5 font-32">
                  our <span className="theme-color"> mission</span>
                </h1>
              </div>
              <div className=" mission">
                <div>
                  <p className="text-justify px-3 pb-5 f20">
                    Our mission is to satisfy the need of the consumers by
                    offering them high quality products and solutios at the
                    right place at right value . We will do that by driving
                    continuous onnovations, process improvements, people
                    development while adding value for all stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-between">
                <div className="text-center">
                <Image
                  src={VisionImage}
                  alt="vision"
                  height={150}
                  width={150}
                />
                </div>
                <h1 className="text-center text-capitalize font-poppins fw-bold pt-5 font-32">
                our <span className="theme-color"> vision</span>
                </h1>
              </div>
              <div className=" mission">
                <div>
                  <p className="text-justify px-3 pb-4 f20">
                  To delight consumers by providing high quality and affordable
                  products that creates happy and healthy lives.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* value part */}
      <section>
        <Container>
          <Row>
            <h1 className="text-center text-capitalize font-poppins fw-bolder py-4 font-32">
              our <span className="theme-color"> values</span>
            </h1>
            <div className="col-lg-7 col-md-7 d-flex justify-content-start value-items">
              <div className="col-lg-1 col-md-1">
                <Image
                  src={ValuePicOne}
                  alt=""
                  height={70}
                  width={70}
                  className="value-image"
                />
              </div>
              <div className="col-lg-11 col-md-11 d-flex align-items-center">
                <p className="f20 ps-3">
                  <span className="fw-bold logo-color">
                    Consumer/Customer Focus:{" "}
                  </span>
                  Keeping consumers at the forefront of all our actions and
                  decisions.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 d-flex justify-content-start value-items">
              <div className="col-lg-1 col-md-1">
                <Image
                  src={ValuePicTwo}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="col-lg-11 col-md-11 d-flex align-items-center">
                <p className="f20 ps-3">
                  <span className="fw-bold logo-color">Innovative: </span>
                  Continuously innovate products to stay ahead of time.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 d-flex justify-content-start value-items">
              <div className="col-lg-1 col-sm-1">
                <Image
                  src={ValuePicThree}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="col-lg-11 col-md-11 d-flex align-items-center">
                <p className="f20 ps-3">
                  <span className="fw-bold logo-color">Quality First: </span>
                  Maintain highest quality standard of product services and
                  prople.
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-7 d-flex justify-content-start value-items">
              <div className="col-lg-1 col-md-1">
                <Image
                  src={ValuePicFour}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="col-lg-11 col-md-11 d-flex align-items-center">
                <p className="f20 ps-3">
                  <span className="fw-bold logo-color">Accountability: </span>
                  prople are empowered and accountable for deliverables
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 d-flex justify-content-start value-items">
              <div className="col-lg-1 col-md-1">
                <Image
                  src={ValuePicFive}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="col-lg-11 col-md-11 d-flex align-items-center">
                <p className="f20 ps-3">
                  <span className="fw-bold logo-color">Integrity: </span>
                  Maintain highest level of honesty and transparency.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7  d-flex justify-content-start value-items">
              <div className="col-lg-1 col-md-1 ">
                <Image
                  src={ValuePicSix}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="col-lg-11 col-md-11 d-flex align-items-center">
                <p className="f20 ps-3">
                  <span className="fw-bold logo-color">Passionate Team: </span>
                  Work as a winning collaborative and passionate team in driving
                  excellence.
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PageMilestone;

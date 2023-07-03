import PageAbout from "../../../styles/About.module.scss";
import BeatLoader from "react-spinners/BeatLoader";
import Head from "next/head";
import { linkBreak } from "../../../utils/common.js";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import MissionImage from "../../../public/mission.png";
import VisionImage from "../../../public/vision.png";
import Values from "./Values";

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 bg-danger mission d-flex align-items-center">
              <div>
              <h1 className="text-center text-capitalize font-poppins fw-bold pt-5 font-32">
                our <span className="theme-color"> mission</span> 
              </h1>
              <p className="text-center px-3 pb-5 ">
                Our mission is to satisfy the need of the consumers by offering
                them high quality products and solutios at the right place at
                right value . We will do that by driving continuous onnovations,
                process improvements, people development while adding value for
                all stakeholders.
              </p>
              </div>
             
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="text-center">
                <Image
                  src={MissionImage}
                  alt="vision"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="text-center ">
                <Image
                  src={VisionImage}
                  alt="vision"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 bg-danger vision d-flex align-items-center">
              <div>
                <h1 className="text-center text-capitalize font-poppins fw-bold font-32">
                  our <span className="theme-color"> vision</span> 
                </h1>
                <p className="text-center px-3">
                  To delight consumers by providing high quality and affordable
                  products that creates happy and healthy lives.
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-center text-capitalize font-poppins fw-bolder pt-5 font-32">
            our <span className="theme-color"> values</span>
          </h1>
          <div className="values-align py-4">
            <Values/>
          </div>
        </div>
      </section>

    </>
  );
};

export default PageMilestone;

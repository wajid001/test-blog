import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import Header from "../Header/Header";
import CardImg from "../../Assets/cardImg.png";
import CustomCard from "../Card/CustomCard";
import Footer from "../Footer/Footer";
import {getAllBlogs} from '../../store/slices/blogSlice'
import { useSelector,useDispatch } from "react-redux";

import "./Blog.scss";
import Loader from "../common/Loader";

const Blog = () => {
  const dispatch=useDispatch()
  const {loading,blogs}=useSelector(state=>state.blogs)
  useEffect(()=>{
    dispatch(getAllBlogs()).unwrap().then().catch(err=>console.log(err))
  },[])
  
  return (
    <>
      <Header />
      {/* Banner */}
      <div className="Banner">
        <div className="banner-bg-img">
          <div className="overLay">
            <p className="banner-bg-text">My Blog</p>
          </div>
        </div>
        <div className="banner-bg-dark">
          <div className="ps-5">
            <p className="bannerP">
              Diagnose Car Problems If You <br /> Don’t Know Much About Cars
            </p>
            <span>
              We provide a full range of front end mechanical repairs for all
              makes and <br /> models of cars, no matter the cause. This
              includes, We provide a full <br /> range of front end mechanical.
            </span>
          </div>
        </div>
      </div>

      {/* Feature Card */}
      <div className="featureContainer">
        <Container className="pt-5">
          <div className="featureCard d-flex pt-5 ps-5">
            <div className="card-img">
              <img
                src={CardImg}
                alt="cardImg"
                width="352.06px"
                height="330px"
              />
            </div>
            <div className="card-body pe-4">
              <div className="d-flex justify-content-between">
                <div className="postInfo">
                  <span className="postdate">Posted on October 6th 2021</span>
                  <span className="ms-3">
                    <AiOutlineEye size={20} /> 563 views
                  </span>
                </div>
                <div className="feature">
                  <span className="featureText">FEATURED</span>
                </div>
              </div>
              <p className="featureHeading pt-3">
                Should I Buy a New Car or Lease a New Car in 2021?
              </p>
              <p className="featurDiscription pt-3">
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. <br /> This
                includes, We provide a full range of front end mechanical.
              </p>
              <div className="readmore pt-5">
                <span className="readtext pe-3">Read more</span>
                <BsArrowRight size={20} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Cards */}
      <div className="pt-5 mt-5 pb-5 mb-5">
        <Container>
          <Row>
            {
              loading?<Loader/>:
              blogs?.map((blog,idx)=>
                <CustomCard id={blog.id} title={blog.Title} subTitle={blog.Subtitle} img={blog.Image} article={blog.Article} />
              )
            }
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 5 }} className="pt-5 mt-5 ps-5">
              <Button className="cutomCardBtn">Load More</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Blog;

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import {useParams} from 'react-router-dom'
import Header from "../Header/Header";
import Car from "../../Assets/car.png";
import Footer from "../Footer/Footer";
import "./BlogSingle.scss";
import { useSelector,useDispatch } from "react-redux";
import {getSingleBlog} from '../../store/slices/blogSlice'
import Loading from "react-loading";

const BlogSingle = () => {
  const params = useParams();
  const dispatch=useDispatch()
  const {loading,blog}=useSelector(state=>state.blogs)
  const {views}=useSelector(state=>state.counter)
  
  useEffect(()=>{
    dispatch(getSingleBlog(params.id)).unwrap().then().catch(err=>console.log(err))
  },[])
  
  return (
    loading?<Loading/>:<div className="singleBlog">
      <Header />
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={{ span: 10, offset: 2 }}>
            <div className="postInfo pb-3">
              <span className="postdate">Posted on October 6th 2021</span>
              <span className="ms-3">
                <AiOutlineEye size={20} /> {views[blog.id]?views[blog.id]:0} views views
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 2 }}>
            <p className="pHeading">
              {blog?.Title}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 2 }}>
            <p className="pdescription">
              {blog?.Subtitle}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <img src={Car} alt="car" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 2 }}>
            <p className="blogHeading">This is a blog post headline</p>
            <p className="blogPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>
            <p className="blogPara">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt.
            </p>
            <div className="">
              <img src={blog?.Image} alt="blog" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5 mt-5 mb-5 pb-5">
        <Row>
          <Col md={{ span: 10, offset: 2 }}>
            <p className="blogHeading">This is a small blog post headline</p>
            <p className="blogPara pb-3">
              {blog?.Article}
            </p>
            <div style={{ borderLeft: "3px solid #1E1B1B", height: "80px" }}>
              <p className="blogPara ps-5 mb-3">
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante.
              </p>
            </div>
            <p className="blogPara mt-5">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BlogSingle;

import React from "react";
import { Card, Col } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import "./CustomCard.scss";
import { Link } from "react-router-dom";
import {incrementViews} from '../../store/slices/counterSlice'
import { useSelector,useDispatch } from "react-redux";

const CustomCard = ({id,title,subTitle,img,article}) => {
  const {views}=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  const handleClick=(id)=>{
    dispatch(incrementViews(id))
  }
  return (
    <Col onClick={()=>handleClick(id)}>
    <Card style={{ width: "400px", border: "none" }}>
    <Link to={`/blog/${id}`}>
      <Card.Img variant="top" src={img} className='blog-img' alt={title}/>
      </Link>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span className="cardtext">Posted on october 6th 2011</span>
          <span className="cardtext">
            <AiOutlineEye size={20} /> {views[id]?views[id]:0} views
          </span>
        </Card.Title>
        <Card.Text>
          <span className="CustomCardHeading">
            {title}
          </span>
        </Card.Text>
        <Card.Text>
          <span className="customCardDetail">
            {article}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default CustomCard;

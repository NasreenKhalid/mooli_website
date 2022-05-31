import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function ActionCard({ da }) {
  return (
    <Link to="/offer" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 272 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="181"
            image={da.img}
            alt="green iguana"
          />
          <CardContent>
            <div className="card-little-heading">
              <h6>{da.title}</h6>
            </div>
            <div className="card-heading">
              <h6>{da.heading}</h6>
            </div>
            <div className="card-one-liner">
              <p>{da.liner}</p>
            </div>

            <div className="d-flex">
              <div className="card-orginal-price">
                <h4>{da.discount}</h4>
              </div>
              <div className="card-dicounted-price">
                <h4>{da.price}</h4>
              </div>
              <div className="card-off-percentage">
                <h6>{da.off}</h6>
              </div>
            </div>
            <div className="card-category-wrapper">
              <h4>{da.catagory}</h4>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default ActionCard;

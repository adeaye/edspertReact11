import { useEffect, useState } from "react";
import { httpService } from "../../utils/service";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../store/product/action";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entities, loading } = useSelector((state) => state.product);

  const fetchProducts = async () => {
    dispatch(getAllProduct());
  };

  const goToDetail = (productId) => {
    navigate(`detail/${productId}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      {loading ? (
        <Loader />
      ) : (
        entities.map((item) => (
          <Card
            onClick={() => goToDetail(item.id)}
            key={item.id}
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <p>$ {item.price}</p>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default ListPage;

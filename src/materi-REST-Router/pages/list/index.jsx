import { useEffect, useState } from "react";
import { httpService } from "../../utils/service";
import { Card, Container } from "react-bootstrap";

const ListPage = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const response = await httpService.get("/product");
    console.log("response", response);
    setProductList(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      {productList.map((item) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <p>$ {item.price}</p>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ListPage;

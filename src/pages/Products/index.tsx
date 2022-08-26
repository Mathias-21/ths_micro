import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Item, ProductName, ProductPrice } from "./styles";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/additionals").then((data) => {
      console.log(data.data);
      setProducts(data.data);
    });
  }, []);

  return (
    <Container>
      {products.map((item: any) => (
        <Item key={item.id}>
          <ProductName>{item.name}</ProductName>
          <ProductPrice>
            R$ {Number(item.price).toFixed(2).replace(".", ",")}
          </ProductPrice>
        </Item>
      ))}
    </Container>
  );
}

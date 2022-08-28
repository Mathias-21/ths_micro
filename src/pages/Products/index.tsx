import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  AreaContents,
  AreaInputButton,
  Button,
  Container,
  Input,
  Item,
} from "./styles";
import { Text } from "../../components/atoms/Text";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((data) => {
      console.log(data.data);
      setProducts(data.data);
    });
  }, []);

  return (
    <Container>
      <Text variant="title" color="#fff" style={{ marginLeft: 20 }}>
        Produtos
      </Text>
      <AreaContents>
        <AreaInputButton>
          <Input type="text" placeholder="Buscar produto" />
          <Button>+</Button>
        </AreaInputButton>
        {products.map((item: any) => (
          <Item key={item.id}>
            <Text style={{ width: "auto" }}>{item.name}</Text>
            <Text style={{ width: "auto" }}>
              R$ {Number(item.price).toFixed(2).replace(".", ",")}
            </Text>
          </Item>
        ))}
      </AreaContents>
    </Container>
  );
}

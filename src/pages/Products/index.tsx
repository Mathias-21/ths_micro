import { useEffect, useState } from "react";
import api from "../../services/api";
import { AreaContents, Button, Container, Input, Item } from "./styles";
import { Text } from "../../components/atoms/Text";
import { ModalAddProduct } from "../../components/organisms/ModalAddProduct";

export function Products() {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <Input type="text" placeholder="Buscar produto" />
        <Button
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          +
        </Button>
        {products.map((item: any) => (
          <Item key={item.id}>
            <Text style={{ width: "auto" }}>{item.name}</Text>
            <Text style={{ width: "auto" }}>
              R$ {Number(item.price).toFixed(2).replace(".", ",")}
            </Text>
          </Item>
        ))}
      </AreaContents>
      <ModalAddProduct visible={modalIsOpen} setIsVisible={setModalIsOpen} />
    </Container>
  );
}

import { useEffect, useState } from "react";
import api from "../../services/api";
import { AreaContents, Button, Container, Input, Item } from "./styles";
import { Text } from "../../components/atoms/Text";
import { ModalAddProduct } from "../../components/organisms/ModalAddProduct";

export function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valueInputSearch, setValueInputSearch] = useState("");

  useEffect(() => {
    api.get("/products").then((data) => {
      console.log(data.data);
      setProducts(data.data);
    });
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((products: any) =>
        products.name.toLowerCase().includes(valueInputSearch.toLowerCase())
      )
    );
  }, [valueInputSearch]);

  return (
    <Container>
      <Text variant="title" color="#fff" style={{ marginLeft: 20 }}>
        Produtos
      </Text>
      <AreaContents>
        <Input
          name="searchProducts"
          value={valueInputSearch}
          placeholder="Buscar produto"
          onChange={(e) => setValueInputSearch(e.target.value)}
        />
        <Button
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          +
        </Button>
        {filteredProducts.length > 0
          ? filteredProducts.map((item: any) => (
              <Item key={item.id}>
                <Text style={{ width: "auto" }}>{item.name}</Text>
                <Text style={{ width: "auto" }}>
                  R$ {Number(item.price).toFixed(2).replace(".", ",")}
                </Text>
              </Item>
            ))
          : products.map((item: any) => (
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

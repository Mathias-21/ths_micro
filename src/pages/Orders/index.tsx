import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Item, ProductName, ProductPrice } from "./styles";
import { Text } from "../../components/atoms/Text";
import {
  IOrder,
  IOrderProductAdditionals,
  IProductAdditional,
} from "../../types/api";
import { useNavigate } from "react-router-dom";
import { MordalOrderInfo } from "../../components/organisms/ModalOrderInfo";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [modalOrderInfoIsOpen, setModalOrderInfoIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({} as IOrder);

  const navigate = useNavigate();

  const onOpenModal = (data: IOrder) => {
    setDataModal(data);
    setModalOrderInfoIsOpen(true);
    // console.log(data);
  };

  useEffect(() => {
    api.get("/orders").then((data) => {
      console.log(
        data.data.map((item: IOrder) =>
          item.orderProductAdditionals.map(
            (item: IOrderProductAdditionals) =>
              item.productAdditional.product.name
          )
        )
      );
      setOrders(data.data);
    });
  }, []);

  return (
    <Container>
      {orders.map((item: IOrder) => (
        <Item key={item.id} onClick={() => onOpenModal(item)}>
          <Text>
            {
              item.orderProductAdditionals.map(
                (item) => item.productAdditional.product.name
              )[0]
            }
          </Text>
          <Text>Pedido n°{item.id}</Text>
        </Item>
      ))}
      <MordalOrderInfo
        visible={modalOrderInfoIsOpen}
        setIsVisible={setModalOrderInfoIsOpen}
        data={dataModal}
      />
    </Container>
  );
}

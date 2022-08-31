import React from "react";
import { AreaPrice, Container, InfoArea, ListAdditionals } from "./styles";
import Drawer from "react-modern-drawer";
import { IOrder, IOrderProductAdditionals } from "../../../types/api";
import { Text } from "../../atoms/Text";

interface ModalProps {
  visible: boolean;
  setIsVisible: (value: boolean) => void;
  data: IOrder;
}

export function MordalOrderInfo({ visible, setIsVisible, data }: ModalProps) {
  const handleDrawerMenu = () => setIsVisible(!visible);

  return (
    <Drawer
      direction="bottom"
      open={visible}
      style={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#fff",
        width: "100%",
      }}
      size={280}
      zIndex={1000}
      onClose={handleDrawerMenu}
    >
      <Container>
        <Text variant="title" weight={700} textAlign="center">
          {data.orderProductAdditionals &&
            data.orderProductAdditionals.map(
              (item: IOrderProductAdditionals) =>
                item.productAdditional.product.name
            )[0]}
        </Text>
        <InfoArea>
          <ListAdditionals>
            {data.orderProductAdditionals &&
              data.orderProductAdditionals.map(
                (item: IOrderProductAdditionals) => (
                  <>
                    {item.productAdditional.additional && (
                      <Text
                        variant="subtitle"
                        key={item.productAdditional.additional.id}
                        style={{ marginBottom: 8 }}
                      >
                        {item.productAdditional.additional.name}
                      </Text>
                    )}
                  </>
                )
              )}
          </ListAdditionals>
          <AreaPrice>
            <Text variant="title" weight={600}>
              R${" "}
              {data.orderProductAdditionals &&
                data.orderProductAdditionals
                  .map(
                    (item: IOrderProductAdditionals) =>
                      item.productAdditional.product.price
                  )[0]
                  .toFixed(2)
                  .replace(".", ",")}
            </Text>
          </AreaPrice>
        </InfoArea>
      </Container>
    </Drawer>
  );
}

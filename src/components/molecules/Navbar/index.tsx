import { AreaIcon, Container, Icon, NamePage } from "./styles";

export function Navbar() {
  return (
    <Container>
      <AreaIcon>
        <Icon></Icon>
        <NamePage>Produtos</NamePage>
      </AreaIcon>
      <AreaIcon>
        <Icon></Icon>
        <NamePage>Pedidos</NamePage>
      </AreaIcon>
    </Container>
  );
}

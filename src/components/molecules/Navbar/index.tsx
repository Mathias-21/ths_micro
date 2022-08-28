import { AreaIcon, Container, Icon, NamePage } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container>
      <AreaIcon onClick={() => navigate("/produtos")}>
        <Icon isActive={pathname === "/produtos" ? true : false}></Icon>
        <NamePage isActive={pathname === "/produtos" ? true : false}>
          Produtos
        </NamePage>
      </AreaIcon>
      <AreaIcon onClick={() => navigate("/pedidos")}>
        <Icon isActive={pathname === "/pedidos" ? true : false}></Icon>
        <NamePage isActive={pathname === "/pedidos" ? true : false}>
          Pedidos
        </NamePage>
      </AreaIcon>
    </Container>
  );
}

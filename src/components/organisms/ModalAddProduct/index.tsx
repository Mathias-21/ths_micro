import { Container } from "./styles";
import Drawer from "react-modern-drawer";

interface ModalProps {
  visible: boolean;
  setIsVisible: (value: boolean) => void;
}

export function ModalAddProduct({ visible, setIsVisible }: ModalProps) {
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
        padding: "30px 20px 50px",
      }}
      size={280}
      zIndex={1000}
      onClose={handleDrawerMenu}
    >
      <Container>
        <p>Ola mundo</p>
      </Container>
    </Drawer>
  );
}

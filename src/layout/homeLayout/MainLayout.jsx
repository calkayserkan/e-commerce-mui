import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/footer/Footer"
import Header from "../../components/layout/header/Header"
import { Box } from "@mui/joy";

function MainLayout() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Header/>
        <Box
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default MainLayout;

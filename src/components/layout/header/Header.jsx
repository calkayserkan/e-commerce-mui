import {
  Badge,
  Box,
  Button,
  Dropdown,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  Typography,
} from "@mui/joy";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Outlet } from "react-router-dom";

function Header() {
  function createData(text) {
    return { text };
  }

  const homeData = [
    createData("Clean"),
    createData("Collection"),
    createData("Minimal"),
    createData("Modern"),
    createData("Parallax"),
    createData("Strong"),
    createData("Style"),
    createData("Unique"),
    createData("RTL"),
  ];

  const shopData = [
    createData("Only Categories"),
    createData("Image Categories"),
    createData("Sub Categories"),
    createData("Standard"),
    createData("Full"),
    createData("List"),
    createData("Style"),
    createData("Style 2"),
    createData("Hover"),
  ];

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
        <Box
          sx={{
            width: "100%",
            height: "30%",
            background: "#176B87",
            color: "#DAFFFB",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: { xs: "12px", md: "16px" },
          }}
        >
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY
          - OFF 50%!
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "70%",
            background: "#DAFFFB",
            color: "#04364A",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:"0px 0px 25px rgba(0,0,0,.2)",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", lg: "75%" },
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              px: 2,
              alignItems: "center",
            }}
          >
            <Box>
              <Typography level="h3">Logo</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Dropdown>
                <MenuButton
                  variant="solid"
                  sx={{
                    background: "transparent",
                    color: "#04364A",
                    "&:hover": { background: "rgba(4, 54, 74,.1)" },
                  }}
                >
                  <Typography>Home</Typography>
                  <KeyboardArrowDownOutlinedIcon />
                </MenuButton>
                <Menu
                  variant="solid"
                  sx={{
                    background: "#DAFFFB",
                    boxShadow: "0px 15px 50px rgba(4, 54, 74,.1)",
                    display: "grid",
                    gridTemplateColumns: "repeat(3,auto)",
                    gridAutoRows: "50px",
                    p: 1,
                  }}
                >
                  {homeData.map((text, key) => (
                    <MenuItem
                      key={key}
                      variant="solid"
                      sx={{
                        background: "#DAFFFB",
                        color: "#04364A",
                        "&:hover": {
                          background: "rgba(4, 54, 74,.1) !important",
                        },
                        borderRadius: 3,
                      }}
                    >
                      {text.text}
                    </MenuItem>
                  ))}
                </Menu>
              </Dropdown>
              <Dropdown>
                <MenuButton
                  variant="solid"
                  sx={{
                    background: "transparent",
                    color: "#04364A",
                    "&:hover": { background: "rgba(4, 54, 74,.1)" },
                  }}
                >
                  <Typography>Shop</Typography>
                  <KeyboardArrowDownOutlinedIcon />
                </MenuButton>
                <Menu
                  variant="solid"
                  sx={{
                    background: "#DAFFFB",
                    boxShadow: "0px 15px 50px rgba(4, 54, 74,.1)",
                    display: "grid",
                    gridTemplateColumns: "repeat(3,auto)",
                    gridAutoRows: "50px",
                  }}
                >
                  {shopData.map((text, key) => (
                    <MenuItem
                      key={key}
                      variant="solid"
                      sx={{
                        background: "#DAFFFB",
                        color: "#04364A",
                        "&:hover": {
                          background: "rgba(4, 54, 74,.1) !important",
                        },
                        borderRadius: 3,
                      }}
                    >
                      {text.text}
                    </MenuItem>
                  ))}
                </Menu>
              </Dropdown>
              <Button
                variant="solid"
                sx={{
                  background: "transparent",
                  color: "#04364A",
                  "&:hover": { background: "rgba(4, 54, 74,.1)" },
                }}
              >
                Blog
              </Button>
              <Button
                variant="solid"
                sx={{
                  background: "transparent",
                  color: "#04364A",
                  "&:hover": { background: "rgba(4, 54, 74,.1)" },
                }}
              >
                Contact
              </Button>
            </Box>
            <Box>
              <IconButton
                sx={{ "&:hover": { background: "rgba(4, 54, 74,.1)" } }}
              >
                <PersonOutlineOutlinedIcon />
              </IconButton>
              <IconButton
                sx={{ "&:hover": { background: "rgba(4, 54, 74,.1)" } }}
              >
                <SearchOutlinedIcon />
              </IconButton>
              <IconButton
                sx={{ "&:hover": { background: "rgba(4, 54, 74,.1)" } }}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton
                sx={{ "&:hover": { background: "rgba(4, 54, 74,.1)" } }}
              >
                <Badge
                  variant="solid"
                  size="sm"
                  color="neutral"
                  badgeContent={4}
                >
                  <LocalMallOutlinedIcon />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box
        sx={{
          width: "100%",
          height: "auto",
        }}
      >
        <Outlet />
      </Box>
      </Box>
    </>
  );
}

export default Header;

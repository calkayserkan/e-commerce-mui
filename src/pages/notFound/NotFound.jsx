import { Box, Button, Typography } from "@mui/joy";
import notFound from "../../assets/notfound/notFound.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
  const navigate = useNavigate();
  const Route = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 1,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found !</title>
      </Helmet>
      <Typography
        level="h1"
        sx={{
          fontSize: "120px",
          color: "transparent",
          backgroundImage: `url(${notFound})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
          textShadow: "0px 0px 10px rgba(0,0,0,.2)",
        }}
      >
        Oops!
      </Typography>
      <Typography level="title-lg" sx={{ fontSize: "25px" }}>
        404 - Page Not Found
      </Typography>
      <Typography level="title-lg" sx={{}}>
        There&apos;s Nothing Here, Maybe The Page You&apos;re Looking for Is Not
        Found or Never Existed.
      </Typography>
      <Button
        onClick={Route}
        sx={{
          mt: 2.5,
          gap: 2.5,
          background: "#04364A",
          boxShadow: "0px 20px 25px rgba(0,0,0,.25)",
        }}
      >
        Back To Home <ArrowRightAltIcon />{" "}
      </Button>
    </Box>
  );
}

export default NotFound;

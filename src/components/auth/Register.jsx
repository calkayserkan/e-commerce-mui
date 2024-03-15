import { Box, Button, Input, Typography } from "@mui/joy";

function Register() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Typography level="title-lg" sx={{ color: "white" }}>
        Sign up
      </Typography>
      <Input placeholder="Try to submit with no text!" required />
      <Input placeholder="Try to submit with no text!" required />
      <Input placeholder="Try to submit with no text!" required />
      <Button sx={{ background: "white", color: "black" }}>Sign Up</Button>
    </Box>
  );
}

export default Register;

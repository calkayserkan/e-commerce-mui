import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Textarea,
  Typography,
} from "@mui/joy";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
function BlogReview() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        mb: 5,
        width: "50%",
        gap: 2.5,
      }}
    >
      <Typography
        level="body-lg"
        sx={{ width: "100%", color: "#64CCC5", textAlign: "left" }}
      >
        2 reviews for Basic Colored Sweatpants With Elastic Hems
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            gap: 2,
          }}
        >
          <Avatar sx={{ width: "60px", height: "60px" }}></Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "start",
              width: "100%",
            }}
          >
            <Box>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
            </Box>
            <Typography level="body-sm" sx={{ color: "#DAFFFB" }}>
              April 23, 2022
            </Typography>
            <Typography level="title-sm" sx={{ color: "#DAFFFB" }}>
              Sed perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            gap: 2,
          }}
        >
          <Avatar sx={{ width: "60px", height: "60px" }}></Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "start",
              width: "100%",
            }}
          >
            <Box>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </Box>
            <Typography level="body-sm" sx={{ color: "#DAFFFB" }}>
              January 28, 2024
            </Typography>
            <Typography level="title-sm" sx={{ color: "#DAFFFB" }}>
              Sed perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography
        level="body-lg"
        sx={{ width: "100%", color: "#64CCC5", textAlign: "left" }}
      >
        Add a review
      </Typography>
      <Divider sx={{ height: "1px", background: "#64CCC5" }} />
      <Typography
        level="body-sm"
        sx={{ width: "100%", color: "#64CCC5", textAlign: "left" }}
      >
        Your email address will not be published. Required fields are marked
      </Typography>
      <Typography
        level="body-sm"
        sx={{ width: "100%", color: "#64CCC5", textAlign: "left" }}
      >
        Your Rating *
      </Typography>
      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "start",
          alignItems: "center",
          gap: 1,
        }}
      >
        <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
        <Divider
          orientation="vertical"
          sx={{ width: "1px", background: "rgba(255,255,255,.5)" }}
        />
        <Grid container>
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
        </Grid>
        <Divider
          orientation="vertical"
          sx={{ width: "1px", background: "rgba(255,255,255,.5)" }}
        />
        <Grid container>
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
        </Grid>
        <Divider
          orientation="vertical"
          sx={{ width: "1px", background: "rgba(255,255,255,.5)" }}
        />
        <Grid container>
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
        </Grid>
        <Divider
          orientation="vertical"
          sx={{ width: "1px", background: "rgba(255,255,255,.5)" }}
        />
        <Grid container>
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
          <StarIcon sx={{ color: "rgba(255,255,255,.5)" }} />
        </Grid>
      </Grid>
      <Typography
        level="body-sm"
        sx={{ width: "100%", color: "#64CCC5", textAlign: "left" }}
      >
        Your Review
      </Typography>
      <Grid
        container
        sx={{ width: "100%", justifyContent: "start", alignItems: "center" }}
      >
        <Textarea
          variant="plain"
          minRows={5}
          placeholder="Write a review..."
          sx={{
            width: "100%",
            backgroundColor: "#DAFFFB",
          }}
        ></Textarea>
      </Grid>
      <Grid
        xs={12}
        container
        sx={{ justifyContent: "start", alignItems: "center", gap: 4.7 }}
      >
        <Grid xs={4}>
          <Textarea
            variant="plain"
            placeholder="Name"
            sx={{
              backgroundColor: "#DAFFFB",
            }}
          ></Textarea>
        </Grid>
        <Grid xs={7.5}>
          <Textarea
            variant="plain"
            placeholder="Email"
            sx={{
              backgroundColor: "#DAFFFB",
            }}
          ></Textarea>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ justifyContent: "start", alignItems: "center", width: "100%" }}
      >
        <Button
          sx={{
            background: "#DAFFFB",
            color: "#04364A",
            boxShadow: "0px 10px 15px rgba(0,0,0,.25)",
            transition: "all .5s ease-in-out",
            "&:hover": {
              background: "#04364A",
              color: "#DAFFFB",
              boxShadow: "0px 10px 15px rgba(0,0,0,.5)",
            },
          }}
        >
          Send Review
        </Button>
      </Grid>
    </Box>
  );
}

export default BlogReview;

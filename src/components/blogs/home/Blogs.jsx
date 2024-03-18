import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  CardOverflow,
  Grid,
  Typography,
} from "@mui/joy";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import blog3 from "../../../assets/blogs/blog3.jpg";
import blog4 from "../../../assets/blogs/blog4.jpg";
import blog5 from "../../../assets/blogs/blog5.jpg";

function Blogs() {
  function createData(title,desc,img) {
    return { title,desc,img};
  }
  const blogItems = [
    createData("Aliquam hendrerit mi metus","25 Feb, 2021 - Comments",blog3),
    createData("Aliquam hendrerit mi metus","25 Feb, 2021 - Comments",blog4),
    createData("Aliquam hendrerit mi metus","25 Feb, 2021 - Comments",blog5),
  ];
  return (
    <Grid
      container
      sx={{ width: "100%", height: "70vh", background: "#04364A" }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          height: "80%",
          background: "#176B87",
          boxShadow: "0px 0px 30px rgba(0,0,0,.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          xs={4}
          container
          sx={{ justifyContent: "center", alignItems: "center", gap: 2 }}
        >
          <ArticleOutlinedIcon
            sx={{ width: "100px", height: "auto", color: "#DAFFFB" }}
          />
          <Typography level="h1" sx={{ color: "#DAFFFB" }}>
            From Our Blogs
          </Typography>
        </Grid>
        <Grid
          xs={8}
          container
          sx={{
            height: "100%",
            overflow: "hidden",
            justifyContent: "start",
            flexWrap:"nowrap",
            alignItems: "center",
            gap: 10,
          }}
        >
          {blogItems.map((item, key) => (
            <Grid
              key={key}
              sx={{
                minWidth: "40%",
                height: "400px",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
                border: "7.5px solid #04364A",
                overflow: "hidden",
                background: "#04364A",
                borderRadius: 20,
                ml:3
              }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(0deg,#DAFFFB,#176B87)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                  border: "0",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio="2">
                    <img src={item.img}></img>
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography
                    level="h3"
                    sx={{
                      color: "#04364A",
                      textShadow: "0px 0px 2px rgba(255,255,255,.5)",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography level="body-sm">
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardOverflow>
                    <CardContent>
                        <Button sx={{background:"#04364A",mb:2,color:"#DAFFFB"}}>Read More</Button>
                    </CardContent>
                </CardOverflow>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Blogs;

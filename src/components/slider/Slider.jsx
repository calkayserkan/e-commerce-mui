import { Box, Card, Grid, IconButton, Radio } from "@mui/joy";
import { useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import sliderImg from "../../assets/slider/slider1.jpg";
import sliderImg2 from "../../assets/slider/slider2.jpg";
import sliderImg3 from "../../assets/slider/slider3.jpg";

function createData(value, image) {
  return { value, image };
}

const images = [
  createData(0, sliderImg),
  createData(1, sliderImg2),
  createData(2, sliderImg3),
];

function Slider() {
  const [selectedValue, setSelectedValue] = useState(0);
  const [position, setPosition] = useState(0);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (selectedValue > event.target.value) {
      previous(event.target.value);
    }
    if (selectedValue < event.target.value) {
      next(event.target.value);
    }
  };

  const previous = () => {
    if (selectedValue > 0) {
      setSelectedValue(selectedValue - 1);
      setPosition(position + 100);
    }
    
  };
  const next = () => {
    if (selectedValue < 2) {
      setSelectedValue(selectedValue + 1);
      setPosition(position - 100);
    }
  };

  return (
    <Box sx={{ width: "100%", height: "90vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background: "transparent",
          height: "100%",
          px: 10,
        }}
      >
        <Box>
          <IconButton onClick={previous}>
            <ArrowBackIosIcon sx={{ pl: 0.5, zIndex: 2 }} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={next}>
            <ArrowForwardIosIcon sx={{ zIndex: 2 }} />
          </IconButton>
        </Box>
      </Box>

      <Grid
        container
        sx={{
          position: "absolute",
          top: "10vh",
          overflow: "hidden",
          flexWrap: "nowrap",
          width: "100%",
          height: "90vh",
        }}
      >
        {images.map((image) => (
          <Card
            key={image.value}
            sx={{
              backgroundImage: `url(${image.image})`,
              minWidth: "100%",
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "all 1s ease-in-out",
              transform: `translateX(${position}vw)`,
              borderRadius: 0,
            }}
          ></Card>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          position: "absolute",
          top: "95vh",
          left: "50%",
          ml: "-46px",
        }}
      >
        <Radio
          variant="plain"
          color="neutral"
          checked={selectedValue === 0}
          onChange={handleChange}
          value={0}
          name="radio-buttons"
          slotProps={{ input: { "aria-label": 0 } }}
        />
        <Radio
          variant="plain"
          color="neutral"
          checked={selectedValue === 1}
          onChange={handleChange}
          value={1}
          name="radio-buttons"
          slotProps={{ input: { "aria-label": 1 } }}
        />
        <Radio
          variant="plain"
          color="neutral"
          checked={selectedValue === 2}
          onChange={handleChange}
          value={2}
          name="radio-buttons"
          slotProps={{ input: { "aria-label": 2 } }}
        />
      </Box>
    </Box>
  );
}

export default Slider;

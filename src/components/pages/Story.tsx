import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/story.css";
import storyimg from "../../assets/story-img.png";
export const Story: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const submitTitle = () => {
    console.log("Search Value:", searchValue);
  };
  return (
    <div className="container story__container">
      <div className="homepage__generatestory">
        <h2
          style={{
            position: "relative",
            top: "170px",

            fontWeight: "bolder",
          }}
        >
          Generate Story
        </h2>
        <img src={storyimg} style={{ height: "300px", width: "600px" }} />
        <Grid style={{ marginTop: "20px" }} item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="story"
            required
            fullWidth
            id="story"
            label="Enter title"
            autoFocus
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, ml: 3 }}
          style={{ backgroundColor: "#ba0909", width: "100px" }}
          onClick={() => submitTitle()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

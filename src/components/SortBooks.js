import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useEffect, useState } from "react";

export default function SortBooks({ handleSorting }) {
  const [sortBy, setSortBy] = useState("Title A-Z");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    handleSorting(sortBy);
  }, [sortBy, handleSorting]);

  return (
    <FormControl sx={{ mb: 2 }}>
      <FormLabel id="alpha-sort">Sort By:</FormLabel>
      <RadioGroup
        aria-labelledby="alpha-sort"
        name="alpha-sort"
        value={sortBy}
        onChange={handleChange}
      >
        <FormControlLabel
          value={"Title A-Z"}
          control={<Radio />}
          label={"Title A-Z"}
        />
        <FormControlLabel
          value={"Title Z-A"}
          control={<Radio />}
          label={"Title Z-A"}
        />
      </RadioGroup>
    </FormControl>
  );
}

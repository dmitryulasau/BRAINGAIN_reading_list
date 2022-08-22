import Box from "@mui/material/Box";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ListBook from "./ListBook";

export default function ReadingList() {
  const { readingList } = useContext(AppContext);

  return (
    <Box>
      {[...new Set(readingList?.map(JSON.stringify))]
        ?.map(JSON.parse)
        ?.map((book) => (
          <ListBook key={book.title} book={book} />
        ))}
    </Box>
  );
}

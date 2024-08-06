import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h1" gutterBottom>
          North Coders News Stand
        </Typography>
      </Box>
      <p>
        Here at NC News Stand we are proud to offer you the finest selection of
        articles that will undoubtedly pique your curiosity{" "}
      </p>
    </>
  );
}

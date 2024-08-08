import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <>
     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 4 }}>
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Northcoders News Stand
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.25rem',
          fontWeight: '500',
          color: '#555',
          textAlign: 'center',
          maxWidth: '800px',
          marginTop: 2,
          lineHeight: 1.5,
          background: 'rgba(255, 255, 255, 0.8)',
          padding: 2,
          borderRadius: 2
        }}
      >
        We are proud to offer you the finest selection of
        articles that will undoubtedly pique your curiosity.
      </Typography>
    </Box>
    </>
  );
}


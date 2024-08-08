import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MappedArticles({title, author, image, topic, created}){
    return (
        <Card sx={{ maxWidth: 400, minWidth: 400, marginBottom: 1 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="Article image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h6" color="blue">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {topic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {created}
          </Typography>
        </CardContent>
      </Card>
    )
}
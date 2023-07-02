import { Chip } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function ProjectCard({ technologies, title, link }) {
    return (
        <>
            <Card sx={{ maxWidth: 600, border: '1px solid #212121' }}>
                <CardActionArea>
                    <CardMedia
                        component="iframe"
                        height="300"
                        width='600'
                        image={link}
                        alt="e-commerce"
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        {technologies.map(v => {
                            return (
                                <Chip key={v + '_technologies'} label={v} color="info" sx={{ margin: '2px' }} />
                            )
                        })}

                    </CardContent>
                </CardActionArea>
            </Card>


        </>
    )
}

export default ProjectCard
import { Chip } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ technologies, title, link, description }) {
    useEffect(() => {
        var vplayer = document.querySelectorAll(".vplayer");

        for (var i = 0; i < vplayer.length; i++) {
            // console.log(vplayer[i].dataset.v);
            var source = "https://img.youtube.com/vi/" + vplayer[i].dataset.v + "/sddefault.jpg";

            var image = new Image();
            image.alt = vplayer[i].dataset.v;
            image.src = source;
            image.addEventListener("load", function () {
                vplayer[i].appendChild(image);
            }(i));

            vplayer[i].addEventListener("click", function () {

                var iframe = document.createElement("iframe");

                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.v + "?rel=0&showinfo=0&autoplay=1");

                this.innerHTML = "";
                this.appendChild(iframe);
            });
        }
    }, [])
    return (
        <>
            <Card sx={{ maxWidth:600, border: '1px solid #212121' }}>
                <div className='vplayer' data-v={link}></div>
                <div className="plybtn"></div>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        {technologies.map(v => {
                            return (
                                <Chip key={v + '_technologies'} label={v} color="primary" sx={{ margin: '2px' }} />
                            )
                        })}
                        <Typography sx={{ mt: 1 }} variant="body1">
                            { description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


        </>
    )
}
ProjectCard.propTypes = {
    technologies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default ProjectCard
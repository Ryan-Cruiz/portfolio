import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import profile from '../assets/img/profile.jpg';
import ProjectCard from './ProjectCard';
import projectData from '../api/project.json';
import skillsData from '../api/whatuse.json';
import certificateData from '../api/certificates.json';
import FormContact from './FormContact';
import ImageListItem from '@mui/material/ImageListItem';
import Divider from '@mui/material/Divider';
import github from '../assets/img/github.png';
import gmail from '../assets/img/gmail.png';
import linkedin from '../assets/img/linkedin.png';

const WhatUsePaper = ({ title, languages }) => {
    return (
        <Paper elevation={1} sx={{ p: 1, textAlign: 'start', border: '1px solid #212121' }}>
            <div style={{ fontWeight: "bold", textAlign: 'start', marginBottom: '.5rem' }} > {title}:</div>
            {languages.map(item => (
                <Chip key={item + '_chip'} color="primary" label={item} sx={{ margin: '.5px' }} />
            ))}
        </Paper>
    )
}
const CertificationCard = ({ title, year }) => {
    return (
        <Paper elevation={1} sx={{ p: 1, textAlign: 'start', border: '1px solid #212121' }}>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {year}
            </Typography>
            <Typography variant="body2">
                {certificateData.map((item) => (
                    <Link className='certificate-link' key={item.link + '_certificateLink'} href={item.link} rel='noreferrer' target='_blank' sx={{ my: 1, fontWeight: 'bold', display: 'block', fontSize: 'medium' }}>{item.title}</Link>
                ))}
            </Typography>
        </Paper>
    );
}
function Section() {
    // const imgs = ['ajax.png', 'bootstrap.png', 'codeigniter.png', 'HTML.png', 'JavaScript.png', 'jQuery.png', 'LAMP.png', 'mysql.png', 'RUBY.png', 'socket.png', 'sqlite.png']
    const contact_img = [
        {
            title: 'Github',
            link: 'https://github.com/Ryan-Cruiz/',
            img: github
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ryan-cruiz-9800a1243/',
            img: linkedin
        },
        {
            title: 'Gmail',
            link: 'ryancruiz97@gmail.com',
            img: gmail
        },

    ];
    const url = window.location.hostname;
    const protocol = window.location.protocol;
    return (
        <>
            <Box component="main" sx={{ p: 3 }} >
                <Box component='div' className='inverse full-bleed' sx={{ p: 5, mb: 5 }}>
                    <Grid id='about' container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '3rem' }}>
                        <Grid item >
                            <Box component='div' style={{ float: 'right' }}>
                                <Typography variant="h2" gutterBottom>
                                    Hello!
                                </Typography>
                                <Typography variant="h2" gutterBottom>
                                    I am Ryan Cruiz
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    Software Developer
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} sx={{ textAlign: 'center' }} className='img-profile'>
                            <img src={profile} alt="Ryan's face" style={{ borderRadius: '50%', width: '300px', height: '300px' }} />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ my: 5, textAlign: 'center' }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>About Me</Typography>
                    <Paper elevation={3} sx={{ width: '80%', margin: '1rem auto', p: 2, border: '1px solid #212121' }} >
                        <Typography variant='body1'>
                            I am aspiring Software Developer based in Caloocan, Philippines. Proficient
                            in both front-end and back-end techonology. My goal is to have more solid knowledge regarding application
                            development, especially in web application development through employment.
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 2 }}>
                            I am Currently Studying at Golden Link College with course of Bachelor of Infomartion Technology.
                            I've graduated last October 2022 at Village88 Bootcamp located in La Union, Philippines which teaches full
                            stack in 3.5 months for free. I am extremly passionate of learning new technologies and am always looking
                            for opportunities to further expand my skills and grow as a developer.
                        </Typography>
                    </Paper>
                    <Box sx={{ my: 5 }}>
                        <Typography variant='h4' gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }} id='technologies'>Technologies</Typography>
                        <Stack direction="row" useFlexGap spacing={1} flexWrap="wrap" justifyContent="center" alignItems="flex-start">
                            <Box sx={{ width: 500 }}>
                                <Typography variant='h5' sx={{ mb: 2 }}>What I Use</Typography>
                                <Stack direction="column"
                                    justifyContent="center"
                                    alignItems="stretch"
                                    spacing={1}>
                                    {skillsData.map((skill) => (
                                        <WhatUsePaper key={skill.title + '_skillsData'} title={skill.title} languages={skill.languages} />
                                    ))}
                                </Stack>
                            </Box>
                            <Box sx={{ width: 500 }}>
                                <Typography variant='h5' sx={{ mb: 2 }}>Certifications</Typography>
                                <CertificationCard title='Village88' year='July 2022 - October 2022' certificates={[]} />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ my: 5 }}>
                    <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }} id='projects'>Projects</Typography>
                    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '1rem' }}>
                        {projectData.map(data => (
                            <Grid key={data.link + '_project'} item sx={{ textAlign: 'center', margin: '5px' }}>
                                <ProjectCard title={data.title} technologies={data.technologies} link={data.link} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ margin: '0 auto', width: '100%' }}>
                    <Typography variant='h4' gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }} id='contact'>Contact</Typography>
                    <FormContact />
                </Box>
            </Box >
            <Box component='footer' className='inverse full-bleed' sx={{ p: 5 }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Typography variant='h6' sx={{ mt: 3, textAlign: 'center' }}>Ryan's Portfolio</Typography>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={2}
                    >
                        <Link href="#about" sx={{ color: 'whitesmoke' }}>About</Link>
                        <Link href="/#projects" sx={{ color: 'whitesmoke' }}>Projects</Link>
                        <Link href="/#contact" sx={{ color: 'whitesmoke' }}>Contact</Link>
                    </Stack>
                    <Divider color='whitesmoke' />
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={2}
                    >
                        {contact_img.map((item) => (
                            <Link href={item.title === 'gmail' ? 'mailto:' + item.link : item.link} key={item.img} target='_blank' sx={{ color: 'whitesmoke' }}>
                                <img
                                    src={`${item.img}`}
                                    srcSet={`${item.img}`}
                                    alt={item.img}
                                    loading="lazy"
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </Link>
                        ))}
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={2}
                    >
                        <Typography variant='body1' sx={{ textAlign: 'center' }}>Powered By <Link sx={{ color: 'whitesmoke' }} href='https://vercel.com/'>Vercel</Link></Typography>
                        <Typography variant='body1' sx={{ textAlign: 'center' }}>© 2023 Ryan's Portfolio</Typography>
                    </Stack>

                </Stack >
            </Box >
        </>
    )
}

export default Section;
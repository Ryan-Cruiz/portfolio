import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import profile from '../assets/img/profile.jpg';
import ProjectCard from './ProjectCard';
import projectData from '../api/project.json';
import skillsData from '../api/whatuse.json';
import certificateData from '../api/certificates.json';
import FormContact from './FormContact';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
const WhatUsePaper = ({ title, languages }) => {
    return (
        <Paper elevation={1} sx={{ p: 1, textAlign: 'start' }}>
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

WhatUsePaper.propTypes = {
    title: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
}
CertificationCard.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}

function Section() {
    // const imgs = ['ajax.png', 'bootstrap.png', 'codeigniter.png', 'HTML.png', 'JavaScript.png', 'jQuery.png', 'LAMP.png', 'mysql.png', 'RUBY.png', 'socket.png', 'sqlite.png']
    const contact_img = [
        {
            title: 'Github',
            link: 'https://github.com/Ryan-Cruiz/',
            img: 'https://github.com/Ryan-Cruiz/portfolio/blob/main/src/assets/img/github.png?raw=true'
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ryan-cruiz-9800a1243/',
            img: 'https://github.com/Ryan-Cruiz/portfolio/blob/main/src/assets/img/linkedin.png?raw=true'
        },
        {
            title: 'Gmail',
            link: 'ryancruiz97@gmail.com',
            img: 'https://github.com/Ryan-Cruiz/portfolio/blob/main/src/assets/img/gmail.png?raw=true'
        },

    ];
    return (
        <>
            <Box component="main" sx={{ p: 3 }} >
                <Box component='div' className='inverse full-bleed' sx={{ py: 5, mb: 5 }}>
                    <Grid id='about' container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '3rem' }}>
                        <Grid item >
                            <Box component='div' style={{ float: 'right' }}>
                                <Typography variant="h2" gutterBottom>
                                    Hello!
                                </Typography>
                                <Typography variant="h2" gutterBottom>
                                    I am Ryan Cruiz
                                </Typography>
                                <Typography variant="h3" gutterBottom>
                                    Software Developer
                                </Typography>
                                <Button component={Link} href="https://drive.google.com/file/d/1lSYHtxAfvTqqdRtxl-Z-P-AJPKnbFhwk/view?usp=sharing" target='_blank' variant="contained" color="primary">
                                    See my CV
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item md={6} sx={{ textAlign: 'center' }} className='img-profile'>
                            <img src={profile} alt="Ryan's face" style={{ borderRadius: '50%', width: '300px', height: '300px' }} />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ my: 5, textAlign: 'center' }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>About Me</Typography>
                    <Paper elevation={3} id='about-container' sx={{ width: '80%', margin: '1rem auto', p: 2, border: '1px solid #212121' }} >
                        <Typography variant='body1'>
                            I am an aspiring Software Developer based in Caloocan, Philippines.
                            Proficient both in front-end and back-end technology.
                            My goal is to gain more solid knowledge regarding developing applications,
                            especially web application development, through employment.
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 2 }}>
                            I am a 3rd year student at Golden Link College for a Bachelor of Science in Information Technology.
                            I graduated from Village88 Bootcamp in October 2022, located in La Union,
                            Philippines, which teaches full stack in 3.5 months for free.
                            I am extremely passionate about learning new technologies,
                            and I am always looking for opportunities to further expand my skills and grow as a developer.
                        </Typography>
                    </Paper>
                    <Box sx={{ my: 5 }}>
                        <Stack direction="row" useFlexGap spacing={1} flexWrap="wrap" justifyContent="center" alignItems="flex-start">
                            <Box sx={{ flexGrow: '1' }}>
                                <Typography variant='h4' gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }} id='technologies'>Technologies</Typography>
                                <Stack direction="column"
                                    justifyContent="center"
                                    alignItems="stretch"
                                    spacing={0}
                                    sx={{ border: '1px solid #212121', borderRadius: '5px' }}>
                                    {skillsData.map((skill) => (
                                        <WhatUsePaper key={skill.title + '_skillsData'} title={skill.title} languages={skill.languages} />
                                    ))}
                                </Stack>
                            </Box>
                            <Box sx={{ flexGrow: '1' }}>
                                <Typography gutterBottom id='certifications' variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Certifications</Typography>
                                <CertificationCard title='Village88' year='July 2022 - October 2022' />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ my: 5 }}>
                    <Typography variant='h4' gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }} id='projects'>Projects</Typography>
                    <Stack direction="row" useFlexGap spacing={1} flexWrap="wrap" justifyContent="center" alignItems="flex-start" sx={{marginTop:'1rem'}}>
                        {projectData.map(data => (
                                <ProjectCard key={data.link + '_project'}  title={data.title} technologies={data.technologies} link={data.link} description={data.description} />
                        ))}
                    </Stack>
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
                    <Typography variant='h4' sx={{ mt: 3, textAlign: 'center' }}>Ryan&#39;s Portfolio</Typography>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={2}
                        useFlexGap
                        flexWrap="wrap" 
                    >
                        <Link href="#about" sx={{ color: 'whitesmoke' }}>About</Link>
                        <Link href="#technologies" sx={{ color: 'whitesmoke' }}>Technologies</Link>
                        <Link href="#certifications" sx={{ color: 'whitesmoke' }}>Certifications</Link>
                        <Link href="#projects" sx={{ color: 'whitesmoke' }}>Projects</Link>
                        <Link href="#contact" sx={{ color: 'whitesmoke' }}>Contact</Link>
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
                        <Typography variant='body1' sx={{ textAlign: 'center' }}>© 2023 Ryan&#39;s Portfolio</Typography>
                    </Stack>

                </Stack >
            </Box >
        </>
    )
}

export default Section;
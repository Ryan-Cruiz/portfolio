import { Box, Chip, Grid, Link, Paper, Stack, Toolbar, Typography } from '@mui/material';
import profile from '../assets/img/profile.jpg';
import ProjectCard from './ProjectCard';
import projectData from '../api/project.json';
import skillsData from '../api/whatuse.json';
import certificateData from '../api/certificates.json';
import FormContact from './FormContact';
const WhatUsePaper = ({ title, languages }) => {
    return (
        <Paper elevation={1} sx={{ p: 1, textAlign: 'start' }}>
            <div style={{ fontWeight: "bold", textAlign: 'start', marginBottom: '.5rem' }} > {title}:</div>
            {languages.map(item => (
                <Chip key={item + '_chip'} color="info" label={item} sx={{ margin: '.5px' }} />
            ))}
        </Paper>
    )
}
const CertificationCard = ({ title, year }) => {
    return (
        <Paper elevation={1} sx={{ p: 1, textAlign: 'start' }}>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {year}
            </Typography>
            <Typography variant="body2">
                {certificateData.map((item) => (
                    <Link key={item.link + '_certificateLink'} href={item.link} rel='noreferrer' target='_blank' sx={{ my: 1, fontWeight: 'bold', display: 'block' }}>{item.title}</Link>
                ))}
            </Typography>
        </Paper>
    );
}
function Section() {
    // const imgs = ['ajax.png', 'bootstrap.png', 'codeigniter.png', 'HTML.png', 'JavaScript.png', 'jQuery.png', 'LAMP.png', 'mysql.png', 'RUBY.png', 'socket.png', 'sqlite.png']
    // const imgs = [ajax];
    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
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
                    <img src={profile} alt="Ryan's face" style={{ borderRadius: '50%' }} />
                </Grid>
            </Grid>
            <Box sx={{ my: 5, textAlign: 'center' }}>
                <Typography variant='h4'>About Me</Typography>
                <Paper elevation={3} sx={{ width: '80%', margin: '1rem auto', p: 2 }} >
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
                <Box>
                    <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }} id='technologies'>Technologies</Typography>
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
            <Box sx={{ marginBottom: '1rem' }}>
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
                <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }} id='contact'>Contact</Typography>
                <FormContact />
            </Box>
        </Box >
    )
}

export default Section;
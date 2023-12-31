import React from 'react'
import { Typography, Box, Grid, Container } from '@mui/material'

export default function Notes() {
  return (
    <React.Fragment>
      {/* You can change heading size here */}
      <Typography variant="h1">
        Hello World
      </Typography>
      {/* if you will provide component props so it will show in the DOM as h2 even though here you make as h1 */}
      <Typography variant="h1" component="h2">
        Hello world
      </Typography>
      <Typography variant="body1">
        variant body1: it is the largest size of paragraph, it's from 1-3, if u will write body4 it will not show display.
      </Typography>
      <Typography variant="body2">
        variant body2: it is the medium size of paragraph, it's from 1-3, if u will write body4 it will not show display.
      </Typography>
      <Typography variant="body3">
        variant body1: it is the smallest size of paragraph, it's from 1-3, if u will write body4 it will not show display.
      </Typography>
      <Typography variant="subtitle1">
        subtitles 1: it is large size but not bold
      </Typography>
      <Typography variant="subtitle2">
        subtitles 2: it is small in size but bold
      </Typography>




      <Grid container align="start" >
        <Grid item xs={5} padding="2%">
          <Typography variant="h3">
            About Me:
          </Typography>
          <Typography variant="subtitle2">
            Hello My name is zaryab, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant="h3">
            Education:
          </Typography>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </Typography>
        </Grid>

        <Grid item xs={6} padding="2%">
          <Typography variant="h3">
            Colors:
          </Typography>
          <Typography variant="subtitle2" color="green" >
            Hello  <span style={{ color: 'red' }}>My name is zaryab</span>, <span style={{ fontSize: 'bold' }}>Lorem Ipsum </span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant="h3">
            Education:
          </Typography>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </Typography>
        </Grid>

      </Grid>

    </React.Fragment>

  )
}

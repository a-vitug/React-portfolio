import { useTheme } from '@mui/material/styles';
import { Box, Divider, Grid, Typography,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material';

import '../App.css'
import { Container } from '@mui/system';
import { FaGithub, FaInfoCircle } from "react-icons/fa";

import React, { useState, useEffect, useMemo } from 'react'
// import useMeasure from 'react-use-measure'
// import { useTransition, a } from '@react-spring/web'
// import shuffle from 'lodash.shuffle'

// import useMedia from './useMedia'
// import data from './data'



function Projects() {

    const theme = useTheme();

    const itemData = [
        {
            img: './images/noteful.png',
            title: 'Noteful',
            github: 'https://github.com/a-vitug/react-app',
            site: 'https://noteful5.herokuapp.com/',
        },
        {
            img: './images/passwordgen.png',
            title: 'Password Generator',
            github: 'https://github.com/a-vitug/Password-Gen',
        },
        {
            img: './images/mealplanner.png',
            title: 'Meal Planner',
            github: 'https://github.com/Famesmyname/Ingredient-to-Meal-Planner',
            site: 'https://famesmyname.github.io/Ingredient-to-Meal-Planner/',
        },         
        {
            img: './images/ohmybooks.png',
            title: 'Oh my, Books!',
            github: 'https://github.com/mrjeoffrey/ohmybooks',
            site: 'https://ohmybooks.herokuapp.com/',
        },
        {
            img: './images/teamprofilegen.png',
            title: 'Team Profile Generator',
            github: 'https://github.com/a-vitug/hw10_teamprofilegen',
        },
    ];

  //   // Hook1: Tie media queries to the number of columns
  // const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
  // // Hook2: Measure the width of the container element
  // const [ref, { width }] = useMeasure()
  // // Hook3: Hold items
  // const [items, set] = useState(data)
  // // Hook4: shuffle data every 2 seconds
  // useEffect(() => {
  //   const t = setInterval(() => set(shuffle), 2000)
  //   return () => clearInterval(t)
  // }, [])
  // // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  // const [heights, gridItems] = useMemo(() => {
  //   let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  //   let gridItems = items.map((child, i) => {
  //     const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
  //     const x = (width / columns) * column // x = container width / number of columns * column index,
  //     const y = (heights[column] += child.height / 2) - child.height / 2 // y = it's just the height of the current column
  //     return { ...child, x, y, width: width / columns, height: child.height / 2 }
  //   })
  //   return [heights, gridItems]
  // }, [columns, items, width])
  // // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  // const transitions = useTransition(gridItems, {
  //   key: (item: { css: string; height: number }) => item.css,
  //   from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
  //   enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
  //   update: ({ x, y, width, height }) => ({ x, y, width, height }),
  //   leave: { height: 0, opacity: 0 },
  //   config: { mass: 5, tension: 500, friction: 100 },
  //   trail: 25,
  // })

    return (
        <Box p={7}>
            <Grid container spacing={10} rowSpacing={1}>
                <Grid item s={1} md={2} m={3} ml='auto' color='#555555' fontSize={35}>
                    <p> p </p>
                    <p> r </p>
                    <p> o </p>
                    <p> j </p>
                    <p> e </p>
                    <p> c </p>
                    <p> t </p>
                    <p> s </p>
                </Grid>

                <Divider light orientation="vertical" flexItem></Divider>

                <Grid item s={8} md={9} ml='auto' >

                {/* <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
      {transitions((style, item) => (
        <a.div style={style}>
          <div style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }} />
        </a.div>
      ))}
    </div> */}

                        <ImageList variant="masonry" cols={2} gap={40}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} className='polaroid'>
                                  <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                  />
                                  <ImageListItemBar
                                    position='below'
                                    actionPosition='right'
                                    sx={{ fontFamily: 'inconsolata', textAlign: 'center', fontWeight: 'bold' }}
                                    actionIcon={
                                        <Box display='flex'>
                                            <IconButton aria-label="github" href={`${item.github}`}>
                                                <FaGithub />
                                            </IconButton>
                                            
                                            <IconButton aria-label="site" href={`${item.site}`}>
                                                <FaInfoCircle />
                                            </IconButton>
                                        </Box>
                                    }
                                />
                                </ImageListItem>
                              ))}
                        </ImageList>
                </Grid>

            </Grid>

            
        </Box>
    )
};

export default Projects;
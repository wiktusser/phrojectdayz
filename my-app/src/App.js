import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Headroom from 'react-headroom';
import Album from './components/Album';
import AlbumSelector from './components/AlbumSelector'


import ReactIntense from 'react-intense'

import hawai1 from './images/hawaii/1.jpg';
import hawai2 from './images/hawaii/2.jpg';
import hawai3 from './images/hawaii/3.jpg';

import hawai4 from './images/wide/4.jpeg';

import asia1 from './images/asia/1.jpg';
import asia2 from './images/asia/2.jpg';
import asia3 from './images/asia/3.jpg';

import { Helmet } from "react-helmet"
import Typography from 'typography'
import irvingTheme from 'typography-theme-irving'
const typography = new Typography(irvingTheme)

const ALBUM_SELECTOR_DATA = [
  {
    src: '',
    text: 'hawaii',
    description: 'description',
    albumData: IMAGES_HAWAI,
  },
  {
    src: '',
    text: 'asia',
    description: 'description',
    albumData: IMAGES_ASIA
  }
]

const IMAGES_HAWAI =
  [{
    src: hawai1,
    thumbnail: hawai1,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: hawai2,
    thumbnail: hawai2,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: hawai3,
    thumbnail: hawai3,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  }];

const IMAGES_ASIA = [{
  src: asia1,
  thumbnail: asia1,
  thumbnailWidth: 250,
  thumbnailHeight: 174,
  isSelected: true,
  caption: "After Rain (Jeshu John - designerspics.com)"
},
{
  src: asia2,
  thumbnail: asia2,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: true,
  caption: "After Rain (Jeshu John - designerspics.com)"
},
{
  src: asia3,
  thumbnail: asia3,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: true,
  caption: "After Rain (Jeshu John - designerspics.com)"
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          {typography.injectStyles()}          <meta charSet="utf-8" />
          <title>Phrojectdayz</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Headroom>
          <h1>Photo | Video | Blog</h1>
          <section className="Album-selector">
            <AlbumSelector data={ALBUM_SELECTOR_DATA} />

          </section>
        </Headroom>

        <section className="Album">
          <Album images={IMAGES_HAWAI} />
        </section>
        <section className="Album">
          <Album images={IMAGES_ASIA} />
        </section>

        <ReactIntense src={hawai4} vertical={false}/>
      </div>
    );
  }
}

export default App;

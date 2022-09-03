# React Carousel

React carousel is an react based npm package which provides you simple multi images carousel with controlled buttons.

# What's new

- Packages update
- Design improvements
- Add more props to adjust image and arrow buttons height and width

## Features

- Simple multi images carousel
- Simple configuration
- Control buttons to handle next and prev image
- Customizable

## Installation

`npm i react-carousel-npm`

## Example

```js
import './App.css';
import { Slider } from 'react-carousel-npm';

const data = [
  {
    image:
      'https://images.pexels.com/photos/10161004/pexels-photo-10161004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
  {
    image:
      'https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
  {
    image:
      'https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg',
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
  {
    image:
      'https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
  {
    image:
      'https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg',
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
];

function App() {
  return (
    <div className='App'>
      <Slider
        sliderResource={data}
        backgroundColor='#333C19'
        dotColor='#735C19'
        arrowsColor='#126C20'
        arrowHoverColor='#64DF18'
        imageHeight='25vh'
        size={{ height: 2.5, width: 2.5 }}
      />
    </div>
  );
}

export default App;
```

## Data formate should be

```js
const data = [
  {
    image: `<URL>`,
    description: `<STRING>`,
  },
];
```

## Documentation

### Props

| Fields          |  Type  |               Description |
| --------------- | :----: | ------------------------: |
| sliderResource  | Object |               data object |
| backgroundColor | string |         default `#353C69` |
| dotColor        | string |         default `#D1B000` |
| arrowsColor     | string |         default `#ffffff` |
| arrowHoverColor | string |         default `#D1B000` |
| imageHeight     | string |            default `50vh` |
| size            | object | {height: 3.5, width: 3.5} |

## License

MIT

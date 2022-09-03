import './App.css';
import { Slider } from './lib';

const data = [
  {
    imageUrl:
      'https://images.pexels.com/photos/10161004/pexels-photo-10161004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: `image 1`,
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: `image 2`,
  },
  {
    imageUrl:
      'https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg',
    description: `image 3`,
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: `image 4`,
  },
  {
    imageUrl:
      'https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg',
    description: `image 5`,
  },
];

function App() {
  return (
    <div className='App'>
      <Slider
        sliderResource={data}
        imageKeyToAccess='imageUrl'
        backgroundColor='#333C19'
        dotColor='#735C19'
        arrowsColor='#126C20'
        arrowHoverColor='#64DF18'
        imageHeight='50vh'
        size={{ height: 2.5, width: 2.5 }}
      />
    </div>
  );
}

export default App;

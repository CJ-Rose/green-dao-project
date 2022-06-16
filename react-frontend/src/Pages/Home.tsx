import React from 'react';
import Button from '../Components/Atoms/Button';
import Subtitle from '../Components/Atoms/Subtitle';
import ImpactCard from '../Components/Molecules/ImpactCard';
import ProjectCard from '../Components/Molecules/ProjectCard';
import Navbar from '../Components/Molecules/Navbar';
import { Project } from '../utils/types';
import './Home.scss';

const Home = () => {
  //Later we will get the highlighted project id with a view function from the smart contract and get the corresponding data from the data base. From now we just use dummy data.
  const sampleProjects: Project[] = [
    {
      id: 0,
      title: 'Sample Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Non enim praesent elementum facilisis leo vel fringilla. Netus et malesuada fames ac turpis egestas. Dignissim sodales ut eu sem integer vitae justo eget. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Vel pretium lectus quam id. Ac tortor dignissim convallis aenean. Suscipit tellus mauris a diam maecenas sed enim. Dolor sed viverra ipsum nunc. Erat imperdiet sed euismod nisi porta lorem mollis. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.',
      image:
        'https://images.theconversation.com/files/137600/original/image-20160913-4948-6fyxz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
    },
    {
      id: 1,
      title: 'Sample Project 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Non enim praesent elementum facilisis leo vel fringilla. Netus et malesuada fames ac turpis egestas. ',
      image: 'https://storage.googleapis.com/pod_public/1300/120225.jpg',
    },
    {
      id: 2,
      title: 'Sample Project 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Non enim praesent elementum facilisis leo vel fringilla. Netus et malesuada fames ac turpis egestas. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Non enim praesent elementum facilisis leo vel fringilla. Netus et malesuada fames ac turpis egestas. Dignissim sodales ut eu sem integer vitae justo eget. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Vel pretium lectus quam id. Ac tortor dignissim convallis aenean. Suscipit tellus mauris a diam maecenas sed enim. Dolor sed viverra ipsum nunc. Erat imperdiet sed euismod nisi porta lorem mollis. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.',
      image:
        'https://thumbs.dreamstime.com/b/large-group-african-safari-animals-wildlife-conservation-concept-174172993.jpg',
    },
  ];
  return (
    <div className='home-page'>
      <Navbar />
      <div className='inner-homepage'>
        <div className='dao-description'>
          <p>
            Short sweet description of the DAO without getting too deep on to make it
            approachable for people that don’t know much about crypto but also touch on
            the benefits of donating more to become a full member with proposal and voting
            rights
          </p>
          <p>
            Find a way to creatively display this info so it’s not too text heavy neque, a
            venenatis ante mattis sit amet. Pellentesque ut magna eget tortor mollis
            lacinia quis quis massa.
          </p>
          <div className='join-btn'>
            <Button onClick={() => console.log('Join!')}>Join ENVIDAO</Button>
          </div>
        </div>

        <div className='highlighted-projects'>
          <Subtitle>Currently impacting these Projects</Subtitle>
          <div className='projects-list'>
            {sampleProjects.map((project, index) => (
              <ProjectCard project={project} key={index} /> //key is mandatory when rendering a component inside a map
            ))}
          </div>
          <Button onClick={() => console.log('contribute')}>Contribute</Button>
        </div>

        <div className='dao-impact'>
          <Subtitle>ENVIDAO impact</Subtitle>
          <ImpactCard
            balance={10}
            members={20}
            projectsContributed={30}
            donators={100}
            alreadySent={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

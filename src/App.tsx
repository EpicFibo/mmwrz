import { Fireworks } from '@fireworks-js/react'


const sky = require('./sky.jpg');
const pathsky = String(sky);
const explosion = require('./explosion.mp3')
let pathexplosion: string[] = [String(explosion)];
export default function App() {
  setTimeout( function() { ShowModal(); }, 1000);
  return (  
    <Fireworks
      options={{
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.0,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceSpeed: 5,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        delay: {
          min: 90,
          max: 100
        },
        hue: {
          min: 0,
          max: 360
        },
        rocketsPoint: {
          min: 40,
          max: 60
        },
        lineWidth: {
          explosion: {
            min: 2,
            max: 3
          },
          trace: {
            min: 1,
            max: 2
          }
        },
        brightness: {
          min: 50,
          max: 80
        },
        decay: {
          min: 0.010,
          max: 0.015
        },
        mouse: {
          click: false,
          move: false,
          max: 1
        },
        sound:{
          enabled: true,
          files: [
            './explosion.mp3'
          ],
          volume:{
            min: 20,
            max: 40
          }
        }
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundImage: "url('" + pathsky + "')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // background: '#000'
        
      }}
    />
    
  )
}

const ShowModal = () =>{
  console.log("test");
};


/*
rocketsPoint: {
          min: 0,
          max: 100
        }

*/
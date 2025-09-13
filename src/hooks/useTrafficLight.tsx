import { useEffect, useState } from 'react'

const colors = {
    red: 'bg-red-500 animate-pulse', 
    yellow: 'bg-yellow-500 animate-pulse', 
    green: 'bg-green-500 animate-pulse', 
    // blue: 'bg-blue-500 animate-pulse', 
}

// Forma manual de crear el type
// type trafficLightColor = 'red' | 'yellow' | 'green';
type trafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

    const [light, setLight] = useState<trafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);

    // Countdown effect
    useEffect(() => {
      if(countdown === 0) return;

      const intervalId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    
      return () => {
          clearInterval(intervalId);
      }
    }, [countdown, light]);
  
    // Change light effect
    useEffect(() => {

      if (countdown > 0) return;
        setCountdown(5);
        if (light === 'red'){
          setLight('green');
          return;
        };

        if (light === 'yellow'){
          setLight('red');
          return;
        };

        if (light === 'green'){
          setLight('yellow');
          return;
        };

    }, [countdown, light]);

    return {
        // properties
        colors,
        light,
        countdown,

        // computed
        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',

        // methods
    }
}

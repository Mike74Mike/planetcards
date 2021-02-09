const mars = {
  name: 'Mars',
  diameter: '4,212 mi',
  moons: '2',
  temp: '-153 to 20 °C',
  orbitDays: '687',
  orbitYears: '1.9',
  description: 'The fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. It\'s a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.',
  facts: 'Mars has the largest dust storms in the solar system. They can last for months and cover the entire planet. On Mars the Sun appears about half the size as it does on Earth.'
};
const jupiter = {
  name1: "Jupiter",
  diameter1: "86,881 mi",
  moons1: "79",
  temp1: "145 °C",
  orbitDays1: "4,333",
  orbitYears1: "11.87123",
  description1: "Jupiter is the fifth planet from the sun. Jupiter's average distance from the sun is 5.2 astronomical units, or AU. This distance is a little more than five times the distance from Earth to the sun. When viewed from Earth, Jupiter is usually the second brightest planet in the night sky, after Venus. The planet is named after Jupiter, the king of the Roman gods in mythology.",
  facts1: "Jupiter is the fourth brightest object in the solar system. The ancient Babylonians were the first to record their sightings of Jupiter. Jupiter has the shortest day of all the planets. Jupiter orbits the Sun once every 11.8 Earth years. Jupiter has unique cloud features."
};
  

function createPlanetHTML(planet , Jupiter) {
 return  `
    <div class="card"> 
          <div>
            <img src="img/${planet.name}.jpg"   alt="  ${planet.name}  "> 
          </div> 
          <h2>  ${planet.name}  </h2> 
          <p> ${planet.description}  </p> 
          <h3>Planet Profile</h3> 
          <ul> 
            <li><strong>Diameter: </strong>  ${planet.diameter}  </li> 
            <li><strong>Moons: </strong> ${planet.moons}  </li> 
            <li><strong>Temperature: </strong>  ${planet.temp}  </li> 
            <li><strong>Orbit Period: </strong>  ${planet.orbitDays} days (${planet.orbitYears} years</li> 
          </ul> 
          <p>  ${planet.facts}  </p> 
        </div>
     <div class= "card2">
          <div>
            <img class= "jupiter" src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg" alt="${Jupiter.name1}">
          </div>
          <h2>${Jupiter.name1}</h2>
          <p> ${Jupiter.description1}</p>
          <h3> Planet Profile</h3>
          <ul>
            <li><strong>Diameter:</strong> ${Jupiter.diameter1}</li>
            <li><strong>Moons:</strong> ${Jupiter.moons1}</li>
            <li><strong>Temperature: </strong> ${Jupiter.temp1}</li>
            <li><strong>Orbit Period:</strong> ${Jupiter.orbitDays1} days (${Jupiter.orbitYears1} years</li>
          </ul>
          <p>${Jupiter.facts1}</p>
        </div> `;
}

document.querySelector('body').innerHTML = createPlanetHTML(mars, jupiter);

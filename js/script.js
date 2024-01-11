// Import images as a relative image path won't work with Vite/Vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import cantonese from '../assets/cantonese.png'
import china2 from '../assets/china2.png'
import mandarin from '../assets/mandarin.png'

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

// Define an array of the parts of the Game Level System
const GameLevelSystem = [
  'Unlock Flow State',
  'Freemium Model',
  'Incremental Progress',
  'AI Tailored Learning',
  'Accountability Streaks',
  'Unlock Earnable Items'
];

// Define an array of Learning Backed By Science
const LearningBackedByScience = [
  "The Feyman Technique",
  "Spaced Repitition",
  "Retrieval Practice",
  "Leitner System",
  "Pomodoro Technique",
  "Dual Coding",
];

// Define an array of cards with details for each card
const cards = [
  {
    imgSrc: cantonese,
    alt: "cantonese",
    title: "cantonese",
    rating: "10",
    levels: "0/125"
  },
  {
    imgSrc: china2,
    alt: "china2",
    title: "china2",
    rating: "20",
    active: true
  },
  {
    imgSrc: mandarin,
    alt: "mandarin",
    title: "mandarin",
    rating: "10",
    levels: "0/125"
  }
];

// This code defines various elements, including images, animations, and data structures.
// Let's break down each part of the code:

// Importing images:
// - `check`, `star`, `cantonese`, `china2`, and `mandarin` are imported images using relative paths.

// Importing AOS for animations:
// - `AOS` is imported as a library for animating elements.
// - The `init` function is called to initialize AOS with specific configurations.

// Cards Data:
// - The `cards` array contains objects, each representing a card with specific details:
//   - `imgSrc`: The source of the card image.
//   - `alt`: Alt text for the image.
//   - `title`: Title of the card.
//   - `rating`: Rating of the card.
//   - `price`: Price of the card.
//   - `active`: An optional property indicating if the card is active.

// Animations:
// - AOS animations are initialized with a duration of 1000 milliseconds and an offset of 100 pixels.

// This code is a combination of image imports, animation initialization, and data definition for the trending section of a website.
// If you have any specific questions about a particular part or if you need further explanations, feel free to ask.

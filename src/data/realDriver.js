import { featuredGame } from './games.js'
import { driverImages } from './realDriverImages.js'

export const realDriver = {
  ...featuredGame,
  videoId: 'wSkLt35uevA',
  videoUrl: 'https://www.youtube.com/watch?v=wSkLt35uevA',
  // Set the official store URL when the Steam page is ready.
  steamUrl: null,
}

export const drivingModes = [
  { id: 'race', label: 'Race', heading: 'Chase the finish.', description: 'Find your line, take the corner and make every overtake count. The city is your racetrack.', detail: 'THE COMPETITIVE SIDE', icon: 'flag' },
  { id: 'drift', label: 'Drift', heading: 'Go a little sideways.', description: 'Break traction. Hold the slide. Turn the next corner into your own signature move.', detail: 'CONTROLLED CHAOS', icon: 'drift' },
  { id: 'time-attack', label: 'Time Attack', heading: 'Make every second yours.', description: 'One route. One clock. Push for a cleaner line and a faster finish, run after run.', detail: 'YOU VS. THE CLOCK', icon: 'clock' },
  { id: 'free-ride', label: 'Free Ride', heading: 'Take the long way home.', description: 'Leave the finish line behind. Explore the streets, find a new route and drive at your own pace.', detail: 'NO FINISH LINE REQUIRED', icon: 'route' },
  { id: 'clean-drive', label: 'Clean Drive', heading: 'Precision is everything.', description: 'Read the traffic, keep your distance and find your rhythm. Smooth driving is its own challenge.', detail: 'KEEP IT CLEAN', icon: 'shield' },
  { id: 'tutorial', label: 'Tutorial', heading: 'Your first ignition.', description: 'Get comfortable behind the wheel. Learn the controls before you take on the city.', detail: 'START YOUR JOURNEY', icon: 'wheel' },
]

export const galleryImages = [
  { ...driverImages.scenic, title: 'The scenic route', category: 'IN-GAME / EXPLORATION' },
  { ...driverImages.race, title: 'A different kind of rush', category: 'GAMEPLAY / RACING' },
  { ...driverImages.cockpit, title: 'In the driver’s seat', category: 'GAMEPLAY / COCKPIT VIEW' },
  { ...driverImages.tuning, title: 'Find your next ride', category: 'IN-GAME / CAR STORE' },
  { ...driverImages.online, title: 'Better together', category: 'IN-GAME / ONLINE DRIVING' },
  { ...driverImages.streetCoupe, title: 'City state of mind', category: 'IN-GAME CAPTURE' },
]

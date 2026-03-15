import { useState } from 'react';
import { Link } from 'react-router-dom';

const inclusions = [
  { title: 'Accommodation', desc: 'Carefully selected boutique hotels and premium stays throughout the trip.' },
  { title: 'Meals', desc: 'Selected breakfasts and curated local dining experiences.' },
  { title: 'Transfers', desc: 'All internal transportation including private transfers and intercity travel.' },
  { title: 'Activities', desc: 'Guided excursions, curated local experiences, and cultural exploration activities.' },
];

const exclusions = [
  'International flights are not included',
  'Visa fees and processing',
  'Meals not mentioned in inclusions',
  'Arrival or departure transfers not specified',
  'Additional experiences outside the itinerary',
  'Applicable taxes if required',
  'Personal expenses such as shopping, additional meals, and weather related itinerary changes',
];

const itinerary = [
  {
    day: 'Day 1',
    title: 'Welcome To Hanoi',
    desc: 'Welcome to Vietnam\'s vibrant capital, a city where French charm, Chinese heritage, and Vietnamese soul blend into something unforgettable.\n\nAfter check-in, take a moment to soak in the energy before we step out to explore the iconic Old Quarter. Think narrow bustling lanes, motorbikes weaving past colonial balconies, and street-side kitchens serving magic in bowls. We\'ll sip on a unique Vietnamese coffee and dive straight into the city\'s rhythm.\n\nLater, your trip leader will guide you to the hidden entrance of the legendary Hanoi Train Street, where a train dramatically passes through a narrow market street, just inches away from cafés and homes. As night falls, feast on pho, clink beer glasses, and soak in the madness of Ta Hien Beer Street. If time permits, explore the local night market and hit a few buzzing bars. This is how we get the Vietnam party started.',
    highlights: ['Meet & Greet', 'Train Street', 'Famous Vietnamese Coffee & Local Food']
  },
  {
    day: 'Day 2',
    title: 'Party Cruise in Halong Bay',
    desc: 'Today we head to the UNESCO World Natural Heritage Site, the breathtaking Ha Long Bay. Picture emerald waters dotted with dramatic limestone karsts rising from the sea; this is Vietnam at its most cinematic. On our cruise, you\'ll capture unreal photos of towering limestone formations, explore mystical caves filled with stalactites and stalagmites, kayak through grottoes and glide past sheer cliffs, and soak in the views with your WanderMesh tribe.\n\nAfter returning to Hanoi, we\'re not done yet; get ready for a classic pub crawl and bar-hopping night back at Beer Street. Balance of nature and nightlife, perfectly WanderMesh.',
    highlights: ['Halong Bay Cruise', 'Pub Crawl']
  },
  {
    day: 'Day 3',
    title: 'Explore Your Way',
    desc: 'Option 1: Day Trip to Ninh Binh\nWe begin at Hoa Lu, Vietnam\'s ancient capital steeped in history. Then glide through the postcard-perfect landscapes of Trang An on a traditional sampan boat, drifting past mystical caves, emerald rivers, and endless rice paddies. To top it off, climb up to Hang Mua for a breathtaking panoramic sunset over the valley. Return to Hanoi for dinner and a well-earned rest.\n\nOption 2: Slow Hanoi Day\nExplore hidden cafés, shop in vibrant local markets, discover art galleries, or simply wander the streets and let the city surprise you. Your pace. Your vibe.',
    highlights: ['Optional Ninh Binh tour', 'Local Exploration']
  },
  {
    day: 'Day 4',
    title: 'Into the Mountain, Sapa Calling',
    desc: 'After breakfast, we board our bus and journey towards one of the most picturesque regions of Vietnam, often called the "Mini Switzerland" of the country. Welcome to Sapa, where dramatic mountain landscapes, misty valleys, and endless rice terraces set the tone for the day.\n\nUpon arrival, we check into our hotel and freshen up before heading out to explore the iconic Cat Cat Village, home to the Black Hmong community, where traditional wooden houses, local crafts, and cultural heritage still thrive amidst stunning natural backdrops.\n\nAs evening falls, we slow things down with Vietnam\'s famous coffee, paired with jaw-dropping mountain views. Sapa transforms beautifully at dusk, with glowing streets, crisp mountain air, and cozy cafés tucked into corners. We\'ll take a relaxed stroll through town, soak in the vibe on foot, enjoy a comforting dinner, and turn in early, resting up for the adventure that awaits tomorrow.',
    highlights: ['Sa Pa check-in', 'Cat Cat Village']
  },
  {
    day: 'Day 5',
    title: 'Conquer the Roof of Indochina',
    desc: 'Wake up to absolute bliss in the mountains of Sa Pa. After breakfast, we gear up for an iconic adventure, summiting Fansipan, the highest peak in Indochina (3,143 m). We\'ll hop on the scenic mountain railway from the city center and ascend via the world\'s highest non-stop three-rope cable car system to the top. A short 20–30 minute walk through misty pathways and temple structures brings us to the summit, where clouds float beneath you and the views are unreal. We\'ll descend and return around lunchtime.\n\nPost lunch, we head to the stunning Silver Waterfall, cascading powerfully amidst lush greenery, followed by golden hour at Moana Cafe, famous for its surreal Bali-style photo spots and panoramic valley views. Sunset scenes here? Pure magic.\n\nIn the evening, we explore Sa Pa town center, local markets, cozy cafés, and mountain-town vibes. After dinner, we unwind with some fun group games before calling it a night.',
    highlights: ['Fansipan Summit', 'Silver Waterfall', 'Moana Cafe View Point']
  },
  {
    day: 'Day 6',
    title: 'Mountains to Coast – Hello, Da Nang',
    desc: 'After breakfast, we bid farewell to the misty charm of Sapa and journey back to Hanoi. From here, we catch a swift flight south, trading rice terraces for coastline as we land in Vietnam\'s most loved beach town, Da Nang.\n\nUpon arrival, we check into our hotel, freshen up, and shift into coastal mode. As the sun softens, we take a relaxed stroll along the iconic My Khe Beach, with golden sands, ocean breeze, and that first sip by the sea. No agenda, just vibes.\n\nThe night is yours to choose your energy: keep it chill and unwind after a travel day, or let the party tribe explore Da Nang\'s buzzing local bars and dance it out. From mountains to waves, today we reset, recharge, and get ready for the coastal chapter ahead.',
    highlights: ['Da Nang check-in', 'My Khe beach', 'Nightlife']
  },
  {
    day: 'Day 7',
    title: 'Hoi An – Lanterns & Laidback Magic',
    desc: 'After breakfast, we head out for a full-day experience in the enchanting town of Hoi An. We begin by exploring this UNESCO-listed ancient town on bicycles, slowly cruising through mustard-yellow streets, heritage houses, and riverside lanes. Pause for a coffee at a charming local café or indulge in authentic Vietnamese cuisine at a hidden gem.\n\nNext, we experience the iconic round basket boat ride through the serene mangrove forests, a unique cultural encounter that\'s equal parts fun and immersive.\n\nAs evening falls, we soak in the magic of lantern-lit Hoi An with a peaceful lantern boat ride along the river. The town transforms into a glowing dream, with soft lights, reflections on water, and timeless charm everywhere you look. Post sunset, we wander through the lively lanes, enjoy a curated dinner, and wrap up the night at buzzing spots like Me Beans, the perfect way to end the day on a high note.',
    highlights: ['Hoi An Day Tour', 'Mangrove Forest & Basket Boat', 'Lantern Boat Ride', 'Local Cuisine & Nightlife']
  },
  {
    day: 'Day 8',
    title: 'Ba Na Hills & Da Nang Nightlife',
    desc: 'Post breakfast, we head out for a full-day adventure to Ba Na Hills, a hilltop escape that feels straight out of Europe. Explore the charming French Village, wander through cobbled streets, and soak in panoramic mountain views. Don\'t forget to capture those iconic shots at the world-famous Golden Bridge, the stunning walkway held up by giant stone hands.\n\nAfter an action-packed day, we return to unwind at My Khe Beach. Watch the sunset, dip your toes in the sea, or grab a chilled drink by the shore. But hey… the night is still young.\n\nLater, you can head to the iconic Sky36 for skyline views and cocktails, or explore other buzzing nightlife spots across the city to dance the night away. Another perfect WanderMesh day, culture, views, beach, and vibes.',
    highlights: ['Ba Na hills', 'Golden Bridge', 'French Village', 'My Khe Beach', 'Nightlife']
  },
  {
    day: 'Day 9',
    title: 'Design Your Day, Your Way',
    desc: 'Option 1: Hai Van Pass & Hue Adventure\nTake a scenic ride through the legendary Hai Van Pass, one of the most breathtaking coastal roads in the world. Continue onward to the historic city of Hue, where you\'ll explore imperial architecture, ancient temples, and dive into Vietnam\'s royal past. Perfect for history lovers and landscape chasers.\n\nOption 2: Marble Mountains & My Son Sanctuary\nDiscover the mystical caves and panoramic viewpoints of the Marble Mountains. Later, step back in time at My Son Sanctuary, a UNESCO-listed ancient Hindu temple complex surrounded by lush greenery, a cultural gem near Da Nang.\n\nOption 3: Chill in Da Nang\nKeep it slow and soulful. Relax at My Khe Beach, explore cute cafés, or visit Son Tra Marina for those dreamy white-and-blue, Greece-style photo vibes.\n\nAs the sun sets on this unforgettable journey, we\'ll dress up and head out to Da Nang\'s buzzing nightlife scene. Let\'s end the trip on a high note, dancing, laughing, and making memories that last way beyond Vietnam.',
    highlights: ['Hai Van Pass & Hue', 'Marble Mountain & My Son Sanctuary', 'Chill in Da Nang']
  },
  {
    day: 'Day 10',
    title: 'One Last Sunrise Together',
    desc: 'After one last shared breakfast together, we gather to relive the highlights, swap favourite moments, and take those final group photos you will look back on for years. Hugs, laughs, and promises to meet again follow as we say our goodbyes. The journey wraps up with full hearts, new friendships, and memories that will travel home with you long after Vietnam is behind you.',
    highlights: ['Group breakfast', 'Group photos', 'Memories']
  },
];

const VietnamTrip = () => {
  const [activeTab, setActiveTab] = useState('inclusions');
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (day) => setOpenDay(openDay === day ? null : day);

  return (
    <div className="trip-page">
      <div className="trip-hero-banner">
        <img src="/images/vietnam.jpg" alt="Vietnam" className="trip-hero-img" />
        <div className="trip-hero-overlay" />
      </div>

      <div className="container">
        <Link to="/" className="trip-back">← Back to Home</Link>

        <div className="trip-header-info">
          <h1>Vibing in Vietnam</h1>
          <div className="trip-meta">
            <span>📅 Apr 24 - May 3</span>
            <span>INR 59,999</span>
            <span>Vietnam</span>
          </div>
        </div>

        <div className="trip-detail-section">
          <h2>Trip Details</h2>
          <p>Vietnam blends dramatic landscapes, vibrant cities, and timeless culture. From cruising through limestone karsts to exploring lantern lit towns and lively markets, every moment feels cinematic. This experience balances adventure with relaxation, giving you space to explore, connect, and enjoy Vietnam at your own pace.</p>
        </div>

        <div className="trip-detail-section">
          <div className="trip-tabs">
            <button className={`trip-tab ${activeTab === 'inclusions' ? 'active' : ''}`} onClick={() => setActiveTab('inclusions')}>Inclusions</button>
            <button className={`trip-tab ${activeTab === 'exclusions' ? 'active' : ''}`} onClick={() => setActiveTab('exclusions')}>Exclusions</button>
          </div>
          <div className="trip-tab-content">
            {activeTab === 'inclusions' ? (
              <div className="inclusions-grid">
                {inclusions.map((item) => (
                  <div className="inclusion-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="exclusion-list">
                {exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="trip-detail-section">
          <h2>Itinerary</h2>
          <div className="itinerary-accordion">
            {itinerary.map((item) => (
              <div className={`accordion-item ${openDay === item.day ? 'open' : ''}`} key={item.day}>
                <button className="accordion-trigger" onClick={() => toggleDay(item.day)}>
                  <span>{item.day} - {item.title}</span>
                  <span className="accordion-icon">{openDay === item.day ? '−' : '+'}</span>
                </button>
                <div className="accordion-content">
                  <p style={{ whiteSpace: 'pre-wrap' }}>{item.desc}</p>
                  {item.highlights && (
                    <div className="accordion-highlights">
                      <strong>Highlights:</strong>
                      <ul>
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VietnamTrip;

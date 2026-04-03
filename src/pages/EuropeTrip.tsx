import { useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import { useInviteModal } from '../context/InviteModalContext';

const inclusions = [
  {
    title: 'Accommodation',
    desc: '11 nights at hostels and boutique hotels on a twin sharing basis.'
  },
  {
    title: 'Meals',
    desc: '12 breakfasts'
  },
  {
    title: 'Transfers',
    desc: 'All internal transfers between cities, including trains, buses, and transfers between hotels and ferry terminals.'
  },
  {
    title: 'Activities',
    desc: 'Guided walking tours across historic old towns\nIconic landmarks and city highlights in each destination\nScenic train and road journeys through Europe\nRiver cruise experience (like Danube in Budapest)\nCastle visits and panoramic viewpoints (like in Prague)\nIsland exploration and beach time (Hvar / Croatian coast)\nBoat day experience with swim stops and hidden coves\nNightlife experiences across cities and islands\nPub crawls and social nights with the group\nLocal food exploration, cafés, and cultural spots\nPlitvice national park day tour'
  },
  {
    title: 'Trip Support',
    desc: 'Assistance from our expert travel consultants throughout the trip/ trip buddy.\n\nA lot of friends, memories, and stories!'
  },
];

const exclusions = [
  { title: 'Airfares', desc: 'Flight bookings can be guided.' },
  { title: 'Visas', desc: 'Schengen Visa cost and processing.' },
  { title: 'Meals', desc: 'Meals not mentioned are excluded (Local dining suggestions available).' },
  { title: 'Airport Transfers', desc: 'Airport Pick up and Drop off.' },
  { title: 'Optional Activities', desc: 'Dubrovnik, Sparty in Budapest & Ultra Festival passes or any other activities not mentioned in "inclusions".' },
  { title: 'Tax', desc: '2% TCS (refundable as per ITR) + 5% GST.' },
  { title: 'Other', desc: 'Personal expenses not included\nAnything not mentioned under inclusions\n\nPlease Note: All the activities mentioned in the itinerary are subject to weather conditions and sea tides.' },
];

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival in Prague | Welcome to Europe',
    desc: 'Upon arrival in Prague, complete immigration formalities and transfer to your hotel. Meet your trip leader and the WanderMesh tribe. After some time to relax, step out for a laid-back walking tour of the historic Old Town. Catch the sunset at Charles Bridge and later visit the iconic Astronomical Clock. In the evening, get ready for a famous pub crawl and kickstart your Euro journey in WanderMesh style.',
    highlights: ['Arrival', 'Old Town Walk', 'Sunset Views', 'Pub Crawl']
  },
  {
    day: 'Day 2',
    title: 'Prague Exploration | Castles, Culture & Views',
    desc: 'After breakfast, head out to explore Prague Castle, including St. Vitus Cathedral, the Old Royal Palace, St. George’s Basilica, and Golden Lane. Walk through centuries of history as you wander past grand architecture, royal halls, and charming medieval streets. Later, visit the scenic boat ride on the Vltava River. Make pit stops at local cafés for Czech pastries, coffee, or beer, and soak in the city’s vibe. As the evening sets in, head out to experience Prague’s buzzing nightlife with your crew and end the night at Prague most famous nightclub Karlovy Lazne.',
    highlights: ['Prague Castle', 'River Cruise', 'Café Hopping', 'Nightclub']
  },
  {
    day: 'Day 3',
    title: 'Prague to Budapest | Scenic Shift & Thermal Party',
    desc: 'Start your day with a train/bus journey from Prague to Budapest. Relax, unwind, and enjoy the changing landscapes as you cross borders with the group. Arrive in Budapest and head out for an evening along the Danube. Later, dive straight into Budapest’s iconic thermal bath party scene at Széchenyi and call it Sparty. Expect music, lights, drinks, and a high-energy social vibe in the pools.',
    highlights: ['Travel Day', 'Budapest Arrival', 'Thermal Party (Sparty)']
  },
  {
    day: 'Day 4',
    title: 'Budapest | Recovery → City Glow → Boat Party',
    desc: 'Morning: Sleep in HARD Brunch + hydration reset. Afternoon: Chill Explore Buda Castle, Fisherman’s Bastion Walk, Chain Bridge. Ease into the evening with a Danube river cruise party, with the Parliament building glowing against the night sky. Expect great music, open views of the city, and peak Budapest energy on the water. Post Boat Party Options: 1. Continue energy Ötkert, 2. Full chaos Instant-Fogas Complex, 3. Chill Riverside walk + late food.',
    highlights: ['City Views', 'Cruise Party', 'Nightlife']
  },
  {
    day: 'Day 5',
    title: 'Recovery → Views → Ruin Bars',
    desc: 'Morning: Late start + café brunch Explore Mode. Pick your pace: Gellért Hill → best panoramic view OR chill walk + cafés in Pest. Sunset: Slow Burn Danube riverside walk, Parliament golden hour shots. Later in the night, step into the city’s iconic ruin bar scene with a visit to Szimpla Kert. Raw, artistic chaos, great music, and an effortless social vibe to close the night.',
    highlights: ['Chill Day', 'Sunset Spots', 'Ruin Bars']
  },
  {
    day: 'Day 6',
    title: 'Budapest to Zagreb | Reset & Slow Down',
    desc: 'Travel from Budapest to Zagreb by coach. Arrive, check in, and take some time to decompress. In the evening, step out for a walk through the Upper Town, quiet streets, old-world charm, and a completely different pace from the past few days. A slower night to reset.',
    highlights: ['Travel Day', 'Old Town', 'Slow Evening']
  },
  {
    day: 'Day 7',
    title: 'Zagreb to Plitvice Day Trip | Nature Escape',
    desc: 'Start early for a day trip to Plitvice Lakes National Park. Walk through cascading waterfalls, wooden trails, and unreal turquoise lakes. Take in the calm pace and let nature take over. Return to Zagreb in the evening and keep things relaxed. Expect to feel physically tired but mentally refreshed.',
    highlights: ['Waterfalls', 'Nature Escape', 'Scenic Trails']
  },
  {
    day: 'Day 8',
    title: 'Zagreb to Hvar + Sunset + Night Vibes',
    desc: 'Arrival & Check-in: Check into your stay near the harbor (Hvar Town is best for walking everywhere). Quick freshen up, light snack / drink. Evening: Sunset Mode Head straight to the waterfront or Hula Hula Beach Bar for sunset DJ vibes Golden hour views + first island energy moment. Nightlife Warm-up: Start at harbor bars (cocktails + music). Otherwise: Relaxed bar crawl through Old Town streets.',
    highlights: ['Island Arrival', 'Sunset Bar', 'Night Vibes']
  },
  {
    day: 'Day 9',
    title: 'Boat Day + Beaches + Sunset Exit',
    desc: 'Slow Morning: Café breakfast in Hvar Town, Walk to Fortica Fortress, Best panoramic view of the island + harbour. Boat Adventure (Main Day Highlight): Head out to Pakleni Islands. Expect Hidden turquoise coves, Swim stops in crystal water, Beach clubs or quiet bays. Evening: Back to Hvar Town Nap / café / light walk. Nightlife Warm-up: Pre-drinks at harbour bars Late night at Carpe Diem (club/boat party vibe).',
    highlights: ['Boat Day', 'Island Hopping', 'Beach Party']
  },
  {
    day: 'Day 10-11',
    title: 'Split | ULTRA MODE',
    desc: 'Morning: Take a ferry and arrive to Split for ultimate festival vibe. Check-in to the hotel and relax & recharge. As the energy builds, the crew links up - pre-drinks, music, getting ready together. Then it’s time. Two nights at Ultra Europe World-class DJs, insane production, and non-stop energy till sunrise. This is peak WanderMesh. Optional Experience: Full-day trip to Dubrovnik. Walk through the real-life set of Game of Thrones.',
    highlights: ['Arrival', 'Pre-Party', 'Ultra Night', 'Festival Energy', 'DJs']
  },
  {
    day: 'Day 12',
    title: 'Departure | Soft Endings',
    desc: 'The journey wraps up with full hearts, new friendships, and memories that will travel home with you long after Europe is behind you. We gather to relive the highlights, swap favourite moments, and take those final group photos you will look back on for years. Hugs, laughs, and promises to meet again follow as we say our goodbyes.',
    highlights: ['Slow Morning', 'Pack Up', 'Goodbye Europe']
  },
];

const EuropeTrip = () => {
  const [activeTab, setActiveTab] = useState('inclusions');
  const [openDay, setOpenDay] = useState(null);
  const { openModal } = useInviteModal();

  const toggleDay = (day) => setOpenDay(openDay === day ? null : day);

  return (
    <div className="trip-page">
      <div className="container">
        <Link to="/" className="trip-back">← Back to Home</Link>

        <div className="trip-header-info">
          <h1>Euro Summer Mesh</h1>
          <div className="trip-meta">
            <span>📅 July 2 - July 13</span>
            <span>11 NIGHTS / 12 DAYS</span>
            <span><b>Price: INR 1,38,000</b></span>
          </div>
        </div>

        <div className="trip-hero-banner">
          <img src="/images/europe.png" alt="Europe" className="trip-hero-img" />
          <div className="trip-hero-overlay" />
        </div>

        <div className="trip-detail-section">
          <h2>Trip Overview</h2>
          <p>Join us for a summer mesh across Europe. Drift through Prague’s old streets, follow the Danube lights in Budapest, and chase island sunsets and festival nights on Croatia’s coast, all at your own rhythm.</p>
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
                    <p style={{ whiteSpace: 'pre-wrap' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="inclusions-grid">
                {exclusions.map((item) => (
                  <div className="inclusion-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
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
        <div className="signup-cta" style={{ marginBottom: '40px' }}>
          <button className="btn-primary" onClick={openModal}>
            Request Your Invite
          </button>
        </div>
      </div>
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default EuropeTrip;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import { useInviteModal } from '../context/InviteModalContext';

const inclusions = [
  { title: 'Accommodation', desc: '8 nights at 3/4 star hotels on a twin sharing basis.' },
  { title: 'Meals', desc: '8 breakfasts' },
  { title: 'Transport', desc: 'Intercity transfers between hotels/ferry terminals.\nFerry from Bali to Gili Trawangan & Return' },
  { title: 'Activities', desc: '• ATV tour in Ubud along different landscapes\n• Visit to traditional homes and coffee plantations\n• Coffee tasting including the famous Kopi Luwak\n• Mount Batur volcano 4WD Jeep Tour & black lava fields\n• Nightlife experiences in Gili and Seminyak\n• 3-island snorkelling trip from Gili Trawangan\n• Legendary Gili Trawangan Boat Party' },
  { title: 'Trip Support', desc: 'Assistance from our expert travel consultants throughout the trip/ trip buddy.\n\nA lot of friends, memories, and adventures!' },
];

const exclusions = [
  { title: 'Airfares', desc: 'We can guide you with flight bookings.' },
  { title: 'Visas', desc: 'Currently visa is on arrival and costs about 3k INR for Indians.' },
  { title: 'Meals', desc: 'Any meals not mentioned in "inclusion section" (We would like you to explore the local cuisine and if you are a vegetarian not to worry we suggest options for you.)' },
  { title: 'Airport Transfers', desc: 'Pick up and drop off at Denpasar airport (at additional cost based on your flight timings)' },
  { title: 'Optional Activities', desc: 'Day Trip to Nusa Penida or any other activities not mentioned in "inclusions"' },
  { title: 'Tax', desc: '5% TCS (Refundable as per ITR) + 2% GST.' },
  { title: 'Other', desc: 'Personal Expenses and Anything not specifically mentioned under "inclusions"\n\nPlease Note: All the activities mentioned in the itinerary are subject to weather conditions and sea tides.' },
];

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival & Meet Your Crew',
    desc: 'You\'re officially here. Step out of the airport and switch holiday mode on. From here, you\'re whisked away to your villa, the kind that instantly makes you think, yes, this is exactly what I needed.\n\nWe head straight to Canggu, lively streets, beach-town energy, music in the air. Your first taste of Bali, and it hits just right. Later, join forces with the rest of the group and make way to the world best beach club Finns for a perfect start of your trip.\n\nAs night falls, we start with drinks and make our way through Bali\'s iconic spots: Mexicola, Old Man\'s, Desa Kitsune etc. WanderMesh knows how to do first nights right.',
    highlights: ['Meet & Greet', 'Finns Beach Club Evening', 'Bali Nightlife']
  },
  {
    day: 'Day 2',
    title: 'Uluwatu Beaches, Temple & Nightlife',
    desc: 'Wake up, you\'re in paradise, no really you are. Our day begins with a visit to a secluded, pristine beach nestled in the southernmost part of Bali.\n\nLater we\'ll head off to the famous Uluwatu temple. Perched on the edge of a cliff, it offers stunning views of the Indian Ocean. Here we will learn about the Balinese culture and witness the captivating traditional Kecak fire dance show!\n\nLater tonight, gather your squad and head out to Bali\'s #1 party place Savaya, or hit another local hotspot like La Favela or D Maria to indulge in Bali nightlife one more time!',
    highlights: ['Uluwatu Temple Cliff views', 'Kecak Fire Dance Show', 'Nightlife at Savaya']
  },
  {
    day: 'Day 3',
    title: 'Local Exploration or Optional Nusa Penida Trip',
    desc: 'Give yourself a day to explore local markets, cafe for the perfect Bali vibe. You can hit another popular Day Club i.e. Luna Beach Club or La Brisa for a perfect sunset while sipping your favourite cocktails or you can do a optional full day tour to Nusa Penida.\n\nLater in the night you can either head to another famous nightlife spot or savour some local cuisine at a local hotspot and keeping it relax and chill.',
    highlights: ['Local Markets + Bali Cafés', 'Luna Beach Club or La Brisa Sunset', 'Optional Nusa Penida Tour']
  },
  {
    day: 'Day 4',
    title: 'Gili T & Beach Bars',
    desc: 'Wave goodbye to Canggu as we hop on a speedboat bound for Gili Trawangan, a tiny island paradise where there are no cars, no scooters, no chaos..... just barefoot freedom. So small you\'ll barely spot it on a map, yet big on energy.\n\nAfter check-in, we explore the island the way it\'s meant to be explored, on foot and by bicycle. Think turquoise sea views, sun drenched corners, beachside cafés, and that slow, salty Gili rhythm you came for.\n\nAs the sun dips, it\'s time to switch gears. Throw on your dancing shoes, we\'re heading out to experience the island\'s iconic nightlife, with beach bars, good music, and an ocean breeze.',
    highlights: ['Speedboat to Gili Trawangan', 'Island Cycling & Exploration', 'Sea Views & Slow Island Vibes', 'Gili Beach Bar Night']
  },
  {
    day: 'Day 5',
    title: 'Snorkel & Beach Therapy',
    desc: 'After the breakfast get ready for an under water experience. Go on a snorkelling tour where you will meet turtles and reef while hopping onto other Gilli island i.e. Gilli Meno & Gilli Air.\n\nAs golden hour melts into the horizon, we gather for the legendary boat party, music up, drinks flowing, dancing like nobody\'s watching under an endless island sky.\n\nWrap the night with a beachside dinner or wander through a buzzing local food market, savoring bold Indonesian flavours and fresh island bites.',
    highlights: ['Snorkelling Tour', 'Gili Meno & Gili Air', 'Gili Sunset Boat Party', 'Beachside Dinner']
  },
  {
    day: 'Day 6',
    title: 'Ubud Markets & Balinese Bliss',
    desc: 'After breakfast, we hop on a ferry to Ubud, Bali\'s cultural heart. Spend the afternoon wandering through its vibrant local markets, browsing handmade crafts, woven bags, silver jewellery, and little treasures tucked into every corner. Take your time, soak in the energy, and maybe pick up a souvenir or two.\n\nAs the day winds down, treat yourself to pure relaxation with a soothing Balinese massage. The perfect way to unwind, reset, and recharge after a day of exploring.',
    highlights: ['Ferry to Ubud', 'Local Markets', 'Balinese Massage']
  },
  {
    day: 'Day 7',
    title: 'ATVs, Coffee Tasting & Day Club',
    desc: 'Kick off the morning with an adrenaline pumping ATV ride through rugged trails and lush landscapes. Get muddy, get loud, and dive straight into the adventure side of Bali.\n\nAfter the thrill, we slow things down with a Luwak coffee tasting session, learning about the process and sampling one of Bali\'s most unique brews.\n\nLater, we head to an iconic Ubud day club like OMA Bali or Cretya Ubud. Think infinity pools overlooking the jungle, good music, great food, and laid back luxury. If you are up for it, take on the optional Bali swing and soar high above the treetops for that unforgettable view.',
    highlights: ['ATV Ride', 'Luwak Coffee Tasting', 'OMA Bali or Cretya Ubud Day Club', 'Optional Bali Swing']
  },
  {
    day: 'Day 8',
    title: 'Mt. Batur Sunrise & Sacred Landscapes',
    desc: 'The adventure begins early with a 2 AM departure for a sunrise trek up Mount Batur. Reach the summit just in time to watch the sky shift from deep blue to fiery orange, with panoramic views stretching across Bali. After sunrise, continue the experience with a thrilling black lava exploration across the rugged volcanic terrain.\n\nLater in the day, slow the pace as we wander through serene temples and lush rice terraces, soaking in Bali\'s spiritual charm and natural beauty. The perfect balance of adrenaline and tranquility to round off the adventure.',
    highlights: ['Mt Batur Sunrise Trek', 'Black Lava Exploration', 'Temple Visits', 'Rice Terrace Views']
  },
  {
    day: 'Day 9',
    title: 'One Last Sunrise Together',
    desc: 'After one last shared breakfast together, we gather to relive the highlights, swap favourite moments, and take those final group photos you will look back on for years. Hugs, laughs, and promises to meet again follow as we say our goodbyes. The journey wraps up with full hearts, new friendships, and memories that will travel home with you long after Bali is behind you.',
    highlights: ['Final Group Breakfast', 'Group Photos', 'Farewell Hugs & Memories']
  },
];

const BaliTrip2 = () => {
  const [activeTab, setActiveTab] = useState('inclusions');
  const [openDay, setOpenDay] = useState<string | null>(null);
  const { openModal } = useInviteModal();

  const toggleDay = (day: string) => setOpenDay(openDay === day ? null : day);

  return (
    <div className="trip-page">

      <div className="container">
        <Link to="/" className="trip-back">← Back to Home</Link>

        <div className="trip-header-info">
          <h1>Bali Uncharted 2.0</h1>
          <div className="trip-meta">
            <span>📅 July 25 - Aug 2</span>
            <span>8 NIGHTS / 9 DAYS</span>
            <span><b>Price: INR 56,999</b></span>
          </div>
        </div>

        <div className="trip-hero-banner">
        <img src="/images/bali.jpg" alt="Bali" className="trip-hero-img" />
        <div className="trip-hero-overlay" />
      </div>

        <div className="trip-detail-section">
          <h2>Trip Details</h2>
          <p>Bali 2.0 is where adventure reaches a new level. From the adrenaline of ATV rides and volcanic treks to the serenity of hidden temples and island boat parties, this edition is crafted for those who want to experience the best of Bali, amplified.</p>
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
      <TestimonialsSection/>
      <FAQSection />
    </div>
  );
};

export default BaliTrip2;

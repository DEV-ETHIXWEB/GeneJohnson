export interface Location {
  slug: string;
  name: string;
  county: string;
  region: "Seattle Metro" | "Eastside" | "North Sound" | "South Sound";
  zip: string;
  landmark: string;
  blurb: string;
}

export const locations: Location[] = [
  { slug: "medina", name: "Medina", county: "King County", region: "Eastside", zip: "98039", landmark: "Bill Gates' lakefront neighborhood along Evergreen Point Road", blurb: "a quiet Lake Washington enclave of high-value homes that expect white-glove service" },
  { slug: "mercer-island", name: "Mercer Island", county: "King County", region: "Eastside", zip: "98040", landmark: "the I-90 floating bridge crossing and Luther Burbank Park", blurb: "an island community connected to Seattle by two floating bridges" },
  { slug: "bellevue", name: "Bellevue", county: "King County", region: "Eastside", zip: "98004", landmark: "Bellevue Square and the downtown high-rise core", blurb: "the Eastside's fastest-growing commercial and residential hub" },
  { slug: "downtown-bellevue", name: "Downtown Bellevue", county: "King County", region: "Eastside", zip: "98004", landmark: "Bellevue Square and Meydenbauer Bay Park", blurb: "the dense high-rise core at the center of the Eastside" },
  { slug: "kirkland", name: "Kirkland", county: "King County", region: "Eastside", zip: "98033", landmark: "the waterfront along Marina Park", blurb: "a lakefront city known for its walkable waterfront and older housing stock" },
  { slug: "renton", name: "Renton", county: "King County", region: "Eastside", zip: "98055", landmark: "the mouth of the Cedar River at Lake Washington", blurb: "a river-and-lake city with a mix of established and newer neighborhoods" },
  { slug: "bothell", name: "Bothell", county: "King County", region: "North Sound", zip: "98011", landmark: "the Sammamish River Trail through downtown", blurb: "a fast-growing city straddling the King/Snohomish county line" },
  { slug: "shoreline", name: "Shoreline", county: "King County", region: "Seattle Metro", zip: "98133", landmark: "Richmond Beach Saltwater Park", blurb: "a Puget Sound-facing suburb just north of the Seattle city limit" },
  { slug: "lake-forest-park", name: "Lake Forest Park", county: "King County", region: "Seattle Metro", zip: "98155", landmark: "Third Place Books and the Burke-Gilman Trail", blurb: "a wooded, tight-knit community bordering Lake Washington" },
  { slug: "seattle-wa", name: "Seattle", county: "King County", region: "Seattle Metro", zip: "98101", landmark: "the Space Needle and Elliott Bay waterfront", blurb: "our home base and the company's namesake city since 1976" },
  { slug: "west-seattle", name: "West Seattle", county: "King County", region: "Seattle Metro", zip: "98116", landmark: "Alki Beach and the West Seattle Bridge", blurb: "a peninsula neighborhood of older bungalows with notoriously tricky sewer lines" },
  { slug: "university-district", name: "University District", county: "King County", region: "Seattle Metro", zip: "98105", landmark: "the University of Washington campus", blurb: "a dense mix of century-old homes and student housing near UW" },
  { slug: "ravenna", name: "Ravenna", county: "King County", region: "Seattle Metro", zip: "98115", landmark: "Ravenna Park's ravine trail", blurb: "a leafy North Seattle neighborhood of early-1900s craftsman homes" },
  { slug: "northgate", name: "Northgate", county: "King County", region: "Seattle Metro", zip: "98125", landmark: "Northgate Station and the light rail extension", blurb: "a rapidly redeveloping North Seattle hub around the new light rail station" },
  { slug: "haller-lake", name: "Haller Lake", county: "King County", region: "Seattle Metro", zip: "98133", landmark: "Haller Lake itself, tucked just off Aurora Avenue", blurb: "a quiet North Seattle pocket neighborhood of mid-century homes" },
  { slug: "bitter-lake", name: "Bitter Lake", county: "King County", region: "Seattle Metro", zip: "98133", landmark: "Bitter Lake Playfield and Community Center", blurb: "a diverse North Seattle neighborhood with a mix of housing ages" },
  { slug: "sand-point", name: "Sand Point", county: "King County", region: "Seattle Metro", zip: "98115", landmark: "Magnuson Park along Lake Washington", blurb: "a lakefront Seattle neighborhood built around the old naval air station" },
  { slug: "central-district", name: "Central District", county: "King County", region: "Seattle Metro", zip: "98122", landmark: "Jimi Hendrix Park", blurb: "one of Seattle's oldest and most historically significant neighborhoods" },
  { slug: "leschi", name: "Leschi", county: "King County", region: "Seattle Metro", zip: "98122", landmark: "Leschi Park on Lake Washington", blurb: "a hillside Lake Washington neighborhood with steep, older plumbing runs" },
  { slug: "mount-baker", name: "Mount Baker", county: "King County", region: "Seattle Metro", zip: "98144", landmark: "the Mount Baker light rail station and Lake Washington Boulevard", blurb: "a historic Seattle neighborhood of large early-20th-century homes" },
  { slug: "everett", name: "Everett", county: "Snohomish County", region: "North Sound", zip: "98201", landmark: "the Naval Station Everett waterfront", blurb: "the Snohomish County seat and a major North Sound service hub" },
  { slug: "edmonds", name: "Edmonds", county: "Snohomish County", region: "North Sound", zip: "98020", landmark: "the Edmonds-Kingston ferry terminal", blurb: "a Puget Sound ferry town with a historic, walkable downtown" },
  { slug: "lynnwood", name: "Lynnwood", county: "Snohomish County", region: "North Sound", zip: "98036", landmark: "Alderwood Mall and the Lynnwood light rail station", blurb: "a retail and transit hub connecting Seattle to Snohomish County" },
  { slug: "mukilteo", name: "Mukilteo", county: "Snohomish County", region: "North Sound", zip: "98275", landmark: "the Mukilteo Lighthouse and ferry terminal", blurb: "a waterfront city known for its lighthouse and ferry crossing to Whidbey Island" },
  { slug: "mountlake-terrace", name: "Mountlake Terrace", county: "Snohomish County", region: "North Sound", zip: "98043", landmark: "the Mountlake Terrace Transit Center", blurb: "a compact, transit-oriented city bordering North Seattle" },
  { slug: "eastmont", name: "Eastmont", county: "Snohomish County", region: "North Sound", zip: "98012", landmark: "Eastmont Park in unincorporated Snohomish County", blurb: "a residential unincorporated community near Silver Lake" },
  { slug: "tacoma", name: "Tacoma", county: "Pierce County", region: "South Sound", zip: "98402", landmark: "the Tacoma Dome and Museum of Glass", blurb: "the Pierce County seat and South Sound's largest city" },
  { slug: "south-tacoma", name: "South Tacoma", county: "Pierce County", region: "South Sound", zip: "98409", landmark: "the South Tacoma Way industrial corridor", blurb: "a historic Tacoma neighborhood built along the old rail and industrial corridor" },
  { slug: "south-hill", name: "South Hill", county: "Pierce County", region: "South Sound", zip: "98374", landmark: "South Hill Mall", blurb: "a fast-growing Puyallup-area community of newer construction" },
  { slug: "puyallup", name: "Puyallup", county: "Pierce County", region: "South Sound", zip: "98371", landmark: "the Washington State Fairgrounds", blurb: "home to the Washington State Fair and a growing South Sound suburb" },
];

export const locationBySlug = new Map(locations.map((l) => [l.slug, l]));

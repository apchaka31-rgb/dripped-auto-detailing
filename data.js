export const site = {
  name: "Dripped Auto Detailing",
  shortName: "Dripped Detailing LV",
  phone: "725-306-7008",
  phoneHref: "tel:7253067008",
  smsHref: "sms:7253067008",
  domain: "https://www.drippeddetailinglv.com",
  googleBusinessUrl: "https://www.google.com/maps/place/Dripped+Auto+Detailing/data=!4m7!3m6!1s0x80c893d73f3ae61b:0x96586882a23ac7ee!8m2!3d36.2851805!4d-115.2995469!16s%2Fg%2F11lz3yvwhn!19sChIJG-Y6P9eTyIAR7sc6ooJoWJY?authuser=0&hl=en&rclk=1",
  address: "Las Vegas, NV",
  serviceAreas: ["Las Vegas", "Summerlin", "Centennial Hills", "North Las Vegas", "Aliante", "Henderson", "Southern Highlands", "Spring Valley", "Enterprise", "Mountain's Edge"],
  coordinates: { lat: 36.2851805, lng: -115.2995469 },
};

export const vehiclePackages = [
  { slug:"exterior-detailing", name:"Exterior Package", nav:"Exterior", price:"Starts at $45", pricing:[["Sedan/Coupe","$45"],["Mid-Size SUV","$55"],["Full-Size SUV/Truck","$65"]], description:"Your placeholder description goes here. Write your own description for the Exterior Package explaining the wash process, wheels, tires, drying method, protection options, and what makes your mobile exterior detail different.", includes:["Foam pre-rinse and exterior wash","Wheels, tires, and wheel faces cleaned","Streak-free exterior glass","Hand dry with paint-safe towels","Tire dressing and final presentation check"], keywords:"exterior detailing Las Vegas, mobile exterior car wash, luxury car wash Las Vegas"},
  { slug:"essential-detailing", name:"Essential Package", nav:"Essential", price:"Starts at $85", pricing:[["Sedan/Coupe","$85"],["Mid-Size SUV","$125"],["Full-Size SUV/Truck","$155"]], description:"Your placeholder description goes here. Write your own description for the Essential Package explaining the entry-level interior and exterior detail, who it is best for, and why it is a strong maintenance reset.", includes:["Exterior wash and hand dry","Wheels and tires cleaned","Interior vacuum","Interior wipe down","Windows cleaned inside and outside","Basic sanitation and deodorizing"], keywords:"essential car detailing Las Vegas, mobile detail package Las Vegas"},
  { slug:"premium-detailing", name:"Premium Package", nav:"Premium", price:"Starts at $125", pricing:[["Sedan/Coupe","$125"],["Mid-Size SUV","$165"],["Full-Size SUV/Truck","$215"]], description:"Your placeholder description goes here. Write your own description for the Premium Package explaining the deeper cleaning, interior attention, protection benefits, and why it is ideal for daily drivers that need a serious refresh.", includes:["Everything in Essential","Deeper interior cleaning","More detailed plastics, vinyl, and leather cleaning","Enhanced wheel and tire finish","Interior cracks and crevices addressed","Premium finishing touches"], keywords:"premium car detailing Las Vegas, mobile interior exterior detailing"},
  { slug:"dripped-out-detailing", name:"Dripped Out Package", nav:"Dripped Out", price:"Starts at $165", pricing:[["Sedan/Coupe","$165"],["Mid-Size SUV","$215"],["Full-Size SUV/Truck","$255"]], description:"Your placeholder description goes here. Write your own description for the Dripped Out Package explaining your top-tier transformation, luxury presentation, and why this is the best-value complete detail.", includes:["Complete interior and exterior detail","Premium finishing and presentation","Thorough vacuum and surface cleaning","Enhanced trim and tire appearance","Paint-safe wash process","Best value for full transformations"], keywords:"best car detail Las Vegas, luxury mobile detailing Las Vegas"},
];

export const ceramic = { slug:"ceramic-coating", name:"Ceramic Coating", nav:"Ceramic Coating", price:"Starts at $950", pricing:[["36-Month Sedan/Coupe/Mid-Size SUV","$950"],["36-Month Full-Size SUV/Truck","$1,250"],["60-Month Sedan/Coupe/Mid-Size SUV","$1,250"],["60-Month Full-Size SUV/Truck","$1,500"]], description:"Your placeholder description goes here. Write your ceramic coating explanation here, including prep, polishing, protection, gloss, hydrophobic performance, UV protection, and why ceramic coating makes sense in Las Vegas heat.", includes:["Exterior detail preparation","Paint decontamination","One-step polish when included or needed","Professional ceramic coating application","Hydrophobic paint protection","Gloss, UV resistance, and easier maintenance"], keywords:"ceramic coating Las Vegas, GYEON ceramic coating Las Vegas, paint protection Las Vegas" };

export const maintenance = { slug:"maintenance-plans", name:"Maintenance Plans", nav:"Maintenance", price:"Starts at $100", pricing:[["Bi-Weekly Maintenance","$100 flat per car"],["Monthly Maintenance","$120 flat per car"]], description:"Your placeholder description goes here. Write your maintenance plan description here, including eligibility, recurring service benefits, and why regular detailing helps protect the vehicle in Las Vegas.", includes:["Recurring exterior and interior maintenance","PH-balanced foam exterior wash","Wheels and tires cleaned and dressed","Streak-free windows","Interior vacuum","Basic wipe down of interior surfaces"], keywords:"car detailing maintenance plan Las Vegas, monthly mobile detailing Las Vegas" };

export const boat = { slug:"boat-detailing", name:"Boat Detailing", nav:"Boat Detailing", price:"Starts at $12/ft", pricing:[["Exterior Package","$12/ft"],["Essential Package","$15/ft"],["Premium Package","$20/ft"],["Paint Correction/Enhancement & Ceramic Coating","$35/ft"]], description:"Your placeholder description goes here. Write your boat detailing description here, including boat wash, interior cleaning, upholstery, oxidation removal, ceramic coating, Lake Mead, Lake Las Vegas, and maintenance for boat owners.", includes:["Exterior boat wash","Interior cleaning options","Vinyl and upholstery cleaning","Oxidation improvement options","Marine ceramic coating options","Mobile service for boat owners"], keywords:"boat detailing Las Vegas, mobile boat detailing Lake Mead, boat ceramic coating Las Vegas" };

export const addOns = [
  { slug:"pet-hair-removal", name:"Excessive Pet Hair Removal", price:"$25–$50", description:"Your placeholder description goes here. Explain the added time and tools used to remove embedded pet hair from carpets, seats, mats, and cargo areas." },
  { slug:"engine-bay-detail", name:"Engine Bay Detail", price:"$50", description:"Your placeholder description goes here. Explain your careful engine bay cleaning process, degreasing, wipe down, and dressed finish." },
  { slug:"truck-bed-cleaning", name:"Truck Bed Cleaning", price:"$30", description:"Your placeholder description goes here. Explain cleaning for dust, dirt, work debris, and daily truck use." },
  { slug:"steam-clean-interior", name:"Steam Clean Interior", price:"$50", description:"Your placeholder description goes here. Explain steam cleaning for interior surfaces, cracks, cup holders, panels, and sanitation." },
  { slug:"windshield-ceramic-coating", name:"Windshield Ceramic Coating", price:"$80", description:"Your placeholder description goes here. Explain water-beading, visibility, easier cleaning, and glass protection benefits." },
  { slug:"interior-fabric-leather-ceramic", name:"Interior Fabric/Leather Ceramic Coating", price:"$150", description:"Your placeholder description goes here. Explain fabric and leather protection against spills, stains, UV wear, and easier maintenance." },
];

export const services = [...vehiclePackages, ceramic, maintenance, boat];

export const locations = [
  { slug:"summerlin", name:"Summerlin", landmarks:"Downtown Summerlin, Red Rock, The Ridges, Sun City Summerlin, and nearby luxury communities", focus:"premium mobile detailing, ceramic coatings, maintenance plans, and high-end vehicle care" },
  { slug:"centennial-hills", name:"Centennial Hills", landmarks:"Centennial Center, Skye Canyon, Providence, and northwest Las Vegas neighborhoods", focus:"mobile detailing for daily drivers, trucks, SUVs, family vehicles, and ceramic protection" },
  { slug:"north-las-vegas", name:"North Las Vegas", landmarks:"Aliante, Craig Ranch, Shadow Creek, and major residential areas across North Las Vegas", focus:"interior and exterior mobile detailing, maintenance plans, and add-on services" },
  { slug:"aliante", name:"Aliante", landmarks:"Aliante Casino, Nature Discovery Park, Club Aliante, and surrounding master-planned communities", focus:"luxury mobile details, ceramic coating, and recurring maintenance for clean daily drivers" },
  { slug:"henderson", name:"Henderson", landmarks:"Green Valley, Anthem, Inspirada, Seven Hills, MacDonald Highlands, and Lake Las Vegas", focus:"ceramic coating, luxury vehicle detailing, boat detailing, and full interior/exterior packages" },
];

export const galleryImages = [
  "img_0553.jpeg","img_0567.jpeg","img_2139.jpeg","img_2150.jpeg","img_2144.jpeg","img_2380.jpeg","img_2384.jpeg","img_3456.jpeg","img_3489.jpeg","img_3490.jpeg","img_3496.jpeg","img_3736.jpeg","img_3738.jpeg","img_3740.jpeg","img_3926.jpeg","img_4635.jpeg","img_4649.jpeg","img_4650.jpeg","img_4664.jpeg","img_4671.jpeg"
].map((file, i)=>({ src:`/gallery/${file}`, alt:`Dripped Auto Detailing Las Vegas portfolio photo ${i+1}`, category: i%5===0?"Ceramic Coating":i%5===1?"Interior":i%5===2?"Exterior":i%5===3?"Results":"Premium Vehicles" }));

export const reviewImages = ["img_4429.jpeg","img_4430.jpeg","img_4431.jpeg","img_4432.jpeg","img_4433.jpeg","img_4434.jpeg","img_4435.jpeg","img_4436.jpeg","img_4437.jpeg","img_4438.jpeg","img_4439.jpeg","img_4440.jpeg"].map((file,i)=>({src:`/reviews/${file}`, alt:`Google review screenshot for Dripped Auto Detailing ${i+1}`}));

export const faqs = [
  ["Do you come to me?", "Yes. Dripped Auto Detailing is a mobile detailing service serving Las Vegas, Summerlin, Centennial Hills, North Las Vegas, Aliante, Henderson, and nearby areas."],
  ["Do I need to provide water or power?", "Most appointments can be handled mobile, but requirements can depend on the service, vehicle, and location. The best approach is to text your address, vehicle type, and selected package so we can confirm setup."],
  ["How long does a detail take?", "Time depends on the package, vehicle size, condition, and add-ons. A basic appointment can be much faster, while premium details, ceramic coating prep, pet hair, steam cleaning, and boats take longer."],
  ["Is ceramic coating worth it in Las Vegas?", "Ceramic coating is one of the best upgrades for Las Vegas drivers because UV exposure, dust, hard water, and heat can quickly wear down a vehicle's finish. Coating helps add gloss, hydrophobic protection, and easier maintenance."],
  ["What package should I choose?", "Choose Exterior for a clean outside refresh, Essential for a balanced interior/exterior reset, Premium for deeper cleaning, and Dripped Out when you want the most complete transformation."],
  ["Do you detail boats?", "Yes. Boat detailing is available with exterior, essential, premium, enhancement, and ceramic coating options priced by the foot."],
  ["Can I add pet hair removal or steam cleaning?", "Yes. Add-ons include pet hair removal, engine bay detail, truck bed cleaning, steam cleaning, windshield ceramic coating, and interior fabric or leather ceramic coating."],
  ["How do I book?", "Call or text 725-306-7008, or use the quote calculator and contact buttons on the website to start a quote request."],
  ["Do you service apartments?", "Yes, as long as the location allows mobile service and there is enough room to safely work. Some apartments may have restrictions, so we confirm before the appointment."],
  ["How often should I maintain my vehicle?", "Most daily drivers in Las Vegas benefit from monthly detailing. Vehicles exposed to dust, kids, pets, work use, or outdoor parking may benefit from bi-weekly maintenance."],
  ["Can you remove every stain?", "Not every stain can be fully removed, especially if it has dyed, burned, or permanently damaged the material. The goal is always the best safe improvement possible."],
  ["Do you use paint-safe methods?", "Yes. The process is built around safe washing, careful towels, proper chemicals, and professional presentation so the vehicle gets cleaned without unnecessary damage."],
  ["Do you work on luxury vehicles?", "Yes. The brand is positioned for premium vehicles, daily drivers, trucks, SUVs, and boats. The same quality-focused approach is used across every appointment."],
  ["Can I get a quote before booking?", "Yes. Text photos, vehicle details, service area, and the package you want. The quote calculator also gives an instant estimate for common services."],
  ["Do maintenance plans require a first detail?", "Maintenance plans usually work best after at least an initial detail so the vehicle starts at a clean baseline and stays easier to maintain."],
  ["What areas do you service?", "Core service areas include Las Vegas, Summerlin, Centennial Hills, North Las Vegas, Aliante, Henderson, Southern Highlands, Spring Valley, Enterprise, and Mountain's Edge."],
  ["Do you offer engine bay detailing?", "Yes. Engine bay detail is available as an add-on and is priced at $50."],
  ["Do you offer windshield ceramic coating?", "Yes. Windshield ceramic coating is available for $80 and helps improve water behavior and ease of cleaning."],
  ["Do you offer interior ceramic protection?", "Yes. Interior fabric and leather ceramic coating is available for $150."],
  ["How do I prepare my vehicle?", "Remove personal items, valuables, car seats if possible, and anything that may get in the way. This helps maximize cleaning time and results."],
  ["Can I reschedule?", "Yes. Send a message as early as possible so the schedule can be adjusted."],
  ["Do you provide same-day appointments?", "Same-day availability depends on the schedule and service type. Texting is the fastest way to check openings."],
  ["What makes Dripped different?", "Dripped focuses on premium presentation, mobile convenience, clear pricing, strong communication, and results that match a luxury brand experience."],
  ["Can you detail work trucks?", "Yes. Full-size trucks, work trucks, truck beds, and daily-use vehicles can be serviced, with pricing based on vehicle size and condition."],
  ["Are prices final?", "Listed prices are starting points. Heavy staining, excessive pet hair, oversized vehicles, severe water spotting, oxidation, or unusual condition may affect the final quote."]
];

export const blogPosts = [
  { slug:"how-often-detail-car-las-vegas", title:"How Often Should You Detail Your Car in Las Vegas?", desc:"A practical guide for Las Vegas drivers dealing with dust, heat, UV exposure, and daily use.", topic:"detailing schedule" },
  { slug:"ceramic-coating-worth-it-nevada", title:"Is Ceramic Coating Worth It in Nevada?", desc:"Learn why ceramic coating makes sense for vehicles exposed to desert sun, dust, and hard water.", topic:"ceramic coating" },
  { slug:"protect-black-paint-las-vegas", title:"How to Protect Black Paint in Las Vegas Heat", desc:"Black paint looks incredible when cared for properly, but Vegas heat makes protection important.", topic:"paint protection" },
  { slug:"boat-detailing-lake-mead", title:"Boat Detailing Near Lake Mead: What Owners Should Know", desc:"A guide to keeping boats cleaner, glossier, and better protected around Lake Mead and Lake Las Vegas.", topic:"boat detailing" },
  { slug:"remove-hard-water-spots-car", title:"How to Deal With Hard Water Spots on Car Paint", desc:"Why water spots happen and when professional polishing or protection may be needed.", topic:"water spots" },
];

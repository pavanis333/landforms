const topics = [
  {
    id: "exogenic-forces",
    name: "Exogenic Forces",
    subtopics: [
      {
        id: "exogenic-intro",
        name: "Introduction to Exogenic Forces",
        flashcards: [
          { id: "ex1", front: "What are Exogenic Forces?", back: "External processes that operate on the Earth's surface, primarily responsible for shaping and modifying the landscape. They originate from outside the Earth's surface." },
          { id: "ex2", front: "What are the main agents that drive Exogenic Forces?", back: "Water, Wind, Ice and Waves." },
          { id: "ex3", front: "How do Exogenic Forces differ from Endogenic Forces?", back: "Endogenic forces are internal and responsible for creating landforms (through tectonic and volcanic activity). Exogenic forces work to break down, transport and deposit materials, leading to gradual degradation of landforms." },
          { id: "ex4", front: "Why are Exogenic Forces also called Denudational Forces?", back: "Because they wear down the Earth's surface through a combination of weathering, mass wasting, erosion and deposition." },
          { id: "ex5", front: "What is the energy source for Exogenic Processes?", back: "The Sun's heat and the gravitational forces acting on the Earth's surface." },
          { id: "ex6", front: "What are the four main processes of Exogenic Forces?", back: "1. Weathering\n2. Mass Wasting\n3. Erosion\n4. Deposition" },
        ],
        quizzes: [
          { id: "exq1", question: "Exogenic forces are primarily driven by which of the following?", options: ["Internal heat of the Earth", "Sun's heat and gravitational forces", "Magnetic field of the Earth", "Radioactive decay in the mantle"], correct: 1 },
          { id: "exq2", question: "Which of the following is NOT an agent of exogenic forces?", options: ["Water", "Wind", "Magma", "Ice"], correct: 2 },
          { id: "exq3", question: "Exogenic forces are also known as:", options: ["Tectonic forces", "Denudational forces", "Volcanic forces", "Orogenic forces"], correct: 1 },
          { id: "exq4", question: "Which of the following correctly describes the role of exogenic forces?", options: ["They create landforms through volcanic activity", "They cause tectonic plate movements", "They break down, transport and deposit materials", "They generate earthquakes"], correct: 2 },
          { id: "exq5", question: "The four main processes of exogenic forces include all EXCEPT:", options: ["Weathering", "Mass Wasting", "Volcanism", "Deposition"], correct: 2 },
        ],
      },
    ],
  },
  {
    id: "weathering",
    name: "Weathering",
    subtopics: [
      {
        id: "weathering-intro",
        name: "Introduction to Weathering",
        flashcards: [
          { id: "w1", front: "What is Weathering?", back: "The breakdown of rocks into smaller particles through physical, chemical, and biological processes. It weakens rocks and makes them more susceptible to erosion." },
          { id: "w2", front: "What factors condition weathering processes?", back: "Weathering is conditioned by complex geological, climatic, topographic and vegetative factors." },
          { id: "w3", front: "What are the three major types of weathering?", back: "1. Physical / Mechanical Weathering\n2. Chemical Weathering\n3. Biological Weathering" },
        ],
        quizzes: [
          { id: "wq1", question: "Weathering makes rocks more susceptible to:", options: ["Volcanism", "Tectonic uplift", "Erosion", "Metamorphism"], correct: 2 },
          { id: "wq2", question: "Which of the following is NOT a factor that conditions weathering?", options: ["Geology", "Climate", "Earth's magnetic field", "Vegetation"], correct: 2 },
        ],
      },
      {
        id: "physical-weathering",
        name: "Physical / Mechanical Weathering",
        flashcards: [
          { id: "pw1", front: "What is Physical (Mechanical) Weathering?", back: "The process of breaking down rocks and minerals into smaller pieces without altering their chemical composition." },
          { id: "pw2", front: "What are the main driving forces of physical weathering?", back: "1. Gravitational forces (overburden pressure, load, shearing stress)\n2. Expansion forces due to temperature changes\n3. Water pressure controlled by wetting and drying cycles" },
          { id: "pw3", front: "What is Exfoliation?", back: "Occurs when overlying layers of rock are eroded away, reducing pressure on the underlying rock. This release of pressure allows the rock to expand, causing layers or sheets to peel off." },
          { id: "pw4", front: "What is Thermal Expansion weathering?", back: "Occurs when rocks are subjected to rapid heating and cooling, particularly in desert environments. Repeated cycles of expansion (day) and contraction (night) cause outer layers to crack and flake off. Most effective in arid regions with extreme temperature variations." },
          { id: "pw5", front: "What is Abrasion?", back: "Occurs when rocks are worn down by friction and collision with other rock particles. Happens in rivers, glaciers, deserts or coastal environments where wind, water or ice carries particles that grind against rocks, smoothing and rounding them." },
          { id: "pw6", front: "What is Frost Wedging (Freeze-Thaw Cycle)?", back: "Occurs due to growth of ice within pores and cracks of rocks during repeated cycles of freezing and melting. Rapid freezing of water causes sudden expansion and high pressure, widening joints, cracks and fractures until the rock breaks apart." },
          { id: "pw7", front: "What is Salt Weathering?", back: "Occurs when salty water enters cracks of rocks. As water evaporates, salt crystals grow and expand, exerting pressure on the rock. Salts like calcium, sodium, magnesium, potassium and barium expand due to thermal action, hydration and crystallisation." },
        ],
        quizzes: [
          { id: "pwq1", question: "Physical weathering breaks down rocks:", options: ["By changing their chemical composition", "Without altering their chemical composition", "Only through biological activity", "Only in cold climates"], correct: 1 },
          { id: "pwq2", question: "Exfoliation is caused by:", options: ["Chemical reactions with water", "Release of overlying pressure allowing rock to expand", "Growth of plant roots", "Freezing of water in cracks"], correct: 1 },
          { id: "pwq3", question: "Thermal expansion weathering is most effective in:", options: ["Tropical rainforests", "Arid regions with extreme day-night temperature variations", "Polar ice caps", "Deep ocean floors"], correct: 1 },
          { id: "pwq4", question: "In Frost Wedging, what causes the rock to break apart?", options: ["Heat from the Sun", "Expansion of freezing water in cracks", "Chemical dissolution", "Wind abrasion"], correct: 1 },
          { id: "pwq5", question: "Which of the following is NOT a type of physical weathering?", options: ["Exfoliation", "Abrasion", "Oxidation", "Salt Weathering"], correct: 2 },
          { id: "pwq6", question: "Salt weathering involves expansion of salts due to:", options: ["Only thermal action", "Only crystallisation", "Thermal action, hydration and crystallisation", "Only hydration"], correct: 2 },
          { id: "pwq7", question: "Abrasion occurs in all of the following environments EXCEPT:", options: ["Rivers", "Glaciers", "Deep underground caves", "Coastal environments"], correct: 2 },
        ],
      },
      {
        id: "chemical-weathering",
        name: "Chemical Weathering",
        flashcards: [
          { id: "cw1", front: "What is Chemical Weathering?", back: "The alteration of the chemical structure of minerals in rocks, mainly through reactions with water, air and acids." },
          { id: "cw2", front: "What are the key chemical weathering processes?", back: "1. Solution\n2. Carbonation\n3. Hydration\n4. Oxidation\n5. Reduction" },
          { id: "cw3", front: "What conditions must be present to speed up chemical reactions in weathering?", back: "Water and air (oxygen and carbon dioxide) along with heat must be present." },
          { id: "cw4", front: "What is Solution weathering?", back: "When minerals dissolve directly into water without chemical alteration. Water (especially if slightly acidic due to dissolved CO₂) dissolves minerals like halite (NaCl), gypsum (CaSO₄) and calcite (CaCO₃). The minerals are removed and carried away in solution." },
          { id: "cw5", front: "Where is Solution weathering most effective and what does it form?", back: "Most effective in regions with high rainfall where water moves freely through rocks. It is responsible for the formation of karst topography, including features like limestone caves." },
          { id: "cw6", front: "What is Carbonation?", back: "The reaction of carbonate and bicarbonate with minerals. CO₂ from the atmosphere or soil dissolves in water to form carbonic acid (H₂CO₃), which reacts with minerals rich in calcium carbonate (like limestone), dissolving them and breaking down the rock. Common in breaking down feldspars and carbonate minerals." },
          { id: "cw7", front: "What is Hydration in chemical weathering?", back: "The chemical addition of water. Minerals take up water and expand, causing an increase in the volume of the material or rock." },
          { id: "cw8", front: "What is Oxidation in weathering?", back: "The combination of a mineral with oxygen to form oxides or hydroxides. It primarily affects iron-bearing minerals (olivine, pyroxene, amphibole), forming iron oxides (rust) which weakens the rock. Red color of iron upon oxidation turns to brown or yellow." },
          { id: "cw9", front: "What is Reduction in weathering?", back: "When oxidised minerals are placed in an environment where oxygen is absent, reduction takes place. Such conditions exist below the water table, in areas of stagnant water and waterlogged ground. Red color of iron upon reduction turns to a greenish or bluish color." },
          { id: "cw10", front: "How can you identify Oxidation vs Reduction by color?", back: "Oxidation: Red iron turns brown or yellow\nReduction: Red iron turns greenish or bluish" },
        ],
        quizzes: [
          { id: "cwq1", question: "Chemical weathering primarily involves:", options: ["Breaking rocks without changing composition", "Altering the chemical structure of minerals", "Only physical forces", "Movement of rocks by gravity"], correct: 1 },
          { id: "cwq2", question: "Karst topography and limestone caves are formed by which process?", options: ["Carbonation", "Solution weathering", "Hydration", "Oxidation"], correct: 1 },
          { id: "cwq3", question: "Carbonation involves the formation of which acid?", options: ["Sulphuric acid (H₂SO₄)", "Carbonic acid (H₂CO₃)", "Hydrochloric acid (HCl)", "Nitric acid (HNO₃)"], correct: 1 },
          { id: "cwq4", question: "In Hydration, what happens to the minerals?", options: ["They lose water and shrink", "They take up water and expand", "They dissolve completely", "They combine with oxygen"], correct: 1 },
          { id: "cwq5", question: "Oxidation primarily affects which type of minerals?", options: ["Calcium-bearing minerals", "Iron-bearing minerals", "Sodium-bearing minerals", "Silicon-bearing minerals"], correct: 1 },
          { id: "cwq6", question: "Red iron turning greenish or bluish indicates:", options: ["Oxidation", "Carbonation", "Reduction", "Hydration"], correct: 2 },
          { id: "cwq7", question: "Which mineral is NOT typically dissolved by solution weathering?", options: ["Halite (NaCl)", "Gypsum (CaSO₄)", "Calcite (CaCO₃)", "Quartz (SiO₂)"], correct: 3 },
          { id: "cwq8", question: "Reduction conditions typically exist:", options: ["On mountain peaks", "In desert environments", "Below the water table in waterlogged ground", "In volcanic regions"], correct: 2 },
        ],
      },
      {
        id: "biological-weathering",
        name: "Biological Weathering",
        flashcards: [
          { id: "bw1", front: "What is Biological Weathering?", back: "The weakening and subsequent disintegration of rock by plants, animals and microbes. It works in combination with physical and chemical weathering but is distinct because organisms are directly involved." },
          { id: "bw2", front: "In what two ways can Biological Weathering occur?", back: "1. Physical stress — penetration of plant roots, physical impact of animal hooves, etc.\n2. Chemical changes — action of worms, lichen, etc." },
          { id: "bw3", front: "How do burrowing organisms contribute to weathering?", back: "Organisms like earthworms and termites burrow and wedge into rock, exposing new surfaces to chemical attack and assisting in the penetration of moisture and air." },
          { id: "bw4", front: "How do ploughing and cultivation contribute to weathering?", back: "They help in mixing soil and creating new contacts between air, water and minerals in the earth materials." },
          { id: "bw5", front: "How does decaying plant and animal matter contribute to weathering?", back: "It helps in the production of humic, carbonic and other acids which enhance decay and solubility of some elements." },
        ],
        quizzes: [
          { id: "bwq1", question: "Biological weathering is distinct from other types because:", options: ["It only occurs in tropical regions", "Organisms are directly involved", "It doesn't involve chemical changes", "It only affects sedimentary rocks"], correct: 1 },
          { id: "bwq2", question: "Which organisms help expose new rock surfaces through burrowing?", options: ["Fish and amphibians", "Earthworms and termites", "Birds and mammals", "Fungi only"], correct: 1 },
          { id: "bwq3", question: "Decaying organic matter produces acids that:", options: ["Harden the rock surface", "Enhance decay and solubility of elements", "Create volcanic activity", "Reduce erosion"], correct: 1 },
          { id: "bwq4", question: "Plant roots causing rock disintegration is an example of:", options: ["Chemical weathering only", "Physical stress in biological weathering", "Erosion", "Deposition"], correct: 1 },
        ],
      },
      {
        id: "erosion-transport-deposition",
        name: "Erosion, Transportation & Deposition",
        flashcards: [
          { id: "etd1", front: "What is Erosion?", back: "The removal of weathered material by agents like water, wind, glaciers and sea waves. The eroded material is transported from one place to another." },
          { id: "etd2", front: "What is Transportation in the context of exogenic processes?", back: "The eroded materials are transported by agents of erosion such as rivers, glaciers, wind and ocean currents. The transportation distance and sorting of material depend on the energy of the transporting agent." },
          { id: "etd3", front: "What is Deposition?", back: "Occurs when the transporting agent loses its energy and deposits the eroded material. This can lead to the formation of various landforms like floodplains, deltas, sand dunes and moraines." },
          { id: "etd4", front: "Name the main agents of erosion.", back: "Water, Wind, Glaciers and Sea Waves." },
          { id: "etd5", front: "What landforms are formed by deposition?", back: "Floodplains, Deltas, Sand Dunes and Moraines." },
        ],
        quizzes: [
          { id: "etdq1", question: "Erosion involves:", options: ["Breaking down rocks in place", "Removal and transport of weathered material", "Only chemical reactions", "Formation of new minerals"], correct: 1 },
          { id: "etdq2", question: "Transportation distance and sorting depend on:", options: ["Type of rock", "Energy of the transporting agent", "Chemical composition of sediment", "Time of year"], correct: 1 },
          { id: "etdq3", question: "Deposition occurs when:", options: ["Wind speed increases", "The transporting agent gains energy", "The transporting agent loses energy", "Weathering accelerates"], correct: 2 },
          { id: "etdq4", question: "Which of the following is a depositional landform?", options: ["V-shaped valley", "Gorge", "Moraine", "Waterfall"], correct: 2 },
          { id: "etdq5", question: "Which is NOT an agent of erosion?", options: ["Rivers", "Glaciers", "Sunlight", "Wind"], correct: 2 },
        ],
      },
    ],
  },
];

export default topics;

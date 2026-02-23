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
    ],
  },
];

export default topics;

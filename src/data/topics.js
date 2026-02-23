// Sample starter data - you'll provide real content via images/text
const topics = [
  {
    id: "geomorphology",
    name: "Geomorphology",
    subtopics: [
      {
        id: "geomorphology-landforms",
        name: "Major Landforms",
        flashcards: [
          { id: "fc1", front: "What are the three major types of landforms?", back: "Mountains, Plains, and Plateaus" },
          { id: "fc2", front: "What is a Peninsula?", back: "A landform surrounded by water on three sides. Example: Deccan Peninsula of India." },
          { id: "fc3", front: "What is an Isthmus?", back: "A narrow strip of land connecting two larger landmasses. Example: Isthmus of Panama." },
        ],
        quizzes: [
          {
            id: "q1",
            question: "Which of the following is NOT a type of mountain?",
            options: ["Fold Mountain", "Block Mountain", "Shield Mountain", "Volcanic Mountain"],
            correct: 2,
          },
          {
            id: "q2",
            question: "The Deccan Plateau is an example of:",
            options: ["Intermontane Plateau", "Piedmont Plateau", "Lava Plateau", "Continental Plateau"],
            correct: 2,
          },
        ],
      },
      {
        id: "geomorphology-weathering",
        name: "Weathering",
        flashcards: [
          { id: "fc4", front: "What is Weathering?", back: "The breaking down of rocks in situ (in place) by physical, chemical, or biological processes." },
          { id: "fc5", front: "What is Exfoliation?", back: "A type of physical weathering where curved sheets of rock peel off due to temperature changes causing expansion and contraction." },
          { id: "fc6", front: "Name the 3 types of weathering.", back: "1. Physical (Mechanical) Weathering\n2. Chemical Weathering\n3. Biological Weathering" },
        ],
        quizzes: [
          {
            id: "q3",
            question: "Exfoliation is a process of:",
            options: ["Chemical weathering", "Physical weathering", "Biological weathering", "Erosion"],
            correct: 1,
          },
          {
            id: "q4",
            question: "Which of the following is an example of chemical weathering?",
            options: ["Frost wedging", "Oxidation", "Root wedging", "Exfoliation"],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "fluvial-landforms",
    name: "Fluvial Landforms",
    subtopics: [
      {
        id: "fluvial-erosional",
        name: "Erosional Landforms",
        flashcards: [
          { id: "fc7", front: "What is a V-shaped Valley?", back: "A valley formed by river erosion in its upper course, shaped like the letter V due to vertical erosion being dominant." },
          { id: "fc8", front: "What are Meanders?", back: "S-shaped curves or bends in the course of a river, formed due to lateral erosion in the middle and lower course." },
          { id: "fc9", front: "What is a Gorge?", back: "A deep, narrow valley with steep, almost vertical sides, formed by river cutting through hard rock." },
        ],
        quizzes: [
          {
            id: "q5",
            question: "V-shaped valleys are typically found in which course of a river?",
            options: ["Lower course", "Middle course", "Upper course", "Delta region"],
            correct: 2,
          },
        ],
      },
      {
        id: "fluvial-depositional",
        name: "Depositional Landforms",
        flashcards: [
          { id: "fc10", front: "What is a Delta?", back: "A triangular-shaped landform at the mouth of a river, formed by deposition of sediments carried by the river." },
          { id: "fc11", front: "What is a Floodplain?", back: "A flat area of land adjacent to a river, formed by repeated flooding and deposition of alluvium." },
          { id: "fc12", front: "What is an Alluvial Fan?", back: "A fan-shaped deposit of sediment formed where a stream emerges from a narrow valley onto a plain." },
        ],
        quizzes: [
          {
            id: "q6",
            question: "The Sundarbans Delta is formed by which river system?",
            options: ["Indus", "Godavari", "Ganga-Brahmaputra", "Krishna"],
            correct: 2,
          },
        ],
      },
    ],
  },
];

export default topics;

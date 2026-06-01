/**
 * ============================================================
 *  REPORT COMMENT GENERATOR — DATA FILE
 * ============================================================
 *
 *  HOW TO EDIT THIS FILE
 *  ─────────────────────
 *  Structure overview:
 *
 *    checkboxOptions = {
 *      "Subject Name": {                        ← add new subjects here
 *        "Strand / Category Name": {            ← add new strands inside a subject
 *          Strengths: [                         ← list of strength comment strings
 *            "comment one",
 *            "comment two",
 *          ],
 *          Goals: [                             ← list of goal comment strings
 *            "comment one",
 *          ],
 *        },
 *      },
 *    };
 *
 *  TIPS
 *  ────
 *  • To ADD a new subject:   copy an existing subject block and rename it.
 *    Also add the subject name to the SUBJECT_ORDER array at the bottom.
 *
 *  • To ADD a new strand:    inside the subject, add a new object key with
 *    Strengths: [] and Goals: [] arrays.
 *
 *  • To ADD a comment:       add a new string inside the Strengths or Goals
 *    array. Make sure each string ends with a comma EXCEPT the very last one.
 *
 *  • To REMOVE a comment:    delete its line (including the trailing comma).
 *
 *  • To DISABLE a comment temporarily: put // in front of the line.
 *
 *  • Prefix rules (stripped automatically when generating output):
 *      "A - ", "B - ", "C - ", "D - ", "EXTENSION - "
 *
 *  • Leave Goals: [] empty if there are no goal comments for that strand.
 * ============================================================
 */

// ─── SUBJECT DISPLAY ORDER ───────────────────────────────────────────────────
// Controls the order subjects appear in the dropdown.
// Must match the keys used in checkboxOptions exactly.
const SUBJECT_ORDER = [
  "English",
  "Maths",
  "SharingthePlanet",
  "WhoWeAre",
  "HWOO",
];

// ─── COMMENT DATA ────────────────────────────────────────────────────────────
const checkboxOptions = {

  // ══════════════════════════════════════════════════════════════════════════
  //  ENGLISH
  // ══════════════════════════════════════════════════════════════════════════
  English: {

    "Oral Language & Communication": {
      Strengths: [
        "use voice, volume, tone and pace to deliver well planned spoken presentations",
        "deliver engaging and well-planned spoken presentations by manipulating tone, volume, pitch and pace to influence an audience",
        "use researched content and select multimodal elements to deliver engaging spoken presentations",
        "sustain a point of view throughout a discussion, drawing on sources to provide justification",
        "analyse and evaluate the views and arguments of others by clarifying and questioning differing opinions.",
        "rehearse and deliver speeches with good pace, volume and eye-contact",
        "communicate with confidence during class discussions and presentations",
        "communicate for a variety of audiences and purposes using eye-contact",
        "contribute profitably to all class discussions with outstanding vocabulary skills and general knowledge",
        "maintain eye-contact when speaking and listening",
        "speak clearly and confidently in a variety of situations to an audience of peers",
        "use effective communication strategies when giving presentations in formal settings to engage the audience, such as eye-contact, body language, clarity and variation of tone",
        "use a formal style when speaking that is appropriate to the audience",
        "incorporate a clear message which is articulated throughout a presentation",
        "plan, rehearse and deliver presentations",
        "speak with confidence and demonstrate familiarity with her content",
        "speak with confidence during impromptu tasks by remaining on topic and expressing her thoughts clearly",
        "use set criteria and feedback to independently plan, rehearse and deliver presentations",
        "participate regularly in discussions, clarifying ideas, developing arguments, and sharing information, experiences and opinions",
        "participate in and contribute to discussions, by listening to other responders, evaluating and sharing information",
        "plan and present an informative speech on a migrant story",
        "prepare and present a speech on a migrant story with good pace and volume",
        "plan, rehearse and deliver presentations with increasing confidence",
        "plan, rehearse and deliver speeches with excellent pace, volume and eye-contact",
        "contribute profitably to class discussions with outstanding general knowledge",
      ],
      Goals: [
        "support, encourage and build upon the contributions of others during class discussions",
        "experiment with ways to strengthen and refine spoken texts to entertain, inform, persuade or inspire the audience",
        "evaluate the arguments of others by clarifying and questioning viewpoints",
        "draw on evidence from a variety of sources to justify a point of view",
        "participate more confidently in class discussion by sharing her thoughts and ideas",
        "contribute more often to class discussions",
        "listen carefully to instructions given by the teacher",
        "speak with confidence and expression when sharing in class discussions and presenting to the class",
      ],
    },

    Vocabulary: {
      Strengths: [
        "select and incorporate content specific vocabulary to enhance ideas",
        "demonstrate how ideas and points of view can be expressed through objective and subjective vocabulary",
        "demonstrate how select use of objective and subjective vocabulary can engage and influence an audience",
        "demonstrate how vocabulary choices can influence and express meaning, feeling and opinion",
        "experiment with diverse types of sentences to build tension and add meaning",
        "select more challenging language features, literary devices and grammatical features to engage and influence an audience",
        "use discipline-specific terminology to provide accurate and explicit information when writing",
        "identify newly encountered words from interactions and wide reading, and use them in writing, discussions and presentations",
        "identify and use words that convey informative and objective meanings in texts",
        "identify and use words that convey subjective, emotive and persuasive meanings in texts",
        "use metalanguage when discussing language features encountered in texts",
        "extend knowledge of literal and non-literal word meanings through an idiom or metaphor",
        "describe multiple meanings of words, including their metaphorical uses",
        "evaluate the effectiveness of modal words used in texts to intensify or soften emotional responses",
        "identify a range of Tier 1, 2 and 3 vocabulary in an informative text and identify meanings",
      ],
      Goals: [
        "identify newly encountered words from interactions and wide reading, and use them in writing, discussions and presentations",
        "identify and use words that convey informative and objective meanings in texts",
        "identify and use words that convey subjective, emotive and persuasive meanings in texts",
        "use metalanguage when discussing language features encountered in texts",
        "extend knowledge of literal and non-literal word meanings through an idiom or metaphor",
        "describe multiple meanings of words, including their metaphorical uses",
        "evaluate the effectiveness of modal words used in texts to intensify or soften emotional responses",
      ],
    },

    "Reading Comprehension": {
      Strengths: [
        "analyse and evaluate the way that persuasive texts are constructed to achieve their purpose",
        "identify and describe the persuasive devices used to influence the audience",
        "identify clauses in sentences and recognise how writers use them in innovative ways to add extra detail or for emphasis",
        "understand how texts vary in purpose, structure and content, depending upon their intended audience",
        "compare texts describing migrant stories that present content in diverse ways",
        "recognise how grammatical features help to build meaning in texts",
        "recognise how aspects of personal perspective can influence responses to texts",
        "identify themes of a narrative text through the recurring ideas and important moments in the plot",
        "determine importance when reading to identify key information or to locate facts needed for research purposes",
        "summarise key information from books and online texts to support research",
        "adjust her reading rate to suit the purpose for reading and the complexity of the text",
        "select texts from print or digital sources to gather and organise research on a topic",
        "analyse how the integration of persuasive, informative and/or narrative structures within a text can enhance effect",
        "compare purposes for different texts and consider why authors and illustrators have structured texts in particular ways",
        "use morphology and etymology to work out the meaning of unfamiliar words",
        "explain how modality can have subtle impacts on the meanings of words and contribute to deeper understanding when reading",
        "understand that sentence openers signal what the sentence will be about, and that the rest of the sentence can provide new information",
        "compare and evaluate subjective and objective language to identify bias",
        "monitor and repair reading when meaning breaks down",
        "monitor her reading and take steps to correct misunderstandings when the meaning becomes unclear",
        "ask questions to clarify thinking and to provide reasons or evidence",
        "select, compare and reflect on texts read for personal interest",
        "analyse use of multimodal features to enhance meaning within texts",
        "explain how language evokes responses when reading",
        "recognise that personal narratives contain more subjective language, but factual accounts of events contain more objective language",
        "analyse how language, background and vocabulary knowledge and inferencing are used together to effectively build and adjust a mental model prior to and during reading",
        "read aloud with expression that reflects the author's purpose and meaning",
        "respond to themes and issues presented in texts and justify interpretations",
        "write detailed and accurate responses to increasingly complex comprehension questions",
        "interpret and analyse characters, events and situations in texts",
        "produce some insightful reading responses with relevant supporting evidence from texts",
        "make connections between texts read and identify common themes",
        "write insightful reading responses with relevant supporting evidence from texts",
        "read increasingly complex non-fiction texts",
      ],
      Goals: [
        "identify and describe the persuasive devices used to influence an audience",
        "identify clauses in sentences and recognise how writers use them in innovative ways to add extra detail or for emphasis",
        "understand how texts vary in purpose, structure and content, depending upon their intended audience",
        "compare texts describing migrant stories that present content in diverse ways",
        "recognise how grammatical features help to build meaning in texts",
        "explain how sequences of images in a picture book affect a reader's interpretation of the story",
        "recognise how aspects of personal perspective can influence responses to texts",
        "identify themes of a narrative text through the recurring ideas and important moments in the plot",
        "determine importance when reading to identify key information or to locate facts needed for research purposes",
        "summarise key information from books and online texts to support research",
        "adjust her reading rate to suit the purpose for reading and the complexity of the text",
        "select texts from print or digital sources to gather and organise research on a topic",
        "analyse how the integration of persuasive, informative and/or narrative structures within a text can enhance effect",
        "compare purposes for different texts and consider why authors and illustrators have structured texts in particular ways",
        "use morphology and etymology to work out the meaning of unfamiliar words",
        "compare and evaluate subjective and objective language to identify bias",
        "monitor and repair reading when meaning breaks down",
        "monitor her reading and take steps to correct misunderstandings when the meaning becomes unclear",
        "ask questions to clarify thinking and to provide reasons or evidence",
        "select, compare and reflect on texts read for personal interest",
        "analyse use of multimodal features to enhance meaning within texts",
        "explain how language evokes responses when reading",
        "recognise that personal narratives often use subjective language, while factual accounts of events typically use objective language",
        "read more widely, including non-fiction texts to broaden knowledge",
        "add detail to written comprehension questions independently",
      ],
    },

    "Creating Written Texts": {
      Strengths: [
        "use figurative language, character development, events and settings to compose texts that create intrigue and interest",
        "apply descriptive writing techniques to develop and extend ideas",
        "use imagery, similes, metaphors and personification to produce imaginative texts",
        "apply descriptive and evocative writing techniques to produce imaginative poems and original short stories",
        "apply expressive and evocative writing techniques and suitable language features to produce well written imaginative and informative texts",
        "publish texts using a range of word processing programs, selecting specific functions to enhance and add meaning",
        "use expressive and evocative writing techniques and suitable language features to produce well written imaginative, informative and persuasive text",
        "compose texts that effectively utilise persuasive devices, explaining, elaborating and strengthening their position",
        "use evidence and research to expand upon information and concepts and add authority to informative text writing",
        "use discipline-specific terminology to provide accurate and explicit information when writing",
        "produce imaginative and informative texts using text structure and language features appropriate to the audience and purpose",
        "include a range of persuasive devices when writing persuasive texts to help convince her reader",
        "use key elements of planning to guide the writing process",
        "select appropriate persuasive language, including modality when composing persuasive texts",
        "produce well-structured informative texts using paragraphs and topic sentences to organise ideas",
        "use simple punctuation to clarify meaning",
        "explore and analyse the effectiveness of persuasive texts by identifying the persuasive devices used and explaining how they work to influence the audience",
        "use the key elements of planning, composing and publishing to meet the demands of audience, purpose and language",
        "compose texts that include consistent and effective use of persuasive devices",
        "compose multimodal and digital texts designed to persuade the audience to respond to her selected issue",
        "use the PEEL structure to construct paragraphs effectively",
        "compose informative and discursive texts that effectively utilise text structure and language features to achieve their purpose",
        "use connectives to allow her ideas to flow between paragraphs and develop a cohesive text",
        "write with a range of simple, compound and complex sentences, using clauses",
        "structure paragraphs with a topic sentence, explanation, examples and links to aid the understanding of her reader",
        "use topic sentences to begin paragraphs",
        "use paragraphs to separate ideas when writing to inform/persuade her audience",
        "choose formats with appropriate text structures, features and language to persuade a target audience",
        "combine personal and objective arguments for persuasive effect",
        "present arguments from one or multiple viewpoints to persuade target audiences",
        "EXTENSION - write persuasive texts that include high modality and emotive language",
        "EXTENSION - create sophisticated poetry by using figurative language to create effective images",
        "EXTENSION - bring an extensive vocabulary and background knowledge to new reading tasks responding to questions with elaboration and detail",
        "EXTENSION - use sophisticated, rich and evocative descriptive language to elicit an emotive response from the audience",
        "EXTENSION - draft persuasive texts that include high modality and emotive language",
        "EXTENSION - create effective poetry by using figurative language to create effective images",
        "EXTENSION - create creative tasks with a thoughtful and reflective approach",
        "EXTENSION - write a very good historical report on Gough Whitlam, showcasing well developed research skills",
        "EXTENSION - create an outstanding autobiography task",
      ],
      Goals: [
        "utilise a range of sentence types to elaborate and extend writing",
        "experiment with the use of imagery and figurative language in writing",
        "apply sentence structures to increase detail and effect",
        "include a range of persuasive devices when writing persuasive texts to help convince the reader",
        "organise paragraphs with topic sentences, examples and linking words to enhance the coherence of her writing",
        "edit for meaning and clarity to improve writing",
        "use the PEEL structure when writing paragraphs",
        "experiment with language features and sentence structures to engage readers",
        "apply descriptive writing techniques to improve creative texts",
        "edit and proofread writing to improve coherence, meaning and sentence structure",
        "incorporate relevant evidence and examples to support ideas",
        "develop a clear and consistent position in persuasive texts",
        "use more complex sentence structures to create interest and variety",
        "plan and write imaginative texts using expressive language and figurative devices",
      ],
    },

    Spelling: {
      Strengths: [
        "spell most common words accurately",
        "apply knowledge of spelling patterns to spell unfamiliar words",
        "use a range of spelling strategies when encountering new words",
        "recognise common prefixes and suffixes and understand their meaning",
        "apply spelling rules to regular and irregular words",
        "use knowledge of morphology to spell complex words",
        "use dictionaries and other resources to check spelling",
        "spell high-frequency words and words with common spelling patterns correctly",
        "proofread written work for spelling errors",
        "correctly spell words with common prefixes and suffixes",
      ],
      Goals: [
        "continue to develop spelling accuracy for high-frequency and commonly used words",
        "apply spelling strategies consistently when encountering unfamiliar words",
        "expand knowledge of prefixes and suffixes to improve spelling",
        "improve proofreading skills to identify and correct spelling errors",
        "use dictionaries and resources independently to verify spelling",
        "practice spelling multisyllabic words with irregular patterns",
      ],
    },

    "Handwriting & Digital Transcription": {
      Strengths: [
        "produce legible and fluent handwriting",
        "maintain consistent letter size and spacing",
        "use appropriate letter formation and joins",
        "write with good posture and pencil grip",
        "use handwriting to produce neat and presentable work",
        "adapt handwriting style for different purposes",
        "demonstrate control and accuracy in handwriting",
        "write at a sufficient speed to complete tasks efficiently",
      ],
      Goals: [
        "improve handwriting speed without compromising legibility",
        "maintain consistent spacing between words and letters",
        "practice letter joins to enhance fluency",
        "develop a comfortable and efficient pencil grip",
        "apply handwriting skills in longer writing tasks",
        "self-monitor handwriting for neatness and consistency",
      ],
    },

    Editing: {
      Strengths: [
        "proofread and edit texts for spelling, grammar and punctuation errors",
        "make revisions to improve clarity and coherence",
        "apply feedback to refine writing",
        "use checklists to review written work",
        "edit texts to enhance style and tone appropriate to audience and purpose",
        "identify and correct errors independently",
        "demonstrate ability to improve sentence structure during editing",
        "evaluate effectiveness of writing and make improvements",
      ],
      Goals: [
        "develop strategies to identify errors during proofreading",
        "apply editing skills independently with minimal support",
        "enhance use of grammar and punctuation during editing",
        "focus on improving clarity and coherence in writing revisions",
        "seek and incorporate feedback to improve writing quality",
        "practice editing longer and more complex texts",
      ],
    },

    "Understanding & Responding to Literature": {
      Strengths: [
        "interpret and analyse characters, events and situations in texts",
        "produce some insightful reading responses with relevant supporting evidence from texts",
        "make connections between texts read and identify common themes",
        "write accurate responses to increasingly complex comprehension questions",
        "read texts for specific purposes and apply appropriate comprehension strategies to build meaning",
        "respond to themes and issues presented in texts and justify interpretations",
        "EXTENSION - share astute observations and can clearly articulate her understanding of themes and characters in our novel study",
        "EXTENSION - share detailed observations and clearly articulates her understanding of themes and characters in our novel study",
        "EXTENSION - answer literal and interpretive questions regarding the novel study using quotes to support her responses",
        "EXTENSION - contribute enthusiastically to discussions sharing perceptive and well-expressed ideas",
        "EXTENSION - write detailed, logical and thoughtfully connected responses to literary challenges",
        "EXTENSION - write detailed, perceptive and elaborated responses to literary questions",
        "EXTENSION - collaborate effectively with peers",
        "EXTENSION - provide perceptive, thought-provoking literary responses that reveal a thorough understanding of characters and themes",
      ],
      Goals: [
        "add detail to written comprehension questions independently",
        "utilise text evidence when responding to comprehension questions",
        "EXTENSION - continue to read a wide variety of rich literature to improve vocabulary, plot and structure of texts",
        "EXTENSION - proofread to ensure texts are carefully edited and have met all specified criteria",
        "EXTENSION - display an increased willingness to contribute valuable insights during class discussion",
        "EXTENSION - ensure the plots of creative texts progress interestingly and that endings are meaningful",
        "EXTENSION - carefully proofread and refine work to ensure accuracy",
      ],
    },

  }, // end English


  // ══════════════════════════════════════════════════════════════════════════
  //  MATHS
  // ══════════════════════════════════════════════════════════════════════════
  Maths: {

    "NA - Represents Number": {
      Strengths: [
        "recognise the location of negative whole numbers in relation to zero and place them on a number line",
        "use the term integers to describe positive and negative whole numbers and zero",
        "interpret integers in everyday contexts",
        "recognise that negative whole numbers can result from subtraction",
        "recognise that the symbol % means percent and 100% is the whole amount",
        "represent common percentages of quantities and lengths as fractions and decimals",
        "recognise that 10% is one-tenth of 100% and using this to find 10% of a quantity",
        "equate 10% to dividing by 10, 25% to finding a quarter by dividing by 4, and 50% to finding half",
        "EXTENSION - identify and order integers to solve problems",
        "EXTENSION - represent and compare fractions, decimals and percentages of any size",
        "EXTENSION - round decimals to a given number of decimal places",
      ],
      Goals: [],
    },

    "NA - Additive Relations": {
      Strengths: [
        "solve multistep word problems, including problems that require more than one operation",
        "compare, evaluate and communicate strategies used to solve addition and subtraction problems",
        "model the addition and subtraction of decimals up to three decimal places using appropriate representations",
        "solve word problems involving the addition and subtraction of decimals up to three decimal places",
        "justify why the strategy used to solve addition and subtraction word problems is appropriate",
        "EXTENSION - use all four operations with whole numbers, fractions and decimals to solve multistep problems",
      ],
      Goals: [],
    },

    "NA - Multiplicative Relations": {
      Strengths: [
        "select and use efficient strategies to multiply whole numbers of up to four digits by one- and two-digit numbers",
        "solve word problems involving rates using multiplication and division",
        "determine why different division questions have the same answer",
        "complete number sentences that involve more than one operation by calculating missing numbers",
        "identify and use inverse operations to assist with the solution of number sentences",
        "use a given geometric pattern involving multiples to create a table of values",
        "describe a pattern formed by multiples in words, in terms of multiplication rather than addition",
        "determine a rule describing the relationship between the bottom number and the top number in a table",
        "recognise the need to agree on the order in which to perform operations",
        "use grouping symbols in number sentences to indicate operations that must be performed first",
        "investigate the order of operations using real life contexts",
        "solve problems involving grouping symbols",
        "EXTENSION - use all four operations with whole numbers, fractions and decimals to solve multistep problems",
        "EXTENSION - apply the order of operations to evaluate expressions",
      ],
      Goals: [],
    },

    "NA - Representing Quantity Fractions": {
      Strengths: [
        "compare and order fractions with denominators of 2, 3, 4, 5, 6, 8 and 10",
        "EXTENSION - examine methods of generating equivalent fractions",
        "EXTENSION - compare and order fractions with different denominators",
      ],
      Goals: [],
    },

    "MS - Geometric Measure": {
      Strengths: [
        "locate and describe points on a coordinate plane",
        "select and use the appropriate unit and device to measure lengths and distances including perimeters",
        "measure and construct angles and identify the relationships between angles on a straight line and angles at a point",
        "recognise right angles, angles on a straight line and angles at a point embedded in diagrams",
        "identify the vertex and arms of angles formed by intersecting lines",
        "identify angle types formed by the intersection of straight lines, including right angles (90°), angles on a straight line (add to 180°) and angles at a point that form an angle of revolution (add to 360°)",
        "recognise that perpendicular lines intersect at right angles (90°)",
        "investigate adjacent angles that form a right angle and establish that they add to 90°",
        "investigate adjacent angles on a straight line and establish that they add to 180°",
        "investigate angles at a point and establish that they form an angle of revolution and add to 360°",
        "EXTENSION - convert between metric units for measuring length",
        "EXTENSION - calculate the perimeter of various quadrilaterals and composite figures by finding missing sides",
        "EXTENSION - apply geometrical reasoning and knowledge of angle relationships to find unknown angles",
      ],
      Goals: [],
    },

    "MS - 2D Spatial Structure": {
      Strengths: [
        "investigate and classify two-dimensional shapes, including triangles and quadrilaterals based on their properties",
        "EXTENSION - describe and compare the properties of various quadrilaterals and triangles in detail",
      ],
      Goals: [],
    },

    "MS - 3D Spatial Structure": {
      Strengths: [
        "visualise, sketch and construct three-dimensional objects, including prisms and pyramids, making connections to two-dimensional representations",
        "select and use the appropriate unit to estimate, measure and calculate volumes and capacities",
      ],
      Goals: [],
    },

    "MS - Non-Spatial Measure": {
      Strengths: [
        "measure and compare duration, using 12- and 24-hour time and am and pm notation",
        "EXTENSION - interpret timetables and calculate durations to solve real life problems involving time",
      ],
      Goals: [],
    },

    "SP - Data": {
      Strengths: [
        "interpret data displays, including timelines and line graphs",
        "construct graphs using many-to-one scales",
        "EXTENSION - calculate and describe the mean, median, mode and range of a dataset",
      ],
      Goals: [],
    },

    "SP - Chance": {
      Strengths: [
        "compare observed frequencies with expected frequencies when conducting probability experiments",
        "use the term 'frequency' to describe the number of times a particular outcome occurs in a chance experiment",
        "distinguish between the frequency of an outcome and the probability of an outcome in a chance experiment",
        "discuss the fairness of simple games involving chance",
        "explain why observed frequencies of outcomes in chance experiments may differ from expected frequencies",
        "describe probabilities using fractions, decimals and percentages",
        "assign probabilities to the likelihood of outcomes using knowledge of equivalent fractions, decimals and percentages",
        "determine and discuss the differences between the expected probabilities and the observed probabilities after both small and large numbers of trials",
        "explain what happens to the observed probabilities as the number of trials increases in a chance experiment",
        "describe the number of times a particular outcome occurs in a chance experiment using the term frequency",
        "distinguish between the frequency of an outcome (the number of times it occurs) and the probability of an outcome in a chance experiment",
        "compare the expected frequencies of outcomes of chance experiments with observed frequencies, including when the outcomes are not equally likely",
        "discuss the fairness of simple games involving chance and the idea of randomness",
        "explain why observed frequencies of outcomes in chance experiments may differ from expected frequencies, and how this relates to randomness",
      ],
      Goals: [],
    },

    "Approaches to Learning": {
      Strengths: [
        "verbalise mathematical strategies and use relevant terms to explain her thinking",
        "share mathematical thinking with greater confidence and clarity to support reasoning",
        "read assessment questions carefully to fully understand what is being asked before responding",
        "continue to show interest and enthusiasm for Mathematics",
        "check answers to written algorithms to avoid careless errors",
        "demonstrate a genuine interest and enthusiasm for Mathematics, approaching tasks with curiosity and a positive mindset",
        "check calculations when using written algorithms to minimise avoidable errors and improve accuracy",
        "articulate mathematical strategies and effectively use appropriate terminology to explain her thinking",
      ],
      Goals: [],
    },

  }, // end Maths


  // ══════════════════════════════════════════════════════════════════════════
  //  SHARING THE PLANET
  // ══════════════════════════════════════════════════════════════════════════
  SharingthePlanet: {

    "LOI 1 - Features and characteristics of landforms / Information Report and Landform Model": {
      Strengths: [
        "D - identify some features of commonly found landforms and describe the location and formation of a famous landform",
        "C - identify features of commonly found landforms and describe the location and formation of a famous landform in detail",
        "B - describe the physical features of diverse landforms and the particular characteristics of a famous landform, including location, formation and significance",
        "A - compare physical features of diverse landforms and thoroughly describe characteristics of a famous landform, including location, formation and cultural significance",
      ],
      Goals: [],
    },

    "LOI 2 - People influencing places and environments / Hybrid text": {
      Strengths: [
        "D - investigate the characteristics and causes of natural events that impact environments and communities",
        "C - investigate the characteristics and causes of geological, hydrological and meteorological events that impact environments and communities",
        "B - examine the characteristics and causes of geological, hydrological and meteorological events and how they impact environments and communities",
        "A - analyse the characteristics and causes of geological, hydrological and meteorological events and the effects on environments and communities",
      ],
      Goals: [],
    },

    "LOI 3 - Human responses to natural events / Poster": {
      Strengths: [
        "D - identify some personal and community responsibilities to prepare for and respond to natural events",
        "C - describe personal and community strategies and responsibilities to prepare for and respond to natural events",
        "B - explain personal and community management strategies and responsibilities to prepare for and respond to natural events in different locations",
        "A - compare and analyse global management strategies and responsibilities that help communities prepare for and respond to natural events",
      ],
      Goals: [],
    },

    Skills: {
      Strengths: [
        "use research skills to make decisions about the ethical use of information and technology",
        "use critical thinking skills to analyse and evaluate issues and ideas",
        "use communication skills and technology to gather and investigate information",
        "plan, create and revise written texts for informative purposes",
        "formulate appropriate research questions",
        "gather detailed research using a variety of sources and complete a bibliography",
        "use discussions, collected information and diagrams to generate new ideas and inquiries",
        "seek guidance when needed to understand scientific concepts",
        "locate, organise, analyse, evaluate and synthesise information from a variety of credible research sources",
        "evaluate critically and draw conclusions about new concepts",
        "interpret and gather relevant information when note taking",
        "seek help to understand complex scientific concepts",
        "use critical literacy skills to analyse and interpret information",
        "add detail to research to enhance understanding of scientific concepts",
        "reference credible research sources and paraphrase to create her own sentences",
        "locate and evaluate appropriate research sources",
        "add more detailed, scientific information to demonstrate a deeper understanding of natural events",
        "locate, organise, analyse, evaluate and synthesise information from a variety of trusted research sources",
      ],
      Goals: [],
    },

  }, // end SharingthePlanet


  // ══════════════════════════════════════════════════════════════════════════
  //  WHO WE ARE
  // ══════════════════════════════════════════════════════════════════════════
  WhoWeAre: {

    "Leadership/Friendship Comments": {
      Strengths: [
        "identify (all/some) the elements of effective leadership",
        "use (all/some) of the elements of effective leadership",
        "identify and use the elements of effective leadership",
        "identify all, and use some, of the elements of effective leadership",
        "identify and use some of the elements of effective leadership",
        "understand the different types of conflict and how to be assertive",
        "identify situations where conflict resolution needs to be undertaken",
        "use effective conflict resolution in friendships and leadership",
        "know and understand herself and what she will tolerate in friendships",
        "understand the importance of effective communication in friendships/conflict situations",
        "communicate effectively with others in conflict situations",
        "show empathy and effective communication in friendships/leadership",
      ],
      Goals: [],
    },

    "Things that I have directly taught them": {
      Strengths: [
        "understand that emotions sit on a circumplex model",
        "categorise emotions using a circumplex model",
        "identify a range of emotions and how they feel in the body",
        "identify high intensity and low intensity emotions and how they feel in the body",
        "recognise emotions in her body",
        "understand that emotions are our body telling us something so we can act on it",
        "create 'I feel' statements to identify her emotions during different activities",
        "identify the main parts of the brain related to our emotions",
        "describe an amygdala hijack and why it happens",
        "explain instances which may cause her to have an amygdala hijack",
        "classify issues on a catastrophe scale",
      ],
      Goals: [],
    },

    Buddies: {
      Strengths: [
        "plan clearly thought out, age appropriate lessons for her buddy that show a good understanding of the content taught",
        "break down her own learning to create an age appropriate lesson for her buddy",
        "use her learning about emotions to effectively create lessons for her buddy that are engaging",
      ],
      Goals: [
        "be ready and prepared on time for each buddy session",
        "write a detailed lesson plan for her buddy lesson",
        "reflect further on buddy lessons to plan for future activities",
        "reflect on her emotions after times of stress/pressure/worry",
        "identify her emotions in times of stress/pressure/worry to manage them",
      ],
    },

  }, // end WhoWeAre


  // ══════════════════════════════════════════════════════════════════════════
  //  HWOO (How We Organise Ourselves)
  // ══════════════════════════════════════════════════════════════════════════
  HWOO: {

    "LOI 1 - Indigenous timeline": {
      Strengths: [
        "D - understand how Australian society has changed throughout the twentieth century for First Nation peoples",
        "C - investigate how Australian society has changed throughout the twentieth century for First Nation peoples",
        "B - examine Australian human rights, past and present, and the effects on First Nation peoples",
        "A - examine and analyse, in depth, the historical events affecting First Nation peoples",
      ],
      Goals: [],
    },

    "LOI 2 - Country comparison": {
      Strengths: [
        "D - describe another government type and country with Australia and its democratic style of governing",
        "C - compare another government type and country with Australia and its democratic style of governing",
        "B - investigate the government of another country and compares with Australia and democracy",
        "A - inquire and explain another county and government type and compares it with Australia and democracy as a government type",
      ],
      Goals: [],
    },

    "LOI 3 - Migrant speech / presentation": {
      Strengths: [
        "D - explain a migrant's journey from one country to another",
        "C - show an understanding of a migrant's journey from one country to another explaining the emotional, physical and cultural impact",
        "B - present a migrant's journey from one country to another including an investigation into the emotional, physical and cultural impact on themselves and other generations",
        "A - demonstrate a migrant's journey from one country to another including primary and secondary sources that explain the emotional, physical and cultural impact on themselves and other generations linking it to other areas of the Unit of Inquiry",
      ],
      Goals: [],
    },

  }, // end HWOO

}; // end checkboxOptions

/**
 * ============================================================
 *  REPORT COMMENT GENERATOR — DATA FILE
 * ============================================================
 *
 *  HOW TO EDIT THIS FILE
 *  ─────────────────────
 *  Top-level structure:
 *
 *    SEMESTER_DATA = {
 *      "Semester 1": {                          ← semester key
 *        SUBJECT_ORDER: ["English", "Maths"],   ← controls dropdown order
 *        subjects: {
 *          "English": {                         ← subject key
 *            "Strand Name": {                   ← strand / category
 *              Strengths: [                     ← strength comment strings
 *                "comment one",
 *                "comment two",
 *              ],
 *              Goals: [                         ← goal comment strings
 *                "comment one",
 *              ],
 *            },
 *          },
 *        },
 *      },
 *      "Semester 2": { ... },
 *    };
 *
 *  NOTE — Semester 2 subjects only use Strengths arrays (no Goals split).
 *  You can add Goals arrays to any Semester 2 strand at any time.
 *
 *  TIPS
 *  ────
 *  • To ADD a new semester:  copy an existing semester block and rename it.
 *
 *  • To ADD a new subject:   copy an existing subject block and rename it.
 *    Also add the subject key to the semester's SUBJECT_ORDER array.
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

const SEMESTER_DATA = {
  // ══════════════════════════════════════════════════════════════════════════
  //  SEMESTER 1
  // ══════════════════════════════════════════════════════════════════════════
  "Semester 1": {
    SUBJECT_ORDER: ["English", "Maths", "SharingthePlanet", "WhoWeAre", "HWOO"],

    SUBJECT_DISPLAY_NAMES: {
      SharingthePlanet: "Sharing the Planet",
      WhoWeAre: "Who We Are",
      HWOO: "HWOO",
      English: "English",
      Maths: "Maths",
    },

    subjects: {
      // ──────────────────────────────────────────────────────────────────────
      //  ENGLISH — Semester 1
      // ──────────────────────────────────────────────────────────────────────
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
      }, // end English Sem 1

      // ──────────────────────────────────────────────────────────────────────
      //  MATHS — Semester 1
      // ──────────────────────────────────────────────────────────────────────
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
      }, // end Maths Sem 1

      // ──────────────────────────────────────────────────────────────────────
      //  SHARING THE PLANET — Semester 1
      // ──────────────────────────────────────────────────────────────────────
      SharingthePlanet: {
        "LOI 1 - Features and characteristics of landforms / Information Report and Landform Model":
          {
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

      // ──────────────────────────────────────────────────────────────────────
      //  WHO WE ARE — Semester 1
      // ──────────────────────────────────────────────────────────────────────
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
      }, // end WhoWeAre Sem 1

      // ──────────────────────────────────────────────────────────────────────
      //  HWOO — Semester 1
      // ──────────────────────────────────────────────────────────────────────
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
    }, // end Semester 1 subjects
  }, // end Semester 1

  // ══════════════════════════════════════════════════════════════════════════
  //  SEMESTER 2
  // ══════════════════════════════════════════════════════════════════════════
  "Semester 2": {
    SUBJECT_ORDER: [
      "English",
      "Maths",
      "HowtheWorldWorks",
      "WhoWeAre",
      "PYPExhibition",
      "WWAIPAT",
    ],

    SUBJECT_DISPLAY_NAMES: {
      English: "English",
      Maths: "Maths",
      HowtheWorldWorks: "How the World Works",
      WhoWeAre: "Who We Are",
      PYPExhibition: "PYP Exhibition",
      WWAIPAT: "WWAIPAT",
    },

    subjects: {
      // ──────────────────────────────────────────────────────────────────────
      //  ENGLISH — Semester 2
      // ──────────────────────────────────────────────────────────────────────
      English: {
        "Oral Language & Communication": {
          Strengths: [
            "participate in sustained discussions, through questioning, building on and evaluating shared information",
            "interact in a range of contexts and respond to key ideas and perspectives expressed by others",
            "use newly encountered vocabulary in writing, discussions and presentations",
            "respond to analytical and evaluative questions about literature",
            "apply interactive listening strategies by responding to and providing feedback to the speaker",
            "analyse key ideas and perspectives expressed by others through paraphrasing and note-taking",
            "respond to questions with elaboration and detail",
            "deliver presentations suited to purpose and audience",
            "experiment with volume, pace and intonation to enhance meaning when presenting and reciting and recognise the effects these have on audience understanding",
            "select and use a variety of sentence lengths to suit the purpose of planned spoken texts",
          ],
          Goals: [],
        },

        Vocabulary: {
          Strengths: [
            "identify newly encountered words from interactions and wide reading and use them in writing, discussions and presentations",
            "identify and use words that convey informative and objective meanings in texts",
            "identify and use words that convey subjective, emotive and persuasive meanings in text",
            "extend her understanding of both literal and non-literal word meanings by exploring idioms and metaphors in context",
            "apply knowledge of taught Tier 3 subject-specific morphemes and their meanings",
            "identify Aboriginal English words used in multimodal, spoken and written texts",
            "identify and use words derived from other languages, including Aboriginal and Torres Strait Islander Languages and know that the pronunciation and spelling of words may reflect their etymology",
            "describe multiple meanings of words, including their metaphorical uses",
            "evaluate the effectiveness of modal words used in texts to intensify or soften emotional responses",
            "analyse morphemic structures of Tier 2 and Tier 3 words to determine their meaning",
            "compare nuances and subtleties between synonyms to discern the most appropriate word for a given context",
          ],
          Goals: [],
        },

        "Reading Comprehension": {
          Strengths: [
            "use syllabification, morphemic knowledge and blending strategies to read unfamiliar words accurately",
            "identify and use words that convey subjective, emotive and persuasive meanings in texts",
            "compare purposes for different texts and consider why authors and illustrators structure them in particular ways",
            "recognise that personal narratives contain more subjective language, but factual accounts of events contain more objective language",
            "explain how modality can have subtle impacts on the meanings of words and contribute to deeper understanding when reading",
            "use language, knowledge, vocabulary and inferencing together to comprehend texts",
            "monitor and repair comprehension using pausing, self-correcting, re-reading and reading on",
            "explain how language evokes responses when reading",
            "evaluate the effectiveness of comprehension strategies used to support reading and interpretation of texts",
            "ask questions to clarify thinking, and to provide reasons or evidence",
            "synthesise summaries of multiple texts and share information with peers to generate, compare and contrast new conceptual understandings",
          ],
          Goals: [],
        },

        "Creating Written Texts": {
          Strengths: [
            "identify and use imagery and figurative language in imaginary texts",
            "experiment with characterisation and choose and control narrative voice across a text",
            "write informative texts with appropriate structure, paragraphs, features and technical language",
            "create factual and historical accounts that incorporate broader contextual information",
            "generate ideas to develop a statement of position and clear, logical lines of argument",
            "combine personal and objective arguments for persuasive effect",
            "use rhetorical device and modality to qualify or strengthen arguments",
            "experiment with figurative language for effect including simile, metaphor and hyperbole",
            "use connectives to build cohesion and develop paragraphs with a coherent transition of ideas across a text",
            "make choices about the use of declarative, exclamatory, interrogative and imperative sentences to suit text purpose and for meaning and effect",
            "write sentences with correct, vocabulary, grammar and punctuation",
            "use capital letters, commas, full stops and quotation marks consistently",
            "experiment with more complex punctuation to add meaning and clarity",
            "control modality related to probability, occurrence, obligation or inclination for precision",
            "select and use a range of synonyms in a longer text, for precision and to create variety for reader engagement",
            "create texts using digital technologies suited to a target audience and purpose, to support and enhance the development of ideas",
            "assess the reliability and authority of sources, including digital sources, when researching and acknowledging texts",
            "EXTENSION - use research to plan, draft and publish an outstanding presentation about the Second World War",
            "EXTENSION - include vivid, emotive imagery in imaginative texts",
            "EXTENSION - develop thoughtful and clearly written persuasive texts using appropriate devices",
            "EXTENSION - compose increasingly complex digital texts that have considered design, layout and graphics",
            "EXTENSION - use rich, evocative descriptive language and figurative techniques",
            "EXTENSION - craft imaginative and detailed texts that delight the reader with inventive language and striking turns of phrase",
            "EXTENSION - write descriptive, creative pieces that bring ideas to life through vivid imagery and playful or memorable phrasing",
            "EXTENSION - produce imaginative narratives rich in description, using expressive language and engaging turns of phrase to captivate the reader",
            "EXTENSION - develop inventive and descriptive writing that sparks the imagination through clever and evocative language",
            "EXTENSION - draft persuasive texts that include high modality and emotive language",
            "EXTENSION - employ imagery in a sophisticated manner in her imaginary and descriptive texts",
            "EXTENSION - structure persuasive texts effectively and use high modality, connectives and rhetorical questions",
            "EXTENSION - continue to read challenging literature for enjoyment over the coming holiday break",
            "EXTENSION - assess and critically evaluate the reliability of digital resources when researching literary topics",
            "EXTENSION - use complex punctuation and varied clauses to engage the reader and achieve an enhanced purpose",
            "EXTENSION - compose detailed, insightful, and clearly articulated responses to literary challenges, demonstrating perceptive analysis and a strong understanding of the text",
            "EXTENSION - enjoy the challenge of using a range of language devices to entertain or persuade an audience",
            "EXTENSION - proofread carefully to eliminate errors and to ensure that tenses remain consistent in texts",
            "EXTENSION - project her voice during discussions to ensure her valuable ideas can be more easily heard",
          ],
          Goals: [],
        },

        Spelling: {
          Strengths: [
            "proofread written texts to correct misspellings, making use of spelling reference tools where required",
            "apply spelling generalisations and strategies when writing in a range of contexts and justify spelling strategies used to spell unfamiliar words",
          ],
          Goals: [],
        },

        "Handwriting and Digital Transcription": {
          Strengths: [
            "sustain a legible, fluent and personal handwriting style across a text",
            "navigate the keyboard with accuracy when typing and use shortcut functions efficiently",
          ],
          Goals: [],
        },

        "Understanding and Responding to Literature": {
          Strengths: [
            "identify the ways different elements of a text contribute to character development and adapt these elements when creating texts",
            "recognise recurring and universal symbols and imagery in literature, describe their meanings and experiment with symbol and imagery when creating texts",
            "explore how perspective is influenced by personal, social and cultural contexts",
            "understand the authority given to objectivity versus subjectivity in arguments",
            "compare the reliability and validity of texts to make judgements about their authority",
            "EXTENSION - provide astute observations and clearly articulate her understanding of themes and characters in the novel being studied",
            "EXTENSION - contribute valuable comments to class discussions",
            "EXTENSION - create thoughtful, detailed and elaborated responses to literary questions",
            "EXTENSION - answer literal and interpretive questions about the novels using quotes to support responses",
            "EXTENSION - respond to literary challenges by writing detailed and elaborated points",
            "EXTENSION - craft thoughtful and well-articulated answers to literary challenges, showing depth of understanding and perceptive analysis",
            "EXTENSION - produce detailed and perceptive responses to literary tasks, clearly communicating insights and interpretations",
            "EXTENSION - write insightful, well-expressed answers to literary questions, demonstrating careful analysis and a strong grasp of the text",
            "EXTENSION - embrace the challenge of using diverse language techniques to captivate and persuade an audience",
            "EXTENSION - demonstrate enthusiasm for applying a range of language devices to entertain or influence readers or listeners",
            "EXTENSION - enjoy exploring different language strategies to create engaging and persuasive texts",
            "EXTENSION - contribute enthusiastically to discussions sharing perceptive and well-expressed ideas",
            "EXTENSION - continue to read challenging literature for enjoyment over the coming holiday break",
            "EXTENSION - assess and critically evaluate the reliability of digital resources when researching literary topics",
            "EXTENSION - demonstrate enthusiasm for experimenting with a variety of language devices to engage, entertain, or persuade an audience",
            "EXTENSION - proofread carefully to eliminate errors and to ensure that tenses remain consistent in texts",
            "EXTENSION - project her voice during discussions to ensure her valuable ideas can be more easily heard",
          ],
          Goals: [],
        },
      }, // end English Sem 2

      // ──────────────────────────────────────────────────────────────────────
      //  MATHS — Semester 2
      // ──────────────────────────────────────────────────────────────────────
      Maths: {
        "NA - Represents Numbers": {
          Strengths: [
            "recognise the location of negative whole numbers in relation to zero and place them on a number line",
            "use the term integers to describe positive and negative whole numbers and zero",
            "interpret integers in everyday contexts",
            "recognise that negative whole numbers can result from subtraction",
            "recognise that the symbol % means percent and 100% is the whole amount",
            "represent common percentages of quantities and lengths as fractions and decimals",
            "recognise that 10% is one-tenth of 100% and use this to find 10% of a quantity",
            "equate 10% to dividing by 10, 25% to finding a quarter by dividing by 4 and 50% to finding half",
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
            "justify why a strategy used to solve addition and subtraction word problems is appropriate",
            "EXTENSION - use all four operations with whole numbers, fractions and decimals to solve multistep problems",
          ],
          Goals: [],
        },

        "NA - Multiplicative Relations": {
          Strengths: [
            "select and use efficient strategies to multiply whole numbers of up to four digits by one- and two-digit numbers",
            "apply multiplication and division to solve real-world problems involving rates and unit relationships",
            "determine why different division questions have the same answer",
            "complete number sentences that involve more than one operation by calculating missing numbers",
            "identify and use inverse operations to assist with the solution to number sentences",
            "use a given geometric pattern involving multiples to create a table of values",
            "describe a pattern formed by multiples in words, in terms of multiplication rather than addition",
            "determine a rule describing the relationship between the bottom number and the top number in a table",
            "recognise the need to agree on the order in which to perform operations",
            "use grouping symbols in number sentences to indicate operations that must be performed first",
            "investigate the order of operations using real life contexts",
            "solve problems involving grouping symbols",
            "EXTENSION - use all four operations with whole numbers, fractions and decimals to solve multistep problems",
            "EXTENSION - apply the order of operations to evaluate expressions",
            "EXTENSION - use variables to represent unknown quantities and substitute values into algebraic expressions",
            "EXTENSION - apply logical reasoning to solve equations and explore how variables interact in different situations",
          ],
          Goals: [],
        },

        "NA - Representing Quantity Fractions": {
          Strengths: [
            "compare and order fractions with denominators of 2, 3, 4, 5, 6, 8 and 10",
            "apply understanding of fractions to calculate parts of whole quantities in real-world and mathematical problems",
            "add and subtract fractions with like denominators",
            "EXTENSION - examine methods of generating equivalent fractions",
            "EXTENSION - compare and order fractions with different denominators",
            "EXTENSION - apply the four operations to positive and negative numbers and use brackets correctly",
            "EXTENSION - describe the relationship between squares and square roots, cubes and cube roots",
            "EXTENSION - represent any quantity as a fraction, decimal or percentage of another",
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
            "find different ways to calculate the area of a composite L-shape figure",
            "show how to transform a parallelogram into a rectangle to find its area",
            "record, using words, a method for finding the area of any parallelogram",
            "investigate the area of a triangle by comparing it to the area of a parallelogram with the same base length and height",
            "establish the relationship between the area of a triangle and the area of a parallelogram formed by duplicating and rotating the triangle",
            "record, using words, a method for finding the area of any triangle",
            "EXTENSION - describe and compare the properties of various quadrilaterals and triangles in detail",
          ],
          Goals: [],
        },

        "MS - 3D Spatial Structure": {
          Strengths: [
            "visualise, sketch and construct three-dimensional objects, including prisms and pyramids, making connections to two-dimensional representations",
            "select and use the appropriate unit to estimate, measure and calculate volumes and capacities",
            "recognise the need for a formal unit larger than the cubic centimetre",
            "construct and use the cubic metre as a unit to measure larger volumes",
            "estimate and measure volumes in cubic metres",
            "describe the length, width and height of a rectangular prism as the dimensions of the prism",
            "describe arrangements of cubic-centimetre blocks in terms of layers",
            "establish the relationship between the number of cubes in one layer and the number of layers to find the volume of a rectangular prism",
            "construct rectangular prisms using cubic-centimetre blocks and determine the volumes",
            "explain that objects with the same volume may be different shapes",
            "record, using words, the method for finding the volumes of rectangular prisms",
            "recognise that rectangular prisms with the same volume may have different dimensions",
            "calculate volumes of rectangular prisms in cubic centimetres (cm³) and cubic metres (m³)",
          ],
          Goals: [],
        },

        "MS - Non-Spatial Measure": {
          Strengths: [
            "select and use the appropriate unit and device to measure mass",
            "determine the net mass of the contents of a container after measuring the gross mass of the container",
            "convert between kilograms and grams and between kilograms and tonnes",
            "explain and use the relationship between the size of a unit and the number of units needed to assist in determining whether multiplication or division is required when converting between units",
            "solve problems involving different units of mass",
            "relate the mass of one litre of water to one kilogram",
            "solve problems that involve converting between imperial and metric units of measurement",
            "solve problems that involve comparing the masses of various products and justify which is better value for money",
            "measure and compare duration, using 12- and 24-hour time and am and pm notation",
            "EXTENSION - interpret timetables and calculate durations to solve real life problems involving time",
            "EXTENSION - explain how to find unknown angles about a point and between parallel lines",
            "EXTENSION - calculate the area of complex composite shapes using appropriate formulas",
            "EXTENSION - use correct formulas to find the volume of prisms and pyramids using various measurement units",
            "EXTENSION - identify the relationship between the circumference and diameter of a circle to define π",
          ],
          Goals: [],
        },

        "SP - Data": {
          Strengths: [
            "interpret data displays, including timelines and line graphs",
            "construct graphs using many-to-one scales",
            "interpret side-by-side column graphs for 2 categorical variables",
            "interpret data on a timeline using the given scale",
            "interpret and compare different displays in terms of the shape of the distribution, including the range and the most frequent value (mode)",
            "interpret data representations found in digital media and in factual texts",
            "identify sources of possible bias in representations of data in the media",
            "identify misleading representations of data in the media",
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
            "explain what happens to the observed probabilities as the number of trials in a chance experiment increase",
            "describe the number of times a particular outcome occurs in a chance experiment using the term frequency",
            "distinguish between the frequency of an outcome (the number of times it occurs) and the probability of an outcome in a chance experiment",
            "compare the expected frequencies of outcomes of chance experiments with observed frequencies, including when the outcomes are not equally likely",
            "discuss the fairness of simple games involving chance and the idea of randomness",
            "explain why observed frequencies of outcomes in chance experiments may differ from expected frequencies and how this relates to randomness",
            "EXTENSION - express the theoretical probability of an event as likelihood of an outcome under fair conditions",
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

        "Working Mathematically": {
          Strengths: [
            "solve routine and non-routine problems by applying known solution methods",
            "develop logical reasoning to explain mathematical sequences, relationships and structures",
            "use mathematical language to communicate ideas and solutions, displaying strong reasoning and analytical skills",
            "justify the effectiveness and efficiency of a chosen solution process",
            "pose questions to clarify understanding when learning unfamiliar and complex mathematical concepts",
          ],
          Goals: [],
        },
      }, // end Maths Sem 2

      // ──────────────────────────────────────────────────────────────────────
      //  HOW THE WORLD WORKS — Semester 2
      // ──────────────────────────────────────────────────────────────────────
      HowtheWorldWorks: {
        "How the World Works": {
          Strengths: [
            "pose relevant, open-ended questions based around the PYP Key Concepts to inquire into indigenous inventions",
            "combine knowledge, conceptual understandings and skills to create a product to solve a real-life problem",
            "include additional details and depth to written work to display extensive thinking",
            "present an innovation 'Design Brief' that includes solid details and excellent use of scientific principles",
            "reflect on a design and its contribution to the world on a personal level, a community level and a global level",
            "distinguish between innovations and inventions",
            "investigate Indigenous inventions using effective research",
            "sort, synthesise and draw meaningful conclusions from research to communicate findings clearly and effectively",
            "gather and analyse data",
            "expand thinking to reflect on why a product is important on a global scale",
            "pose higher level thinking questions based around the PYP Key Concepts to inquire into indigenous inventions",
            "develop conceptual questions to inquire into the First Peoples' inventions",
            "identify the difference between inventions and innovations and provide examples",
            "use reliable sources to conduct research and correctly reference using a bibliography",
            "draw and label a diagram of a unique innovation and explain its purpose",
            "contributes meaningfully to class discussion",
            "collaborate with others to follow a design brief and to create a product with a specific purpose",
            "conduct scientific experiments investigating different forces",
            "apply inquiry skills and enhanced research techniques to explore and investigate historical Indigenous inventions",
            "record some technological details when writing a Design Brief to represent an invention",
            "display technological understanding by adding more detail to a scientific diagram when representing an invention",
            "formulate open-ended questions and use divergent questioning techniques to guide inquiry",
            "uses inquiry skills and research techniques to investigate past Indigenous inventions",
            "write a detailed Design Brief with solid reference to technology when presenting an invention",
          ],
          Goals: [],
        },
      }, // end HowtheWorldWorks

      // ──────────────────────────────────────────────────────────────────────
      //  WHO WE ARE — Semester 2
      // ──────────────────────────────────────────────────────────────────────
      WhoWeAre: {
        "Term 3": {
          Strengths: [
            "develop an awareness of what coping looks like, sounds like, and feels like for her in different situations",
            "identify and explain the physical signs she experiences in her body when she is not coping",
            "explain what not coping feels like for her",
            "identify when she feels she is not coping",
            "identify situations in which she feels she is not coping",
            "understand that adversity is a part of life",
            "explain the ABC (Adversity, Beliefs, Consequences) model and how it relates to coping",
            "explain what cognitive reframing is and how it helps people to cope and move forward",
            "give examples of different types of cognitive reframing (Growth Mindset, Power of YET, 3 Ps)",
            "use the 3 Ps (Permanent, Pervasive, Personal) to reflect on an adversity",
            "practise cognitive reframing through the 3 Ps (Permanent, Pervasive, Personal) to navigate challenges and move forward",
            "explain what the negativity bias is",
            "describe examples of how she can overcome the negativity bias",
            "describe the connection between cognitive reframing and the negativity bias",
          ],
          Goals: [],
        },

        "Term 4": {
          Strengths: [
            "understand the attention span for typical ages",
            "describe the concept of flow, explaining how being fully absorbed in an activity can enhance learning, creativity, and personal satisfaction",
            "explain what it feels like to be in a state of flow and how this focused, immersive experience supports productivity and well-being",
            "demonstrate an understanding of flow, recognising how being completely engaged in a task can lead to improved performance and enjoyment",
            "identify activities that promote a sense of flow",
            "use her understanding of attention span to plan strategies to help with focus",
          ],
          Goals: [],
        },

        Buddies: {
          Strengths: [
            "plan clearly thought out, age-appropriate lessons for her buddy that show a good understanding of the content taught",
            "break down her own learning to create an age-appropriate lesson for her buddy",
            "use her learning about cognitive reframing to effectively create lessons for her buddy that are engaging",
            "demonstrate readiness and punctuality for each buddy session",
            "write a detailed lesson plan for her buddy lesson",
            "recognise the signs of not coping and use cognitive reframing to shift her perspective and approach challenges constructively",
            "identify how it feels when she is not coping and practise cognitive reframing to move forward with resilience",
            "demonstrate awareness of what not coping feels like and employ cognitive reframing strategies to support emotional regulation and problem-solving",
            "engage in reflection on buddy lessons to guide her planning of upcoming activities",
            "reflect thoughtfully on buddy sessions to plan and improve future activities",
            "analyse experiences from buddy lessons to support planning for future activities",
            "apply the strategies taught for reframing, in moments of small adversities, with increasing consistency",
          ],
          Goals: [],
        },
      }, // end WhoWeAre Sem 2

      // ──────────────────────────────────────────────────────────────────────
      //  PYP EXHIBITION — Semester 2
      // ──────────────────────────────────────────────────────────────────────
      PYPExhibition: {
        Questions: {
          Strengths: [
            "develop different types of research questions for an independent inquiry with support",
            "develop the ability to formulate driving questions to guide her research and deepen her understanding of her Exhibition real-life issue",
            "develop varied questions linked to concepts to appropriately guide an inquiry",
            "formulate driving questions to guide her research and deepen her understanding of her Exhibition real-life issue",
            "generate applicable research questions linked to concepts to effectively frame an inquiry",
            "formulate thoughtful driving questions to guide her research and deepen her understanding of her Exhibition real-life issue, demonstrating clear focus and inquiry skills",
            "generate high level research questions linked to concepts to effectively frame each stage of an inquiry",
            "formulate insightful and probing driving questions that effectively guide her research and extend her understanding of her Exhibition real-life issue, demonstrating initiative, critical thinking, and analytical depth",
          ],
          Goals: [
            "formulate clear and effective driving questions to guide research and deepen her understanding of an issue",
          ],
        },

        Sources: {
          Strengths: [
            "locate sources to inform an inquiry and use guidance to consider reliability and authority",
            "investigate different perspectives regarding her real-life issue in the past, present and future with support",
            "locate relevant sources to inform an inquiry and use some techniques to consider reliability and authority",
            "investigate different perspectives regarding her real-life issue in the past, present and future",
            "evaluate data and information for reliability and bias",
            "compare varied sources for their relevance to an inquiry and use valid techniques to assess reliability and authority",
            "investigate different perspectives regarding her real-life issue in the past, present and future, demonstrating thoughtful analysis and a clear understanding of multiple viewpoints",
            "evaluate data and information for reliability and bias, demonstrating sound judgement and the ability to distinguish credible from less reliable sources",
            "evaluate various sources that inform an inquiry for relevance, reliability and authority, recognising stereotype and generalisation",
            "investigate and evaluate a range of perspectives on her real-life issue across past, present, and future contexts, demonstrating deep insight, critical thinking and the ability to draw meaningful connections",
            "evaluate data and information for reliability and bias, demonstrating sophisticated judgement, insightful analysis and the ability to draw well-supported conclusions",
          ],
          Goals: [
            "seek multiple perspectives on key issues to facilitate intercultural understanding and respect",
            "utilise a range of primary and secondary sources, as well as the guidance of experts to broaden her understanding when researching a specific issue",
            "evaluate data and information critically for reliability and bias",
            "represent data and information in appropriate formats and draw well-supported conclusions",
          ],
        },

        "Research Skills": {
          Strengths: [
            "locate relevant information to develop basic knowledge and draft, edit and publish research into an appropriate format",
            "conduct an inquiry into a Sustainable Development Goal using the PERMAH lens and the Guiding Principles, and with support, adopt effective research methods, make clearer links to PERMAH and draw more convincing conclusions",
            "apply higher-order, critical, and creative thinking skills to synthesise her inquiry research and findings, with support",
            "use knowledge of text structure to locate specific information and draft, edit and publish research into an appropriate format to explain ideas",
            "conduct an inquiry into a Sustainable Development Goal using the PERMAH framework and the Guiding Principles, meeting expectations by researching the issue, identifying connections to PERMAH, and presenting coherent findings",
            "demonstrate higher-order, critical and creative thinking skills to synthesise her inquiry research and findings",
            "use different texts on similar topics to synthesise information and draft, edit and publish detailed research, explaining ideas in paragraphs",
            "undertake a thorough inquiry into a Sustainable Development Goal using the PERMAH lens and the Guiding Principles, showing strong analysis, well-supported conclusions and effective collaboration",
            "synthesise complex information to draft, edit and publish detailed research, explaining cause and effect in sequenced paragraphs",
            "conduct an extensive inquiry into a Sustainable Development Goal through the PERMAH framework and the Guiding Principles, demonstrating insightful synthesis, independent research, and leadership in proposing feasible, ethically grounded solutions",
            "apply sophisticated higher-order, critical and creative thinking skills to synthesise her inquiry research and findings, producing insightful, original conclusions and connections",
          ],
          Goals: [
            "identify authentic ways to take action on an issue, reflecting on findings and applying learning to the world around her",
            "record research accurately to reflect the verbal articulation of her findings",
            "initiate contact with the teacher when additional support is needed, demonstrating independence in learning",
            "explore a wide range of resources to deepen understanding of her chosen research area",
          ],
        },

        Actions: {
          Strengths: [
            "consider an action that creates awareness about an issue of personal significance",
            "develop an action to raise awareness about the need for change in relation to an issue of personal significance",
            "encourage others to take authentic action because of her learning throughout the Exhibition process",
            "create and implement an action to ignite change in relation to an issue of personal significance",
            "encourage others to take meaningful and authentic action inspired by her learning throughout the Exhibition process",
            "create and implement an action to highlight the need for global change in relation to an issue of personal significance",
            "inspire and motivate others to take genuine, impactful action as a direct result of her insightful learning throughout the Exhibition process, demonstrating leadership and initiative",
          ],
          Goals: [
            "encourage and inspire others to take meaningful action based on her learning throughout the Exhibition process",
          ],
        },

        "Plan, Process and Prepare for PYPX": {
          Strengths: [
            "use some provided planning methods to organise materials throughout the exhibition process and work towards established time frames",
            "act on some structured feedback during the inquiry cycle to demonstrate improvement and progress towards set goals",
            "maintain planning methods to organise relevant materials throughout the exhibition process and work towards established time limits",
            "respond to feedback during the inquiry cycle to demonstrate improvement and progress towards personal goals",
            "demonstrate the ability to apply a range of historical, scientific and social inquiry and communication skills",
            "adopt detailed planning methods to organise a variety of relevant materials throughout the exhibition process and meet established time limits",
            "respond positively to feedback and persevere with challenge to maintain continuous personal improvement throughout the inquiry cycle",
            "demonstrate the ability to apply a range of historical, scientific, and social inquiry and communication skills effectively and with clarity",
            "innovate detailed planning methods to organise highly relevant materials throughout the exhibition process and meet all established time limits",
            "implement feedback and persevere with challenge throughout the inquiry cycle to demonstrate continuous personal improvement and aim for excellence",
            "apply a sophisticated range of historical, scientific and social inquiry and communication skills, demonstrating insightful analysis, creative thinking and clear, compelling communication",
          ],
          Goals: [
            "incorporate creative elements when presenting research findings to engage the audience effectively",
          ],
        },

        "Display, Present, Engage": {
          Strengths: [
            "select visual resources to create a suitable display to present to an audience",
            "communicate through speaking about a chosen topic and using related vocabulary",
            "work cooperatively with others to rehearse and present a summary of her Exhibition findings and, with support, contributes fully and communicates her ideas clearly",
            "present her Exhibition findings in a clear structure and, with support, share her understanding of the issue in an engaging way",
            "plan and select visual resources to engage an audience and suit the purpose of a display",
            "communicate clearly on a chosen topic and use related technical vocabulary",
            "work cooperatively with others to rehearse and present a summary of her Exhibition findings",
            "present her Exhibition findings in an engaging and well-considered structure that demonstrates a deep understanding of her issue",
            "communicate a conceptual understanding of a global issue through a form of artistic expression",
            "plan and select multimodal resources to engage an audience and suit the purpose of a display",
            "communicate clearly and confidently in different contexts and use related technical vocabulary",
            "collaborates effectively with others to rehearse and present a comprehensive and insightful summary of her Exhibition findings, demonstrating leadership and strong communication skills",
            "presents her Exhibition findings in an engaging and well-structured manner, demonstrating a thorough understanding of her issue",
            "communicate a conceptual understanding of a global issue effectively through a chosen form of artistic expression",
            "curate multimodal resources to engage varied audiences and suit the purpose of a display",
            "communicate skillfully in different contexts and demonstrate authority by using related technical vocabulary",
            "present her Exhibition findings in a highly engaging and sophisticated structure, demonstrating deep insight and a nuanced understanding of her issue",
            "communicate a sophisticated and insightful conceptual understanding of a global issue through a creative and highly expressive artistic form, demonstrating originality and depth of thought",
          ],
          Goals: [],
        },

        Reflect: {
          Strengths: [
            "reflect throughout the inquiry process to identify some successes and challenges and set goals for future learning",
            "document the process throughout the Exhibition, and, with support, use the provided scaffolds to organise her notes and share her personal reflections",
            "reflect on the findings of her investigation, what she has learned and the effectiveness of the inquiry process",
            "reflect throughout the inquiry process to identify successes and challenges and set clear goals for future learning",
            "document the process involved throughout Exhibition, utilising the provided scaffolds to organise her notes and share her personal reflections",
            "reflect on the findings of her investigation, what she has learned, the process and effectiveness of the inquiry",
            "reflect in depth throughout the inquiry process to analyse successes and challenges and set future learning goals",
            "document the process throughout the Exhibition effectively, utilising provided scaffolds to organise her notes and thoughtfully share her personal reflections",
            "reflect thoughtfully on the findings of her investigation, what she has learned and the process and effectiveness of the inquiry",
            "reflect in depth throughout the inquiry process considering multiple perspectives to analyse successes and challenges and set future learning goals",
            "document the Exhibition process in detail, using scaffolds creatively to organise her notes and share her insightful and reflective personal observations that extend understanding",
            "reflect in depth on the findings of her investigation, synthesising what she has learned and evaluating the process and effectiveness of the inquiry with insight and critical analysis",
          ],
          Goals: [],
        },
      }, // end PYPExhibition
      // ──────────────────────────────────────────────────────────────────────
      //  WWAIPAT — Semester 2
      // ──────────────────────────────────────────────────────────────────────
      WWAIPAT: {
        "LOI 1: Value and use of natural and cultural places over time": {
          Strengths: [
            "analyse the value and significance of natural and cultural places over time and justify how World Heritage Sites preserve cultural heritage and identity with comprehensive supporting reasons ",
            "explain the value and significance of natural and cultural places over time and explain how World Heritage Sites preserve cultural heritage and identity with supporting reasons",
            "identify the value of natural and cultural places over time and describe how World Heritage Sites preserve cultural heritage and identity with some supporting reasons",
            "identify some examples of the value of natural and cultural places over time and recognise how World Heritage Sites preserve cultural heritage and identity",
          ],
          Goals: [],
        },

        "LOI 2: Sustainable practices for futureproofing": {
          Strengths: [
            "examine the impacts of human activities and climate change on natural and cultural environments and rationalise how informed actions can protect and preserve significant places for future generations",
            "investigate the impacts of human activities and climate change on natural and cultural environments and describe how informed actions can help protect and preserve significant places for future generations",
            "explore the impacts of human activities and climate change on natural and cultural environments and describe actions that can protect significant places for future generations",
            "explore the impacts of human activities and climate change on natural and cultural environments and describe some actions that can protect significant places",
          ],
          Goals: [],
        },

        "LOI 3: Global values and shared responsibilities": {
          Strengths: [
            "evaluate the shared responsibilities involved in protecting significant natural and cultural places by analysing the roles of citizens, communities and global organisations and justify informed decisions when considering complex environmental and heritage issues",
            "explain the shared responsibilities involved in protecting significant natural and cultural places by outlining the roles of citizens, communities and global organisations and the role of informed decision making for the protection of significant places",
            "outline the shared responsibilities involved in protecting significant natural and cultural places and recognise the role of citizens, communities and global organisations play and can provide relevant reasons to support decisions about preservation",
            "outline some of the shared responsibilities involved in protecting significant natural and cultural places and recognise that citizens, communities and global organisations can play a role in the preservation of significant places",
          ],
          Goals: [],
        },

        "Mapping Skills": {
          Strengths: [
            "analyse and apply comprehensive mapping skills to accurately interpret, create and communicate geographical information using a range of mapping conventions",
            "explain and apply mapping skills to accurately interpret and communicate geographical information using appropriate mapping conventions",
            "use mapping skills to interpret and communicate geographical information using key mapping conventions",
            "identify simple geographical information using mapping skills and apply some mapping conventions ",
          ],
          Goals: [],
        },
      }, // end WWAIPAT
    }, // end Semester 2 subjects
  }, // end Semester 2
}; // end SEMESTER_DATA

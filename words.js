/* Word lists. Each item: headword(s) in the same word format as scenarios,
   a note on when to use it, and a two-line example conversation (A and B). */
const WORDLISTS = [
  {
    id: 'fillers', cat: 'words',
    title: 'Filler words', kn: 'ಮಾತಿನ ನಡುವಿನ ಪದಗಳು',
    place: 'Small words that make you sound natural',
    blurb: 'Matte, alva, andre, hoon, aaytu… the glue of everyday Kannada.',
    img: 'img/fillers.jpg', hue: 45,
    items: [
      { w: [['Matte', 'ಮತ್ತೆ', 'Particle', 'so / and then / what else']], note: 'Starts or keeps a chat going. “Matte?” on its own means “So, what’s new?”',
        ex: [['Matte, hegiddeera?', 'ಮತ್ತೆ, ಹೇಗಿದ್ದೀರಾ?', 'So, how are you?'], ['Chennaagiddeeni, matte neevu?', 'ಚೆನ್ನಾಗಿದ್ದೀನಿ, ಮತ್ತೆ ನೀವು?', 'I’m fine. And you?']] },
      { w: [['alva?', 'ಅಲ್ವಾ?', 'Particle', 'isn’t it? / right?']], note: 'Add it to the end of a sentence to invite agreement.',
        ex: [['Ivattu tumba bisilu, alva?', 'ಇವತ್ತು ತುಂಬಾ ಬಿಸಿಲು, ಅಲ್ವಾ?', 'It’s really sunny today, isn’t it?'], ['Haudu, tumba bisilu.', 'ಹೌದು, ತುಂಬಾ ಬಿಸಿಲು.', 'Yes, very sunny.']] },
      { w: [['andre', 'ಅಂದ್ರೆ', 'Conjunction', 'I mean / that is']], note: 'Use it to explain or say something again in other words.',
        ex: [['NaaLe baralla, andre… kelsa ide.', 'ನಾಳೆ ಬರಲ್ಲ, ಅಂದ್ರೆ… ಕೆಲಸ ಇದೆ.', 'I won’t come tomorrow, I mean… I have work.'], ['Aaytu, paravaagilla.', 'ಆಯ್ತು, ಪರವಾಗಿಲ್ಲ.', 'Okay, no problem.']] },
      { w: [['Hoon', 'ಹೂಂ', 'Particle', 'mm-hmm / yes']], note: 'Shows you are listening. Say it often while someone talks.',
        ex: [['Naanu metro-alli bande…', 'ನಾನು ಮೆಟ್ರೋದಲ್ಲಿ ಬಂದೆ…', 'I came by metro…'], ['Hoon, aamele?', 'ಹೂಂ, ಆಮೇಲೆ?', 'Mm-hmm, then?']] },
      { w: [['Aaytu', 'ಆಯ್ತು', 'Particle', 'okay / done']], note: 'The everyday way to agree to something.',
        ex: [['Aidu ganTege banni.', 'ಐದು ಗಂಟೆಗೆ ಬನ್ನಿ.', 'Come at five.'], ['Aaytu, barteeni.', 'ಆಯ್ತು, ಬರ್ತೀನಿ.', 'Okay, I’ll come.']] },
      { w: [['Haudaa?', 'ಹೌದಾ?', 'Particle', 'really? / is that so?']], note: 'React with interest to news.',
        ex: [['Naanu naaLe Mysoorige hogteeni.', 'ನಾನು ನಾಳೆ ಮೈಸೂರಿಗೆ ಹೋಗ್ತೀನಿ.', 'I’m going to Mysore tomorrow.'], ['Haudaa? Sakkath!', 'ಹೌದಾ? ಸಕತ್!', 'Really? Awesome!']] },
      { w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little']], note: 'Put it in front of any request to make it softer and more polite.',
        ex: [['Swalpa neeru koDi.', 'ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.', 'Please give me a little water.'], ['TagoLLi.', 'ತಗೊಳ್ಳಿ.', 'Here, take it.']] },
      { w: [['Paravaagilla', 'ಪರವಾಗಿಲ್ಲ', 'Particle', 'it’s okay / not bad']], note: 'Answer to “sorry”, or a modest “not bad”.',
        ex: [['Sorry, late aaytu.', 'ಸಾರಿ, ಲೇಟ್ ಆಯ್ತು.', 'Sorry, I’m late.'], ['Paravaagilla, banni.', 'ಪರವಾಗಿಲ್ಲ, ಬನ್ನಿ.', 'It’s okay, come in.']] },
      { w: [['NoDi', 'ನೋಡಿ', 'Verb', 'look / you see']], note: 'Gets attention before you make a point.',
        ex: [['NoDi, ee roadalli tumba traffic.', 'ನೋಡಿ, ಈ ರೋಡಲ್ಲಿ ತುಂಬಾ ಟ್ರಾಫಿಕ್.', 'See, this road has a lot of traffic.'], ['Haudu, bere roadalli hogona.', 'ಹೌದು, ಬೇರೆ ರೋಡಲ್ಲಿ ಹೋಗೋಣ.', 'Yes, let’s take another road.']] },
      { w: [['BiDi', 'ಬಿಡಿ', 'Verb', 'leave it / never mind']], note: 'Lets something go. Very common and friendly.',
        ex: [['Change illa, sorry.', 'ಚೇಂಜ್ ಇಲ್ಲ, ಸಾರಿ.', 'I don’t have change, sorry.'], ['BiDi, paravaagilla.', 'ಬಿಡಿ, ಪರವಾಗಿಲ್ಲ.', 'Leave it, no problem.']] },
      { w: [['Sumne', 'ಸುಮ್ನೆ', 'Adverb', 'just / for no reason']], note: 'When there is no special reason.',
        ex: [['Yaake call maaDidri?', 'ಯಾಕೆ ಕಾಲ್ ಮಾಡಿದ್ರಿ?', 'Why did you call?'], ['Sumne, maataaDoke.', 'ಸುಮ್ನೆ, ಮಾತಾಡೋಕೆ.', 'Just, to chat.']] }
    ]
  },
  {
    id: 'slang', cat: 'words',
    title: 'Words that impress locals', kn: 'ಬೆಂಗಳೂರು ಸ್ಲ್ಯಾಂಗ್',
    place: 'Fun Bengaluru slang',
    blurb: 'Guru, maga, sakkath, “swalpa adjust maadi”… use with friends and watch them smile.',
    img: 'img/slang.jpg', hue: 340,
    items: [
      { w: [['Yen', 'ಏನ್', 'Question word', 'what'], ['guru,', 'ಗುರು,', 'Noun', 'buddy / boss'], ['samaachaara?', 'ಸಮಾಚಾರ?', 'Noun', 'news']], note: '“What’s up, boss?” A friendly greeting with friends, shopkeepers, auto drivers.',
        ex: [['Yen guru, samaachaara?', 'ಏನ್ ಗುರು, ಸಮಾಚಾರ?', 'What’s up, boss?'], ['Ellaa sakkath, guru!', 'ಎಲ್ಲಾ ಸಕತ್, ಗುರು!', 'All great, buddy!']] },
      { w: [['Maga', 'ಮಗ', 'Noun', 'dude (lit. son)']], note: 'Between close friends only. Very casual.',
        ex: [['Maga, ellideeya?', 'ಮಗ, ಎಲ್ಲಿದೀಯಾ?', 'Dude, where are you?'], ['Bande maga, traffic!', 'ಬಂದೆ ಮಗ, ಟ್ರಾಫಿಕ್!', 'Coming dude, traffic!']] },
      { w: [['Sakkath', 'ಸಕತ್', 'Adjective', 'awesome / super']], note: 'Bengaluru’s favourite word for anything great.',
        ex: [['Movie hegittu?', 'ಮೂವಿ ಹೇಗಿತ್ತು?', 'How was the movie?'], ['Sakkath aagittu!', 'ಸಕತ್ ಆಗಿತ್ತು!', 'It was awesome!']] },
      { w: [['Bombaat', 'ಬೊಂಬಾಟ್', 'Adjective', 'fantastic']], note: 'Great for praising food.',
        ex: [['Ee dose bombaat aagide!', 'ಈ ದೋಸೆ ಬೊಂಬಾಟ್ ಆಗಿದೆ!', 'This dosa is fantastic!'], ['Innondu tinni!', 'ಇನ್ನೊಂದು ತಿನ್ನಿ!', 'Have one more!']] },
      { w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['adjust', 'ಅಡ್ಜಸ್ಟ್', 'Verb', 'adjust'], ['maaDi', 'ಮಾಡಿ', 'Verb', 'please do']], note: 'The city’s unofficial motto: on buses, in queues, about prices, about everything.',
        ex: [['Seat illa…', 'ಸೀಟ್ ಇಲ್ಲ…', 'There’s no seat…'], ['Swalpa adjust maaDi, kootkoLLi!', 'ಸ್ವಲ್ಪ ಅಡ್ಜಸ್ಟ್ ಮಾಡಿ, ಕೂತ್ಕೊಳ್ಳಿ!', 'Adjust a little, sit down!']] },
      { w: [['Tale', 'ತಲೆ', 'Noun', 'head'], ['tinnbeDa', 'ತಿನ್ನಬೇಡ', 'Verb', 'don’t eat']], note: '“Don’t eat my head”, meaning stop pestering me. Playful, with friends and kids.',
        ex: [['Ice cream koDsu, please please!', 'ಐಸ್ ಕ್ರೀಮ್ ಕೊಡ್ಸು, ಪ್ಲೀಸ್ ಪ್ಲೀಸ್!', 'Buy me ice cream, please please!'], ['Tale tinnbeDa, aamele!', 'ತಲೆ ತಿನ್ನಬೇಡ, ಆಮೇಲೆ!', 'Stop pestering me, later!']] },
      { w: [['Kai', 'ಕೈ', 'Noun', 'hand'], ['koTTa', 'ಕೊಟ್ಟ', 'Verb', 'he gave']], note: '“He gave the hand”, meaning he ditched us at the last minute.',
        ex: [['Arjun yaake barlilla?', 'ಅರ್ಜುನ್ ಯಾಕೆ ಬರ್ಲಿಲ್ಲ?', 'Why didn’t Arjun come?'], ['Avanu kai koTTa!', 'ಅವನು ಕೈ ಕೊಟ್ಟ!', 'He ditched us!']] },
      { w: [['Kirik', 'ಕಿರಿಕ್', 'Noun', 'trouble / fuss']], note: 'Any drama or argument.',
        ex: [['Auto driver kirik maaDida.', 'ಆಟೋ ಡ್ರೈವರ್ ಕಿರಿಕ್ ಮಾಡಿದ.', 'The auto driver made a fuss.'], ['Ayyo, biDi!', 'ಅಯ್ಯೋ, ಬಿಡಿ!', 'Oh, forget it!']] },
      { w: [['Chindi', 'ಚಿಂದಿ', 'Adjective', 'outstanding (lit. shredded)']], note: 'When a performance or match was brilliant.',
        ex: [['Avara dance hegittu?', 'ಅವರ ಡ್ಯಾನ್ಸ್ ಹೇಗಿತ್ತು?', 'How was their dance?'], ['Chindi! Full chindi!', 'ಚಿಂದಿ! ಫುಲ್ ಚಿಂದಿ!', 'Killer! Totally killer!']] },
      { w: [['Ayyo', 'ಅಯ್ಯೋ', 'Interjection', 'oh no! / oh my!']], note: 'The most Bengaluru sound there is. Surprise, sympathy or dismay.',
        ex: [['Phone maretubiTTe!', 'ಫೋನ್ ಮರೆತುಬಿಟ್ಟೆ!', 'I forgot my phone!'], ['Ayyo devre!', 'ಅಯ್ಯೋ ದೇವ್ರೇ!', 'Oh god!']] },
      { w: [['Bisi', 'ಬಿಸಿ', 'Adjective', 'hot'], ['bisi', 'ಬಿಸಿ', 'Adjective', 'hot']], note: 'Say a word twice for emphasis: bisi bisi = piping hot.',
        ex: [['Bisi bisi coffee beka?', 'ಬಿಸಿ ಬಿಸಿ ಕಾಫಿ ಬೇಕಾ?', 'Want piping hot coffee?'], ['Beku beku!', 'ಬೇಕು ಬೇಕು!', 'Yes, yes, I want it!']] }
    ]
  }
];

const CATEGORIES = [
  { id: 'words', color: '#d6457f', line: 'Pink line', title: 'Words to sound local', kn: 'ಪದಗಳು' },
  { id: 'meet', color: '#0f8b8d', line: 'Teal line', title: 'Meeting people & goodbyes', kn: 'ಪರಿಚಯ ಮತ್ತು ವಿದಾಯ' },
  { id: 'transport', color: '#7b2d8e', line: 'Purple line', title: 'Getting around', kn: 'ಪ್ರಯಾಣ' },
  { id: 'family', color: '#1d9a4a', line: 'Green line', title: 'Family, friends & kids', kn: 'ಕುಟುಂಬ ಮತ್ತು ಗೆಳೆಯರು' },
  { id: 'food', color: '#e8731c', line: 'Orange line', title: 'Food & taste', kn: 'ಊಟ ಮತ್ತು ರುಚಿ' },
  { id: 'shopping', color: '#1f66c9', line: 'Blue line', title: 'Shopping & street help', kn: 'ಖರೀದಿ ಮತ್ತು ಸಹಾಯ' },
  { id: 'home', color: '#c8302e', line: 'Red line', title: 'Home & daily life', kn: 'ಮನೆ ಮತ್ತು ದಿನಚರಿ' },
  { id: 'places', color: '#d9a400', line: 'Yellow line', title: 'Famous places', kn: 'ಪ್ರಸಿದ್ಧ ಸ್ಥಳಗಳು' }
];

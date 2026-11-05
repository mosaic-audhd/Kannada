/* More role plays, grouped by category. Same format as data.js. */
SCENARIOS.push(
  /* ---------- GETTING AROUND ---------- */
  {
    id: 'metro', cat: 'transport',
    title: 'Namma Metro ticket', kn: 'ನಮ್ಮ ಮೆಟ್ರೋ ಟಿಕೆಟ್',
    place: 'A Namma Metro station',
    blurb: 'Buy a token, find the platform, ask when the next train comes.',
    img: 'img/metro.jpg', hue: 290,
    roles: { a: { en: 'Passenger', kn: 'ಪ್ರಯಾಣಿಕ' }, b: { en: 'Counter staff', kn: 'ಕೌಂಟರ್ ಸಿಬ್ಬಂದಿ' } },
    lines: [
      { s: 'a', en: 'Give me one ticket to Majestic.', w: [['Majestic-ge', 'ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ', 'Noun', 'to Majestic'], ['ondu', 'ಒಂದು', 'Number', 'one'], ['ticket', 'ಟಿಕೆಟ್', 'Noun', 'ticket'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'Token or card?', w: [['Token-aa', 'ಟೋಕನ್ನಾ', 'Noun', 'token?'], ['card-aa?', 'ಕಾರ್ಡಾ?', 'Noun', 'card?']] },
      { s: 'a', en: 'A token is enough.', w: [['Token', 'ಟೋಕನ್', 'Noun', 'token'], ['saaku', 'ಸಾಕು', 'Verb', 'is enough']] },
      { s: 'b', en: 'Fifty rupees.', w: [['Aivattu', 'ಐವತ್ತು', 'Number', 'fifty'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] },
      { s: 'a', en: 'Which platform?', w: [['Yaava', 'ಯಾವ', 'Question word', 'which'], ['platform?', 'ಪ್ಲಾಟ್‌ಫಾರ್ಮ್?', 'Noun', 'platform']] },
      { s: 'b', en: 'The second platform.', w: [['EraDane', 'ಎರಡನೇ', 'Number', 'second'], ['platform', 'ಪ್ಲಾಟ್‌ಫಾರ್ಮ್', 'Noun', 'platform']] },
      { s: 'a', en: 'When is the next train?', w: [['Mundina', 'ಮುಂದಿನ', 'Adjective', 'next'], ['train', 'ಟ್ರೇನ್', 'Noun', 'train'], ['yaavaaga?', 'ಯಾವಾಗ?', 'Question word', 'when']] },
      { s: 'b', en: 'It will come in five minutes.', w: [['Aidu', 'ಐದು', 'Number', 'five'], ['nimishadalli', 'ನಿಮಿಷದಲ್ಲಿ', 'Noun', 'in minutes'], ['barutte', 'ಬರುತ್ತೆ', 'Verb', 'will come']] },
      { s: 'a', en: 'Thank you.', w: [['Dhanyavaada', 'ಧನ್ಯವಾದ', 'Noun', 'thanks']] }
    ]
  },
  {
    id: 'bus', cat: 'transport',
    title: 'BMTC bus', kn: 'ಬಿಎಂಟಿಸಿ ಬಸ್',
    place: 'A city bus stop',
    blurb: 'Check the route, buy a ticket, and ask to be told your stop.',
    img: 'img/bus.jpg', hue: 210,
    roles: { a: { en: 'Passenger', kn: 'ಪ್ರಯಾಣಿಕ' }, b: { en: 'Conductor', kn: 'ಕಂಡಕ್ಟರ್' } },
    lines: [
      { s: 'a', en: 'Does this bus go to Jayanagar?', w: [['Ee', 'ಈ', 'Adjective', 'this'], ['bus', 'ಬಸ್', 'Noun', 'bus'], ['Jayanagarakke', 'ಜಯನಗರಕ್ಕೆ', 'Noun', 'to Jayanagar'], ['hogutta?', 'ಹೋಗುತ್ತಾ?', 'Verb', 'does it go?']] },
      { s: 'b', en: 'It goes. Get on.', w: [['Hogutte', 'ಹೋಗುತ್ತೆ', 'Verb', 'it goes'], ['hatti', 'ಹತ್ತಿ', 'Verb', 'please get on']] },
      { s: 'b', en: 'Ticket to where?', w: [['Ellige', 'ಎಲ್ಲಿಗೆ', 'Question word', 'to where'], ['ticket?', 'ಟಿಕೆಟ್?', 'Noun', 'ticket']] },
      { s: 'a', en: 'One to Jayanagar.', w: [['Jayanagarakke', 'ಜಯನಗರಕ್ಕೆ', 'Noun', 'to Jayanagar'], ['ondu', 'ಒಂದು', 'Number', 'one']] },
      { s: 'b', en: 'Twenty-five rupees.', w: [['Ippattaidu', 'ಇಪ್ಪತ್ತೈದು', 'Number', 'twenty-five'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] },
      { s: 'a', en: 'Will you tell me when my stop comes?', w: [['Stop', 'ಸ್ಟಾಪ್', 'Noun', 'stop'], ['bandaaga', 'ಬಂದಾಗ', 'Verb', 'when it comes'], ['heLteera?', 'ಹೇಳ್ತೀರಾ?', 'Verb', 'will you tell?']] },
      { s: 'b', en: 'Okay, I will tell you.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['heLteeni', 'ಹೇಳ್ತೀನಿ', 'Verb', 'I will tell']] },
      { s: 'b', en: 'Jayanagar has come. Get down.', w: [['Jayanagar', 'ಜಯನಗರ', 'Noun', 'Jayanagar'], ['bantu', 'ಬಂತು', 'Verb', 'has come'], ['iLiyiri', 'ಇಳಿಯಿರಿ', 'Verb', 'please get down']] }
    ]
  },
  {
    id: 'cabcall', cat: 'transport',
    title: 'The driver is calling', kn: 'ಡ್ರೈವರ್ ಕಾಲ್',
    place: 'Pickup point on a busy road',
    blurb: 'Your cab driver cannot find you. Describe where you are and what you are wearing.',
    img: 'img/cabcall.jpg', hue: 30,
    roles: { a: { en: 'Passenger', kn: 'ಪ್ರಯಾಣಿಕ' }, b: { en: 'Cab driver', kn: 'ಕ್ಯಾಬ್ ಡ್ರೈವರ್' } },
    lines: [
      { s: 'b', en: 'Hello, where are you?', w: [['Hello', 'ಹಲೋ', 'Greeting', 'hello'], ['neevu', 'ನೀವು', 'Pronoun', 'you (polite)'], ['elli', 'ಎಲ್ಲಿ', 'Question word', 'where'], ['iddeera?', 'ಇದ್ದೀರಾ?', 'Verb', 'are you?']] },
      { s: 'a', en: 'I am near the gate.', w: [['Naanu', 'ನಾನು', 'Pronoun', 'I'], ['gate', 'ಗೇಟ್', 'Noun', 'gate'], ['hatra', 'ಹತ್ರ', 'Postposition', 'near'], ['iddeeni', 'ಇದ್ದೀನಿ', 'Verb', 'I am']] },
      { s: 'a', en: 'How soon will you come?', w: [['Eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['hottalli', 'ಹೊತ್ತಲ್ಲಿ', 'Noun', 'in time'], ['barteera?', 'ಬರ್ತೀರಾ?', 'Verb', 'will you come?']] },
      { s: 'b', en: 'Two minutes.', w: [['EraDu', 'ಎರಡು', 'Number', 'two'], ['nimisha', 'ನಿಮಿಷ', 'Noun', 'minutes']] },
      { s: 'b', en: 'What colour are your clothes?', w: [['Yaava', 'ಯಾವ', 'Question word', 'which'], ['colour', 'ಕಲರ್', 'Noun', 'colour'], ['dress?', 'ಡ್ರೆಸ್?', 'Noun', 'clothes']] },
      { s: 'a', en: 'Blue shirt, red bag.', w: [['Neeli', 'ನೀಲಿ', 'Adjective', 'blue'], ['shirt', 'ಶರ್ಟ್', 'Noun', 'shirt'], ['kempu', 'ಕೆಂಪು', 'Adjective', 'red'], ['bag', 'ಬ್ಯಾಗ್', 'Noun', 'bag']] },
      { s: 'b', en: 'I see you. Coming.', w: [['NoDide', 'ನೋಡಿದೆ', 'Verb', 'I saw'], ['bande', 'ಬಂದೆ', 'Verb', 'coming (lit. I came)']] },
      { s: 'a', en: 'Okay, I am waiting.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['kaaytaa', 'ಕಾಯ್ತಾ', 'Verb', 'waiting'], ['iddeeni', 'ಇದ್ದೀನಿ', 'Verb', 'I am']] }
    ]
  },

  /* ---------- FAMILY, FRIENDS & KIDS ---------- */
  {
    id: 'family', cat: 'family',
    title: 'Who is in your family?', kn: 'ನಿಮ್ಮ ಕುಟುಂಬ',
    place: 'Looking at a family photo',
    blurb: 'Learn amma, appa, akka, anna, tamma, tangi, ajji and taata.',
    img: 'img/relatives.jpg', hue: 15,
    roles: { a: { en: 'Visitor', kn: 'ಅತಿಥಿ' }, b: { en: 'Host', kn: 'ಮನೆಯವರು' } },
    lines: [
      { s: 'a', en: 'Is this your family photo?', w: [['Idu', 'ಇದು', 'Pronoun', 'this'], ['nimma', 'ನಿಮ್ಮ', 'Pronoun', 'your'], ['family', 'ಫ್ಯಾಮಿಲಿ', 'Noun', 'family'], ['photo-naa?', 'ಫೋಟೋನಾ?', 'Noun', 'photo?']] },
      { s: 'b', en: 'Yes. These are my mother and father.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['ivaru', 'ಇವರು', 'Pronoun', 'these people'], ['nanna', 'ನನ್ನ', 'Pronoun', 'my'], ['amma', 'ಅಮ್ಮ', 'Noun', 'mother'], ['appa', 'ಅಪ್ಪ', 'Noun', 'father']] },
      { s: 'a', en: 'Who is this?', w: [['Ivaru', 'ಇವರು', 'Pronoun', 'this person (polite)'], ['yaaru?', 'ಯಾರು?', 'Question word', 'who']] },
      { s: 'b', en: 'She is my elder sister.', w: [['Avaru', 'ಅವರು', 'Pronoun', 'that person (polite)'], ['nanna', 'ನನ್ನ', 'Pronoun', 'my'], ['akka', 'ಅಕ್ಕ', 'Noun', 'elder sister']] },
      { s: 'b', en: 'He is my younger brother.', w: [['Ivanu', 'ಇವನು', 'Pronoun', 'he (younger)'], ['nanna', 'ನನ್ನ', 'Pronoun', 'my'], ['tamma', 'ತಮ್ಮ', 'Noun', 'younger brother']] },
      { s: 'a', en: 'Do you have an elder brother?', w: [['Nimage', 'ನಿಮಗೆ', 'Pronoun', 'to you'], ['aNNa', 'ಅಣ್ಣ', 'Noun', 'elder brother'], ['iddaara?', 'ಇದ್ದಾರಾ?', 'Verb', 'is there?']] },
      { s: 'b', en: 'No, I have a younger sister.', w: [['Illa', 'ಇಲ್ಲ', 'Particle', 'no'], ['tangi', 'ತಂಗಿ', 'Noun', 'younger sister'], ['iddaaLe', 'ಇದ್ದಾಳೆ', 'Verb', 'she is there']] },
      { s: 'b', en: 'Grandma and grandpa live with us.', w: [['Ajji', 'ಅಜ್ಜಿ', 'Noun', 'grandmother'], ['taata', 'ತಾತ', 'Noun', 'grandfather'], ['namma', 'ನಮ್ಮ', 'Pronoun', 'our / us'], ['jote', 'ಜೊತೆ', 'Postposition', 'with'], ['iddaare', 'ಇದ್ದಾರೆ', 'Verb', 'they are']] },
      { s: 'a', en: 'A big family! Very nice.', w: [['DoDDa', 'ದೊಡ್ಡ', 'Adjective', 'big'], ['family!', 'ಫ್ಯಾಮಿಲಿ!', 'Noun', 'family'], ['Tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['chennaagide', 'ಚೆನ್ನಾಗಿದೆ', 'Verb', 'is nice']] }
    ]
  },
  {
    id: 'kids', cat: 'family',
    title: 'Chatting with a child', kn: 'ಮಗುವಿನ ಜೊತೆ ಮಾತು',
    place: 'In the park',
    blurb: 'Ask a child their name, age and class. Uses the informal “you”.',
    img: 'img/kids.jpg', hue: 95,
    roles: { a: { en: 'Adult', kn: 'ದೊಡ್ಡವರು' }, b: { en: 'Child', kn: 'ಮಗು' } },
    lines: [
      { s: 'a', en: 'What is your name?', w: [['Ninna', 'ನಿನ್ನ', 'Pronoun', 'your (informal)'], ['hesaru', 'ಹೆಸರು', 'Noun', 'name'], ['enu?', 'ಏನು?', 'Question word', 'what']] },
      { s: 'b', en: 'My name is Anu.', w: [['Nanna', 'ನನ್ನ', 'Pronoun', 'my'], ['hesaru', 'ಹೆಸರು', 'Noun', 'name'], ['Anu', 'ಅನು', 'Noun', 'Anu (a name)']] },
      { s: 'a', en: 'How old are you?', w: [['Ninge', 'ನಿಂಗೆ', 'Pronoun', 'to you (informal)'], ['eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['vayassu?', 'ವಯಸ್ಸು?', 'Noun', 'age']] },
      { s: 'b', en: 'I am six years old.', w: [['Nange', 'ನಂಗೆ', 'Pronoun', 'to me'], ['aaru', 'ಆರು', 'Number', 'six'], ['varsha', 'ವರ್ಷ', 'Noun', 'years']] },
      { s: 'a', en: 'Do you go to school?', w: [['School-ge', 'ಸ್ಕೂಲ್‌ಗೆ', 'Noun', 'to school'], ['hogteeya?', 'ಹೋಗ್ತೀಯಾ?', 'Verb', 'do you go? (informal)']] },
      { s: 'b', en: 'Yes, first class.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['ondane', 'ಒಂದನೇ', 'Number', 'first'], ['class', 'ಕ್ಲಾಸ್', 'Noun', 'class']] },
      { s: 'b', en: 'Will you play with me?', w: [['Nanna', 'ನನ್ನ', 'Pronoun', 'me'], ['jote', 'ಜೊತೆ', 'Postposition', 'with'], ['aaTa', 'ಆಟ', 'Noun', 'game'], ['aaDteeya?', 'ಆಡ್ತೀಯಾ?', 'Verb', 'will you play?']] },
      { s: 'a', en: 'Come, let us play.', w: [['Baa', 'ಬಾ', 'Verb', 'come (informal)'], ['aaTa', 'ಆಟ', 'Noun', 'game'], ['aaDona', 'ಆಡೋಣ', 'Verb', 'let us play']] }
    ]
  },
  {
    id: 'friends', cat: 'family',
    title: 'Weekend plans', kn: 'ವೀಕೆಂಡ್ ಪ್ಲಾನ್',
    place: 'Two friends texting',
    blurb: 'Make a plan with a friend, haggle over the time, agree where to meet.',
    img: 'img/friends.jpg', hue: 250,
    roles: { a: { en: 'Friend (Riya)', kn: 'ಗೆಳತಿ' }, b: { en: 'Friend (Arjun)', kn: 'ಗೆಳೆಯ' } },
    lines: [
      { s: 'b', en: 'What is the weekend plan?', w: [['Weekend', 'ವೀಕೆಂಡ್', 'Noun', 'weekend'], ['plan', 'ಪ್ಲಾನ್', 'Noun', 'plan'], ['enu?', 'ಏನು?', 'Question word', 'what']] },
      { s: 'a', en: 'Nothing. You?', w: [['Enu', 'ಏನೂ', 'Pronoun', 'nothing'], ['illa', 'ಇಲ್ಲ', 'Verb', 'is not'], ['neenu?', 'ನೀನು?', 'Pronoun', 'you (informal)']] },
      { s: 'b', en: 'Shall we go to Cubbon Park?', w: [['Cubbon Park-ge', 'ಕಬ್ಬನ್ ಪಾರ್ಕ್‌ಗೆ', 'Noun', 'to Cubbon Park'], ['hogonva?', 'ಹೋಗೋಣ್ವಾ?', 'Verb', 'shall we go?']] },
      { s: 'a', en: 'Great idea! At what time?', w: [['Sakkath', 'ಸಕತ್', 'Adjective', 'awesome'], ['idea!', 'ಐಡಿಯಾ!', 'Noun', 'idea'], ['Eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['hottige?', 'ಹೊತ್ತಿಗೆ?', 'Noun', 'at (what) time']] },
      { s: 'b', en: 'Seven in the morning.', w: [['BeLigge', 'ಬೆಳಿಗ್ಗೆ', 'Adverb', 'in the morning'], ['eLu', 'ಏಳು', 'Number', 'seven'], ['ganTege', 'ಗಂಟೆಗೆ', 'Noun', 'at o’clock']] },
      { s: 'a', en: 'Oh no, too early!', w: [['Ayyo', 'ಅಯ್ಯೋ', 'Interjection', 'oh no'], ['tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['bega!', 'ಬೇಗ!', 'Adverb', 'early']] },
      { s: 'b', en: 'Okay, at nine?', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['ombattu', 'ಒಂಬತ್ತು', 'Number', 'nine'], ['ganTege?', 'ಗಂಟೆಗೆ?', 'Noun', 'at o’clock']] },
      { s: 'a', en: 'Done, let us meet there.', w: [['Aaytu', 'ಆಯ್ತು', 'Particle', 'done / okay'], ['alli', 'ಅಲ್ಲಿ', 'Adverb', 'there'], ['sigona', 'ಸಿಗೋಣ', 'Verb', 'let us meet']] }
    ]
  },

  /* ---------- FOOD & TASTE ---------- */
  {
    id: 'restaurant', cat: 'food',
    title: 'Lunch at a restaurant', kn: 'ಹೋಟೆಲ್‌ನಲ್ಲಿ ಊಟ',
    place: 'A South Indian restaurant',
    blurb: 'Order a meal, ask for less spice, more rice and buttermilk.',
    img: 'img/restaurant.jpg', hue: 35,
    roles: { a: { en: 'Customer', kn: 'ಗ್ರಾಹಕ' }, b: { en: 'Waiter', kn: 'ವೇಟರ್' } },
    lines: [
      { s: 'b', en: 'Shall I take your order?', w: [['Order', 'ಆರ್ಡರ್', 'Noun', 'order'], ['tagoLLala?', 'ತಗೊಳ್ಳಲಾ?', 'Verb', 'shall I take?']] },
      { s: 'a', en: 'Give me one meals.', w: [['Ondu', 'ಒಂದು', 'Number', 'one'], ['meals', 'ಮೀಲ್ಸ್', 'Noun', 'thali meal'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'a', en: 'Make it less spicy.', w: [['Khaara', 'ಖಾರ', 'Noun', 'spice / heat'], ['kammi', 'ಕಮ್ಮಿ', 'Adjective', 'less'], ['maaDi', 'ಮಾಡಿ', 'Verb', 'please do']] },
      { s: 'b', en: 'Do you want something sweet?', w: [['Sihi', 'ಸಿಹಿ', 'Noun', 'sweet'], ['enaadru', 'ಏನಾದ್ರೂ', 'Pronoun', 'anything'], ['beka?', 'ಬೇಕಾ?', 'Verb', 'is it needed?']] },
      { s: 'a', en: 'Yes, one jamun.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['ondu', 'ಒಂದು', 'Number', 'one'], ['jaamoon', 'ಜಾಮೂನ್', 'Noun', 'gulab jamun']] },
      { s: 'a', en: 'Give a little more rice.', w: [['Innu', 'ಇನ್ನೂ', 'Adverb', 'more'], ['swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['anna', 'ಅನ್ನ', 'Noun', 'cooked rice'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'Rasam or buttermilk?', w: [['Saaru', 'ಸಾರು', 'Noun', 'rasam'], ['beka', 'ಬೇಕಾ', 'Verb', 'needed?'], ['majjige', 'ಮಜ್ಜಿಗೆ', 'Noun', 'buttermilk'], ['beka?', 'ಬೇಕಾ?', 'Verb', 'needed?']] },
      { s: 'a', en: 'Give buttermilk.', w: [['Majjige', 'ಮಜ್ಜಿಗೆ', 'Noun', 'buttermilk'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'How was the meal?', w: [['Oota', 'ಊಟ', 'Noun', 'meal'], ['hegittu?', 'ಹೇಗಿತ್ತು?', 'Verb', 'how was it?']] },
      { s: 'a', en: 'It was very tasty!', w: [['Tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['ruchiyaagittu!', 'ರುಚಿಯಾಗಿತ್ತು!', 'Verb', 'was tasty']] }
    ]
  },
  {
    id: 'homefood', cat: 'food',
    title: 'Tasting home food', kn: 'ಮನೆ ಊಟದ ರುಚಿ',
    place: 'Lunch at a friend’s home',
    blurb: 'Talk about spice, salt and sweetness, then try to say “enough”.',
    img: 'img/homefood.jpg', hue: 45,
    roles: { a: { en: 'Guest', kn: 'ಅತಿಥಿ' }, b: { en: 'Host (Aunty)', kn: 'ಆಂಟಿ' } },
    lines: [
      { s: 'b', en: 'This is bisi bele bath. Taste it.', w: [['Idu', 'ಇದು', 'Pronoun', 'this'], ['bisibeLe baath', 'ಬಿಸಿಬೇಳೆ ಬಾತ್', 'Noun', 'bisi bele bath'], ['ruchi', 'ರುಚಿ', 'Noun', 'taste'], ['noDi', 'ನೋಡಿ', 'Verb', 'please see']] },
      { s: 'a', en: 'Wow, it is very tasty!', w: [['Tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['ruchiyaagide!', 'ರುಚಿಯಾಗಿದೆ!', 'Verb', 'is tasty']] },
      { s: 'b', en: 'Is it too spicy?', w: [['Khaara', 'ಖಾರ', 'Noun', 'spice'], ['jaasti', 'ಜಾಸ್ತಿ', 'Adjective', 'too much'], ['aayta?', 'ಆಯ್ತಾ?', 'Verb', 'did it become?']] },
      { s: 'a', en: 'A little spicy, it is okay.', w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['khaara', 'ಖಾರ', 'Noun', 'spice'], ['ide', 'ಇದೆ', 'Verb', 'there is'], ['paravaagilla', 'ಪರವಾಗಿಲ್ಲ', 'Particle', 'it is okay']] },
      { s: 'b', en: 'Is the salt right?', w: [['Uppu', 'ಉಪ್ಪು', 'Noun', 'salt'], ['sariyaagideya?', 'ಸರಿಯಾಗಿದೆಯಾ?', 'Verb', 'is it right?']] },
      { s: 'a', en: 'Yes, the salt is right.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['uppu', 'ಉಪ್ಪು', 'Noun', 'salt'], ['sariyaagide', 'ಸರಿಯಾಗಿದೆ', 'Verb', 'is right']] },
      { s: 'b', en: 'Have some payasa.', w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['paayasa', 'ಪಾಯಸ', 'Noun', 'sweet pudding'], ['tagoLLi', 'ತಗೊಳ್ಳಿ', 'Verb', 'please take']] },
      { s: 'a', en: 'My stomach is full, enough!', w: [['HoTTe', 'ಹೊಟ್ಟೆ', 'Noun', 'stomach'], ['tumbide', 'ತುಂಬಿದೆ', 'Verb', 'is full'], ['saaku!', 'ಸಾಕು!', 'Verb', 'enough']] },
      { s: 'b', en: 'Just a little, a little!', w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['swalpa!', 'ಸ್ವಲ್ಪ!', 'Adverb', 'a little']] },
      { s: 'a', en: 'Okay, only a little.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['maatra', 'ಮಾತ್ರ', 'Adverb', 'only']] }
    ]
  },
  {
    id: 'coconut', cat: 'food',
    title: 'Tender coconut stall', kn: 'ಎಳನೀರು ಅಂಗಡಿ',
    place: 'A roadside elaneeru cart',
    blurb: 'Ask the price, ask for a watery one, and have it cut open.',
    img: 'img/coconut.jpg', hue: 120,
    roles: { a: { en: 'Customer', kn: 'ಗ್ರಾಹಕ' }, b: { en: 'Vendor', kn: 'ವ್ಯಾಪಾರಿ' } },
    lines: [
      { s: 'a', en: 'How much is a tender coconut?', w: [['ELaneeru', 'ಎಳನೀರು', 'Noun', 'tender coconut'], ['eshtu?', 'ಎಷ್ಟು?', 'Question word', 'how much']] },
      { s: 'b', en: 'Fifty rupees.', w: [['Aivattu', 'ಐವತ್ತು', 'Number', 'fifty'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] },
      { s: 'a', en: 'One with lots of water, please.', w: [['Neeru', 'ನೀರು', 'Noun', 'water'], ['jaasti', 'ಜಾಸ್ತಿ', 'Adjective', 'more'], ['irli', 'ಇರ್ಲಿ', 'Verb', 'let it be']] },
      { s: 'b', en: 'Do you want a straw?', w: [['Straw', 'ಸ್ಟ್ರಾ', 'Noun', 'straw'], ['beka?', 'ಬೇಕಾ?', 'Verb', 'is it needed?']] },
      { s: 'a', en: 'No. Afterwards, cut it open for me.', w: [['BeDa', 'ಬೇಡ', 'Verb', 'not needed'], ['aamele', 'ಆಮೇಲೆ', 'Adverb', 'afterwards'], ['oDedu', 'ಒಡೆದು', 'Verb', 'breaking (it)'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'Okay. It is sweet, drink.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['sihi', 'ಸಿಹಿ', 'Adjective', 'sweet'], ['ide', 'ಇದೆ', 'Verb', 'it is'], ['kuDiyiri', 'ಕುಡಿಯಿರಿ', 'Verb', 'please drink']] },
      { s: 'a', en: 'Very nice! Give one more.', w: [['Tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['chennaagide!', 'ಚೆನ್ನಾಗಿದೆ!', 'Verb', 'is nice'], ['Innondu', 'ಇನ್ನೊಂದು', 'Number', 'one more'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'That makes a hundred rupees.', w: [['Nooru', 'ನೂರು', 'Number', 'hundred'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees'], ['aaytu', 'ಆಯ್ತು', 'Verb', 'it became']] },
      { s: 'a', en: 'I will pay by GPay.', w: [['GPay', 'ಜಿಪೇ', 'Noun', 'GPay'], ['maaDteeni', 'ಮಾಡ್ತೀನಿ', 'Verb', 'I will do']] }
    ]
  },

  /* ---------- SHOPPING & STREET HELP ---------- */
  {
    id: 'clothes', cat: 'shopping',
    title: 'Buying clothes', kn: 'ಬಟ್ಟೆ ಖರೀದಿ',
    place: 'Commercial Street',
    blurb: 'Ask for a size and colour, try it on, and ask for a discount.',
    img: 'img/clothes.jpg', hue: 320,
    roles: { a: { en: 'Customer', kn: 'ಗ್ರಾಹಕ' }, b: { en: 'Shopkeeper', kn: 'ಅಂಗಡಿಯವರು' } },
    lines: [
      { s: 'a', en: 'Do you have kurtas?', w: [['Kurta', 'ಕುರ್ತಾ', 'Noun', 'kurta'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is there?']] },
      { s: 'b', en: 'Yes. Which size?', w: [['Ide', 'ಇದೆ', 'Verb', 'there is'], ['yaava', 'ಯಾವ', 'Question word', 'which'], ['size?', 'ಸೈಜ್?', 'Noun', 'size']] },
      { s: 'a', en: 'Medium. I want blue.', w: [['Medium', 'ಮೀಡಿಯಂ', 'Adjective', 'medium'], ['neeli', 'ನೀಲಿ', 'Adjective', 'blue'], ['colour', 'ಕಲರ್', 'Noun', 'colour'], ['beku', 'ಬೇಕು', 'Verb', 'is needed']] },
      { s: 'b', en: 'Look at this one.', w: [['Idu', 'ಇದು', 'Pronoun', 'this'], ['noDi', 'ನೋಡಿ', 'Verb', 'please look']] },
      { s: 'a', en: 'Can I try it?', w: [['Trial', 'ಟ್ರಯಲ್', 'Noun', 'trial'], ['maaDbahuda?', 'ಮಾಡ್ಬಹುದಾ?', 'Verb', 'can (I) do?']] },
      { s: 'b', en: 'Yes, the trial room is there.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['alli', 'ಅಲ್ಲಿ', 'Adverb', 'there'], ['trial room', 'ಟ್ರಯಲ್ ರೂಮ್', 'Noun', 'trial room'], ['ide', 'ಇದೆ', 'Verb', 'there is']] },
      { s: 'a', en: 'Is there a slightly bigger one?', w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['doDDadu', 'ದೊಡ್ಡದು', 'Noun', 'bigger one'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is there?']] },
      { s: 'a', en: 'What is the price?', w: [['Bele', 'ಬೆಲೆ', 'Noun', 'price'], ['eshtu?', 'ಎಷ್ಟು?', 'Question word', 'how much']] },
      { s: 'b', en: 'Nine hundred.', w: [['Ombainooru', 'ಒಂಬೈನೂರು', 'Number', 'nine hundred']] },
      { s: 'a', en: 'Is there a discount?', w: [['Discount', 'ಡಿಸ್ಕೌಂಟ್', 'Noun', 'discount'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is there?']] },
      { s: 'b', en: 'I will give ten percent.', w: [['Hattu', 'ಹತ್ತು', 'Number', 'ten'], ['percent', 'ಪರ್ಸೆಂಟ್', 'Noun', 'percent'], ['koDteeni', 'ಕೊಡ್ತೀನಿ', 'Verb', 'I will give']] }
    ]
  },
  {
    id: 'kirana', cat: 'shopping',
    title: 'Corner grocery shop', kn: 'ದಿನಸಿ ಅಂಗಡಿ',
    place: 'The kirana store down the road',
    blurb: 'Buy milk, curd and sugar. Remember to bring your own bag.',
    img: 'img/kirana.jpg', hue: 60,
    roles: { a: { en: 'Customer', kn: 'ಗ್ರಾಹಕ' }, b: { en: 'Shop owner', kn: 'ಅಂಗಡಿಯವರು' } },
    lines: [
      { s: 'a', en: 'Brother, give me one litre of milk.', w: [['ANNa', 'ಅಣ್ಣ', 'Noun', 'brother (friendly address)'], ['ondu', 'ಒಂದು', 'Number', 'one'], ['litre', 'ಲೀಟರ್', 'Noun', 'litre'], ['haalu', 'ಹಾಲು', 'Noun', 'milk'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'Nandini?', w: [['Nandini-naa?', 'ನಂದಿನಿನಾ?', 'Noun', 'Nandini (milk brand)?']] },
      { s: 'a', en: 'Yes. Do you have curd?', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['mosaru', 'ಮೊಸರು', 'Noun', 'curd'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is there?']] },
      { s: 'b', en: 'Yes. What else do you need?', w: [['Ide', 'ಇದೆ', 'Verb', 'there is'], ['bere', 'ಬೇರೆ', 'Adjective', 'other'], ['enu', 'ಏನು', 'Question word', 'what'], ['beku?', 'ಬೇಕು?', 'Verb', 'is needed']] },
      { s: 'a', en: 'Half a kilo of sugar, one bread.', w: [['Ardha', 'ಅರ್ಧ', 'Adjective', 'half'], ['keji', 'ಕೆಜಿ', 'Noun', 'kilo'], ['sakkare', 'ಸಕ್ಕರೆ', 'Noun', 'sugar'], ['ondu', 'ಒಂದು', 'Number', 'one'], ['bread', 'ಬ್ರೆಡ್', 'Noun', 'bread']] },
      { s: 'b', en: 'Bread is finished.', w: [['Bread', 'ಬ್ರೆಡ್', 'Noun', 'bread'], ['mugiduhoytu', 'ಮುಗಿದುಹೋಯ್ತು', 'Verb', 'is finished']] },
      { s: 'a', en: 'No problem. How much is it?', w: [['Paravaagilla', 'ಪರವಾಗಿಲ್ಲ', 'Particle', 'no problem'], ['eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['aaytu?', 'ಆಯ್ತು?', 'Verb', 'did it become']] },
      { s: 'b', en: 'One hundred and thirty rupees.', w: [['Nooramoovattu', 'ನೂರಮೂವತ್ತು', 'Number', 'one hundred thirty'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] },
      { s: 'a', en: 'Give me a carry bag.', w: [['Cover', 'ಕವರ್', 'Noun', 'carry bag'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'No bags. Did you not bring one?', w: [['Cover', 'ಕವರ್', 'Noun', 'carry bag'], ['illa', 'ಇಲ್ಲ', 'Verb', 'is not there'], ['bag', 'ಬ್ಯಾಗ್', 'Noun', 'bag'], ['tandilva?', 'ತಂದಿಲ್ವಾ?', 'Verb', 'didn’t you bring?']] }
    ]
  },
  {
    id: 'streethelp', cat: 'shopping',
    title: 'Asking a stranger for help', kn: 'ಸಹಾಯ ಕೇಳುವುದು',
    place: 'On the footpath',
    blurb: 'Your phone is dead. Borrow one for a call and find an ATM.',
    img: 'img/streethelp.jpg', hue: 190,
    roles: { a: { en: 'Newcomer', kn: 'ಹೊಸಬರು' }, b: { en: 'Passer-by', kn: 'ದಾರಿಹೋಕರು' } },
    lines: [
      { s: 'a', en: 'Excuse me, will you help me a little?', w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['help', 'ಹೆಲ್ಪ್', 'Noun', 'help'], ['maaDteera?', 'ಮಾಡ್ತೀರಾ?', 'Verb', 'will you do?']] },
      { s: 'b', en: 'Tell me, what happened?', w: [['HeLi', 'ಹೇಳಿ', 'Verb', 'please tell'], ['enaaytu?', 'ಏನಾಯ್ತು?', 'Verb', 'what happened?']] },
      { s: 'a', en: 'My phone has no charge.', w: [['Nanna', 'ನನ್ನ', 'Pronoun', 'my'], ['phone', 'ಫೋನ್', 'Noun', 'phone'], ['charge', 'ಚಾರ್ಜ್', 'Noun', 'charge'], ['illa', 'ಇಲ್ಲ', 'Verb', 'is not there']] },
      { s: 'a', en: 'Can I make one call?', w: [['Ondu', 'ಒಂದು', 'Number', 'one'], ['call', 'ಕಾಲ್', 'Noun', 'call'], ['maaDbahuda?', 'ಮಾಡ್ಬಹುದಾ?', 'Verb', 'can (I) do?']] },
      { s: 'b', en: 'Okay, take it.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['tagoLLi', 'ತಗೊಳ್ಳಿ', 'Verb', 'please take']] },
      { s: 'a', en: 'Where is an ATM nearby?', w: [['Hatra', 'ಹತ್ರ', 'Adverb', 'nearby'], ['ATM', 'ಎಟಿಎಂ', 'Noun', 'ATM'], ['elli', 'ಎಲ್ಲಿ', 'Question word', 'where'], ['ide?', 'ಇದೆ?', 'Verb', 'is it']] },
      { s: 'b', en: 'It is next to that building.', w: [['Aa', 'ಆ', 'Adjective', 'that'], ['building', 'ಬಿಲ್ಡಿಂಗ್', 'Noun', 'building'], ['pakkadalli', 'ಪಕ್ಕದಲ್ಲಿ', 'Postposition', 'next to'], ['ide', 'ಇದೆ', 'Verb', 'it is']] },
      { s: 'a', en: 'That was a big help.', w: [['Tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['upakaara', 'ಉಪಕಾರ', 'Noun', 'favour / help'], ['aaytu', 'ಆಯ್ತು', 'Verb', 'it became']] },
      { s: 'b', en: 'No problem.', w: [['Paravaagilla', 'ಪರವಾಗಿಲ್ಲ', 'Particle', 'no problem']] }
    ]
  },

  /* ---------- FAMOUS PLACES ---------- */
  {
    id: 'lalbagh', cat: 'places',
    title: 'Lalbagh', kn: 'ಲಾಲ್‌ಬಾಗ್',
    place: 'Lalbagh Botanical Garden',
    blurb: 'Buy an entry ticket, find the glass house, ask about the flower show.',
    img: 'img/lalbagh.jpg', hue: 140,
    roles: { a: { en: 'Visitor', kn: 'ಪ್ರವಾಸಿ' }, b: { en: 'Gate staff', kn: 'ಗೇಟ್ ಸಿಬ್ಬಂದಿ' } },
    lines: [
      { s: 'a', en: 'How much is the ticket?', w: [['Ticket', 'ಟಿಕೆಟ್', 'Noun', 'ticket'], ['eshtu?', 'ಎಷ್ಟು?', 'Question word', 'how much']] },
      { s: 'b', en: 'Thirty rupees for adults.', w: [['DoDDavarige', 'ದೊಡ್ಡವರಿಗೆ', 'Noun', 'for adults'], ['moovattu', 'ಮೂವತ್ತು', 'Number', 'thirty'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] },
      { s: 'a', en: 'Where is the glass house?', w: [['Gaajina', 'ಗಾಜಿನ', 'Adjective', 'of glass'], ['mane', 'ಮನೆ', 'Noun', 'house'], ['elli', 'ಎಲ್ಲಿ', 'Question word', 'where'], ['ide?', 'ಇದೆ?', 'Verb', 'is it']] },
      { s: 'b', en: 'Go straight, it is on the right.', w: [['Neravaagi', 'ನೇರವಾಗಿ', 'Adverb', 'straight'], ['hogi', 'ಹೋಗಿ', 'Verb', 'please go'], ['balagaDe', 'ಬಲಗಡೆ', 'Noun', 'right side'], ['ide', 'ಇದೆ', 'Verb', 'it is']] },
      { s: 'a', en: 'When is the flower show?', w: [['Flower show', 'ಫ್ಲವರ್ ಶೋ', 'Noun', 'flower show'], ['yaavaaga?', 'ಯಾವಾಗ?', 'Question word', 'when']] },
      { s: 'b', en: 'In August and January.', w: [['August', 'ಆಗಸ್ಟ್', 'Noun', 'August'], ['mattu', 'ಮತ್ತು', 'Conjunction', 'and'], ['Janavariyalli', 'ಜನವರಿಯಲ್ಲಿ', 'Noun', 'in January']] },
      { s: 'a', en: 'What time does the park close?', w: [['Park', 'ಪಾರ್ಕ್', 'Noun', 'park'], ['eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['ganTege', 'ಗಂಟೆಗೆ', 'Noun', 'at o’clock'], ['mucchutte?', 'ಮುಚ್ಚುತ್ತೆ?', 'Verb', 'does it close?']] },
      { s: 'b', en: 'At seven in the evening.', w: [['Sanje', 'ಸಂಜೆ', 'Noun', 'evening'], ['eLu', 'ಏಳು', 'Number', 'seven'], ['ganTege', 'ಗಂಟೆಗೆ', 'Noun', 'at o’clock']] },
      { s: 'a', en: 'Thank you.', w: [['Dhanyavaada', 'ಧನ್ಯವಾದ', 'Noun', 'thanks']] }
    ]
  },
  {
    id: 'palace', cat: 'places',
    title: 'Bangalore Palace', kn: 'ಬೆಂಗಳೂರು ಅರಮನೆ',
    place: 'Palace grounds',
    blurb: 'Ask a guide who built it, how old it is, and whether photos are allowed.',
    img: 'img/palace.jpg', hue: 25,
    roles: { a: { en: 'Visitor', kn: 'ಪ್ರವಾಸಿ' }, b: { en: 'Guide', kn: 'ಗೈಡ್' } },
    lines: [
      { s: 'a', en: 'Who built this palace?', w: [['Ee', 'ಈ', 'Adjective', 'this'], ['aramane', 'ಅರಮನೆ', 'Noun', 'palace'], ['yaaru', 'ಯಾರು', 'Question word', 'who'], ['kaTTisidru?', 'ಕಟ್ಟಿಸಿದ್ರು?', 'Verb', 'had it built?']] },
      { s: 'b', en: 'The Mysore Maharajas built it.', w: [['Mysooru', 'ಮೈಸೂರು', 'Noun', 'Mysore'], ['mahaaraajaru', 'ಮಹಾರಾಜರು', 'Noun', 'the Maharajas'], ['kaTTisidru', 'ಕಟ್ಟಿಸಿದ್ರು', 'Verb', 'had it built']] },
      { s: 'a', en: 'How old is it?', w: [['Idu', 'ಇದು', 'Pronoun', 'this'], ['eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['haLeyadu?', 'ಹಳೆಯದು?', 'Adjective', 'old']] },
      { s: 'b', en: 'It is about 140 years old.', w: [['Nooranalavattu', 'ನೂರನಲವತ್ತು', 'Number', 'one hundred forty'], ['varsha', 'ವರ್ಷ', 'Noun', 'years'], ['haLeyadu', 'ಹಳೆಯದು', 'Adjective', 'old']] },
      { s: 'a', en: 'Can I take photos inside?', w: [['OLage', 'ಒಳಗೆ', 'Adverb', 'inside'], ['photo', 'ಫೋಟೋ', 'Noun', 'photo'], ['tegeebahuda?', 'ತೆಗೀಬಹುದಾ?', 'Verb', 'can (I) take?']] },
      { s: 'b', en: 'You need a separate ticket for a camera.', w: [['Camera-ge', 'ಕ್ಯಾಮೆರಾಗೆ', 'Noun', 'for a camera'], ['bere', 'ಬೇರೆ', 'Adjective', 'separate'], ['ticket', 'ಟಿಕೆಟ್', 'Noun', 'ticket'], ['beku', 'ಬೇಕು', 'Verb', 'is needed']] },
      { s: 'a', en: 'Is the audio guide in Kannada?', w: [['Audio guide', 'ಆಡಿಯೋ ಗೈಡ್', 'Noun', 'audio guide'], ['Kannadadalli', 'ಕನ್ನಡದಲ್ಲಿ', 'Noun', 'in Kannada'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is there?']] },
      { s: 'b', en: 'Kannada, English, Hindi, all are there.', w: [['Kannada', 'ಕನ್ನಡ', 'Noun', 'Kannada'], ['English', 'ಇಂಗ್ಲಿಷ್', 'Noun', 'English'], ['Hindi', 'ಹಿಂದಿ', 'Noun', 'Hindi'], ['ellaa', 'ಎಲ್ಲಾ', 'Pronoun', 'all'], ['ide', 'ಇದೆ', 'Verb', 'there is']] },
      { s: 'a', en: 'It is very beautiful!', w: [['Tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['sundaravaagide!', 'ಸುಂದರವಾಗಿದೆ!', 'Verb', 'is beautiful']] }
    ]
  },
  {
    id: 'nandi', cat: 'places',
    title: 'Nandi Hills sunrise', kn: 'ನಂದಿ ಬೆಟ್ಟ',
    place: 'Planning a day trip',
    blurb: 'Plan an early-morning trip with a friend. Uses informal speech.',
    img: 'img/nandi.jpg', hue: 200,
    roles: { a: { en: 'Friend (Riya)', kn: 'ಗೆಳತಿ' }, b: { en: 'Friend (Arjun)', kn: 'ಗೆಳೆಯ' } },
    lines: [
      { s: 'b', en: 'Shall we go to Nandi Hills tomorrow?', w: [['NaaLe', 'ನಾಳೆ', 'Adverb', 'tomorrow'], ['Nandi beTTakke', 'ನಂದಿ ಬೆಟ್ಟಕ್ಕೆ', 'Noun', 'to Nandi Hills'], ['hogonva?', 'ಹೋಗೋಣ್ವಾ?', 'Verb', 'shall we go?']] },
      { s: 'a', en: 'Awesome! How far is it?', w: [['Sakkath!', 'ಸಕತ್!', 'Adjective', 'awesome'], ['Eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['doora?', 'ದೂರ?', 'Noun', 'distance']] },
      { s: 'b', en: 'Sixty kilometres.', w: [['Aravattu', 'ಅರವತ್ತು', 'Number', 'sixty'], ['kilometre', 'ಕಿಲೋಮೀಟರ್', 'Noun', 'kilometres']] },
      { s: 'b', en: 'To see the sunrise we must go early.', w: [['Sooryodaya', 'ಸೂರ್ಯೋದಯ', 'Noun', 'sunrise'], ['noDoke', 'ನೋಡೋಕೆ', 'Verb', 'to see'], ['bega', 'ಬೇಗ', 'Adverb', 'early'], ['hogbeku', 'ಹೋಗ್ಬೇಕು', 'Verb', 'must go']] },
      { s: 'a', en: 'What time shall we leave?', w: [['Eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['ganTege', 'ಗಂಟೆಗೆ', 'Noun', 'at o’clock'], ['horaDona?', 'ಹೊರಡೋಣ?', 'Verb', 'shall we leave?']] },
      { s: 'b', en: 'Four in the morning.', w: [['BeLigge', 'ಬೆಳಿಗ್ಗೆ', 'Adverb', 'in the morning'], ['naalku', 'ನಾಲ್ಕು', 'Number', 'four'], ['ganTege', 'ಗಂಟೆಗೆ', 'Noun', 'at o’clock']] },
      { s: 'a', en: 'Oh no! It is very cold there.', w: [['Ayyo!', 'ಅಯ್ಯೋ!', 'Interjection', 'oh no'], ['alli', 'ಅಲ್ಲಿ', 'Adverb', 'there'], ['tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['chaLi', 'ಚಳಿ', 'Noun', 'cold']] },
      { s: 'b', en: 'Bring a jacket.', w: [['Jacket', 'ಜಾಕೆಟ್', 'Noun', 'jacket'], ['tagonDu', 'ತಗೊಂಡು', 'Verb', 'taking'], ['baa', 'ಬಾ', 'Verb', 'come (informal)']] },
      { s: 'a', en: 'Okay, I will bring the car.', w: [['Aaytu', 'ಆಯ್ತು', 'Particle', 'okay'], ['naanu', 'ನಾನು', 'Pronoun', 'I'], ['car', 'ಕಾರ್', 'Noun', 'car'], ['tarteeni', 'ತರ್ತೀನಿ', 'Verb', 'I will bring']] }
    ]
  },
  {
    id: 'vvpuram', cat: 'places',
    title: 'VV Puram food street', kn: 'ವಿವಿ ಪುರಂ ತಿಂಡಿ ಬೀದಿ',
    place: 'Night food street near Basavanagudi',
    blurb: 'Plan an evening of street food with a friend.',
    img: 'img/vvpuram.jpg', hue: 10,
    roles: { a: { en: 'Friend (Riya)', kn: 'ಗೆಳತಿ' }, b: { en: 'Friend (Arjun)', kn: 'ಗೆಳೆಯ' } },
    lines: [
      { s: 'b', en: 'Shall we go to VV Puram tonight?', w: [['Ivattu', 'ಇವತ್ತು', 'Adverb', 'today'], ['raatri', 'ರಾತ್ರಿ', 'Noun', 'night'], ['VV Purakke', 'ವಿವಿ ಪುರಕ್ಕೆ', 'Noun', 'to VV Puram'], ['hogonva?', 'ಹೋಗೋಣ್ವಾ?', 'Verb', 'shall we go?']] },
      { s: 'a', en: 'What is famous there?', w: [['Alli', 'ಅಲ್ಲಿ', 'Adverb', 'there'], ['enu', 'ಏನು', 'Question word', 'what'], ['famous?', 'ಫೇಮಸ್?', 'Adjective', 'famous']] },
      { s: 'b', en: 'Holige, akki rotti, dosa, you get everything.', w: [['HoLige', 'ಹೋಳಿಗೆ', 'Noun', 'sweet flatbread'], ['akki roTTi', 'ಅಕ್ಕಿ ರೊಟ್ಟಿ', 'Noun', 'rice roti'], ['dose', 'ದೋಸೆ', 'Noun', 'dosa'], ['ellaa', 'ಎಲ್ಲಾ', 'Pronoun', 'all'], ['sigutte', 'ಸಿಗುತ್ತೆ', 'Verb', 'is available']] },
      { s: 'a', en: 'I like spicy food.', w: [['Nange', 'ನಂಗೆ', 'Pronoun', 'to me'], ['khaara', 'ಖಾರ', 'Noun', 'spicy food'], ['ishTa', 'ಇಷ್ಟ', 'Noun', 'liking']] },
      { s: 'b', en: 'Then try the akki rotti.', w: [['Haagaadre', 'ಹಾಗಾದ್ರೆ', 'Conjunction', 'in that case'], ['akki roTTi', 'ಅಕ್ಕಿ ರೊಟ್ಟಿ', 'Noun', 'rice roti'], ['try', 'ಟ್ರೈ', 'Noun', 'try'], ['maaDu', 'ಮಾಡು', 'Verb', 'do (informal)']] },
      { s: 'a', en: 'What sweets can we get?', w: [['Sihi', 'ಸಿಹಿ', 'Noun', 'sweets'], ['enu', 'ಏನು', 'Question word', 'what'], ['sigutte?', 'ಸಿಗುತ್ತೆ?', 'Verb', 'is available?']] },
      { s: 'b', en: 'Holige and jalebi.', w: [['HoLige', 'ಹೋಳಿಗೆ', 'Noun', 'sweet flatbread'], ['mattu', 'ಮತ್ತು', 'Conjunction', 'and'], ['jilebi', 'ಜಿಲೇಬಿ', 'Noun', 'jalebi']] },
      { s: 'a', en: 'Super! I will come.', w: [['Super!', 'ಸೂಪರ್!', 'Adjective', 'super'], ['Naanu', 'ನಾನು', 'Pronoun', 'I'], ['barteeni', 'ಬರ್ತೀನಿ', 'Verb', 'I will come']] },
      { s: 'b', en: 'Come with an empty stomach!', w: [['HoTTe', 'ಹೊಟ್ಟೆ', 'Noun', 'stomach'], ['khaali', 'ಖಾಲಿ', 'Adjective', 'empty'], ['iTkonDu', 'ಇಟ್ಕೊಂಡು', 'Verb', 'keeping'], ['baa!', 'ಬಾ!', 'Verb', 'come (informal)']] }
    ]
  }
);

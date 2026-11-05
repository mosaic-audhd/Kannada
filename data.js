/* Scenario data.
   Each line: { s: 'a' | 'b' (speaker role), en: sentence meaning, w: [[roman, kannada, partOfSpeech, wordMeaning], ...] }
   Transliteration: aa/ee/oo = long vowels; capital D, L, T, N = tongue curled back. */
const SCENARIOS = [
  {
    id: 'airport',
    title: 'Airport to home',
    kn: 'ಏರ್‌ಪೋರ್ಟ್‌ನಿಂದ ಮನೆಗೆ',
    place: 'Kempegowda International Airport',
    blurb: 'You land at BLR and take an app cab to Indiranagar.',
    img: 'img/airport.jpg',
    hue: 205,
    roles: { a: { en: 'Passenger', kn: 'ಪ್ರಯಾಣಿಕ' }, b: { en: 'Cab driver', kn: 'ಕ್ಯಾಬ್ ಡ್ರೈವರ್' } },
    lines: [
      { s: 'b', en: 'Hello. Tell me the OTP.', w: [['Namaskaara', 'ನಮಸ್ಕಾರ', 'Greeting', 'hello'], ['OTP', 'ಒಟಿಪಿ', 'Noun', 'OTP (English)'], ['heLi', 'ಹೇಳಿ', 'Verb', 'please tell']] },
      { s: 'a', en: 'Four, one, two, nine.', w: [['naalku', 'ನಾಲ್ಕು', 'Number', 'four'], ['ondu', 'ಒಂದು', 'Number', 'one'], ['eraDu', 'ಎರಡು', 'Number', 'two'], ['ombattu', 'ಒಂಬತ್ತು', 'Number', 'nine']] },
      { s: 'b', en: 'Where do you need to go?', w: [['Ellige', 'ಎಲ್ಲಿಗೆ', 'Question word', 'to where'], ['hogbeku?', 'ಹೋಗ್ಬೇಕು?', 'Verb', 'need to go']] },
      { s: 'a', en: 'I need to go to Indiranagar.', w: [['Indiranagarakke', 'ಇಂದಿರಾನಗರಕ್ಕೆ', 'Noun', 'to Indiranagar'], ['hogbeku', 'ಹೋಗ್ಬೇಕು', 'Verb', 'need to go']] },
      { s: 'b', en: 'Do you have luggage?', w: [['Luggage', 'ಲಗೇಜ್', 'Noun', 'luggage (English)'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is there?']] },
      { s: 'a', en: 'Yes, I have two bags.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['eraDu', 'ಎರಡು', 'Number', 'two'], ['bag', 'ಬ್ಯಾಗ್', 'Noun', 'bag (English)'], ['ide', 'ಇದೆ', 'Verb', 'there is']] },
      { s: 'a', en: 'How long will it take?', w: [['Eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['hottu', 'ಹೊತ್ತು', 'Noun', 'time'], ['aagutte?', 'ಆಗುತ್ತೆ?', 'Verb', 'will it take']] },
      { s: 'b', en: 'It will take one hour.', w: [['Ondu', 'ಒಂದು', 'Number', 'one'], ['ganTe', 'ಗಂಟೆ', 'Noun', 'hour'], ['aagutte', 'ಆಗುತ್ತೆ', 'Verb', 'will take']] },
      { s: 'a', en: 'Please turn on the AC.', w: [['AC', 'ಎಸಿ', 'Noun', 'AC (English)'], ['haaki', 'ಹಾಕಿ', 'Verb', 'please put on'], ['please', 'ಪ್ಲೀಸ್', 'Particle', 'please (English)']] },
      { s: 'b', en: 'Okay, I will turn it on.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['haakteeni', 'ಹಾಕ್ತೀನಿ', 'Verb', 'I will put on']] },
      { s: 'a', en: 'Stop here.', w: [['Illi', 'ಇಲ್ಲಿ', 'Adverb', 'here'], ['nilsi', 'ನಿಲ್ಸಿ', 'Verb', 'please stop']] },
      { s: 'b', en: 'Six hundred rupees.', w: [['Aaru', 'ಆರು', 'Number', 'six'], ['nooru', 'ನೂರು', 'Number', 'hundred'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] },
      { s: 'a', en: 'I will pay by UPI. Thank you!', w: [['UPI', 'ಯುಪಿಐ', 'Noun', 'UPI (English)'], ['maaDteeni', 'ಮಾಡ್ತೀನಿ', 'Verb', 'I will do'], ['Dhanyavaada', 'ಧನ್ಯವಾದ', 'Noun', 'thanks']] }
    ]
  },
  {
    id: 'auto',
    title: 'Auto rickshaw ride',
    kn: 'ಆಟೋ ಪ್ರಯಾಣ',
    place: 'MG Road',
    blurb: 'Stop an auto, agree on the fare, and give directions.',
    img: 'img/auto.jpg',
    hue: 48,
    roles: { a: { en: 'Passenger', kn: 'ಪ್ರಯಾಣಿಕ' }, b: { en: 'Auto driver', kn: 'ಆಟೋ ಡ್ರೈವರ್' } },
    lines: [
      { s: 'a', en: 'Will you come to MG Road?', w: [['MG Road-ge', 'ಎಂಜಿ ರೋಡ್‌ಗೆ', 'Noun', 'to MG Road'], ['barteera?', 'ಬರ್ತೀರಾ?', 'Verb', 'will you come?']] },
      { s: 'b', en: 'I will come. It will be a hundred rupees.', w: [['Barteeni', 'ಬರ್ತೀನಿ', 'Verb', 'I will come'], ['nooru', 'ನೂರು', 'Number', 'hundred'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees'], ['aagutte', 'ಆಗುತ್ತೆ', 'Verb', 'it will be']] },
      { s: 'a', en: 'Put the meter on.', w: [['Meter', 'ಮೀಟರ್', 'Noun', 'meter (English)'], ['haaki', 'ಹಾಕಿ', 'Verb', 'please put on']] },
      { s: 'b', en: 'No meter. Give a hundred.', w: [['Meter', 'ಮೀಟರ್', 'Noun', 'meter'], ['illa', 'ಇಲ್ಲ', 'Verb', 'is not there'], ['nooru', 'ನೂರು', 'Number', 'hundred'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'a', en: 'That is too much. I will give eighty.', w: [['Tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['jaasti', 'ಜಾಸ್ತಿ', 'Adjective', 'more / too much'], ['embattu', 'ಎಂಬತ್ತು', 'Number', 'eighty'], ['koDteeni', 'ಕೊಡ್ತೀನಿ', 'Verb', 'I will give']] },
      { s: 'b', en: 'Okay, sit down.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['kootkoLLi', 'ಕೂತ್ಕೊಳ್ಳಿ', 'Verb', 'please sit']] },
      { s: 'a', en: 'Go a little slowly.', w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['nidhaanavaagi', 'ನಿಧಾನವಾಗಿ', 'Adverb', 'slowly'], ['hogi', 'ಹೋಗಿ', 'Verb', 'please go']] },
      { s: 'b', en: 'Which way?', w: [['Yaava', 'ಯಾವ', 'Question word', 'which'], ['kaDe?', 'ಕಡೆ?', 'Noun', 'side / way']] },
      { s: 'a', en: 'Take a right up ahead.', w: [['Munde', 'ಮುಂದೆ', 'Adverb', 'ahead'], ['right', 'ರೈಟ್', 'Noun', 'right (English)'], ['tagoLLi', 'ತಗೊಳ್ಳಿ', 'Verb', 'please take']] },
      { s: 'a', en: 'Here is enough.', w: [['Illi', 'ಇಲ್ಲಿ', 'Adverb', 'here'], ['saaku', 'ಸಾಕು', 'Verb', 'is enough']] },
      { s: 'b', en: 'Do you have change?', w: [['Chillare', 'ಚಿಲ್ಲರೆ', 'Noun', 'small change'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is there?']] },
      { s: 'a', en: 'Yes, here, take it.', w: [['Ide', 'ಇದೆ', 'Verb', 'there is'], ['tagoLLi', 'ತಗೊಳ್ಳಿ', 'Verb', 'please take']] }
    ]
  },
  {
    id: 'darshini',
    title: 'Breakfast at a darshini',
    kn: 'ದರ್ಶಿನಿಯಲ್ಲಿ ತಿಂಡಿ',
    place: 'A self-service darshini',
    blurb: 'Order dosa, idli and filter coffee, then pay.',
    img: 'img/darshini.jpg',
    hue: 22,
    roles: { a: { en: 'Customer', kn: 'ಗ್ರಾಹಕ' }, b: { en: 'Cashier', kn: 'ಕ್ಯಾಶಿಯರ್' } },
    lines: [
      { s: 'b', en: 'What would you like?', w: [['Enu', 'ಏನು', 'Question word', 'what'], ['beku?', 'ಬೇಕು?', 'Verb', 'is needed']] },
      { s: 'a', en: 'One masala dosa and two idlis.', w: [['Ondu', 'ಒಂದು', 'Number', 'one'], ['masaale dose', 'ಮಸಾಲೆ ದೋಸೆ', 'Noun', 'masala dosa'], ['eraDu', 'ಎರಡು', 'Number', 'two'], ['iDli', 'ಇಡ್ಲಿ', 'Noun', 'idli']] },
      { s: 'b', en: 'Parcel, or will you eat here?', w: [['Parcel-aa', 'ಪಾರ್ಸೆಲ್ಲಾ', 'Noun', 'parcel? (English)'], ['ille', 'ಇಲ್ಲೇ', 'Adverb', 'right here'], ['tinteera?', 'ತಿಂತೀರಾ?', 'Verb', 'will you eat?']] },
      { s: 'a', en: 'I will eat here.', w: [['Ille', 'ಇಲ್ಲೇ', 'Adverb', 'right here'], ['tinteeni', 'ತಿಂತೀನಿ', 'Verb', 'I will eat']] },
      { s: 'b', en: 'Do you want coffee?', w: [['Coffee', 'ಕಾಫಿ', 'Noun', 'coffee'], ['beka?', 'ಬೇಕಾ?', 'Verb', 'is it needed?']] },
      { s: 'a', en: 'Yes, one coffee, less sugar.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['ondu', 'ಒಂದು', 'Number', 'one'], ['coffee', 'ಕಾಫಿ', 'Noun', 'coffee'], ['sakkare', 'ಸಕ್ಕರೆ', 'Noun', 'sugar'], ['kammi', 'ಕಮ್ಮಿ', 'Adjective', 'less']] },
      { s: 'a', en: 'How much is it?', w: [['Eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['aaytu?', 'ಆಯ್ತು?', 'Verb', 'did it become']] },
      { s: 'b', en: 'One hundred and fifty rupees.', w: [['Nooraivattu', 'ನೂರೈವತ್ತು', 'Number', 'one hundred fifty'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] },
      { s: 'a', en: 'The dosa was very good.', w: [['Dose', 'ದೋಸೆ', 'Noun', 'dosa'], ['tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['chennaagittu', 'ಚೆನ್ನಾಗಿತ್ತು', 'Verb', 'was good']] }
    ]
  },
  {
    id: 'market',
    title: 'Vegetable market',
    kn: 'ತರಕಾರಿ ಮಾರ್ಕೆಟ್',
    place: 'Malleswaram market',
    blurb: 'Ask prices, bargain a little, and buy by the kilo.',
    img: 'img/market.jpg',
    hue: 110,
    roles: { a: { en: 'Customer', kn: 'ಗ್ರಾಹಕ' }, b: { en: 'Vendor', kn: 'ವ್ಯಾಪಾರಿ' } },
    lines: [
      { s: 'b', en: 'Come, what do you need?', w: [['Banni', 'ಬನ್ನಿ', 'Verb', 'please come'], ['enu', 'ಏನು', 'Question word', 'what'], ['beku?', 'ಬೇಕು?', 'Verb', 'is needed']] },
      { s: 'a', en: 'How much are tomatoes per kilo?', w: [['Tomato', 'ಟೊಮೇಟೊ', 'Noun', 'tomato'], ['kejige', 'ಕೆಜಿಗೆ', 'Noun', 'per kilo'], ['eshtu?', 'ಎಷ್ಟು?', 'Question word', 'how much']] },
      { s: 'b', en: 'Forty rupees a kilo.', w: [['Kejige', 'ಕೆಜಿಗೆ', 'Noun', 'per kilo'], ['nalavattu', 'ನಲವತ್ತು', 'Number', 'forty'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] },
      { s: 'a', en: 'Reduce it a little.', w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['kammi', 'ಕಮ್ಮಿ', 'Adjective', 'less'], ['maaDi', 'ಮಾಡಿ', 'Verb', 'please do']] },
      { s: 'b', en: 'Give thirty-five.', w: [['Moovattaidu', 'ಮೂವತ್ತೈದು', 'Number', 'thirty-five'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'a', en: 'Okay, give me one kilo.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['ondu', 'ಒಂದು', 'Number', 'one'], ['keji', 'ಕೆಜಿ', 'Noun', 'kilo'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'Do you need anything else?', w: [['Bere', 'ಬೇರೆ', 'Adjective', 'other'], ['enaadru', 'ಏನಾದ್ರೂ', 'Pronoun', 'anything'], ['beka?', 'ಬೇಕಾ?', 'Verb', 'is it needed?']] },
      { s: 'a', en: 'Half a kilo of onions.', w: [['Ardha', 'ಅರ್ಧ', 'Adjective', 'half'], ['keji', 'ಕೆಜಿ', 'Noun', 'kilo'], ['eeruLLi', 'ಈರುಳ್ಳಿ', 'Noun', 'onion']] },
      { s: 'a', en: 'Is the coriander free?', w: [['Kottambari', 'ಕೊತ್ತಂಬರಿ', 'Noun', 'coriander'], ['soppu', 'ಸೊಪ್ಪು', 'Noun', 'leaves'], ['free-naa?', 'ಫ್ರೀನಾ?', 'Adjective', 'free? (English)']] },
      { s: 'b', en: 'Okay, take it.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['tagoLLi', 'ತಗೊಳ್ಳಿ', 'Verb', 'please take']] }
    ]
  },
  {
    id: 'directions',
    title: 'Asking for directions',
    kn: 'ದಾರಿ ಕೇಳುವುದು',
    place: 'A busy street corner',
    blurb: 'Find the nearest metro station on foot.',
    img: 'img/directions.jpg',
    hue: 280,
    roles: { a: { en: 'Newcomer', kn: 'ಹೊಸಬರು' }, b: { en: 'Local person', kn: 'ಸ್ಥಳೀಯರು' } },
    lines: [
      { s: 'a', en: 'Where is the metro station?', w: [['Metro station', 'ಮೆಟ್ರೋ ಸ್ಟೇಷನ್', 'Noun', 'metro station'], ['elli', 'ಎಲ್ಲಿ', 'Question word', 'where'], ['ide?', 'ಇದೆ?', 'Verb', 'is it']] },
      { s: 'b', en: 'Go straight.', w: [['Neravaagi', 'ನೇರವಾಗಿ', 'Adverb', 'straight'], ['hogi', 'ಹೋಗಿ', 'Verb', 'please go']] },
      { s: 'b', en: 'Take a left near the signal.', w: [['Signal', 'ಸಿಗ್ನಲ್', 'Noun', 'traffic signal'], ['hatra', 'ಹತ್ರ', 'Postposition', 'near'], ['left', 'ಲೆಫ್ಟ್', 'Noun', 'left (English)'], ['tagoLLi', 'ತಗೊಳ್ಳಿ', 'Verb', 'please take']] },
      { s: 'a', en: 'Is it very far?', w: [['Tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['doora', 'ದೂರ', 'Adjective', 'far'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is it?']] },
      { s: 'b', en: 'No, it is close. Five minutes.', w: [['Illa', 'ಇಲ್ಲ', 'Particle', 'no'], ['hatra', 'ಹತ್ರ', 'Adverb', 'near'], ['ide', 'ಇದೆ', 'Verb', 'it is'], ['aidu', 'ಐದು', 'Number', 'five'], ['nimisha', 'ನಿಮಿಷ', 'Noun', 'minutes']] },
      { s: 'a', en: 'Can I walk there?', w: [['NaDedu', 'ನಡೆದು', 'Verb', 'by walking'], ['hogbahuda?', 'ಹೋಗ್ಬಹುದಾ?', 'Verb', 'can (I) go?']] },
      { s: 'b', en: 'Yes, walk there.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['naDedu', 'ನಡೆದು', 'Verb', 'by walking'], ['hogi', 'ಹೋಗಿ', 'Verb', 'please go']] },
      { s: 'a', en: 'Thank you!', w: [['Dhanyavaada', 'ಧನ್ಯವಾದ', 'Noun', 'thanks']] }
    ]
  },
  {
    id: 'neighbour',
    title: 'Meeting a neighbour',
    kn: 'ಪಕ್ಕದ ಮನೆಯವರ ಪರಿಚಯ',
    place: 'Your apartment building',
    blurb: 'Introduce yourself to the family next door.',
    img: 'img/neighbour.jpg',
    hue: 160,
    roles: { a: { en: 'Newcomer', kn: 'ಹೊಸಬರು' }, b: { en: 'Neighbour', kn: 'ಪಕ್ಕದ ಮನೆಯವರು' } },
    lines: [
      { s: 'b', en: 'Hello. Are you new here?', w: [['Namaskaara', 'ನಮಸ್ಕಾರ', 'Greeting', 'hello'], ['neevu', 'ನೀವು', 'Pronoun', 'you (polite)'], ['hosabra?', 'ಹೊಸಬ್ರಾ?', 'Noun', 'a newcomer?']] },
      { s: 'a', en: 'Yes. My name is Riya.', w: [['Haudu', 'ಹೌದು', 'Particle', 'yes'], ['nanna', 'ನನ್ನ', 'Pronoun', 'my'], ['hesaru', 'ಹೆಸರು', 'Noun', 'name'], ['Riya', 'ರಿಯಾ', 'Noun', 'Riya (a name)']] },
      { s: 'a', en: 'What is your name?', w: [['Nimma', 'ನಿಮ್ಮ', 'Pronoun', 'your'], ['hesaru', 'ಹೆಸರು', 'Noun', 'name'], ['enu?', 'ಏನು?', 'Question word', 'what']] },
      { s: 'b', en: 'My name is Lakshmi.', w: [['Nanna', 'ನನ್ನ', 'Pronoun', 'my'], ['hesaru', 'ಹೆಸರು', 'Noun', 'name'], ['Lakshmi', 'ಲಕ್ಷ್ಮಿ', 'Noun', 'Lakshmi (a name)']] },
      { s: 'b', en: 'Where have you come from?', w: [['Neevu', 'ನೀವು', 'Pronoun', 'you (polite)'], ['ellinda', 'ಎಲ್ಲಿಂದ', 'Question word', 'from where'], ['bandiddeera?', 'ಬಂದಿದ್ದೀರಾ?', 'Verb', 'have you come?']] },
      { s: 'a', en: 'I have come from Delhi.', w: [['Naanu', 'ನಾನು', 'Pronoun', 'I'], ['Delhi-yinda', 'ದೆಹಲಿಯಿಂದ', 'Noun', 'from Delhi'], ['bandiddeeni', 'ಬಂದಿದ್ದೀನಿ', 'Verb', 'I have come']] },
      { s: 'b', en: 'Do you know Kannada?', w: [['Kannada', 'ಕನ್ನಡ', 'Noun', 'Kannada'], ['barutta?', 'ಬರುತ್ತಾ?', 'Verb', 'does it come (to you)?']] },
      { s: 'a', en: 'I know a little.', w: [['Swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['swalpa', 'ಸ್ವಲ್ಪ', 'Adverb', 'a little'], ['barutte', 'ಬರುತ್ತೆ', 'Verb', 'it comes (to me)']] },
      { s: 'b', en: 'Have you eaten?', w: [['Oota', 'ಊಟ', 'Noun', 'meal'], ['aayta?', 'ಆಯ್ತಾ?', 'Verb', 'is it done?']] },
      { s: 'a', en: 'Yes. And you?', w: [['Aaytu', 'ಆಯ್ತು', 'Verb', 'it is done'], ['nimdu?', 'ನಿಮ್ದು?', 'Pronoun', 'yours?']] },
      { s: 'b', en: 'If you need anything, tell me.', w: [['Enaadru', 'ಏನಾದ್ರೂ', 'Pronoun', 'anything'], ['beku', 'ಬೇಕು', 'Verb', 'is needed'], ['andre', 'ಅಂದ್ರೆ', 'Conjunction', 'if'], ['heLi', 'ಹೇಳಿ', 'Verb', 'please tell']] }
    ]
  },
  {
    id: 'pharmacy',
    title: 'At the medical shop',
    kn: 'ಮೆಡಿಕಲ್ ಶಾಪ್‌ನಲ್ಲಿ',
    place: 'Neighbourhood pharmacy',
    blurb: 'Describe a headache and ask how to take the tablet.',
    img: 'img/pharmacy.jpg',
    hue: 175,
    roles: { a: { en: 'Customer', kn: 'ಗ್ರಾಹಕ' }, b: { en: 'Pharmacist', kn: 'ಫಾರ್ಮಸಿಸ್ಟ್' } },
    lines: [
      { s: 'a', en: 'I have a headache. Give me a tablet.', w: [['Talenovu', 'ತಲೆನೋವು', 'Noun', 'headache'], ['ide', 'ಇದೆ', 'Verb', 'there is'], ['maatre', 'ಮಾತ್ರೆ', 'Noun', 'tablet'], ['koDi', 'ಕೊಡಿ', 'Verb', 'please give']] },
      { s: 'b', en: 'Do you have a fever?', w: [['Jvara', 'ಜ್ವರ', 'Noun', 'fever'], ['ideya?', 'ಇದೆಯಾ?', 'Verb', 'is there?']] },
      { s: 'a', en: 'No, I do not have a fever.', w: [['Illa', 'ಇಲ್ಲ', 'Particle', 'no'], ['jvara', 'ಜ್ವರ', 'Noun', 'fever'], ['illa', 'ಇಲ್ಲ', 'Verb', 'is not there']] },
      { s: 'b', en: 'Take this tablet.', w: [['Ee', 'ಈ', 'Adjective', 'this'], ['maatre', 'ಮಾತ್ರೆ', 'Noun', 'tablet'], ['tagoLLi', 'ತಗೊಳ್ಳಿ', 'Verb', 'please take']] },
      { s: 'a', en: 'How many times a day?', w: [['Dinakke', 'ದಿನಕ್ಕೆ', 'Noun', 'per day'], ['eshtu', 'ಎಷ್ಟು', 'Question word', 'how many'], ['sala?', 'ಸಲ?', 'Noun', 'times']] },
      { s: 'b', en: 'Twice, after food.', w: [['EraDu', 'ಎರಡು', 'Number', 'two'], ['sala', 'ಸಲ', 'Noun', 'times'], ['oota', 'ಊಟ', 'Noun', 'meal'], ['aadmele', 'ಆದ್ಮೇಲೆ', 'Postposition', 'after']] },
      { s: 'a', en: 'How much is it?', w: [['Eshtu', 'ಎಷ್ಟು', 'Question word', 'how much'], ['aaytu?', 'ಆಯ್ತು?', 'Verb', 'did it become']] },
      { s: 'b', en: 'Twenty rupees.', w: [['Ippattu', 'ಇಪ್ಪತ್ತು', 'Number', 'twenty'], ['rupaayi', 'ರೂಪಾಯಿ', 'Noun', 'rupees']] }
    ]
  },
  {
    id: 'relatives',
    title: 'Visiting relatives',
    kn: 'ನೆಂಟರ ಮನೆಗೆ ಭೇಟಿ',
    place: 'Aunty’s home in Jayanagar',
    blurb: 'Greet the family, decline coffee politely, and stay for lunch.',
    img: 'img/relatives.jpg',
    hue: 340,
    roles: { a: { en: 'Guest', kn: 'ಅತಿಥಿ' }, b: { en: 'Host (Aunty)', kn: 'ಆಂಟಿ' } },
    lines: [
      { s: 'b', en: 'Come, come, come inside.', w: [['Banni', 'ಬನ್ನಿ', 'Verb', 'please come'], ['banni', 'ಬನ್ನಿ', 'Verb', 'please come'], ['oLage', 'ಒಳಗೆ', 'Adverb', 'inside'], ['banni', 'ಬನ್ನಿ', 'Verb', 'please come']] },
      { s: 'a', en: 'Hello Aunty. How are you?', w: [['Namaskaara', 'ನಮಸ್ಕಾರ', 'Greeting', 'hello'], ['aunty', 'ಆಂಟಿ', 'Noun', 'aunty'], ['hegiddeera?', 'ಹೇಗಿದ್ದೀರಾ?', 'Verb', 'how are you?']] },
      { s: 'b', en: 'I am fine. How are you?', w: [['Chennaagiddeeni', 'ಚೆನ್ನಾಗಿದ್ದೀನಿ', 'Verb', 'I am fine'], ['neevu', 'ನೀವು', 'Pronoun', 'you (polite)'], ['hegiddeera?', 'ಹೇಗಿದ್ದೀರಾ?', 'Verb', 'how are you?']] },
      { s: 'a', en: 'I am fine too.', w: [['Naanu', 'ನಾನೂ', 'Pronoun', 'I too'], ['chennaagiddeeni', 'ಚೆನ್ನಾಗಿದ್ದೀನಿ', 'Verb', 'I am fine']] },
      { s: 'a', en: 'How is everyone at home?', w: [['Manelli', 'ಮನೇಲಿ', 'Noun', 'at home'], ['ellaru', 'ಎಲ್ಲರೂ', 'Pronoun', 'everyone'], ['hegiddaare?', 'ಹೇಗಿದ್ದಾರೆ?', 'Verb', 'how are they?']] },
      { s: 'b', en: 'Everyone is fine. Sit down.', w: [['Ellaru', 'ಎಲ್ಲರೂ', 'Pronoun', 'everyone'], ['chennaagiddaare', 'ಚೆನ್ನಾಗಿದ್ದಾರೆ', 'Verb', 'they are fine'], ['kootkoLLi', 'ಕೂತ್ಕೊಳ್ಳಿ', 'Verb', 'please sit']] },
      { s: 'b', en: 'Will you have coffee?', w: [['Coffee', 'ಕಾಫಿ', 'Noun', 'coffee'], ['kuDeeteera?', 'ಕುಡೀತೀರಾ?', 'Verb', 'will you drink?']] },
      { s: 'a', en: 'No thanks, water is enough.', w: [['BeDa', 'ಬೇಡ', 'Verb', 'not needed'], ['neeru', 'ನೀರು', 'Noun', 'water'], ['saaku', 'ಸಾಕು', 'Verb', 'is enough']] },
      { s: 'b', en: 'Have lunch before you go.', w: [['Oota', 'ಊಟ', 'Noun', 'meal'], ['maaDkonDe', 'ಮಾಡ್ಕೊಂಡೇ', 'Verb', 'after having'], ['hogi', 'ಹೋಗಿ', 'Verb', 'please go']] },
      { s: 'a', en: 'Okay Aunty, thank you so much.', w: [['Sari', 'ಸರಿ', 'Particle', 'okay'], ['aunty', 'ಆಂಟಿ', 'Noun', 'aunty'], ['tumba', 'ತುಂಬಾ', 'Adverb', 'very'], ['thanks', 'ಥ್ಯಾಂಕ್ಸ್', 'Noun', 'thanks (English)']] }
    ]
  }
];

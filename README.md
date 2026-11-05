# Maathaadi · ಮಾತಾಡಿ

Everyday **Bengaluru Kannada role plays** for complete beginners. Plain HTML, CSS and JavaScript, no build step.

Open it with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root), or just open `index.html` locally.

## How to use it in class

1. Pick a scenario (airport cab, auto rickshaw, darshini, market, directions, neighbour, medical shop, relatives).
2. Choose who the **student** plays. The teacher takes the other role.
3. Each slide is one line of dialogue, shown as:
   - the sound in English letters
   - the Kannada script
   - the part of speech of each word (plus a small word meaning)
4. With **Hide answers** on, the student's lines appear as an English prompt first. Press Space to reveal the Kannada.
5. At the end, swap roles and play it again.

| Key | Action |
| --- | --- |
| ← / → | previous / next slide |
| Space / Enter | reveal the student's line, then next |
| S | swap roles |
| H | hide / show student answers |
| Esc | back to scenarios |
| 1 / 2 | choose a role in the role picker |

Links like `…/#airport-a-3` open a scenario directly (scenario id, student role `a`/`b`, slide number).

## Editing scenarios

All dialogue lives in `data.js`. Each word is `[roman, kannada, partOfSpeech, meaning]`, and each line has a speaker role `a` or `b`.

Spelling key: `aa / ee / oo` are long vowels; capital `D L T N` are retroflex (tongue curled back).

## Photo credits

All photos are from Wikimedia Commons, used under their respective free licenses (see each file page for author and license):

- `img/airport.jpg`: [Kempegowda International Airport Terminal 2 departures exterior, Bangalore - 2026](https://commons.wikimedia.org/wiki/File:Kempegowda_International_Airport_Terminal_2_departures_exterior,_Bangalore_-_2026.jpg)
- `img/auto.jpg`: [Namma yatri Auto-rickshaw in Bangalore](https://commons.wikimedia.org/wiki/File:Namma_yatri_Auto-rickshaw_in_Bangalore.jpg)
- `img/darshini.jpg`: [Masala Dosa 2023](https://commons.wikimedia.org/wiki/File:Masala_Dosa_2023.jpg)
- `img/market.jpg`: [Malleswaram vegetable market, Bangalore](https://commons.wikimedia.org/wiki/File:Malleswaram_vegetable_market,_Bangalore.jpg)
- `img/directions.jpg`: [MG Road, Bangalore (2025)](https://commons.wikimedia.org/wiki/File:MG_Road,_Bangalore_(2025).jpg)
- `img/neighbour.jpg`: [Hara Vijaya Heights, Bangalore Kanakapura road Apartment flat](https://commons.wikimedia.org/wiki/File:Hara_Vijaya_Heights,_Bangalore_Kanakapura_road_Apartment_flat.JPG)
- `img/pharmacy.jpg`: [Bangalore pharmacy](https://commons.wikimedia.org/wiki/File:Bangalore_pharmacy.jpg)
- `img/relatives.jpg`: [Filter kaapi](https://commons.wikimedia.org/wiki/File:Filter_kaapi.JPG)

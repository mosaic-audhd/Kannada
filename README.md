# Maathaadi · ಮಾತಾಡಿ

Everyday **Bengaluru Kannada role plays** for complete beginners. Plain HTML, CSS and JavaScript, no build step.

Open it with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root), or just open `index.html` locally.

## How to use it in class

1. Pick a role play from one of the sections: Getting around, Family friends & kids, Food & taste, Shopping & street help, Famous places. Or open a word list (filler words, slang that impresses locals).
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

Links like `…/#airport-a-3` open a role play directly (id, student role `a`/`b`, slide number). Word lists use `…/#fillers-3`.

## Editing scenarios

Role plays live in `data.js` and `data-more.js`; word lists and the home-page sections live in `words.js`. Each word is `[roman, kannada, partOfSpeech, meaning]`, and each line has a speaker role `a` or `b`.

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
- `img/relatives.jpg`: [Filter kaapi](https://commons.wikimedia.org/wiki/File:Filter_kaapi.JPG) (also used for “Who is in your family?”)
- `img/metro.jpg`: [Namma metro](https://commons.wikimedia.org/wiki/File:Namma_metro.jpg)
- `img/bus.jpg`: [A BMTC bus Public Transport Bangalore Karnataka India 2014](https://commons.wikimedia.org/wiki/File:A_BMTC_bus_Public_Transport_Bangalore_Karnataka_India_2014.jpg)
- `img/cabcall.jpg`: [An urban road and traffic in Bangalore Karnataka India April 2014](https://commons.wikimedia.org/wiki/File:An_urban_road_and_traffic_in_Bangalore_Karnataka_India_April_2014.jpg)
- `img/kids.jpg`: [Flower show-1-cubbon park-bangalore-India](https://commons.wikimedia.org/wiki/File:Flower_show-1-cubbon_park-bangalore-India.jpg)
- `img/friends.jpg`: [Bangalore Church street trees 1](https://commons.wikimedia.org/wiki/File:Bangalore_Church_street_trees_1.jpg)
- `img/restaurant.jpg`: [Food at MTR Restaurant, Indiaranagar, Bangalore, Karnatak](https://commons.wikimedia.org/wiki/File:Food_at_MTR_Restaurant,_Indiaranagar,_Bangalore,_Karnatak.jpg)
- `img/homefood.jpg`: [Lunch from Karnataka on a plantain leaf](https://commons.wikimedia.org/wiki/File:Lunch_from_Karnataka_on_a_plantain_leaf.jpg)
- `img/coconut.jpg`: [Tender Coconut seller in Kannur market](https://commons.wikimedia.org/wiki/File:Tender_Coconut_seller_in_Kannur_market.jpg)
- `img/clothes.jpg`: [Commercial Street - Bangalore (24047126747)](https://commons.wikimedia.org/wiki/File:Commercial_Street_-_Bangalore_(24047126747).jpg)
- `img/kirana.jpg`: [Provisions Shop Simsa Manali Himachal May24 A7CR 00124](https://commons.wikimedia.org/wiki/File:Provisions_Shop_Simsa_Manali_Himachal_May24_A7CR_00124.jpg)
- `img/streethelp.jpg`: [Bangalore East Railway Station, Pedestrian Crossing](https://commons.wikimedia.org/wiki/File:Bangalore_East_Railway_Station,_Pedestrian_Crossing.jpg)
- `img/lalbagh.jpg`: [Glass house Lalbagh](https://commons.wikimedia.org/wiki/File:Glass_house_Lalbagh.jpg)
- `img/nandi.jpg`: [Sunrise at Nandi Hills](https://commons.wikimedia.org/wiki/File:Sunrise_at_Nandi_Hills.jpg)
- `img/palace.jpg`: [Bangalore Palace facade on a cloudy day](https://commons.wikimedia.org/wiki/File:Bangalore_Palace_facade_on_a_cloudy_day.jpg)
- `img/vvpuram.jpg`: [Avarebele Dose - VV Puram Food Street, Bangalore - Karnataka - PXL5960](https://commons.wikimedia.org/wiki/File:Avarebele_Dose_-_VV_Puram_Food_Street,_Bangalore_-_Karnataka_-_PXL5960.jpg)
- `img/fillers.jpg`: [Bangalore city image](https://commons.wikimedia.org/wiki/File:Bangalore_city_image.jpg)
- `img/slang.jpg`: [Brigade Road Bangalore](https://commons.wikimedia.org/wiki/File:Brigade_Road_Bangalore.jpg)

# Maathaadi · ಮಾತಾಡಿ

Everyday **Bengaluru Kannada role plays** for complete beginners. Plain HTML, CSS and JavaScript, no build step.

Open it with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root), or just open `index.html` locally.

## How to use it in class

1. Pick a role play from one of the sections: Getting around, Family friends & kids, Food & taste, Shopping & street help, Home & daily life, Famous places, and Meeting people & goodbyes (each situation in polite and casual speech). Or open a word list (filler words, slang that impresses locals).
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

Role plays live in `data.js`, `data-more.js` and `data-new.js`; word lists and the home-page sections live in `words.js`; the meeting-people role plays and the polite vs casual list live in `data-meet.js`. Each word is `[roman, kannada, partOfSpeech, meaning]`, and each line has a speaker role `a` or `b`.

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
- `img/biketaxi.jpg`: [Bangalore India traffic](https://commons.wikimedia.org/wiki/File:Bangalore_India_traffic.jpg)
- `img/renting.jpg`: [Apartment buildings in Bengaluru (2026)](https://commons.wikimedia.org/wiki/File:Apartment_buildings_in_Bengaluru_(2026).jpg)
- `img/househelp.jpg`: [Preparation of cooking Indian food at kitchen in a household](https://commons.wikimedia.org/wiki/File:Preparation_of_cooking_Indian_food_at_kitchen_in_a_household.jpg)
- `img/delivery.jpg`: [BDA Link Road - after rain (2022) 01](https://commons.wikimedia.org/wiki/File:BDA_Link_Road_-_after_rain_(2022)_01.jpg)
- `img/doctor.jpg`: [Doctors Table](https://commons.wikimedia.org/wiki/File:Doctors_Table.jpg)
- `img/office.jpg`: [IBM Bangalore Manyata 2](https://commons.wikimedia.org/wiki/File:IBM_Bangalore_Manyata_2.jpg)
- `img/salon.jpg`: [A Barber Shop in Koovery](https://commons.wikimedia.org/wiki/File:A_Barber_Shop_in_Koovery.jpg)
- `img/bakery.jpg`: [Iyengar Bakery, Dasarahalli, Bangalore, India](https://commons.wikimedia.org/wiki/File:Iyengar_Bakery,_Dasarahalli,_Bangalore,_India.jpg)
- `img/deepavali.jpg`: [Diyas on a deepavali day](https://commons.wikimedia.org/wiki/File:Diyas_on_a_deepavali_day.jpg)
- `img/temple.jpg`: [Sri Big Bull Temple, Dodda Ganeshana Gudi, Bangalore, India - 20130526-05](https://commons.wikimedia.org/wiki/File:Sri_Big_Bull_Temple,_Dodda_Ganeshana_Gudi,_Bangalore,_India_-_20130526-05.JPG)
- `img/introformal.jpg`: [A tamil youth with greeting gesture](https://commons.wikimedia.org/wiki/File:A_tamil_youth_with_greeting_gesture.JPG)
- `img/introcasual.jpg`: [Fancy Cutting Chai](https://commons.wikimedia.org/wiki/File:Fancy_Cutting_Chai.jpg)
- `img/chatformal.jpg`: [Shri Satya Sai Super Speciality Hospital Bus Stop 2-25-2012 5-26-45 PM](https://commons.wikimedia.org/wiki/File:Shri_Satya_Sai_Super_Speciality_Hospital_Bus_Stop_2-25-2012_5-26-45_PM.JPG)
- `img/chatcasual.jpg`: [Cricket at National Park (289441129)](https://commons.wikimedia.org/wiki/File:Cricket_at_National_Park_(289441129).jpg)
- `img/byecasual.jpg`: [KSR Bengaluru station platform 5](https://commons.wikimedia.org/wiki/File:KSR_Bengaluru_station_platform_5.jpg)
- `img/register.jpg`: [Kannada Rajyotsava](https://commons.wikimedia.org/wiki/File:Kannada_Rajyotsava.jpg)
- `img/byeformal.jpg`: same photo as `img/deepavali.jpg`

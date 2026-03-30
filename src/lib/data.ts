import { Category, Dua } from '@/types'

export const categories: Category[] = [
  { id: 'morning', label: 'Morning Duas', description: 'Start your day with remembrance of Allah. Recite these after Fajr prayer.', icon: 'sun' },
  { id: 'night', label: 'Night Duas', description: 'Protect yourself before sleep with these evening adhkar and supplications.', icon: 'moon' },
  { id: 'travel', label: 'Travel', description: "Seek Allah's protection and ease when embarking on a journey.", icon: 'plane' },
  { id: 'protection', label: 'Protection', description: 'Shield yourself with these powerful duas for safety and divine protection.', icon: 'shield' },
  { id: 'wealth', label: 'Wealth & Rizq', description: 'Ask Allah for halal sustenance, guidance, and self-sufficiency.', icon: 'coins' },
  { id: 'mental', label: 'Mental Health', description: 'Find peace and relief from worry, grief, and anxiety through these supplications.', icon: 'heart' },
  { id: 'surahs', label: 'Surahs', description: 'Complete surahs and powerful Quranic verses for daily recitation.', icon: 'book' },
  { id: 'salah', label: 'Salah', description: 'Essential recitations for your daily prayers — Tashahhud, Salawat, and Quranic duas.', icon: 'clock' },
  { id: 'special', label: 'Special', description: 'Prayers for Laylatul Qadr, Ramadan, and other blessed occasions.', icon: 'star' },
]

export const duas: Dua[] = [
  // ═══ MORNING ═══
  {
    id: 1, title: 'Morning Dhikr — Tawheed', category: 'morning', tags: ['morning'],
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu, wa Huwa 'ala kulli shay'in Qadir.",
    translation: 'None has the right to be worshipped except Allah, alone, without partner. To Him belongs sovereignty and all praise, and He is over all things omnipotent.',
    source: 'Sahih al-Bukhari 6403', status: 'Sahih',
    note: 'Say this 100 times in the morning for immense reward and protection.'
  },
  {
    id: 2, title: 'Dua When Leaving Home', category: 'morning', tags: ['morning', 'protection'],
    transliteration: "Bismillahi, tawakkaltu 'alallahi, wa la hawla wa la quwwata illa billah.",
    translation: 'In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.',
    source: "Jami' at-Tirmidhi 3426", status: 'Sahih',
    note: 'Upon saying this, one is guided, defended, and protected, and the devil turns away from him.'
  },
  {
    id: 3, title: 'Sayyidul Istighfar — Master of Forgiveness', category: 'morning', tags: ['morning', 'night'],
    transliteration: "Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu. A'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi, faghfir li, fa innahu la yaghfirudh-dhunuba illa Anta.",
    translation: "O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You.",
    source: 'Sahih al-Bukhari 6306', status: 'Sahih',
    note: 'Whoever says this in the morning with firm belief and dies that day, he will be among the people of Paradise.'
  },

  // ═══ NIGHT ═══
  {
    id: 4, title: 'Ayatul Kursi', category: 'night', tags: ['night', 'protection', 'surahs'],
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhuu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bishay'in min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ard. Wa la ya'uduhu hifdhuhuma. Wa Huwal-'Aliyyul-'Adhim.",
    translation: "Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    source: 'Quran 2:255', status: 'Quranic',
    note: 'Whoever recites Ayatul Kursi before sleeping, Allah appoints a guardian angel to protect them until morning.'
  },
  {
    id: 5, title: 'Dua Before Sleep', category: 'night', tags: ['night'],
    transliteration: "Allahumma innaka khalaqta nafsi wa Anta tawaffaha, laka mamatuha wa mahyaha. In ahyaytaha fahfadhha, wa in amattaha faghfir laha. Allahumma inni as'alukal-'afiyah.",
    translation: "O Allah, You have created my soul and You take it back. Unto You is its death and its life. If You give it life, protect it; and if You cause it to die, forgive it. O Allah, I ask You for well-being.",
    source: 'Sahih Muslim 2712', status: 'Sahih'
  },

  // ═══ TRAVEL ═══
  {
    id: 6, title: 'Travel Dua — Dua al-Safar', category: 'travel', tags: ['travel'],
    transliteration: "Allahu Akbar, Allahu Akbar, Allahu Akbar. Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun. Allahumma inna nas'aluka fi safarana hadhal-birra wat-taqwa, wa minal-'amali ma tarda. Allahumma hawwin 'alayna safarana hadha watwi 'anna bu'dahu. Allahumma Antas-sahibu fis-safari wal-khalifatu fil-ahli. Allahumma inni a'udhu bika min wa'tha'is-safari wa ka'abatil-mandhari wa su'il-munqalabi fil-mali wal-ahli.",
    translation: "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. Glory be to Him Who has subjected this to us, and we could never have it by our efforts, and to our Lord we shall return. O Allah, we ask You in this journey for righteousness and piety, and for deeds that are pleasing to You. O Allah, make this journey easy for us and shorten its distance. O Allah, You are the Companion in travel and the Guardian of the family. O Allah, I seek refuge in You from the hardships of travel, from seeing distressing sights, and from finding harm when I return to my family and property.",
    source: 'Sahih Muslim 1342', status: 'Sahih',
    note: 'Recite this when you board any means of transport — car, plane, or ship.'
  },

  // ═══ PROTECTION ═══
  {
    id: 7, title: 'La Hawla wa La Quwwata illa Billah', category: 'protection', tags: ['protection', 'morning'],
    transliteration: 'La hawla wa la quwwata illa billah.',
    translation: 'There is no might nor power except with Allah.',
    source: 'Sahih al-Bukhari 4205', status: 'Sahih',
    note: 'A treasure from the treasures of Paradise. Say it abundantly.'
  },
  {
    id: 8, title: 'Dua for Protection from Sin', category: 'protection', tags: ['protection'],
    transliteration: 'Allahummaghfir li dhanbi, wa tahhir qalbi, wa hassin farji minal-fawahish.',
    translation: 'O Allah, forgive my sin, purify my heart, and guard my chastity from immorality.',
    source: 'Sunan Abu Dawud 4857', status: 'Hasan'
  },
  {
    id: 9, title: 'Dua of Prophet Nuh — Against Oppression', category: 'protection', tags: ['protection', 'mental'],
    transliteration: 'Rabbi inni maghlobun fantasir.',
    translation: 'My Lord, indeed I am overpowered, so help me.',
    source: 'Quran 54:10', status: 'Quranic',
    note: 'The desperate cry of Prophet Nuh (Noah) when his people rejected him. A powerful dua in times of helplessness.'
  },

  // ═══ WEALTH & RIZQ ═══
  {
    id: 10, title: 'Dua for Halal Sustenance', category: 'wealth', tags: ['wealth'],
    transliteration: "Allahummakfini bihalalika 'an haramika, wa aghnini bifadlika 'amman siwak.",
    translation: 'O Allah, suffice me with what You have permitted so that I have no need of that which You have forbidden, and make me independent of all others besides You by Your bounty.',
    source: "Jami' at-Tirmidhi 3563", status: 'Hasan',
    note: 'Taught by the Prophet \uFDFA to Ali ibn Abi Talib when he was in debt.'
  },
  {
    id: 11, title: 'Dua for Guidance & Self-Sufficiency', category: 'wealth', tags: ['wealth', 'morning'],
    transliteration: "Allahumma inni as'alukal-huda wat-tuqa wal-'afafa wal-ghina.",
    translation: 'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.',
    source: 'Sahih Muslim 2721', status: 'Sahih'
  },
  {
    id: 12, title: "Trusting in Allah's Plan", category: 'wealth', tags: ['wealth'],
    transliteration: "Wa ma tawfiqi illa billahi 'alayhi tawakkaltu wa ilayhi unib.",
    translation: 'My success is not but through Allah. Upon Him I have relied, and to Him I return.',
    source: 'Quran 11:88', status: 'Quranic',
    note: "Words of Prophet Shu'ayb (Jethro), reminding us that all success comes from Allah."
  },

  // ═══ MENTAL HEALTH ═══
  {
    id: 13, title: 'Relief from Depression & Anxiety', category: 'mental', tags: ['mental', 'protection'],
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazani, wa a'udhu bika minal-'ajzi wal-kasali, wa a'udhu bika minal-jubni wal-bukhli, wa a'udhu bika min ghalabatid-dayni wa qahrir-rijal.",
    translation: "O Allah, I seek refuge in You from worry and grief, from helplessness and laziness, from cowardice and miserliness, and from being overcome by debt and overpowered by men.",
    source: 'Sahih al-Bukhari 6369', status: 'Sahih',
    note: 'The Prophet \uFDFA used to say this dua frequently. It covers every form of emotional distress.'
  },
  {
    id: 14, title: 'Dua of Prophet Musa — When in Need', category: 'mental', tags: ['mental', 'wealth'],
    transliteration: 'Rabbi inni lima anzalta ilayya min khayrin faqir.',
    translation: 'My Lord, indeed I am, for whatever good You would send down to me, in need.',
    source: 'Quran 28:24', status: 'Quranic',
    note: 'Prophet Musa (Moses) said this when he was a stranger with nothing — and Allah answered him immediately with shelter, family, and provision.'
  },

  // ═══ SURAHS ═══
  {
    id: 15, title: 'Surah Al-Mulk — The Sovereignty', category: 'surahs', tags: ['surahs', 'night'],
    type: 'surah',
    translation: 'Protects from the punishment of the grave. Recite every night before sleep.',
    source: 'Quran 67:1-30', status: 'Quranic',
    note: 'The Prophet \uFDFA said: "There is a surah in the Quran of thirty verses which will intercede for its companion until he is forgiven." (Tirmidhi 2891)',
    ayahs: [
      { num: 1, transliteration: "Tabarakal-ladhi biyadihil-mulku wa Huwa 'ala kulli shay'in Qadir.", translation: 'Blessed is He in Whose Hand is the dominion, and He is Able to do all things.' },
      { num: 2, transliteration: "Alladhi khalaqal-mawta wal-hayata liyabluwakum ayyukum ahsanu 'amala, wa Huwal-'Azizul-Ghafur.", translation: 'He Who created death and life to test which of you is best in deed, and He is the Almighty, the Oft-Forgiving.' },
      { num: 3, transliteration: "Alladhi khalaqa sab'a samawatin tibaqan, ma tara fi khalqir-Rahmani min tafawut, farji'il-basara hal tara min futur.", translation: 'He Who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return your vision; do you see any breaks?' },
      { num: 4, transliteration: "Thummarji'il-basara karratayn yanqalib ilaykal-basaru khasi'an wa huwa hasir.", translation: 'Then return your vision twice again. Your vision will return to you humbled while it is fatigued.' },
      { num: 5, transliteration: "Walaqad zayyanas-sama'ad-dunya bimasabiha wa ja'alnaha rujuman lish-shayatin, wa a'tadna lahum 'adhaba as-sa'ir.", translation: 'And We have certainly beautified the nearest heaven with stars and have made them as missiles to drive away the devils, and have prepared for them the punishment of the Blaze.' },
      { num: 6, transliteration: 'Walladhina kafaru birabbihim \'adhabu Jahannama wa bi\'sal-masir.', translation: 'And for those who disbelieved in their Lord is the punishment of Hell, and wretched is the destination.' },
      { num: 7, transliteration: 'Idha ulqu fiha sami\'u laha shahiqan wa hiya tafur.', translation: 'When they are thrown into it, they hear from it a dreadful inhaling while it boils up.' },
      { num: 8, transliteration: "Takadu tamayyazu minal-ghayz, kullama ulqiya fiha fawjun sa'alahum khazanatuha alam ya'tikum nadhir.", translation: 'It almost bursts with rage. Every time a group is thrown into it, its keepers ask them: Did there not come to you a warner?' },
      { num: 9, transliteration: "Qalu bala qad ja'ana nadhirun fakadh-dhabna wa qulna ma nazzalallahu min shay', in antum illa fi dalalin kabir.", translation: 'They will say: Yes, a warner had come to us, but we denied and said: Allah has not sent down anything. You are not but in great error.' },
      { num: 10, transliteration: "Waqalu law kunna nasma'u aw na'qilu ma kunna fi as-habis-sa'ir.", translation: 'And they will say: If only we had been listening or reasoning, we would not be among the companions of the Blaze.' },
      { num: 11, transliteration: "Fa'tarafu bidhanbihim fa-suhqan li-as-habis-sa'ir.", translation: 'And they will admit their sin, so away with the companions of the Blaze.' },
      { num: 12, transliteration: 'Innal-ladhina yakhshawna Rabbahum bil-ghaybi lahum maghfiratun wa ajrun kabir.', translation: 'Indeed, those who fear their Lord unseen will have forgiveness and great reward.' },
      { num: 13, transliteration: "Wa asirru qawlakum awijharu bih, innahu 'Alimun bidhatis-sudur.", translation: 'And conceal your speech or publicize it; indeed, He is Knowing of that within the breasts.' },
      { num: 14, transliteration: "Ala ya'lamu man khalaq? Wa Huwal-Latiful-Khabir.", translation: 'Does He who created not know, while He is the Subtle, the Acquainted?' },
      { num: 15, transliteration: "Huwal-ladhi ja'ala lakumul-arda dhalulan famshuu fi manakibiha wa kulu mir rizqih, wa ilayhin-nushur.", translation: 'It is He who made the earth tame for you, so walk among its slopes and eat of His provision, and to Him is the resurrection.' },
      { num: 16, transliteration: "A-amintum man fis-sama'i an yakhsifa bikumul-arda fa-idha hiya tamur.", translation: 'Do you feel secure that He who is above would not cause the earth to swallow you as it shakes?' },
      { num: 17, transliteration: "Am amintum man fis-sama'i an yursila 'alaykum hasiban, fasata'lamuna kayfa nadhir.", translation: 'Or do you feel secure that He who is above would not send against you a storm of stones? Then you would know how My warning was.' },
      { num: 18, transliteration: 'Walaqad kadh-dhabal-ladhina min qablihim fakayfa kana nakir.', translation: 'And already had those before them denied, and how terrible was My reproach.' },
      { num: 19, transliteration: "Awalam yaraw ilat-tayri fawqahum saffatin wa yaqbidn, ma yumsikuhunna illar-Rahman, innahu bikulli shay'in Basir.", translation: 'Do they not see the birds above them with wings outspread and folding in? None holds them except the Most Merciful. Indeed He is, of all things, Seeing.' },
      { num: 20, transliteration: 'Amman hadhal-ladhi huwa jundun lakum yansurakum min dunir-Rahman? Inil-kafirun illa fi ghurur.', translation: 'Or who is it that could be an army for you to aid you other than the Most Merciful? The disbelievers are not but in delusion.' },
      { num: 21, transliteration: "Amman hadhal-ladhi yarzuqukum in amsaka rizqah, bal lajju fi 'utuwwin wa nufur.", translation: 'Or who is it that could provide for you if He withheld His provision? But they have persisted in insolence and aversion.' },
      { num: 22, transliteration: "Afaman yamshi mukibban 'ala wajhihi ahda amman yamshi sawiyyan 'ala siratim mustaqim.", translation: 'Then is one who walks fallen on his face better guided or one who walks erect on a straight path?' },
      { num: 23, transliteration: "Qul Huwal-ladhi ansha'akum wa ja'ala lakumus-sam'a wal-absara wal-af'idah, qalilam ma tashkurun.", translation: 'Say: It is He who produced you and made for you hearing and vision and hearts; little are you grateful.' },
      { num: 24, transliteration: "Qul Huwal-ladhi dhara'akum fil-ardi wa ilayhi tuhsharun.", translation: 'Say: It is He who has multiplied you throughout the earth, and to Him you will be gathered.' },
      { num: 25, transliteration: "Wayaquluna mata hadhal-wa'du in kuntum sadiqin.", translation: 'And they say: When is this promise, if you should be truthful?' },
      { num: 26, transliteration: "Qul innamal-'ilmu 'indallahi wa innama ana nadhirun mubin.", translation: 'Say: The knowledge is only with Allah, and I am only a clear warner.' },
      { num: 27, transliteration: "Falamma ra'awhu zulfatan si'at wujuhul-ladhina kafaru wa qila hadhal-ladhi kuntum bihi tadda'un.", translation: 'But when they see it approaching, the faces of those who disbelieved will be distressed, and it will be said: This is that for which you used to call.' },
      { num: 28, transliteration: "Qul ara'aytum in ahlakaniyallahu wa man ma'iya aw rahimana, faman yujiru-kafirina min 'adhabin alim.", translation: 'Say: Have you considered whether Allah should cause my death and those with me or have mercy upon us, who can protect the disbelievers from a painful punishment?' },
      { num: 29, transliteration: "Qul Huwar-Rahmanu amanna bihi wa 'alayhi tawakkalna, fasata'lamuna man huwa fi dalalin mubin.", translation: 'Say: He is the Most Merciful; we have believed in Him, and upon Him we have relied. And you will come to know who it is that is in clear error.' },
      { num: 30, transliteration: "Qul ara'aytum in asbaha ma'ukum ghawran faman ya'tikum bima'in ma'in.", translation: 'Say: Have you considered if your water was to become sunken, then who could bring you flowing water?' },
    ]
  },
  {
    id: 16, title: 'Surah Al-Kahf — Read on Friday', category: 'surahs', tags: ['surahs', 'special'],
    transliteration: 'Surah Al-Kahf — Chapter 18 of the Quran',
    translation: 'Whoever reads Surah Al-Kahf on Friday, a light will shine for him between the two Fridays.',
    source: "Sahih al-Jami' 6470", status: 'Sahih',
    note: 'Read every Friday for spiritual light and protection from Dajjal. Best read between Maghrib on Thursday and Maghrib on Friday.'
  },

  // ═══ SALAH ═══
  {
    id: 17, title: 'Tashahhud — At-Tahiyyat', category: 'salah', tags: ['salah'],
    transliteration: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
    translation: 'All compliments, prayers, and pure words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I testify that there is no deity except Allah, and I testify that Muhammad is His servant and messenger.',
    source: 'Sahih al-Bukhari 831', status: 'Sahih',
    note: 'Recited in every prayer during the sitting position (Tashahud).'
  },
  {
    id: 18, title: 'Salawat — Durood Ibrahim', category: 'salah', tags: ['salah'],
    transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidum Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidum Majid.",
    translation: "O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy and Glorious. O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy and Glorious.",
    source: 'Sahih al-Bukhari 3370', status: 'Sahih',
    note: 'Recited after Tashahhud in the final sitting of every prayer.'
  },
  {
    id: 19, title: 'Rabbana Atina', category: 'salah', tags: ['salah', 'special'],
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
    translation: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good, and protect us from the punishment of the Fire.',
    source: 'Quran 2:201', status: 'Quranic',
    note: 'The most frequently made dua by the Prophet \uFDFA. (Bukhari & Muslim)'
  },
  {
    id: 20, title: 'Dua for Parents & Believers', category: 'salah', tags: ['salah', 'special'],
    transliteration: "Rabbanagh-fir li wa liwalidayya wa lil-mu'minina yawma yaqumul-hisab.",
    translation: 'Our Lord, forgive me and my parents and the believers on the Day the account is established.',
    source: 'Quran 14:41', status: 'Quranic',
    note: 'Dua of Prophet Ibrahim (Abraham). Make this dua regularly for your parents.'
  },

  // ═══ SPECIAL OCCASIONS ═══
  {
    id: 21, title: 'Laylatul Qadr Prayers — Night of Power', category: 'special', tags: ['special'],
    type: 'laylatul',
    source: 'Personal Prayers (Albanian tradition)', status: 'Dua',
    note: 'These heartfelt prayers are traditionally recited during the last 10 nights of Ramadan, especially on the odd nights (21st, 23rd, 25th, 27th, 29th).',
    content: [
      'O Allah, grant me success in the Hereafter, safety from the Fire, and enable me to enter Paradise!',
      'O Allah, forgive me, my parents, my family, sisters, brothers, children, relatives, and all believers!',
      'O Allah, make me and my family among those who will receive the book of deeds in the right hand.',
      'O Allah, grant me a blessed death. Allow me to say the Shahada during death and grant me the intercession of Prophet Muhammad \uFDFA.',
      'O Allah, grant me the companionship of Prophet Muhammad \uFDFA, his family, and companions in Paradise.',
      'O Allah, guide my parents, my family, my children, and those I love, and save them from the Fire.',
      'O Allah, unite me in Paradise with those I love for Your sake!',
      'O Lord, I ask You to perfect my faith and worship.',
      'O Allah, accept my deeds, increase my rewards and Your mercy. Cleanse my sins and forgive them completely.',
      'O Allah, grant me, my parents, my family, and children guidance and steadfastness in faith and iman.',
      'O Allah, make me among those whom You love, forgive, and place under Your shade on the Day when there is no shade except the shade of Your Throne.',
      'O my Lord, do not allow doubt in my faith, in Your Oneness and Power!',
      'O Allah, increase my love for You and for Prophet Muhammad \uFDFA.',
      'O Allah, forgive me and increase Your blessings and bounties upon me.',
      'O Allah, guide me to more opportunities to do good seeking Your pleasure.',
      'O Lord, purify my intentions, let them be only for You. Save me from showing off, arrogance, and false pride.',
      'O Allah, do not allow me to hurt, offend, backbite others, or do injustice to them.',
      'O my Creator, do not leave me alone! Bless me with a righteous family and children who will be the coolness of my eyes.',
      'O my Lord, make me among those who are patient and obedient to You and to parents.',
      'O Allah, save me from the trial of the Dajjal, from the punishment of the grave, and from the Fire of Jahannam!',
      'O Allah, increase my ability to give sadaqah (charity).',
      'O Allah, bless me with good health so that I can make sujood (prostration) with ease.',
      'O Allah, cure me completely from every illness. O Allah, heal the sick!',
      'O Allah, help the poor and the orphans!',
      'O Allah, make my grave a garden from the gardens of Paradise.',
      'O Allah, forgive the believing men and women, the living and the dead.',
      'O Allah, forgive me, have mercy on me, guide me, grant me health, and provide for me.',
      'O Allah, give me good in this world and good in the Hereafter, and protect me from the Fire.',
      'O Allah, enable me to exit this Ramadan with my sins forgiven!',
      'O Allah, grant me success everywhere, solve my problems, and set my affairs right!',
      'O my Lord, grant me beneficial knowledge, good provision, and accepted deeds.',
      'O Allah, suffice me with what is halal and keep me from haram. Make me rich through Your bounty so I need not seek from anyone but You.',
      'O Allah, I seek Your protection from worry and grief, from helplessness and laziness, from miserliness and cowardice, from being overcome by debt and overpowered by people.',
      'O Allah, enable me to perform Hajj. Do not humiliate me on the Day of Judgment, nor before You, the prophets, angels, and people.',
      'O Allah, enable me to cross the bridge of Sirat with ease.',
      'O Allah, grant me Jannatul Firdaus — the highest Paradise!',
      'O Allah, make the day I stand before You the happiest day of my life.',
      'O Allah, grant me the sight of Your Face in Paradise.',
    ]
  },
]

export function getDuasByCategory(categoryId: string): Dua[] {
  return duas.filter(d => d.category === categoryId || d.tags.includes(categoryId))
}

export function getDuaById(id: number): Dua | undefined {
  return duas.find(d => d.id === id)
}

export function searchDuas(query: string): Dua[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  return duas.filter(d => {
    const fields = [d.title, d.transliteration, d.translation, d.source, d.note]
      .filter(Boolean).join(' ').toLowerCase()
    if (fields.includes(q)) return true
    if (d.content?.some(c => c.toLowerCase().includes(q))) return true
    if (d.ayahs?.some(a => a.transliteration.toLowerCase().includes(q) || a.translation.toLowerCase().includes(q))) return true
    return false
  })
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

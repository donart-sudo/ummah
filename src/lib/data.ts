import { Category, Dua } from '@/types'

export const categories: Category[] = [
  { id: 'morning', label: 'Duate e Mengjesit', description: 'Fillo diten me perkujtimin e Allahut. Lexoji keto pas namazit te Sabahut.', icon: 'sun' },
  { id: 'night', label: 'Duate e Nates', description: 'Mbroje veten para gjumit me keto adhkare dhe lutje te mbremjes.', icon: 'moon' },
  { id: 'travel', label: 'Udhetimi', description: 'Kerko mbrojtjen dhe lehtesin e Allahut kur nisesh per udhetim.', icon: 'plane' },
  { id: 'protection', label: 'Mbrojtja', description: 'Mbroje veten me keto dua te fuqishme per siguri dhe mbrojtje hyjnore.', icon: 'shield' },
  { id: 'wealth', label: 'Pasuria & Rizku', description: 'Kerko nga Allahu furnizim hallall, udhezim dhe pavaresine.', icon: 'coins' },
  { id: 'mental', label: 'Shendet Mendor', description: 'Gjej qetesi dhe lehtes nga brengat, pikellimi dhe ankthi permes ketyre lutjeve.', icon: 'heart' },
  { id: 'surahs', label: 'Suret', description: 'Sure te plota dhe ajete te fuqishme kuranore per lexim te perditshgem.', icon: 'book' },
  { id: 'salah', label: 'Namazi', description: 'Leximet thelbesore per namazin tuaj te perditshgem — Etehijatu, Salavatet dhe duate kuranore.', icon: 'clock' },
  { id: 'special', label: 'Te Vecanta', description: 'Lutje per Natën e Kadrit, Ramazanin dhe raste te tjera te bekuara.', icon: 'star' },
]

export const duas: Dua[] = [
  // ═══ MORNING ═══
  {
    id: 1, title: 'Dhikri i Mengjesit — Teuhidi', category: 'morning', tags: ['morning'],
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu, wa Huwa 'ala kulli shay'in Qadir.",
    translation: 'Askush nuk meriton te adhurohet pervec Allahut, i vetem, pa ortak. Atij i takon sundimi dhe lavderimi, dhe Ai eshte i Plotfuqishem mbi cdo gje.',
    source: 'Sahih al-Bukhari 6403', status: 'Sahih',
    note: 'Thuaje 100 here ne mengjes per shperblim te madh dhe mbrojtje.'
  },
  {
    id: 2, title: 'Duaja kur del nga shtepia', category: 'morning', tags: ['morning', 'protection'],
    transliteration: "Bismillahi, tawakkaltu 'alallahi, wa la hawla wa la quwwata illa billah.",
    translation: 'Ne emrin e Allahut, i besoj Allahut, dhe nuk ka fuqi e as force pervec Allahut.',
    source: "Jami' at-Tirmidhi 3426", status: 'Sahih',
    note: 'Kur e thua kete, udhezohem, mbrohem dhe ruhem, dhe shejtani largohet.'
  },
  {
    id: 3, title: 'Sejjidul Istighfar — Zoteriu i Faljes', category: 'morning', tags: ['morning', 'night'],
    transliteration: "Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu. A'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi, faghfir li, fa innahu la yaghfirudh-dhunuba illa Anta.",
    translation: "O Allah, Ti je Zoti im, askush nuk meriton te adhurohet pervec Teje. Ti me krijove dhe une jam robi Yt, dhe qendroj ne besen dhe premtimin Tend sa te mundem. Kerkoj mbrojtje nga Ti prej te keqes qe kam bere. Pranoj mirsite e Tua ndaj meje, dhe pranoj mekatin tim, prandaj me fal, sepse askush nuk i fal mekatet pervec Teje.",
    source: 'Sahih al-Bukhari 6306', status: 'Sahih',
    note: 'Kush e thote kete ne mengjes me besim te forte dhe vdes ate dite, do te jete nga banoret e Xhenetit.'
  },

  // ═══ NIGHT ═══
  {
    id: 4, title: 'Ajetul Kursi', category: 'night', tags: ['night', 'protection', 'surahs'],
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhuu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bishay'in min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ard. Wa la ya'uduhu hifdhuhuma. Wa Huwal-'Aliyyul-'Adhim.",
    translation: 'Allahu! Nuk ka te adhuruar tjeter pervec Tij, te Perjeteshmit, Mbajtesit te gjithckajes. Nuk e kap As gjumi e as kotigja. E Tij eshte cdo gje qe eshte ne qiej dhe ne toke. Kush mund te nderhyje tek Ai pa lejen e Tij? Ai e di cfare ka perpara tyre dhe cfare do te kete pas tyre, dhe ata nuk perfshjine asgje nga dituria e Tij pervec asaj qe Ai do. Kursia e Tij shtrihet mbi qiejt dhe token, dhe ruajtja e tyre nuk e lodh Ate. Ai eshte me i Larti, me i Madhi.',
    source: 'Quran 2:255', status: 'Quranic',
    note: 'Kush lexon Ajetul Kursin para gjumit, Allahu cakton nje engjell roje qe ta mbroje deri ne mengjes.'
  },
  {
    id: 5, title: 'Duaja para gjumit', category: 'night', tags: ['night'],
    transliteration: "Allahumma innaka khalaqta nafsi wa Anta tawaffaha, laka mamatuha wa mahyaha. In ahyaytaha fahfadhha, wa in amattaha faghfir laha. Allahumma inni as'alukal-'afiyah.",
    translation: 'O Allah, Ti e krijove shpirtin tim dhe Ti e merr ate mbrapa. Ty i takon vdekja dhe jeta e tij. Nese i jep jete, mbroje; e nese e vdes, fale. O Allah, te kerkoj miresine.',
    source: 'Sahih Muslim 2712', status: 'Sahih'
  },

  // ═══ TRAVEL ═══
  {
    id: 6, title: 'Duaja e Udhetimit — Dua al-Safar', category: 'travel', tags: ['travel'],
    transliteration: "Allahu Akbar, Allahu Akbar, Allahu Akbar. Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun. Allahumma inna nas'aluka fi safarana hadhal-birra wat-taqwa, wa minal-'amali ma tarda. Allahumma hawwin 'alayna safarana hadha watwi 'anna bu'dahu. Allahumma Antas-sahibu fis-safari wal-khalifatu fil-ahli. Allahumma inni a'udhu bika min wa'tha'is-safari wa ka'abatil-mandhari wa su'il-munqalabi fil-mali wal-ahli.",
    translation: 'Allahu eshte me i Madhi, Allahu eshte me i Madhi, Allahu eshte me i Madhi. I lavderuar qofte Ai qe na e nenshtroi kete, dhe ne nuk do te mundeshim ta benim vete, dhe tek Zoti yne do te kthehemi. O Allah, te kerkojme ne kete udhetim miresin dhe devotshmerine, dhe nga veprat ato qe te kenaqin. O Allah, na e lehte kete udhetim dhe na e shkurto largesine. O Allah, Ti je Shoqeruesi ne udhetim dhe Roja e familjes. O Allah, kerkoj mbrojtje tek Ti nga veshtiresite e udhetimit, nga pamjet e trishtushme, dhe nga kthimi i keq ne pasuri e familje.',
    source: 'Sahih Muslim 1342', status: 'Sahih',
    note: 'Lexoje kete kur hipni ne cdo mjet transporti — makine, avion ose anije.'
  },

  // ═══ PROTECTION ═══
  {
    id: 7, title: 'La Hawla wa La Quwwata illa Billah', category: 'protection', tags: ['protection', 'morning'],
    transliteration: 'La hawla wa la quwwata illa billah.',
    translation: 'Nuk ka fuqi e as force pervec Allahut.',
    source: 'Sahih al-Bukhari 4205', status: 'Sahih',
    note: 'Nje thesar nga thesaret e Xhenetit. Thuaje shpesh.'
  },
  {
    id: 8, title: 'Duaja per mbrojtje nga mekati', category: 'protection', tags: ['protection'],
    transliteration: 'Allahummaghfir li dhanbi, wa tahhir qalbi, wa hassin farji minal-fawahish.',
    translation: 'O Allah, me fal mekatin, me pastro zemren, dhe me ruaj nderin nga imoraliteti.',
    source: 'Sunan Abu Dawud 4857', status: 'Hasan'
  },
  {
    id: 9, title: 'Duaja e Profetit Nuh — Kunder shtypjes', category: 'protection', tags: ['protection', 'mental'],
    transliteration: 'Rabbi inni maghlobun fantasir.',
    translation: 'Zoti im, une jam i mundur, prandaj me ndihmo.',
    source: 'Quran 54:10', status: 'Quranic',
    note: 'Thirrja e deshperuar e Profetit Nuh kur populli i tij e refuzoi. Nje dua e fuqishme ne kohe pashpresie.'
  },

  // ═══ WEALTH & RIZQ ═══
  {
    id: 10, title: 'Duaja per furnizim hallall', category: 'wealth', tags: ['wealth'],
    transliteration: "Allahummakfini bihalalika 'an haramika, wa aghnini bifadlika 'amman siwak.",
    translation: 'O Allah, me mjafto me ate qe ke lejuar qe te mos kem nevoje per ate qe ke ndaluar, dhe me bej te pasur me bujarine Tende qe te mos kerkoj nga askush tjeter pervec Teje.',
    source: "Jami' at-Tirmidhi 3563", status: 'Hasan',
    note: 'E mesoi Profeti ﷺ Aliun kur ishte ne borxh.'
  },
  {
    id: 11, title: 'Duaja per udhezim dhe pavaresine', category: 'wealth', tags: ['wealth', 'morning'],
    transliteration: "Allahumma inni as'alukal-huda wat-tuqa wal-'afafa wal-ghina.",
    translation: 'O Allah, te kerkoj udhezim, devotshmeri, nder dhe pavaresine.',
    source: 'Sahih Muslim 2721', status: 'Sahih'
  },
  {
    id: 12, title: 'Besimi ne planin e Allahut', category: 'wealth', tags: ['wealth'],
    transliteration: "Wa ma tawfiqi illa billahi 'alayhi tawakkaltu wa ilayhi unib.",
    translation: 'Suksesi im nuk eshte pervec nga Allahu. Atij i jam besuar dhe tek Ai kthehem.',
    source: 'Quran 11:88', status: 'Quranic',
    note: 'Fjalet e Profetit Shuajb, qe na kujtojne se cdo sukses vjen nga Allahu.'
  },

  // ═══ MENTAL HEALTH ═══
  {
    id: 13, title: 'Lehtesim nga depresioni dhe ankthi', category: 'mental', tags: ['mental', 'protection'],
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazani, wa a'udhu bika minal-'ajzi wal-kasali, wa a'udhu bika minal-jubni wal-bukhli, wa a'udhu bika min ghalabatid-dayni wa qahrir-rijal.",
    translation: 'O Allah, kerkoj mbrojtje tek Ti nga brenga dhe pikellimi, nga pafuqishmeria dhe dembelizmi, nga frika dhe koprracia, dhe nga mbytja ne borxhe dhe shtypja e njerezve.',
    source: 'Sahih al-Bukhari 6369', status: 'Sahih',
    note: 'Profeti ﷺ e thoshte kete dua shpesh. Mbulon cdo forme te stresit emocional.'
  },
  {
    id: 14, title: 'Duaja e Profetit Musa — Kur je ne nevoje', category: 'mental', tags: ['mental', 'wealth'],
    transliteration: 'Rabbi inni lima anzalta ilayya min khayrin faqir.',
    translation: 'Zoti im, une kam nevoje per cfaredo te mire qe do te me dergosh.',
    source: 'Quran 28:24', status: 'Quranic',
    note: 'Profeti Musa e tha kete kur ishte i huaj pa asgje — dhe Allahu iu pergjigj menjehere me strehim, familje dhe furnizim.'
  },

  // ═══ SURAHS ═══
  {
    id: 15, title: 'Surja Al-Mulk — Sundimi', category: 'surahs', tags: ['surahs', 'night'],
    type: 'surah',
    translation: 'Mbron nga denimi i varrit. Lexoje cdo nate para gjumit.',
    source: 'Quran 67:1-30', status: 'Quranic',
    note: 'Profeti ﷺ tha: "Ka nje sure ne Kuran me tridhjete ajete qe do te nderhyje per shokun e saj derisa ti falet." (Tirmidhi 2891)',
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
    id: 16, title: 'Surja Al-Kehf — Lexohet te premteve', category: 'surahs', tags: ['surahs', 'special'],
    transliteration: 'Surah Al-Kahf — Chapter 18 of the Quran',
    translation: 'Kush lexon Suren Al-Kehf te premten, do ti ndricoje nje drite midis dy te premteve.',
    source: "Sahih al-Jami' 6470", status: 'Sahih',
    note: 'Lexoje cdo te premte per drite shpirterore dhe mbrojtje nga Dexhali. Me mire lexohet midis akshamit te enjtes dhe akshamit te premtes.'
  },

  // ═══ SALAH ═══
  {
    id: 17, title: 'Etehijatu — At-Tahijjat', category: 'salah', tags: ['salah'],
    transliteration: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
    translation: 'Te gjitha komplimentet, lutjet dhe fjalet e pastra jane per Allahun. Paqja qofte mbi ty, o Profet, dhe meshira e Allahut e bekimet e Tij. Paqja qofte mbi ne dhe mbi robet e drejte te Allahut. Deshmoj se nuk ka te adhuruar pervec Allahut, dhe deshmoj se Muhamedi eshte robi dhe i derguari i Tij.',
    source: 'Sahih al-Bukhari 831', status: 'Sahih',
    note: 'Lexohet ne cdo namaz gjate uljes (Teshehudit).'
  },
  {
    id: 18, title: 'Salavatet — Salavati Ibrahimi', category: 'salah', tags: ['salah'],
    transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidum Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidum Majid.",
    translation: 'O Allah, dergoji bekime Muhamedit dhe familjes se Muhamedit, ashtu sic i dergove bekime Ibrahimit dhe familjes se Ibrahimit. Vertet Ti je i Lavderuar dhe i Lavdishem. O Allah, dergoji begatira Muhamedit dhe familjes se Muhamedit, ashtu sic i dergove begatira Ibrahimit dhe familjes se Ibrahimit. Vertet Ti je i Lavderuar dhe i Lavdishem.',
    source: 'Sahih al-Bukhari 3370', status: 'Sahih',
    note: 'Lexohet pas Etehjjatit ne uljen e fundit te cdo namazi.'
  },
  {
    id: 19, title: 'Rabbana Atina', category: 'salah', tags: ['salah', 'special'],
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
    translation: 'Zoti yne, na jep ne kete bote te miren dhe ne boten tjeter te miren, dhe na ruaj nga denimi i Zjarrit.',
    source: 'Quran 2:201', status: 'Quranic',
    note: 'Duaja me e shpeshte e Profetit ﷺ. (Buhari & Muslim)'
  },
  {
    id: 20, title: 'Duaja per prinderit dhe besimtaret', category: 'salah', tags: ['salah', 'special'],
    transliteration: "Rabbanagh-fir li wa liwalidayya wa lil-mu'minina yawma yaqumul-hisab.",
    translation: 'Zoti yne, me fal mua, prinderit e mi dhe besimtaret ne Diten kur do te behet llogaria.',
    source: 'Quran 14:41', status: 'Quranic',
    note: 'Duaja e Profetit Ibrahim. Beje kete dua rregullisht per prinderit.'
  },

  // ═══ SPECIAL OCCASIONS ═══
  {
    id: 21, title: 'Lutjet e Nates se Kadrit', category: 'special', tags: ['special'],
    type: 'laylatul',
    source: 'Personal Prayers (Albanian tradition)', status: 'Dua',
    note: 'Keto lutje te sinqerta lexohen tradicionaisht gjate 10 neteve te fundit te Ramazanit, vecanerisht ne netet teke (21, 23, 25, 27, 29).',
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

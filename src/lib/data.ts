import { Category, Dua } from '@/types'

export const categories: Category[] = [
  { id: 'surahs', label: 'Suret', description: 'Sure te plota kuranore per lexim javor dhe te perditshgem.', icon: 'book' },
  { id: 'travel', label: 'Udhetimi', description: 'Kerko mbrojtjen dhe lehtesin e Allahut kur nisesh per udhetim.', icon: 'plane' },
  { id: 'salah', label: 'Namazi', description: 'Leximet thelbesore per namazin tuaj te perditshgem — Etehijatu, Salavatet dhe duate kuranore.', icon: 'clock' },
  { id: 'special', label: 'Te Vecanta', description: 'Lutje per Natën e Kadrit, Ramazanin dhe raste te tjera te bekuara.', icon: 'star' },
]

export const duas: Dua[] = [
  // ═══ TRAVEL ═══
  {
    id: 6, title: 'Duaja e Udhetimit — Dua al-Safar', category: 'travel', tags: ['travel'],
    translation: 'Allahu eshte me i Madhi, Allahu eshte me i Madhi, Allahu eshte me i Madhi. I lavderuar qofte Ai qe na e nenshtroi kete, dhe ne nuk do te mundeshim ta benim vete, dhe tek Zoti yne do te kthehemi. O Allah, te kerkojme ne kete udhetim miresin dhe devotshmerine, dhe nga veprat ato qe te kenaqin. O Allah, na e lehte kete udhetim dhe na e shkurto largesine. O Allah, Ti je Shoqeruesi ne udhetim dhe Roja e familjes. O Allah, kerkoj mbrojtje tek Ti nga veshtiresite e udhetimit, nga pamjet e trishtushme, dhe nga kthimi i keq ne pasuri e familje.',
    source: 'Sahih Muslim 1342', status: 'Sahih',
    note: 'Lexoje kete kur hipni ne cdo mjet transporti — makine, avion ose anije.'
  },

  // ═══ SURAHS ═══
  {
    id: 15, title: 'Surja Al-Mulk — Sundimi', category: 'surahs', tags: ['surahs'],
    type: 'surah',
    translation: 'Mbron nga denimi i varrit. Lexoje cdo nate para gjumit.',
    source: 'Quran 67:1-30', status: 'Quranic',
    note: 'Profeti ﷺ tha: "Ka nje sure ne Kuran me tridhjete ajete qe do te nderhyje per shokun e saj derisa ti falet." (Tirmidhi 2891)',
    ayahs: [
      { num: 1, transliteration: "Tabarakal-ladhi biyadihil-mulku wa Huwa 'ala kulli shay'in Qadir.", translation: 'I bekuar eshte Ai ne Doren e te Cilit eshte sundimi, dhe Ai eshte i Plotfuqishem mbi cdo gje.' },
      { num: 2, transliteration: "Alladhi khalaqal-mawta wal-hayata liyabluwakum ayyukum ahsanu 'amala, wa Huwal-'Azizul-Ghafur.", translation: 'Ai qe krijoi vdekjen dhe jeten per t\'ju provuar cili prej jush eshte me i miri ne vepra, dhe Ai eshte i Plotfuqishmi, Gjithfalesit.' },
      { num: 3, transliteration: "Alladhi khalaqa sab'a samawatin tibaqan, ma tara fi khalqir-Rahmani min tafawut, farji'il-basara hal tara min futur.", translation: 'Ai qe krijoi shtate qiej ne shtresa. Nuk sheh ne krijimin e te Meshirshmit asnje mosperputhje. Ktheje shikimin; a sheh ndonje te care?' },
      { num: 4, transliteration: "Thummarji'il-basara karratayn yanqalib ilaykal-basaru khasi'an wa huwa hasir.", translation: 'Pastaj ktheje shikimin edhe dy here. Shikimi do te kthehet i poshteruar dhe i lodhur.' },
      { num: 5, transliteration: "Walaqad zayyanas-sama'ad-dunya bimasabiha wa ja'alnaha rujuman lish-shayatin, wa a'tadna lahum 'adhaba as-sa'ir.", translation: 'Ne e kemi zbukuruar qiellin me te afert me yje dhe i kemi bere ato si gure kunder djajve, dhe kemi pergatitur per ta denimin e Zjarrit.' },
      { num: 6, transliteration: 'Walladhina kafaru birabbihim \'adhabu Jahannama wa bi\'sal-masir.', translation: 'Per ata qe mohuan Zotin e tyre eshte denimi i Xhehenemit, dhe sa perfundim i keq!' },
      { num: 7, transliteration: 'Idha ulqu fiha sami\'u laha shahiqan wa hiya tafur.', translation: 'Kur hidhen ne te, degjojne nje ze te tmerrshem ndersa ai vlon.' },
      { num: 8, transliteration: "Takadu tamayyazu minal-ghayz, kullama ulqiya fiha fawjun sa'alahum khazanatuha alam ya'tikum nadhir.", translation: 'Pothuajse shperthehet nga terbofi. Sa here qe hidhet ne te nje grup, rojtaret e tij i pyesin: A nuk ju erdhi paralajmerues?' },
      { num: 9, transliteration: "Qalu bala qad ja'ana nadhirun fakadh-dhabna wa qulna ma nazzalallahu min shay', in antum illa fi dalalin kabir.", translation: 'Thone: Po, na erdhi paralajmerues, por ne mohuam dhe thame: Allahu nuk ka zbritur asgje. Ju nuk jeni tjeter pervec ne humbje te madhe.' },
      { num: 10, transliteration: "Waqalu law kunna nasma'u aw na'qilu ma kunna fi as-habis-sa'ir.", translation: 'Dhe thone: Sikur te kishim degjuar ose logjikuar, nuk do te ishim nder banoret e Zjarrit.' },
      { num: 11, transliteration: "Fa'tarafu bidhanbihim fa-suhqan li-as-habis-sa'ir.", translation: 'Dhe e pranojne mekatin e tyre, prandaj largu qofshin banoret e Zjarrit.' },
      { num: 12, transliteration: 'Innal-ladhina yakhshawna Rabbahum bil-ghaybi lahum maghfiratun wa ajrun kabir.', translation: 'Vertet, ata qe e frikesohen Zotin e tyre ne fshehesi, per ta ka falje dhe shperblim te madh.' },
      { num: 13, transliteration: "Wa asirru qawlakum awijharu bih, innahu 'Alimun bidhatis-sudur.", translation: 'Fshihni fjalen tuaj ose shpalleni haptazi; Ai eshte i Dijshem per ate qe eshte ne zemra.' },
      { num: 14, transliteration: "Ala ya'lamu man khalaq? Wa Huwal-Latiful-Khabir.", translation: 'A nuk di Ai qe krijoi? Ai eshte i Buti, i Gjithedituri.' },
      { num: 15, transliteration: "Huwal-ladhi ja'ala lakumul-arda dhalulan famshuu fi manakibiha wa kulu mir rizqih, wa ilayhin-nushur.", translation: 'Ai eshte qe e beri token te bute per ju, prandaj ecni neper shtigjet e saj dhe hani nga furnizimi i Tij, dhe tek Ai eshte ringjallja.' },
      { num: 16, transliteration: "A-amintum man fis-sama'i an yakhsifa bikumul-arda fa-idha hiya tamur.", translation: 'A jeni te sigurte qe Ai qe eshte lart nuk do ta beje token t\'ju gllabëroje ndersa ajo dridhet?' },
      { num: 17, transliteration: "Am amintum man fis-sama'i an yursila 'alaykum hasiban, fasata'lamuna kayfa nadhir.", translation: 'Ose a jeni te sigurte qe Ai qe eshte lart nuk do te dergoje kundra jush nje stuhi guresh? Atehere do ta dini si ishte paralajmerimi Im.' },
      { num: 18, transliteration: 'Walaqad kadh-dhabal-ladhina min qablihim fakayfa kana nakir.', translation: 'Edhe ata para tyre mohuan, e si ishte denimi Im!' },
      { num: 19, transliteration: "Awalam yaraw ilat-tayri fawqahum saffatin wa yaqbidn, ma yumsikuhunna illar-Rahman, innahu bikulli shay'in Basir.", translation: 'A nuk i shohin zogjte siper tyre me krahe te hapura dhe te mbledhura? Askush nuk i mban ato pervec te Meshirshmit. Vertet Ai eshte, per cdo gje, Shikues.' },
      { num: 20, transliteration: 'Amman hadhal-ladhi huwa jundun lakum yansurakum min dunir-Rahman? Inil-kafirun illa fi ghurur.', translation: 'Ose kush eshte ai qe do te ishte ushtri per ju qe t\'ju ndihmoje pervec te Meshirshmit? Mohuesit nuk jane tjeter pervec ne mashtrim.' },
      { num: 21, transliteration: "Amman hadhal-ladhi yarzuqukum in amsaka rizqah, bal lajju fi 'utuwwin wa nufur.", translation: 'Ose kush eshte ai qe do t\'ju furnizonte nese Ai e ndal furnizimin e Tij? Por ata vazhdojne ne kryeneqesi dhe largim.' },
      { num: 22, transliteration: "Afaman yamshi mukibban 'ala wajhihi ahda amman yamshi sawiyyan 'ala siratim mustaqim.", translation: 'A eshte me i udhezuar ai qe ec i permbysur me fytyren poshte, apo ai qe ec drejt ne nje rruge te drejte?' },
      { num: 23, transliteration: "Qul Huwal-ladhi ansha'akum wa ja'ala lakumus-sam'a wal-absara wal-af'idah, qalilam ma tashkurun.", translation: 'Thuaj: Ai eshte qe ju krijoi dhe ju dha degjimin, shikimin dhe zemrat; pak falenderoni.' },
      { num: 24, transliteration: "Qul Huwal-ladhi dhara'akum fil-ardi wa ilayhi tuhsharun.", translation: 'Thuaj: Ai eshte qe ju shumoi ne toke, dhe tek Ai do te tuboheni.' },
      { num: 25, transliteration: "Wayaquluna mata hadhal-wa'du in kuntum sadiqin.", translation: 'Dhe thone: Kur eshte ky premtim, nese jeni te sinqerte?' },
      { num: 26, transliteration: "Qul innamal-'ilmu 'indallahi wa innama ana nadhirun mubin.", translation: 'Thuaj: Dituria eshte vetem tek Allahu, dhe une jam vetem nje paralajmerues i qarte.' },
      { num: 27, transliteration: "Falamma ra'awhu zulfatan si'at wujuhul-ladhina kafaru wa qila hadhal-ladhi kuntum bihi tadda'un.", translation: 'Por kur ta shohin ate duke u afruar, do te trishttohen fytyrat e atyre qe mohuan, dhe do te thuhet: Kjo eshte ajo qe ju e kerkoni.' },
      { num: 28, transliteration: "Qul ara'aytum in ahlakaniyallahu wa man ma'iya aw rahimana, faman yujiru-kafirina min 'adhabin alim.", translation: 'Thuaj: Me tregoni, nese Allahu me vdes mua dhe ata qe jane me mua, ose na meshiron, kush do t\'i mbroje mohuesit nga nje denim i dhembshem?' },
      { num: 29, transliteration: "Qul Huwar-Rahmanu amanna bihi wa 'alayhi tawakkalna, fasata'lamuna man huwa fi dalalin mubin.", translation: 'Thuaj: Ai eshte i Meshirshmi; ne i besuam Atij dhe tek Ai u mbeshttem. Dhe do ta merrni vesh kush eshte ne humbje te qarte.' },
      { num: 30, transliteration: "Qul ara'aytum in asbaha ma'ukum ghawran faman ya'tikum bima'in ma'in.", translation: 'Thuaj: Me tregoni, nese uji juaj zhytet ne toke, kush do t\'ju sjelle uje te rrjedhshem?' },
    ]
  },
  {
    id: 16, title: 'Surja Al-Kehf — Lexohet te premteve', category: 'surahs', tags: ['surahs', 'special'],
    translation: 'Kush lexon Suren Al-Kehf te premten, do ti ndricoje nje drite midis dy te premteve.',
    source: "Sahih al-Jami' 6470", status: 'Sahih',
    note: 'Lexoje cdo te premte per drite shpirterore dhe mbrojtje nga Dexhali. Me mire lexohet midis akshamit te enjtes dhe akshamit te premtes.'
  },

  // ═══ SALAH ═══
  {
    id: 17, title: 'Etehijatu — At-Tahijjat', category: 'salah', tags: ['salah'],
    translation: 'Te gjitha komplimentet, lutjet dhe fjalet e pastra jane per Allahun. Paqja qofte mbi ty, o Profet, dhe meshira e Allahut e bekimet e Tij. Paqja qofte mbi ne dhe mbi robet e drejte te Allahut. Deshmoj se nuk ka te adhuruar pervec Allahut, dhe deshmoj se Muhamedi eshte robi dhe i derguari i Tij.',
    source: 'Sahih al-Bukhari 831', status: 'Sahih',
    note: 'Lexohet ne cdo namaz gjate uljes (Teshehudit).'
  },
  {
    id: 18, title: 'Salavatet — Salavati Ibrahimi', category: 'salah', tags: ['salah'],
    translation: 'O Allah, dergoji bekime Muhamedit dhe familjes se Muhamedit, ashtu sic i dergove bekime Ibrahimit dhe familjes se Ibrahimit. Vertet Ti je i Lavderuar dhe i Lavdishem. O Allah, dergoji begatira Muhamedit dhe familjes se Muhamedit, ashtu sic i dergove begatira Ibrahimit dhe familjes se Ibrahimit. Vertet Ti je i Lavderuar dhe i Lavdishem.',
    source: 'Sahih al-Bukhari 3370', status: 'Sahih',
    note: 'Lexohet pas Etehjjatit ne uljen e fundit te cdo namazi.'
  },
  {
    id: 19, title: 'Rabbana Atina', category: 'salah', tags: ['salah', 'special'],
    translation: 'Zoti yne, na jep ne kete bote te miren dhe ne boten tjeter te miren, dhe na ruaj nga denimi i Zjarrit.',
    source: 'Quran 2:201', status: 'Quranic',
    note: 'Duaja me e shpeshte e Profetit ﷺ. (Buhari & Muslim)'
  },
  {
    id: 20, title: 'Duaja per prinderit dhe besimtaret', category: 'salah', tags: ['salah', 'special'],
    translation: 'Zoti yne, me fal mua, prinderit e mi dhe besimtaret ne Diten kur do te behet llogaria.',
    source: 'Quran 14:41', status: 'Quranic',
    note: 'Duaja e Profetit Ibrahim. Beje kete dua rregullisht per prinderit.'
  },
  {
    id: 22, title: 'Duaja e Kunutit — Salatul Vitr', category: 'salah', tags: ['salah'],
    transliteration: "Allahumma-hdini fiman hadayt, wa 'afini fiman 'afayt, wa tawallani fiman tawallayt, wa barik li fima a'tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda 'alayk, wa innahu la yadhillu man walayt, wa la ya'izzu man 'adayt, tabarakta Rabbana wa ta'alayt. Allahumma inni a'udhu biridaka min sakhatik, wa bimu'afatika min 'uqubatik, wa a'udhu bika mink, la uhsi thana'an 'alayk, Anta kama athnayta 'ala nafsik.",
    translation: 'O Allah, me udhezo mes atyre qe i ke udhezuar, me jep shendet mes atyre qe u ke dhene shendet, me merre nen kujdesin Tend mes atyre qe i ke marre nen kujdes, me beko ne ate qe me ke dhene, dhe me ruaj nga e keqja e asaj qe ke caktuar. Vertet Ti vendos dhe nuk vendoset mbi Ty. Nuk poshtersohet ai qe Ti e merr nen mbrojtje, dhe nuk lartesiohet ai qe Ti e armiqeson. I bekuar je, o Zoti yne, dhe i Lartesuar. O Allah, kerkoj mbrojtje ne kenaqesine Tende nga zemrimi Yt, ne faljen Tende nga ndeshkimi Yt. Kerkoj mbrojtje tek Ti nga Ti. Nuk mund te numeroj lavderime per Ty; Ti je ashtu sic e ke lavderuar Veten.',
    source: 'Sunan Abu Dawud 1425, Sunan an-Nasai 1746', status: 'Sahih',
    note: 'Lexohet ne rekatin e fundit te namazit te Vitrit, pas rukuse ose para saj. Hasan ibn Ali r.a. tha: "I Derguari i Allahut ﷺ me mesoi fjale qe t\'i them ne Kunutin e Vitrit."'
  },

  // ═══ SPECIAL OCCASIONS ═══
  {
    id: 21, title: 'Lutjet e Nates se Kadrit', category: 'special', tags: ['special'],
    type: 'laylatul',
    source: 'Personal Prayers (Albanian tradition)', status: 'Dua',
    note: 'Keto lutje te sinqerta lexohen tradicionaisht gjate 10 neteve te fundit te Ramazanit, vecanerisht ne netet teke (21, 23, 25, 27, 29).',
    content: [
      'O Allah, me jep sukses ne Ahiret, siguri nga Zjarri, dhe me mundeso te hyj ne Xhenet!',
      'O Allah, me fal mua, prinderit e mi, familjen, motrat, vellezerit, femijet, te afermit dhe te gjithe besimtaret!',
      'O Allah, me bej mua dhe familjen time nder ata qe do ta marrin librin e veprave ne doren e djathte.',
      'O Allah, me dhuro nje vdekje te bekuar. Me mundeso ta them Shehadetin gjate vdekjes dhe me dhuro ndermjetesimin e Profetit Muhamed \uFDFA.',
      'O Allah, me dhuro shoqerine e Profetit Muhamed \uFDFA, familjes dhe shokereve te tij ne Xhenet.',
      'O Allah, udhezoji prinderit e mi, familjen, femijet dhe ata qe i dua, dhe shpetoji nga Zjarri.',
      'O Allah, me bashko ne Xhenet me ata qe i dua per hater Tendin!',
      'O Zot, te lutem perfeksionoje besimin dhe adhurimin tim.',
      'O Allah, pranoji veprat e mia, shtoji shperblimet e mia dhe meshiren Tende. Pastroji mekatet e mia dhe fali plotesisht.',
      'O Allah, me dhuro mua, prinderve, familjes dhe femijeve udhezim dhe qendrueshmeri ne besim dhe iman.',
      'O Allah, me bej nder ata qe Ti i do, i fal, dhe i vendos nen hijen Tende ne Diten kur nuk ka hije pervec hijes se Arshit Tend.',
      'O Zoti im, mos lejo dyshim ne besimin tim, ne Njeshmerin dhe Fuqine Tende!',
      'O Allah, shtoje dashurine time per Ty dhe per Profetin Muhamed \uFDFA.',
      'O Allah, me fal dhe shtoji bekimet dhe mirsite e Tua ndaj meje.',
      'O Allah, me udhezo drejt me shume mundesive per te bere mire duke kerkuar kenaqesine Tende.',
      'O Zot, pastroji qellimet e mia, le te jene vetem per Ty. Me ruaj nga syefaqesia, mendjemadhesia dhe krenaria e rreme.',
      'O Allah, mos me lejo te lendoj, fyej, pergonoj te tjeret, ose t\'u bej padrejtesi atyre.',
      'O Krijuesi im, mos me le vetem! Me beko me nje familje te ndershme dhe femije qe do te jene freskimi i syve te mi.',
      'O Zoti im, me bej nder ata qe jane te durueshem dhe te bindur ndaj Teje dhe ndaj prinderve.',
      'O Allah, me shpeto nga sprova e Dexhalit, nga denimi i varrit, dhe nga Zjarri i Xhehenemit!',
      'O Allah, shtoje aftesine time per te dhene sadaka (lemoshe).',
      'O Allah, me beko me shendet te mire qe te mund te bej sexhde me lehtesi.',
      'O Allah, me shero plotesisht nga cdo semundje. O Allah, sheroji te semuret!',
      'O Allah, ndihmoji te varferit dhe jetimet!',
      'O Allah, beje varrin tim nje kopsht nga kopshtet e Xhenetit.',
      'O Allah, falju besimtareve dhe besimtareve, te gjalleve dhe te vdekurve.',
      'O Allah, me fal, me meshiro, me udhezo, me jep shendet dhe me furnizo.',
      'O Allah, me jep te mire ne kete bote dhe te mire ne Ahiret, dhe me ruaj nga Zjarri.',
      'O Allah, me mundeso te dal nga ky Ramazan me mekatet e falura!',
      'O Allah, me jep sukses kudo, m\'i zgjidh problemet dhe m\'i rregullo punet!',
      'O Zoti im, me dhuro dituri te dobishme, furnizim te mire dhe vepra te pranuara.',
      'O Allah, me mjafto me ate qe eshte hallall dhe me largo nga harami. Me bej te pasur me bujarine Tende qe te mos kerkoj nga askush pervec Teje.',
      'O Allah, kerkoj mbrojtje tek Ti nga brenga dhe pikellimi, nga pafuqishmeria dhe dembelizmi, nga koprracia dhe frika, nga mbytja ne borxhe dhe shtypja e njerezve.',
      'O Allah, me mundeso te kryej Haxhin. Mos me poshtero ne Diten e Gjykimit, as para Teje, profeteve, engjejve dhe njerezve.',
      'O Allah, me mundeso ta kaloj uren e Siratit me lehtesi.',
      'O Allah, me dhuro Xhenetul Firdaus — Xhenetin me te larte!',
      'O Allah, beje diten kur te qendroj para Teje diten me te lumtur te jetes sime.',
      'O Allah, me dhuro shikimin e Fytyres Tende ne Xhenet.',
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

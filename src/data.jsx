import ramon from "./assets/berenguer-ramon-sm.png";
import ramonRose from "./assets/berenguer-ramon-rose-sm.png";
import selecte from "./assets/can-paixano-selecte-sm.png";
import rosat from "./assets/can-paixano-rosat-sm.png";
import llopart from "./assets/llopart-brut-sm.png";
import llopartRose from "./assets/llopart-rose-sm.png";
import integral from "./assets/llopart-integral-sm.png";
import microcosmos from "./assets/llopart-microcosmos-sm.png";
import leopardi from "./assets/llopart-leopardi-sm.png";
import exVite from "./assets/llopart-ex-vite-sm.png";

const assortment = [
  {
    id: 1,
    title: "berenguer ramon",
    type: "brut",
    img: ramon,
    doc: "cava",
    smaak: "droog (10 gr/L)",
    druiven: "macabeu, parellada, xarel-lo",
    rijping: "10-12 maanden",
    prijs: 15.95,
    uitverkocht: false,
    info: "Een zachte ronde smaak, fijne bubbel en een bijzonder frisse hint van Groene Appel transporteren je direct naar het bruisende Barcelona. Perfect voor een borrel of feestje. Nog perfecter in combinatie met Tapa. Deze all-round Cava is de Catalaanse zon gevangen in een fles. Niet voor niets is de Ramon het best verkochte product van Can Paixano en één van onze persoonlijke favorieten!",
  },
  {
    id: 2,
    title: "berenguer ramon rosé",
    type: "brut rosé",
    img: ramonRose,
    doc: "cava",
    smaak: "droog (10 gr/L)",
    druiven: "trepat",
    rijping: "10-12 maanden",
    prijs: 16.95,
    uitverkocht: false,
    info: "De rosé variant van de Berenguer Ramon is gemaakt van exclusief Trepat druiven wat resulteert in een frisse Cava met licht-zoete tonen van honing. Een mooie ronde en zonnige Cava voor een gezellige borrel met hapjes, uitgebreide lunch of een “boozy-breakfast”.",
  },
  {
    id: 3,
    title: "can paixano selecte",
    type: "semi-sec",
    img: selecte,
    doc: "cava",
    smaak: "zoet (25 gr/L)",
    druiven: "macabeu, parellada, xarel-lo",
    rijping: "10 maanden",
    prijs: 13.95,
    uitverkocht: false,
    info: "Deze Semi-Sec Cava is speciaal voor de liefhebbers van zoet. Met een hoge dosis suikers en een delicaat aroma combineert deze variant prima met een zonnige middag of als tegenhanger van een borrelplank.",
  },
  {
    id: 4,
    title: "can paixano rosat",
    type: "semi-sec rosé",
    img: rosat,
    doc: "cava",
    smaak: "zeer zoet (35 gr/L)",
    druiven: "tempranillo, carinena, trepat",
    rijping: "10 maanden",
    prijs: 11.95,
    uitverkocht: false,
    info: "Een prachtige diep rode en zoete Semi-Sec Cava. De blend van Tempranillo, Carinena en Trepat, aangevuld met een zeer hoge dosis suikers maken dit de perfecte dessertwijn of partner voor een amuse.",
  },
  {
    id: 5,
    title: "llopart brut",
    type: "brut reserva",
    img: llopart,
    doc: "corpinnat",
    smaak: "droog (7 gr/L)",
    druiven: "macabeu, parellada, xarel-lo",
    rijping: "18-20 maanden",
    prijs: 23.25,
    uitverkocht: false,
    info: "Deze fantastische Corpinnat vertelt je alles over de uitzonderlijke kwaliteit van Llopart. Strogeel van kleur, een delicate bubbel en een aroma van wit fruit met een vleugje Middellandse zeewind. Met een minimale rijping van 18 maanden is deze Reserva is 1 van populairste producten van Llopart en een absolute all-round topper in het iets luxere segment. De kroon op iedere dinner tafel!",
  },
  {
    id: 6,
    title: "llopart brut rosé",
    type: "brut reserva rosé",
    img: llopartRose,
    doc: "corpinnat",
    smaak: "droog (8 gr/L)",
    druiven: "monastrell, garnatxa, pinot noir",
    rijping: "18-20 maanden",
    prijs: 23.25,
    uitverkocht: false,
    info: "Deze hoogwaardige Corpinnat smaakt exact zoals deze eruit ziet: luxueus, sexy en zijdezacht. Een prachtige helder roze kleur en de fijne bubbel maken alleen het uitschenken al bijzonder. Een unieke combinatie van Pinot Noir en Garnatxa strelen de tong met een palet fruitige tonen. Perfect voor een bijzondere of romantische avond en combineert geweldig met kaas, noten, fruit of zelfs desserts. Absoluut 1 van onze bestsellers en bij het proeven begrijp je exact waarom… ",
  },
  {
    id: 7,
    title: "llopart integral",
    type: "brut nature reserva",
    img: integral,
    doc: "corpinnat",
    smaak: "zeer droog (< 2 gr/L)",
    druiven: "parellada, xarel-lo, chardonnay",
    rijping: "18-20 maanden",
    prijs: 24.95,
    uitverkocht: false,
    info: "Met minder dan 3 gram suiker per liter smaakt deze Brut-Nature zeer droog en robuust. De infusie van Chardonnay en een iets grovere bubbel geeft het geheel een body die smaakt naar Spaans temparement. Een stoere en eigenwijze Corpinnat voor de liefhebber. Durf je de Integral aan? Combineer deze dan met een zoutig gerecht zoals Pata negra, vis of paella, of een snack als naturel chips en zoute popcorn.",
  },
  {
    id: 8,
    title: "llopart microcosmos",
    type: "brut nature reserva rosé",
    img: microcosmos,
    doc: "corpinnat",
    smaak: "zeer droog (< 1 gr/L)",
    druiven: "pinot noir, monastrell, garnatxa",
    rijping: "24-30 maanden",
    prijs: 29.95,
    uitverkocht: false,
    info: "Llopart creëerde met deze topper een kosmos van smaken. De blend geeft een elegante Robijnrode kleur en licht-zoete hintjes van rode bosvruchten ondanks deze Brut-Nature variant nagenoeg geen suikers bevat. Een unieke combinatie die meerdere keren in de prijzen is gevallen. De perfecte keuze voor iedereen die echt iets uitzonderlijks zoekt voor die bijzondere dinner tafel of een eindeloze zomeravond. Werkelijk een reisje naar de sterrenhemel!",
  },
  {
    id: 9,
    title: "llopart leopardi",
    type: "brut nature gran reserva",
    img: leopardi,
    doc: "corpinnat",
    smaak: "zeer droog (2 gr/L)",
    druiven: "macabeu, parellada, xarel-lo",
    rijping: "60 maanden",
    prijs: 36.95,
    uitverkocht: false,
    info: "Bernardus Leopardi was eerste gedocumenteerde eigenaar van de Llopart Estate in 1385. Deze naar hem vernoemde Brut-Nature rijpt meer dan 60 maanden en smaakt naar een echte klassieke Cava. Een krachtig en complex aroma van kruidige tonen en geroosterde noten, maar toch droog en zacht. Dit is de absolute benchmark van uitzonderlijke kwaliteit en deze Corpinnat valt dan ook regelmatig in de prijzen.",
  },
  {
    id: 10,
    title: "llopart ex-vite",
    type: "vintage brut gran reserva",
    img: exVite,
    doc: "corpinnat",
    smaak: "droog (5 gr/L)",
    druiven: "macabeu, xarel-lo",
    rijping: "90 maanden",
    prijs: 59.95,
    uitverkocht: false,
    info: "Het vlaggenschip van Llopart is gemodelleerd naar het originele Llopart familie recept uit 1887. De extreem lange rijping zorgt voor een droge en elegante Corpinnat die exclusief druiven uit het oudste deel van de Llopart wijngaard gebruikt. Een goudgele kleur, grovere bubbel en een eindeloos boeket van rokerige, aardse tonen met gedroogd fruit. Een bijzonder product voor de echte liefhebbers die fantastisch combineert met gedroogde hammen of oude kazen.",
  },
];

export default assortment;

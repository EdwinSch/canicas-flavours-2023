import ramon from "./assets/berenguer-ramon-sm.png";
import ramonRose from "./assets/berenguer-ramon-rose-sm.png";
import selecte from "./assets/can-paixano-selecte-sm.png";
import rosat from "./assets/can-paixano-rosat-sm.png";
import llopart from "./assets/llopart-brut-sm.png";
import llopartRose from "./assets/llopart-rose-sm.png";
import integral from "./assets/llopart-integral-sm.png";
import microcosmos from "./assets/llopart-microcosmos-sm.png";
import exVite from "./assets/llopart-ex-vite-sm.png";

const assortment = [
  {
    id: 1,
    title: "berenguer ramon",
    type: "brut",
    img: ramon,
    doc: "cava",
    smaak: "droog (< 12 gr/L)",
    druiven: "macabeu, parellada, xarel-lo",
    rijping: "10-12 maanden",
    prijs: 15.95,
    uitverkocht: false,
    info: "De Catalaanse zon in een fles; zo omschrijven we deze fantastische all-round Cava. Een zachte smaak, fijne bubbel en een frisse hint van Groene Appel transporteren je direct naar het bruisende Barcelona. Perfect voor een borrel of feestje, nog perfecter in combinatie met tapa. Dit is een Cava voor de levensgenieters! Niet voor niets is de Ramon het best verkochte product van Can Paixano en 1 van onze persoonlijke favorieten.",
  },
  {
    id: 2,
    title: "berenguer ramon rosé",
    type: "brut rosé",
    img: ramonRose,
    doc: "cava",
    smaak: "droog (< 12 gr/L)",
    druiven: "trepat",
    rijping: "10-12 maanden",
    prijs: 16.95,
    uitverkocht: false,
    info: "Fashion axe la croix locavore offal, migas same neutra. Raclette pour-over PBR&B gatekeep. Fingerstache man braid adaptogen, asymmetrical tumeric plaid organic craft beer ennui neutra fanny pack wolf fam.",
  },
  {
    id: 3,
    title: "can paixano selecte",
    type: "semi-sec",
    img: selecte,
    doc: "cava",
    smaak: "zoet (30 gr/L)",
    druiven: "macabeu, parellada, xarel-lo",
    rijping: "10 maanden",
    prijs: 13.95,
    uitverkocht: false,
    info: "Deze cava is speciaal voor de liefhebbers van zoet. Semi-sec heeft een hoge dosis toegevoegde suikers en combineert prima met een zonnige middag op het terras of als tegenhanger van zoutige tapa.",
  },
  {
    id: 4,
    title: "can paixano rosat",
    type: "semi-sec rosé",
    img: rosat,
    doc: "cava",
    smaak: "zoet (30 gr/L)",
    druiven: "tempranillo, carinena, trepat",
    rijping: "10 maanden",
    prijs: 11.95,
    uitverkocht: false,
    info: "Deze rose is een semi-sec variant en met en hoge dosis toegevoegde suikers een favoriet van zoete cava liefhebbers. Een bijzondere mix van Tempranillo, Carinena en Trepat geven het geheel een diep rode kleur. Werkt ook uitstekend als pairing met een amuse of dessert.",
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
    info: "Fashion axe la croix locavore offal, migas same neutra. Raclette pour-over PBR&B gatekeep. Fingerstache man braid adaptogen, asymmetrical tumeric plaid organic craft beer ennui neutra fanny pack wolf fam.",
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
    info: "Deze hoogwaardige Corpinnat smaakt exact zoals deze eruit ziet: luxueus, sexy en zijdezacht. Een prachtige Zachtroze kleur en fijne bubbel maken alleen het uitschenken al bijzonder. Een unieke combinatie van Pinot Noir en Garnatxa strelen de tong en geven een heel licht zoetig hintje. Perfect voor een bijzondere of romantische avond en combineert geweldig met kaas, noten, gedroogd vlees, fruit en zelfs desserts. Absoluut 1 van onze bestsellers en bij het proeven begrijp je exact waarom…",
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
    info: "Stoer en eigenwijs; dat is de Integral. Met minder dan 2 gram suiker per liter smaakt deze Brut-Nature zeer droog en robuust. De infusie van Chardonnay en een iets grovere bubbel geeft het geheel een frisse body die smaakt naar Spaans temparement. Durf je de Integral aan? Combineer deze dan met een zoutig gerecht zoals Pata negra, vis of paella, of een snack als naturel chips en zoute popcorn.",
  },
  {
    id: 8,
    title: "llopart microcosmos",
    type: "brut nature gran reserva",
    img: microcosmos,
    doc: "corpinnat",
    smaak: "zeer droog (< 1 gr/L)",
    druiven: "pinot noir, monastrell, garnatxa",
    rijping: "24-30 maanden",
    prijs: 29.95,
    uitverkocht: false,
    info: "De Microcosmos is werkelijk een reisje naar de sterrenhemel. Bij het rijpen van deze hoogwaardige en uitzonderlijke Gran Reserva wordt een selectie van rode vruchten toegevoegd. Dit geeft niet alleen een bijzondere Robijnrode kleur. Maar zorgt ook voor hintjes van zoet-fruitge tonen ondanks deze Brut-Nature variant nagenoeg geen suikers bevat. Een unieke combinatie en de perfecte keuze voor iedereen die echt iets bijzonders zoekt. 1 van onze persoonlijke favorieten en de kers op de taart voor iedere diner tafel of een eindeloze zwoele zomeravond. ",
  },
  {
    id: 9,
    title: "llopart ex-vite",
    type: "vintage brut gran reserva",
    img: exVite,
    doc: "corpinnat",
    smaak: "droog (5 gr/L)",
    druiven: "macabeu, xarel-lo",
    rijping: "90 maanden",
    prijs: 59.95,
    uitverkocht: false,
    info: "Deze Gran-Reserva is gemodelleerd naar het originele Llopart familie recept uit 1887. De extreem lange groei en rijping zorgt voor een droge en robuuste Corpinnat die exclusief druiven uit een 100 jaar oud deel van de Llopart wijngaard gebruikt. Deze stevige jongen bevat een eindeloos boeket van aardse, houterige en rokerige tonen met een vleugje Middelandse zeewind. Een bijzonder product voor de echte liefhebbers die fantastisch combineert met gedroogde hammen of Manchego kaas.",
  },
];

export default assortment;

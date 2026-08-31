/**
 * Krátke tóny cez WebAudio — žiadne zvukové súbory.
 *
 * Prístup aj ladenie tónov sú prevzaté z astro-bento-portfolio (Ladvace, MIT):
 * hover kariet je krátky zostupný cvak, prepnutie témy trojtónový akord.
 */

type Tone = {
  freq: number;
  /** Cieľová frekvencia — tón sa k nej zošmykne za `decay`. */
  to?: number;
  type?: OscillatorType;
  /** Oneskorenie oproti začiatku, v sekundách. */
  at?: number;
  peak?: number;
  attack?: number;
  decay: number;
};

/* Prehliadač povolí obmedzený počet kontextov, tak si držíme jeden. */
let ctx: AudioContext | null = null;

function audio(): AudioContext {
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function voice({ freq, to, type = "sine", at = 0, peak = 0.1, attack, decay }: Tone) {
  const c = audio();
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.connect(gain).connect(c.destination);
  osc.type = type;

  const t = c.currentTime + at;
  osc.frequency.setValueAtTime(freq, t);
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t + decay);

  gain.gain.setValueAtTime(attack ? 0.0001 : peak, t);
  if (attack) gain.gain.linearRampToValueAtTime(peak, t + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + decay);

  osc.start(t);
  osc.stop(t + decay);
}

export function soundEnabled(): boolean {
  try {
    return localStorage.getItem("sound") === "on";
  } catch {
    return false;
  }
}

export function play(tones: Tone[]) {
  if (!soundEnabled()) return;
  try {
    tones.forEach(voice);
  } catch {
    /* zvuk je nadstavba — keď sa nedá, ticho pokračujeme */
  }
}

/** Prejdenie myšou po karte. */
export const CARD_HOVER: Tone[] = [{ freq: 1100, to: 500, peak: 0.06, decay: 0.018 }];

/** Kliknutie na odkaz alebo tlačidlo. */
export const CLICK: Tone[] = [
  { freq: 620, to: 320, type: "triangle", peak: 0.05, decay: 0.05 },
];

/** Prepnutie akcentovej farby. */
export const CHIME: Tone[] = [440, 554, 659].map((freq, i) => ({
  freq,
  type: "triangle",
  at: i * 0.055,
  peak: 0.06,
  attack: 0.01,
  decay: 0.18,
}));

/** Odoslaný odkaz v návštevnej knihe. */
export const SENT: Tone[] = [523, 784].map((freq, i) => ({
  freq,
  type: "triangle",
  at: i * 0.09,
  peak: 0.07,
  attack: 0.01,
  decay: 0.22,
}));

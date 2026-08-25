// x.js – Struktur (OI / IX / Eingang / Ursache)
export function X(p, v, i) {
    const OI = p + v;      // Öffnen
    const IX = v * i;      // Kreuzen
    const eingang = p + v + i;  // Ursache

    return {
        p, v, i,
        OI,
        IX,
        eingang,
        ursache: eingang
    };
}

const round = n => +n.toFixed(2)
const perc = (n, p) => (n / 100) * p
const addPerc = (n, p) => round(n + perc(n, p))

export { round, perc, addPerc }

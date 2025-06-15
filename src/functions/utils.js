const round = n => +n.toFixed(2)
const percent = (n, p) => round((n / 100) * p)
const addPercent = (n, p) => round(n + percent(n, p))
const subPercent = (n, p) => round(n - percent(n, p))

export { round, percent, addPercent, subPercent }

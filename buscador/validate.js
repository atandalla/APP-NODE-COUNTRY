const isValidYear = (country, year) => {
    if (isNaN(year)) {
        throw new Error('El anio debe ser un numero.')
    }

    let validYears = Object.keys(country)
    validYears = validYears.map(year => +year)
    validYears = validYears.filter(year => !isNaN(year))

    return validYears.includes(year)
}


module.exports = {

    isValidYear
}
export function kelvinToCelsius(kelvinDegrees) {
    return (kelvinDegrees - 273.15).toFixed(0);
}

export function fahrenheitToCelsius(fahrenheitDegrees) {
    return ((fahrenheitDegrees - 32) * (5 / 9)).toFixed(0);
}

export function celsiusToFahrenheit(celsiusDegrees) {
    return ((celsiusDegrees * 9 / 5) + 32).toFixed(0);
}

export function kelvinToFahrenheit(kelvinDegrees) {
    return ((kelvinDegrees - 273.15) * 9 / 5 + 32).toFixed(0);
}
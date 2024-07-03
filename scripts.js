function calcular() {
    // Obtener valores del formulario
    let montoUSD = parseFloat(document.getElementById('montoUSD').value);
    let tasaPayPal = parseFloat(document.getElementById('tasaPayPal').value);
    let tasaBinance = parseFloat(document.getElementById('tasaBinance').value);

    // Calcular el monto en ARS necesario para obtener el monto final en USD
    let montoARS = montoUSD * tasaBinance;

    // Calcular el monto a cobrar en PayPal para obtener el monto final en ARS
    let montoPayPal = montoARS / tasaPayPal;

    // Mostrar resultado
    document.getElementById('resultado').innerText = `Deberías cobrar aproximadamente ${montoPayPal.toFixed(2)} USD por PayPal.`;
}

function calAr() {
    const A = parseFloat(document.getElementById('A').value);
    const B = parseFloat(document.getElementById('B').value);
    const C = parseFloat(document.getElementById('C').value);

        if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert('ingrese valores válidos.');
    return;
    }

    const areaTriangulo = 0.5 * (A - C) * B;
    const areaRectangulo = C * B;
    const areaTotal = areaTriangulo + areaRectangulo;

    document.getElementById('result').innerText = `El área total del terreno es: ${areaTotal.toFixed(2)} metros cuadrados.`;
    }
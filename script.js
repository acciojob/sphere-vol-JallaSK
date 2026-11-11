function volume_sphere(event) {

    if (event.type !== "submit") return;

    event.preventDefault();

    const radius = Number(document.getElementById("radius").value);

    let volume = NaN;

    if (Number.isFinite(radius) && radius >= 0) {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    }

    document.getElementById("volume").value = volume.toFixed(4);
}

window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;

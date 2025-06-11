const watch = document.getElementById('watch');
const mode = ["mode-off", "mode-analog", "mode-digital"];
modeIdx = 0;
watch.addEventListener("click", () => {
    modeIdx = (modeIdx + 1) % mode.length;
    watch.className = mode[modeIdx]
})

const Hhour = document.getElementById('hHand')
const Mmin = document.getElementById('mHand')
const Ssec = document.getElementById('sHand')
const digital = document.getElementById("digital");

function updateClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hor = now.getHours() % 12;

    const secDeg = sec * 6;
    const minDeg = min * 6 + sec * 0.1;
    const horDeg = (hor % 12) * 30 + min * 0.5;

    Ssec.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    Mmin.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    Hhour.style.transform = `translateX(-50%) rotate(${horDeg}deg)`;
    digital.textContent = now.toLocaleTimeString("en-GB");

}
setInterval(updateClock, 1000);
updateClock()


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("✅ Service Worker Registered"))
        .catch(err => console.error("❌ SW Error:", err));
}
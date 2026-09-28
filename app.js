const VIDEO_BASE = "https://media.musclewiki.com/media/uploads/videos/branded/male-";
const SERIES = 3;
const CLAVE = "rutina-ultimo-dia";

const dias = document.getElementById("dias");
const contenido = document.getElementById("contenido");
const terminar = document.getElementById("terminar");

let diaActual = 0;

function leerUltimo() {
  try {
    const valor = parseInt(localStorage.getItem(CLAVE), 10);
    return Number.isInteger(valor) ? valor : -1;
  } catch (e) {
    return -1;
  }
}

function guardarUltimo(indice) {
  try {
    localStorage.setItem(CLAVE, String(indice));
  } catch (e) {}
}

// Reproduce los vídeos solo cuando están en pantalla.
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      if (!target.src) target.src = target.dataset.src;
      target.play().catch(() => {});
    } else {
      target.pause();
    }
  });
}, { rootMargin: "200px 0px" });

function crearVideo(id, vista, texto) {
  const figura = document.createElement("figure");
  figura.style.margin = "0";
  const video = document.createElement("video");
  video.dataset.src = `${VIDEO_BASE}${id}-${vista}.mp4`;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.preload = "none";
  const etiqueta = document.createElement("figcaption");
  etiqueta.className = "etiqueta";
  etiqueta.textContent = texto;
  figura.append(video, etiqueta);
  observador.observe(video);
  return figura;
}

function crearEjercicio(ejercicio) {
  const art = document.createElement("article");
  art.className = "ejercicio";

  const titulo = document.createElement("h3");
  titulo.textContent = ejercicio.nombre;

  const videos = document.createElement("div");
  videos.className = "videos";
  videos.append(
    crearVideo(ejercicio.video, "front", "Frente"),
    crearVideo(ejercicio.video, "side", "Lateral")
  );

  const series = document.createElement("div");
  series.className = "series";
  for (let i = 1; i <= SERIES; i++) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = `Serie ${i}`;
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", () => {
      b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
    });
    series.append(b);
  }

  const pasos = document.createElement("ol");
  ejercicio.pasos.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    pasos.append(li);
  });

  art.append(titulo, videos, series, pasos);
  return art;
}

function mostrarDia(indice) {
  diaActual = indice;
  [...dias.children].forEach((b, i) => b.setAttribute("aria-pressed", String(i === indice)));

  contenido.querySelectorAll("video").forEach((v) => observador.unobserve(v));
  contenido.replaceChildren();

  RUTINA[indice].grupos.forEach((grupo) => {
    const h2 = document.createElement("h2");
    h2.textContent = grupo.musculo;
    contenido.append(h2);
    grupo.ejercicios.forEach((e) => contenido.append(crearEjercicio(e)));
  });
}

RUTINA.forEach((dia, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.innerHTML = `Día ${i + 1}<span></span>`;
  b.querySelector("span").textContent = dia.nombre;
  b.addEventListener("click", () => {
    mostrarDia(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  dias.append(b);
});

terminar.addEventListener("click", () => {
  guardarUltimo(diaActual);
  mostrarDia((diaActual + 1) % RUTINA.length);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Al abrir, muestra el día siguiente al último terminado.
mostrarDia((leerUltimo() + 1) % RUTINA.length);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

/*
  app.js
  Carga dinámicamente textos.json y publicidades.json
  y renderiza la web. Edita content/textos.json y content/publicidades.json
  para actualizar todo el contenido sin tocar el HTML.
*/

async function cargarJSON(ruta){
  try{
    const res = await fetch(ruta);
    if(!res.ok) throw new Error('Error al cargar ' + ruta + ' ('+res.status+')');
    return await res.json();
  }catch(e){
    console.warn(e);
    return null;
  }
}

function crearActividadHTML(a){
  const div = document.createElement('div');
  div.className = 'actividad';
  div.innerHTML = `<strong>${a.titulo}</strong><p>${a.descripcion || ''}</p>`;
  return div;
}

function renderActividades(data){
  const cont = document.getElementById('actividades-content');
  cont.innerHTML = '';
  const tipo = cont.dataset.tipo || 'diarias';
  const lista = (data.actividades && data.actividades[tipo]) || [];
  if(lista.length === 0){
    cont.innerHTML = '<p class="muted">No hay actividades para esta categoría.</p>';
    return;
  }
  lista.forEach(a => cont.appendChild(crearActividadHTML(a)));
}

function renderServicios(data){
  const cont = document.getElementById('servicios-content');
  cont.innerHTML = '';
  const servicios = data.servicios || {};
  for(const key of Object.keys(servicios)){
    const box = document.createElement('div');
    box.className = 'serv-box';
    box.innerHTML = `<h3>${key.replace('_',' ').toUpperCase()}</h3>`;
    servicios[key].forEach(s => {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${s.nombre}</strong> — ${s.descripcion} <br/><small>${s.telefono || ''}</small>`;
      box.appendChild(p);
    });
    cont.appendChild(box);
  }
}

function renderPublicidades(pub){
  const cont = document.getElementById('publicidades-media');
  cont.innerHTML = '';
  if(!pub) return;
  // Imagenes
  (pub.imagenes||[]).forEach(item => {
    const el = document.createElement('div');
    el.className = 'pub-item';
    const img = document.createElement('img');
    img.src = 'images/publicidades/' + item.archivo;
    img.alt = item.titulo || '';
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<strong>${item.titulo || ''}</strong> <div><a href="${item.link || '#'}">Ver</a></div>`;
    el.appendChild(img);
    el.appendChild(meta);
    cont.appendChild(el);
  });
  // Videos
  (pub.videos||[]).forEach(item => {
    const el = document.createElement('div');
    el.className = 'pub-item';
    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'metadata';
    video.src = 'videos/' + item.archivo;
    // handle missing video: use poster image if provided
    if(item.poster) video.poster = 'images/publicidades/' + item.poster;
    video.onerror = function(){ // si no se puede cargar el video, mostrar poster o placeholder
      const img = document.createElement('img');
      img.src = video.poster || 'images/publicidades/placeholder.svg';
      el.replaceChild(img, video);
    };
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<strong>${item.titulo || ''}</strong> <div><a href="${item.link || '#'}">Ver</a></div>`;
    el.appendChild(video);
    el.appendChild(meta);
    cont.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', async ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();

  const textos = await cargarJSON('content/textos.json');
  const publicidades = await cargarJSON('content/publicidades.json');

  if(textos){
    document.getElementById('site-title').textContent = textos.titulo || 'Turismo';
    document.getElementById('site-desc').textContent = textos.descripcion || '';
    document.getElementById('pub-titulo').textContent = (textos.publicidades && textos.publicidades.titulo) || 'Publicidades';
    document.getElementById('contact-titulo').textContent = (textos.contacto && textos.contacto.titulo) || 'Contacto';
    const contactInfo = `Email: <a href="mailto:${textos.contacto.email}">${textos.contacto.email}</a><br/>Tel: ${textos.contacto.telefono}`;
    document.getElementById('contact-info').innerHTML = contactInfo;
    // render initial actividades
    const actCont = document.getElementById('actividades-content');
    actCont.dataset.tipo = 'diarias';
    renderActividades(textos);
    renderServicios(textos);
  }

  if(publicidades){
    renderPublicidades(publicidades);
  }

  // tabs
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', (e)=>{
      document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const t = e.currentTarget.dataset.tab;
      const cont = document.getElementById('actividades-content');
      cont.dataset.tipo = t;
      if(textos) renderActividades(textos);
    });
  });

  // graceful fallback if fetch fails (e.g., opening via file:// in some browsers)
  if(!textos && !publicidades){
    const main = document.querySelector('main');
    const err = document.createElement('div');
    err.className = 'card';
    err.innerHTML = '<strong>No fue posible cargar los archivos JSON localmente.</strong><p>Si estás abriendo el archivo directamente (protocolo <code>file://</code>), algunos navegadores bloquean <code>fetch</code> para archivos locales. Sube la carpeta a un hosting estático o usa un servidor local simple (por ejemplo: <code>python -m http.server</code> en la carpeta) para ver todo el contenido dinámico.</p>';
    main.insertBefore(err, main.firstChild);
  }
});

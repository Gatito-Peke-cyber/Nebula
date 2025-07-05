//let modoDiagnosticoActivo = false; // Estado global - heraldico - no en uso ####


function abrirArchivo(nombre) {
  const ventana = document.getElementById('ventana');
  const contenido = document.getElementById('contenido-archivo');

  // Limpia clases anteriores y deja solo la clase base
  ventana.className = "ventana";

  let mensaje = "";

  switch (nombre) {
    //case 'heraldico':
  //ventana.classList.add("ventana-heraldico");
  //mensaje = `
    //<h3>Σ-Fragmento.sys</h3>
    //<p><em>Escaneando registros arcaicos...</em></p>
    //<div class="fragmento-panel">
      //🔍 Símbolo encontrado: <strong>Λ-13</strong><br>
      //Linaje clasificado como <span class="clan">[CLAN: CAÍDOS]</span>
    //</div>
  //`;
  //break;


    case 'heraldico':
  ventana.classList.add("ventana-heraldico");
  mensaje = `
    <div class="fragmento-contenedor">
      <h3>Σ-Fragmento.sys</h3>
      <p id="mensaje-inicial">📡 Escaneando integridad del fragmento...</p>

      <div class="barra-progreso">
        <div class="progreso-interno" id="barra-progreso"></div>
      </div>

      <pre id="fragmento-contenido" class="fragmento-texto" style="display: none;"></pre>

      <pre id="fragmento-mensaje-vivo" class="mensaje-vivo" style="display: none;"></pre>

      <button id="btn-reintentar" class="btn-decodificar" onclick="iniciarFragmento()" style="display: none;">🔁 Reintentar decodificación</button>
    </div>
  `;
  setTimeout(() => iniciarFragmento(), 700);
  break;








//case 'flamea':
  //ventana.classList.add("ventana-flamea");
  //mensaje = `
    //<h3>Iniciación_Flamea.neb</h3>
    //<p><em>Protocolo espiritual activado.</em></p>
    //<div class="flamea-secuencia">
      //🔥 Intensidad detectada: <strong>ALTA</strong><br>
      //🜂 Elemento: Fuego Primordial<br>
      //🧘 Estado interior: <span class="llama">Conectado</span>
    //</div>
  //`;
  //break;

case 'flamea':
  ventana.classList.add("ventana-flamea");
  mensaje = `
    <h3>Iniciación_Flamea.neb</h3>
    <p class="flamea-intro">Conexión al flujo *****.</p>
    <div class="red-espiritual">
      <div id="usuarios-flamea"></div>
    </div>
  `;
  setTimeout(iniciarRedEspiritual, 500);
  break;






case 'eco_mem':
  ventana.classList.add("ventana-eco");
  mensaje = `
    <div class="eco-titulo">
      <h3>eco_mem-13.mnd</h3>
      <p>🧠 Sistema de recuperación de memorias alteradas</p>
    </div>

    <div class="eco-memoria">
      <h4>📁 Memorias Fragmentadas</h4>
      <ul id="lista-memorias" class="eco-lista"></ul>
    </div>

    <div class="eco-comparador">
      <h4>🔍 Comparador: Memoria vs Realidad</h4>
      <pre id="comparador-texto" class="eco-pre">Selecciona una memoria...</pre>
    </div>

    <div class="eco-terminal">
      <h4>⌨ Terminal</h4>
      <input type="text" id="eco-input" placeholder="/comando secreto..." onkeydown="ecoProcesarComando(event)" />
      <div id="eco-respuesta" class="eco-respuesta"></div>
    </div>
  `;
  setTimeout(cargarEcoMemorias, 300);
  break;



    case 'notas':
  ventana.classList.add("ventana-notas");
  mensaje = `
    <h3 class="glitch-text">Notas del administrador.wav</h3>
    <p class="nota-intro">⏯ Reproduciendo fragmento de *** del administrador *****...</p>
    
    <div class="nota-audio">
      <audio controls autoplay id="audioPrincipal">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
        Tu navegador no soporta audio embebido.
      </audio>
    </div>

    <div class="onda-visual glitch-text" id="ondaVisual">
      ▒▒▒▓▓▓▒▒▒▓▓▓▓▓▒▒▒▓▓▓▓▒▒▒
    </div>

    <div class="nota-oculta" id="transcripcion" style="display:none; margin-top: 1rem;">
      <p class="glitch-text">⚠ Transcripción fallida: El contenido está corrompido.</p>
      <p class="glitch-text">🔊 Iniciando recuperación de capas de audio de ****...</p>
      <audio controls id="audioOculto">
        <source src="https://cdn.pixabay.com/audio/2023/03/20/audio_20283ee0b4.mp3" type="audio/mpeg">
        Tu navegador no soporta audio embebido.
      </audio>
    </div>
  `;

  setTimeout(() => {
    document.getElementById("transcripcion").style.display = "block";
  }, 9000); // Muestra la segunda parte luego de 9 segundos

  break;



    //case 'delta':
  //ventana.classList.add("ventana-delta");
  //mensaje = `
   // <h3>δ-me13.exe</h3>
    //<p>⚠ Archivo encriptado. Requiere clave de sistema.</p>
    //<input type="text" id="clave-delta" placeholder="Ingresar código..." autocomplete="off" />
    //<div id="resultado-delta" style="margin-top:1rem;"></div>
  //`;
  //setTimeout(() => {
    //const input = document.getElementById("clave-delta");
    //const resultado = document.getElementById("resultado-delta");

    //input.addEventListener("keydown", (e) => {
      //if (e.key === "Enter") {
        //const clave = input.value.trim();
        //if (clave === "ME13-Δx") {
          //resultado.innerHTML = `
           // <p style="color:#0f0;">✔ Acceso concedido. Cargando protocolos ocultos...</p>
           // <p><code>01101101 01100101 00110001 00110011</code></p>
          //`;
          //input.classList.remove("error-shake");
        //} else {
          //resultado.innerHTML = `<p style="color:#f66;">✖ Clave incorrecta. Intento denegado.</p>`;
          //input.classList.add("error-shake");
          //setTimeout(() => input.classList.remove("error-shake"), 300);
        //}
      //}
    //});
  //}, 100);
  //break;


  case 'delta':
  ventana.classList.add("ventana-delta");
  mensaje = `
    <h3>δ-me13.exe</h3>
    <p><em>Conexión parcial con entidades residuales... #Recuerdos...</em></p>
    <div class="contenedor-conciencias">
      <div class="lista-conciencias">
        <h4>Conciencias disponibles</h4>
        <ul id="lista-conciencias"></ul>
      </div>
      <div class="panel-chat">
        <h4>Canal abierto: <span id="nombre-conciencia">-</span></h4>
        <div class="chat-log" id="chat-log"></div>
        <input type="text" id="entrada-chat" placeholder="Escribe un mensaje..." />
      </div>
    </div>
    <div class="pensamientos-flotantes" id="pensamientos-flotantes"></div>
  `;
  setTimeout(() => {
    cargarConciencias();
    generarPensamientos();
    activarChatConciencia(); // 🧠 Activar enter desde JavaScript
  }, 300);
  break;







    //case 'codice':
  //ventana.classList.add("ventana-codice");
  //mensaje = `
    //<h3>CódiceLatente.txt</h3>
    //<p>Descifrando contenido...</p>
    //<pre id="codice-texto" class="codice-terminal"></pre>
  //`;
  //setTimeout(mostrarCodice, 1000);
  //break;


  case 'codice':
  mensaje = `
    <h3>CódiceLatente.txt</h3>
    <p>Explorando fragmentos internos del códice:</p>
    <ul class="archivo-lista">
      <li onclick="abrirSubArchivo('entrada1')">📄 traducción_01.log</li>
      <li onclick="abrirSubArchivo('entrada2')">📄 texto_encriptado_δ2.txt</li>
      <li onclick="abrirSubArchivo('entrada3')">📄 acceso_restringido.glph 🔒</li>
      <li onclick="abrirSubArchivo('entrada4')">📄 error_memoria404.bkp ⚠️</li>
    </ul>
    <div id="subarchivo-contenido" class="subarchivo"></div>
  `;
  break;


  



    case 'reactor':
  ventana.classList.add("ventana-reactor");
  mensaje = `
    <h3>Reactor-Fz0.exe</h3>
    <p><strong style="color:#ff3300;">⚠ Advertencia:</strong> Activación del núcleo inestable.</p>
    <div class="reactor-panel">
      <div id="contador-reactor">Iniciando secuencia en: <span id="cuenta">5</span>...</div>
      <div class="barra-energia"></div>
    </div>
  `;
  setTimeout(() => iniciarCuentaRegresiva(), 500);
  break;


    //case 'eclipse':
  //ventana.classList.add("ventana-eclipse");
  //mensaje = `
    //<h3>EclipseFinal.dll</h3>
    //<div class="error-critico">✖ Error fatal del sistema: eclipse_interno()</div>
    //<p>El archivo intentó acceder a una función prohibida...</p>
    //<p><code>Stack Overflow: 0xF00D1337</code></p>
  //`;
  //break;


  //eclipse parte 2
  //case 'eclipse':
  //ventana.classList.add("ventana-eclipse");
  //mensaje = `
    //<h3>EclipseFinal.dll</h3>
    //<p class="descripcion-eclipse">Archivos recuperados del evento Sigma</p>
    //<ul id="lista-testimonios" class="testimonios-archivos"></ul>
    //<div id="detalle-testimonio" class="detalle-testimonio oculto"></div>
  //`;
  //setTimeout(cargarTestimonios, 500);
  //break;


  case 'eclipse':
  ventana.classList.add("ventana-eclipse");

  mensaje = `
  <div class="eclipse-contenedor">
    <div class="eclipse-contactos">
      <h3>📡 Contactos</h3>
      <ul id="lista-contactos"></ul>
    </div>

    <div id="panel-chat" class="eclipse-chat oculto">
      <div class="chat-header">
        <span id="nombre-contacto"></span>
       
      </div>
      <div id="chat-mensajes" class="chat-mensajes"></div>
      <div class="chat-input">
        <input type="text" id="entrada-usuario" placeholder="Escribe tu mensaje..." onkeydown="detectarEnter(event)">
      </div>
    </div>
  </div>
`;


  setTimeout(() => {
    cargarContactos();
  }, 300);
  break;




        case 'metadatos':
  ventana.classList.add("ventana-metadatos");
  mensaje = `
    <h3>metadatos_null.bkp</h3>
    <p>🔐 Archivo oculto. Se requiere autenticación para acceder.</p>
    <input type="text" id="clave-metadatos" placeholder="Clave de acceso..." autocomplete="off" />
    <div id="resultado-metadatos" style="margin-top:1rem;"></div>
  `;
  setTimeout(() => {
    const input = document.getElementById("clave-metadatos");
    const resultado = document.getElementById("resultado-metadatos");

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const clave = input.value.trim();
        if (clave === "NULL-042") {
          resultado.innerHTML = `
            <p style="color:#00ffcc;">✔ Acceso concedido a registros cifrados.</p>
            <p><code>[ACCESS_LOG_Δ]→ backup://root/system/core/metas.bkp</code></p>
          `;
          input.classList.remove("error-shake");
        } else {
          resultado.innerHTML = `<p style="color:#ff5555;">✖ Clave incorrecta. Archivo inaccesible.</p>`;
          input.classList.add("error-shake");
          setTimeout(() => input.classList.remove("error-shake"), 300);
        }
      }
    });
  }, 100);
  break;



    //case 'herencia':
  //ventana.classList.add("ventana-herencia");
  //mensaje = `
    //<h3>herencia_oscura.sys</h3>
    //<p>🧬 Intentando reconstruir archivo heredado...</p>
    //<div class="corrupcion">
      //<p>░▒▓█ Archivo dañado █▓▒░</p>
      //<p><code>error@0x0002FF: inestabilidad genética</code></p>
      //<p><em>¿Quieres restaurar la línea rota?...</em></p>
    //</div>
  //`;
  //break;

  case 'herencia':
  ventana.classList.add("ventana-herencia");
  mensaje = `
    <h3 class="glitch-text">herencia_oscura.sys</h3>
    <p class="glitch-text">Sistema encriptado. Ingrese comandos secretos para acceder a los fragmentos.</p>
    <div class="terminal-container">
      <pre id="terminal-output" class="codice-terminal">> Terminal iniciada. Escriba /help para ver comandos disponibles.</pre>
      <input type="text" id="terminal-input" placeholder="Escribe un comando..." />
    </div>
  `;
  setTimeout(inicializarTerminalExtendida, 500);
  break;

      case 'nodo':
  ventana.classList.add("ventana-nodo");
  mensaje = `
    <div class="nodo-contenido">
      <h3>Σ-Nodo_Nebular.drv</h3>
      <p class="nodo-alerta">🛑 Acceso Clasificado: Cámara 7B</p>
      <div class="nodo-pantalla">
        <div class="pantalla-glitch-simple">
          <div class="interferencia">▒▒▒ Señal inestable ▒▒▒</div>
        </div>
      </div>
      <p class="nodo-mensaje">📡 Monitoreando actividad... Identidad no confirmada.</p>
      <p class="nodo-mensaje">⏳ Conectando al núcleo central...</p>
    </div>
  `;

  setTimeout(() => {
    window.open("nucleo-central.html", "_blank");
  }, 5000); // 5 segundos de espera

  break;











    default:
      mensaje = "<p>Archivo no encontrado.</p>";
  }

  contenido.innerHTML = mensaje;
  ventana.style.display = 'block';
}


function cerrarVentana() {
  document.getElementById('ventana').style.display = 'none';
}




function actualizarHora() {
  const ahora = new Date();
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();

  // Agrega ceros delante si es menor a 10 (ej: 9 → 09)
  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;

  const horaFormateada = `${horas}:${minutos}`;
  document.getElementById('hora-sistema').textContent = horaFormateada;
}

// Actualiza la hora al cargar la página
actualizarHora();

// Actualiza cada 30 segundos por si el usuario deja la pestaña abierta
setInterval(actualizarHora, 30000);




//de metadatos

function verificarClave() {
  const claveCorrecta = "Δ-92z"; // Puedes cambiarla por la que tú quieras
  const input = document.getElementById("clave-metadatos");
  const resultado = document.getElementById("resultado-clave");

  if (input.value === claveCorrecta) {
    resultado.innerHTML = `
      <p><strong>✔ Acceso concedido.</strong> Mostrando metadatos del sistema:</p>
      <ul>
        <li>🔹 Usuario: Root_Δ13</li>
        <li>🔹 Último acceso: [desconocido]</li>
        <li>🔹 Nivel de riesgo: <span style="color:orange;">ALTO</span></li>
        <li>🔹 Archivo corrupto: 38%</li>
      </ul>
    `;
  } else {
    resultado.innerHTML = `<p style="color:red;"><strong>✖ Clave incorrecta.</strong> Intento registrado.</p>`;
  }
}




//esto pertenece al reactor

function iniciarCuentaRegresiva() {
  let segundos = 5;
  const span = document.getElementById("cuenta");
  const barra = document.querySelector(".barra-energia");

  const intervalo = setInterval(() => {
    segundos--;
    span.textContent = segundos;

    barra.style.width = (5 - segundos) * 20 + '%';

    if (segundos <= 0) {
      clearInterval(intervalo);
      span.textContent = "¡CRÍTICO!";
      barra.classList.add("peligro");
    }
  }, 1000);
}







//esto es de Delta

//function verificarDelta() {
  //const clave = "ME13-Δx"; // la clave secreta
  //const entrada = document.getElementById("clave-delta");
  //const resultado = document.getElementById("resultado-delta");

  //if (entrada.value === clave) {
    //resultado.innerHTML = `<p>✔ Clave aceptada. Accediendo al protocolo ME13...</p><p><code>01001100 01101001 01100010 01100101 01110010</code></p>`;
  //} else {
    //resultado.innerHTML = `<p style="color:red;">✖ Código inválido. Intento registrado.</p>`;
  //}
//}





//esto es de delta 2

const conciencias = [
  { nombre: "Entidad ECHO-1", respuestas: ["¿Dónde estoy...?", "El fuego me alcanzó, pero no me quemó.", "Escuchas eso... ¿también lo oyes?"] },
  { nombre: "Delta13 (copia latente)", respuestas: ["No hables de lo que viste.", "La memoria duele cuando vuelve.", "No deberías estar aquí."] },
  { nombre: "Sombra-7", respuestas: ["Veo tu núcleo.", "Tu alma no está sola.", "Cierra los ojos y cuenta hasta 13..."] },
  { nombre: "JDK-15", respuestas: ["15-93", "Tu...", "Cerrar..."] },
  { nombre: "KJ-GB-49", respuestas: ["94-31", "99-25", "Hasta un día..."] },
  { nombre: "*****", respuestas: ["** ***** ***", "***** ****", "/****..."] },
];

let concienciaActual = null;

function cargarConciencias() {
  const ul = document.getElementById("lista-conciencias");
  ul.innerHTML = "";
  conciencias.forEach((c, i) => {
    const li = document.createElement("li");
    li.textContent = c.nombre;
    li.onclick = () => seleccionarConciencia(i);
    ul.appendChild(li);
  });
}

function seleccionarConciencia(index) {
  concienciaActual = conciencias[index];
  document.getElementById("nombre-conciencia").textContent = concienciaActual.nombre;
  document.getElementById("chat-log").innerHTML = "";
}

function generarPensamientos() {
  const pensamientos = [
    "△ Nodo no identificado...",
    "<< Capa de conciencia desestabilizada >>",
    "¿Cuántas veces he muerto aquí?",
    "Interferencia de origen emocional.",
    "/////ERROR: identidad inconsistente/////",
    "Me olvidé de mí.",
    "El archivo Pk15.",
    "El comando /****.",
    "Nunca vayas al Núcleo.",
    "No ingreses más profundo.",
    "Salva tu vida antes que sea demasiado tarde.",
    "Vino ***** a matarme.",
    "😺✨",
  ];
  const div = document.getElementById("pensamientos-flotantes");
  setInterval(() => {
    const p = document.createElement("div");
    p.textContent = pensamientos[Math.floor(Math.random() * pensamientos.length)];
    p.style.marginTop = `${Math.random() * 200}px`;
    div.appendChild(p);
    if (div.children.length > 1) div.removeChild(div.children[0]);
  }, 2000);
}

// 🔴 Agregamos el listener al input desde JS (sin usar onkeydown en HTML)
function activarChatConciencia() {
  const entrada = document.getElementById("entrada-chat");
  entrada.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && concienciaActual) {
      const log = document.getElementById("chat-log");
      const texto = entrada.value.trim();
      if (texto === "") return;

      const mensajeUsuario = `<div><strong>Tú:</strong> ${texto}</div>`;
      log.innerHTML += mensajeUsuario;

      const respuesta = concienciaActual.respuestas[Math.floor(Math.random() * concienciaActual.respuestas.length)];
      const mensajeRespuesta = `<div><strong>${concienciaActual.nombre}:</strong> ${respuesta}</div>`;
      setTimeout(() => {
        log.innerHTML += mensajeRespuesta;
        log.scrollTop = log.scrollHeight;
      }, 1000);

      entrada.value = "";
    }
  });
}


//era 500}px
//era lenght > 15


//es del codice

//function mostrarCodice() {
  //const texto = [
    //">> Línea 1: λ-sentencia incompleta...",
    //">> Línea 2: traduciendo símbolo: Δ∇ψ...",
    //">> Línea 3: 'La luz se convirtió en lenguaje...'",
    //">> Línea 4: acceso parcial al códice concedido.",
  //];

  //const pre = document.getElementById("codice-texto");
  //let i = 0;

  //const intervalo = setInterval(() => {
    //if (i < texto.length) {
      //pre.innerHTML += texto[i] + "\n";
      //i++;
    //} else {
      //clearInterval(intervalo);
    //}
  //}, 1200);
//}





//es de codice parte 2

function abrirSubArchivo(nombre) {
  const contenedor = document.getElementById('subarchivo-contenido');
  let contenido = "";

  switch(nombre) {
    case 'entrada1':
      contenido = `<strong>[traducción_01.log]</strong><br>“El conocimiento duerme entre líneas rotas...”`;
      break;
    case 'entrada2':
      contenido = `<strong>[texto_encriptado_δ2.txt]</strong><br><em>ΞΩΩ𝛿¤¥#∇φ... [traducción parcial: ‘...fragmento...templo...’]</em>`;
      break;
    case 'entrada3':
      const clave = prompt("🔐 Archivo protegido. Ingrese la clave de acceso:");
      if (clave === "glph13") {
        contenido = `<strong>[acceso_restringido.glph]</strong><br><span style="color:#0f0;">Acceso autorizado.</span><br>“La ruta se desvanece si no conoces su patrón...”`;
      } else {
        contenido = `<strong>[acceso_restringido.glph]</strong><br><span style="color:red;">Acceso denegado.</span>`;
      }
      break;
    case 'entrada4':
      contenido = `<strong>[error_memoria404.bkp]</strong><br><span style="color:orange;">⚠ Archivo corrupto. Datos ilegibles.</span>`;
      break;
    default:
      contenido = "Archivo no encontrado.";
  }

  contenedor.innerHTML = contenido;
}




//esto es de herencia

//function inicializarTerminal() {
  //const input = document.getElementById("terminal-input");
  //const output = document.getElementById("terminal-output");

  //input.addEventListener("keydown", function (e) {
    //if (e.key === "Enter") {
      //const comando = input.value.trim().toLowerCase();
      //input.value = "";

      //output.innerHTML += `\n> ${comando}`;

      //switch (comando) {
        //case "desbloquear":
          //output.innerHTML += `\n✔ Sistema parcialmente desbloqueado...`;
          //break;
        //case "acceder protocolo x":
          //output.innerHTML += `\n🔒 Autenticación requerida. Acceso denegado.`;
          //break;
        //case "herencia":
          //output.innerHTML += `\n🧬 Herencia detectada. Fragmento genético identificado.`;
          //break;
        //case "salir":
          //output.innerHTML += `\nCerrando terminal...`;
          //break;
        //default:
          //output.innerHTML += `\n❌ Comando no reconocido.`;
      //}

      //output.scrollTop = output.scrollHeight;
    //}
  //});

  //input.focus();
//}


//esto es de herencia parte 2

function inicializarTerminalExtendida() {
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");
  let accesoZona7 = false;

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const comando = input.value.trim().toLowerCase();
      input.value = "";
      output.innerHTML += `\n> ${comando}`;

      switch (comando) {
        case "/help":
          output.innerHTML += `
\nComandos disponibles:
 - /list ................ Muestra archivos disponibles
 - /download pk** ....... Descarga el archivo PK**
 - /access ***** ........ Intenta acceder a zona secreta
 - /decode *** .......... Inicia proceso de decodificación
 - /log ****** ......... Muestra registro corrupto
 - explorar ************* .... [restringido]
 - /unlock ****** .. Desbloquea archivo oculto
 - /clear ............... Limpia la terminal
 - /salir ............... Cierra la sesión
          `;
          break;

        case "/list":
          output.innerHTML += `
📂 directorio_herencia/
 ├── pk15.pdf
 ├── ADN-oculto.txt
 ├── θ-fragmento.enc
 └── Σ-restricted-zone/`;
          break;

        case "/download pk15":
          output.innerHTML += `\n⏬ Iniciando descarga de pk15.pdf...`;
          setTimeout(() => {
            const link = document.createElement("a");
            link.href = "archivos/pk15.pdf";
            link.download = "pk15.pdf";
            link.click();
          }, 1500);
          break;

        case "/access zona7":
          output.innerHTML += `\n🔓 Acceso concedido a Σ-restricted-zone. Nuevas funciones desbloqueadas.`;
          accesoZona7 = true;
          break;

        case "/explorar σ-restricted-zone":
        case "/explorar Σ-restricted-zone":
          if (accesoZona7) {
            output.innerHTML += `
\n🧠 Explorando Σ-restricted-zone...
 ├── archivo_eco.mnd
 ├── núcleo-perdido.sys
 └── backup_corrupto.Δbk
...extraño patrón detectado...`;
          } else {
            output.innerHTML += `\n🚫 Acceso denegado. Ejecuta /access zona7 primero.`;
          }
          break;

        case "/log eventos":
          output.innerHTML += `\n📄 Mostrando log de eventos corruptos...`;
          let eventos = [
            "[02:45] >> Alerta: conexión remota detectada.",
            "[02:46] >> Protocolo θ23 corrompido.",
            "[02:47] >> Archivo 'núcleo-perdido.sys' comprometido.",
            "[02:49] >> Reversión fallida. Zona7 desprotegida.",
          ];
          let j = 0;
          let intervaloLog = setInterval(() => {
            if (j < eventos.length) {
              output.innerHTML += `\n${eventos[j++]}`;
              output.scrollTop = output.scrollHeight;
            } else {
              clearInterval(intervaloLog);
            }
          }, 1200);
          break;

        case "/decode φ13":
          output.innerHTML += `\n📡 Decodificando secuencia...`;
          let frases = [
            ">> Traducción simbólica iniciada...",
            ">> Fragmento 1: 'La verdad habita entre señales corruptas.'",
            ">> Fragmento 2: 'Los ecos del código ancestral resisten.'",
            ">> Proceso finalizado. Datos inestables..."
          ];
          let i = 0;
          let interval = setInterval(() => {
            if (i < frases.length) {
              output.innerHTML += `\n${frases[i++]}`;
              output.scrollTop = output.scrollHeight;
            } else {
              clearInterval(interval);
            }
          }, 1200);
          break;

        case "/unlock σ-nodo":
        case "/unlock Σ-nodo":
          output.innerHTML += `\n🔓 Fragmento nodo desbloqueado.`;
          const iconoFragmento = document.getElementById("icono-nodo");
          if (iconoFragmento) {
            iconoFragmento.classList.remove("oculto");
            iconoFragmento.classList.add("revelado-glitch");
          }
          break;

        case "/clear":
          output.innerHTML = "> Terminal limpia.";
          break;

        case "/salir":
  output.innerHTML += `\n⏳ Finalizando conexión...`;
  setTimeout(() => {
    cerrarVentana(); // Cierra la terminal después de un pequeño delay
  }, 1500); // 1.5 segundos para que se vea el mensaje
  break;

  

        default:
          output.innerHTML += `\n❌ Comando no reconocido. Usa /help`;
      }

      output.scrollTop = output.scrollHeight;
    }
  });

  input.focus();
}


//funciones del help ocultas
//case "/help":
          //output.innerHTML += `
//\nComandos disponibles:
 //- /list ................ Muestra archivos disponibles
 //- /download pk15 ....... Descarga el archivo PK15
 //- /access zona7 ........ Intenta acceder a zona secreta
 //- /decode φ13 .......... Inicia proceso de decodificación
 //- /log eventos ......... Muestra registro corrupto
 //- explorar Σ-restricted-zone .... [restringido]
 //- /unlock Σ-nodo .. Desbloquea archivo oculto
 //- /clear ............... Limpia la terminal
 //- /salir ............... Cierra la sesión
   //       `;
     //     break;







//esto es del nodo
function iniciarRastreo() {
  const resultado = document.getElementById("resultado-rastreo");
  const mensajes = [
    "⌛ Iniciando rastreo de señal...",
    "🔍 Coordenadas trianguladas.",
    "⚠ Patrón inusual detectado.",
    "📡 Descargando log clasificado...",
    "✔ Rastreo finalizado. Archivo 'log-nodo.dat' archivado."
  ];

  let i = 0;
  resultado.innerHTML = "";

  const intervalo = setInterval(() => {
    if (i < mensajes.length) {
      resultado.innerHTML += mensajes[i++] + "\n";
      resultado.scrollTop = resultado.scrollHeight;
    } else {
      clearInterval(intervalo);
    }
  }, 1200);
}




//de heraldico parte 2

function iniciarFragmento() {
  const barra = document.getElementById("barra-progreso");
  const mensaje = document.getElementById("mensaje-inicial");
  const resultado = document.getElementById("fragmento-contenido");
  const boton = document.getElementById("btn-reintentar");
  const mensajeVivo = document.getElementById("fragmento-mensaje-vivo");

  let progreso = 0;
  resultado.style.display = "none";
  mensajeVivo.style.display = "none";
  resultado.textContent = "";
  boton.style.display = "none";
  mensaje.textContent = "📡 Escaneando integridad del fragmento...";
  barra.style.width = "0%";

  const animar = setInterval(() => {
    progreso++;
    barra.style.width = progreso + "%";

    if (progreso >= 100) {
      clearInterval(animar);
      const exito = Math.random() < 0.2; // 50% de éxito

      if (exito) {
        mensaje.textContent = "✅ Decodificación exitosa. Fragmento restaurado...";
        resultado.style.display = "block";

        escribirMensajeLento(resultado, [
          ">> ⚠ Señal interceptada desde subnodo Δ13...",
          ">> Mensaje encriptado traducido parcialmente.",
          "",
          "«Lo que yacía entre los circuitos muertos...",
          "   ...comenzó a emitir pulsos sin origen.»",
          "",
          "◼ Subproceso: /sombra_latente activo",
          "◼ Núcleo comprometido por entidad desconocida",
          "◼ Protocolo Σ-Reverse-Core cargado.",
          "",
          "🛑 ALARMA: El fragmento no debe ser conectado al núcleo central.",
          "🧬 Advertencia: Las voces no cesarán una vez oídas.",
          "",
          "▸ Final del fragmento [Código: AXΣ-940-R]."
        ], () => {
          // Mostrar mensaje misterioso después del contenido principal
          mensajeVivo.style.display = "block";
          simularMensajeVivo();
        });

      } else {
        mensaje.textContent = "❌ Decodificación fallida. Fragmento ilegible.";
        boton.style.display = "inline-block";
      }
    }
  }, 30);
}






function escribirMensajeLento(elemento, lineas, callback) {
  let i = 0;
  let j = 0;
  elemento.textContent = "";

  function escribir() {
    if (i < lineas.length) {
      if (j <= lineas[i].length) {
        elemento.textContent = elemento.textContent.replace(/\r$/, '') + lineas[i].substring(0, j) + "\r";
        j++;
        setTimeout(escribir, 20);
      } else {
        elemento.textContent += "\n";
        i++;
        j = 0;
        setTimeout(escribir, 400);
      }
    } else if (callback) {
      callback();
    }
  }

  escribir();
}




function simularMensajeVivo() {
  const mensaje = [
    ">> NUEVA TRANSMISIÓN DETECTADA...",
    ">> ¿Hay alguien más ahí?",
    ">> Este mensaje fue interceptado por error.",
    ">> No intentes reconstruir el fragmento completo...",
    ">> Algunos secretos deben permanecer corruptos.",
    ">> Como el archivo ****",
    ">> De *****",
    ">> Te dejo con la duda...",
    ">> 😺",
  ];

  const contenedor = document.getElementById("fragmento-mensaje-vivo");
  let i = 0;

  function escribirLinea(linea, callback) {
    let j = 0;
    const intervalo = setInterval(() => {
      if (j < linea.length) {
        contenedor.innerHTML += linea[j++];
        contenedor.scrollTop = contenedor.scrollHeight;
      } else {
        clearInterval(intervalo);
        contenedor.innerHTML += "\n";
        if (callback) callback();
      }
    }, 55);
  }

  function siguienteLinea() {
    if (i < mensaje.length) {
      escribirLinea(mensaje[i++], siguienteLinea);
    }
  }

  siguienteLinea();
}


//heraldico parte 2-2

//function simularMensajeVivo() {
  //const mensaje = [
    //">> Señal externa detectada...",
    //">> NUEVO MENSAJE ENTRANTE...",
    //">> ¿Quién está viendo esto...?",
    //">> Esto no debía ser accesible.",
    //">> Hay otro fragmento...",
    //">> Busca el nodo central..."
  //];

  //const contenedor = document.getElementById("bitacora-mensaje-vivo");
  //let i = 0;

  //function escribirLinea(linea, callback) {
    //let j = 0;
    //const intervalo = setInterval(() => {
      //if (j < linea.length) {
        //contenedor.innerHTML += linea[j++];
        //contenedor.scrollTop = contenedor.scrollHeight;
      //} else {
        //clearInterval(intervalo);
        //contenedor.innerHTML += "\n";
        //if (callback) callback();
      //}
    //}, 60);
  //}

  //function siguienteLinea() {
    //if (i < mensaje.length) {
      //escribirLinea(mensaje[i++], siguienteLinea);
    //}
  //}

  //setTimeout(() => {
    //siguienteLinea();
  //}, 1000);
//}



// esto es de Flamea
//function iniciarRedEspiritual() {
  //const contenedor = document.getElementById("usuarios-flamea");

  //const estados = [
    //{ texto: "✅ CONECTADO", clase: "estado-conectado" },
    //{ texto: "❌ DESCONECTADO", clase: "estado-desconectado" },
    //{ texto: "~ INTERFERENCIA", clase: "estado-interferencia" },
    //{ texto: "⏳ CANALIZANDO...", clase: "estado-canalizando" },
  //];

  //const usuarios = [
    //{ nombre: "Δ-Xenos", id: "S-42" },
    //{ nombre: "UmbraNode_03", id: "U-13" },
    //{ nombre: "FireWarden", id: "F-08" },
    //{ nombre: "FlammaRex", id: "R-21" },
    //{ nombre: "IgnisEcho", id: "E-33" },
    //{ nombre: "CenizaVigil", id: "C-19" },
    //{ nombre: "NoctusPyro", id: "N-01" },
    //{ nombre: "LlamaOscura", id: "L-77" },
    //{ nombre: "PhantomHeat", id: "P-04" },
    //{ nombre: "RedMist07", id: "M-92" },
    //{ nombre: "FulgorCore", id: "F-55" },
    //{ nombre: "RastroFlameante", id: "R-89" },
    //{ nombre: "Δ-SpiritX", id: "S-90" },
    //{ nombre: "SombraArdiente", id: "S-02" },
    //{ nombre: "DespertarNébula", id: "D-38" },
    //{ nombre: "EterFuego", id: "E-81" },
    //{ nombre: "FragmentoVivo", id: "F-17" },
    //{ nombre: "[TÚ]", id: "USR-00" },
    //{ nombre: "PyraSilent", id: "P-13" },
    //{ nombre: "LlamaErrante", id: "L-51" },
  //];

  //usuarios.forEach((user, index) => {
    //const div = document.createElement("div");
    //div.className = "usuario-linea";

    //const estado = estados[Math.floor(Math.random() * estados.length)];

    //div.innerHTML = `
     // <span class="usuario-nombre">${user.nombre}</span>
      //<span class="usuario-id">(${user.id})</span>
      //<span class="usuario-estado ${estado.clase}">${estado.texto}</span>
    //`;

    //contenedor.appendChild(div);

    // Actualizar cada ciertos segundos solo para algunos
    //if (index !== 17) { // el usuario "[TÚ]" no cambia
      //setInterval(() => {
        //const nuevoEstado = estados[Math.floor(Math.random() * estados.length)];
        //div.querySelector(".usuario-estado").textContent = nuevoEstado.texto;
        //div.querySelector(".usuario-estado").className = "usuario-estado " + nuevoEstado.clase;
      //}, 6000 + Math.random() * 4000);
    //}
  //});
//}





//es de flamea
function iniciarRedEspiritual() {
  const contenedor = document.getElementById("usuarios-flamea");

  const estados = [
    { texto: "✅ CONECTADO", clase: "estado-conectado" },
    { texto: "❌ DESCONECTADO", clase: "estado-desconectado" },
    { texto: "~ INTERFERENCIA", clase: "estado-interferencia" },
    { texto: "⏳ CANALIZANDO...", clase: "estado-canalizando" },
  ];

  const usuarios = [
    { nombre: "Δ-Xenos", id: "S-42" },
    { nombre: "UmbraNode_03", id: "U-13" },
    { nombre: "FireWarden", id: "F-08" },
    { nombre: "FlammaRex", id: "R-21" },
    { nombre: "IgnisEcho", id: "E-33" },
    { nombre: "CenizaVigil", id: "C-19" },
    { nombre: "NoctusPyro", id: "N-01" },
    { nombre: "LlamaOscura", id: "L-77" },
    { nombre: "PhantomHeat", id: "P-04" },
    { nombre: "RedMist07", id: "M-92" },
    { nombre: "FulgorCore", id: "F-55" },
    { nombre: "RastroFlameante", id: "R-89" },
    { nombre: "Δ-SpiritX", id: "S-90" },
    { nombre: "SombraArdiente", id: "S-02" },
    { nombre: "DespertarNébula", id: "D-38" },
    { nombre: "EterFuego", id: "E-81" },
    { nombre: "FragmentoVivo", id: "F-17" },
    { nombre: "[TÚ]", id: "USR-00" },
    { nombre: "PyraSilent", id: "P-13" },
    { nombre: "LlamaErrante", id: "L-51" },
  ];

  usuarios.forEach((user, index) => {
    const div = document.createElement("div");
    div.className = "usuario-linea";

    const estado = estados[Math.floor(Math.random() * estados.length)];

    div.innerHTML = `
      <span class="usuario-nombre">${user.nombre}</span>
      <span class="usuario-id">(${user.id})</span>
      <span class="usuario-estado ${estado.clase}">${estado.texto}</span>
    `;

    contenedor.appendChild(div);

    // Actualizar cada ciertos segundos solo para algunos
    if (index !== 17) { // el usuario "[TÚ]" no cambia
      setInterval(() => {
        const nuevoEstado = estados[Math.floor(Math.random() * estados.length)];
        div.querySelector(".usuario-estado").textContent = nuevoEstado.texto;
        div.querySelector(".usuario-estado").className = "usuario-estado " + nuevoEstado.clase;
      }, 8000 + Math.random() * 6000);
    }
  });
}



//esto es de eco_mem

const ecoMemorias = [
  { id: "mem-01", titulo: "Entrada: Cámara Roja", fragmento: "Gritos lejanos... luces parpadeantes...", bloqueada: false },
  { id: "mem-02", titulo: "Registro Dañado", fragmento: "[Error ∇] Datos ilegibles", bloqueada: true },
  { id: "mem-03", titulo: "Fragmento de infancia", fragmento: "Una figura... ¿madre?... no responde", bloqueada: false },
  { id: "mem-04", titulo: "Nodo interrumpido", fragmento: "[Memoria bloqueada por núcleo central]", bloqueada: true },
  { id: "mem-05", titulo: "Fuga de instalación", fragmento: "Escapó por la zona ∆. Alarma no sonó.", bloqueada: false },
  { id: "mem-06", titulo: "Audio glitcheado", fragmento: "//// Voz doble detectada... ... ...", bloqueada: true },
  { id: "mem-07", titulo: "Reflejo", fragmento: "El sujeto miró al espejo. El reflejo no imitó.", bloqueada: false },
  { id: "mem-08", titulo: "Corte de energía", fragmento: "[REDACTADO] durante protocolo S3", bloqueada: true },
  { id: "mem-09", titulo: "Despertar sin recuerdos", fragmento: "Nombre olvidado. Solo el eco del monitor encendido.", bloqueada: false },
  { id: "mem-10", titulo: "Visualización ∇", fragmento: "La cámara grabó una figura... sin rostro.", bloqueada: true },
];


function cargarEcoMemorias() {
  const ul = document.getElementById("lista-memorias");
  ul.innerHTML = "";

  ecoMemorias.forEach((m, i) => {
    const li = document.createElement("li");
    li.innerHTML = m.bloqueada ? `🔒 ${m.titulo}` : `🧠 ${m.titulo}`;
    li.classList.add("eco-item");
    if (!m.bloqueada) {
      li.onclick = () => {
        document.getElementById("comparador-texto").textContent = `
>> Memoria recuperada...
${m.fragmento}

Comparando con registros oficiales...
Resultado: ❗ Coincidencia alterada.
        `;
      };
    }
    ul.appendChild(li);
  });
}

function ecoProcesarComando(e) {
  if (e.key === "Enter") {
    const input = e.target.value.trim();
    const respuesta = document.getElementById("eco-respuesta");

    const comandos = {
      "/unlock 2": 1,
      "/unlock 4": 3,
      "/unlock 6": 5,
      "/unlock 8": 7,
      "/unlock 10": 9
    };

    if (comandos[input] !== undefined) {
      const index = comandos[input];
      if (ecoMemorias[index].bloqueada) {
        ecoMemorias[index].bloqueada = false;
        cargarEcoMemorias();
        respuesta.textContent = `✅ Memoria '${ecoMemorias[index].titulo}' desbloqueada.`;
      } else {
        respuesta.textContent = "⚠ Esa memoria ya está desbloqueada.";
      }
    } else if (input.startsWith("/replay ")) {
      const id = input.split(" ")[1];
      const memoria = ecoMemorias.find(m => m.id === id);
      if (memoria && !memoria.bloqueada) {
        document.getElementById("comparador-texto").textContent = `
>> Reproduciendo ${memoria.id}...
${memoria.fragmento}
        `;
        respuesta.textContent = "▶ Reproduciendo fragmento. Error al reproducir...";
      } else {
        respuesta.textContent = "❌ Fragmento no encontrado o está bloqueado.";
      }
    } else {
      respuesta.textContent = "❌ Comando no reconocido.";
    }

    e.target.value = "";
  }
}






//de eclipse

const testimonios = [
  {
    id: "archivo_001",
    titulo: "Testimonio: El último amanecer",
    contenido: [
      "“Desperté entre las alarmas... pero no había luz del sol.”",
      "“La figura en el umbral me llamó por mi nombre... el que nunca dije.”",
      "“El Eclipse no terminó... simplemente entró en nosotros.”"
    ],
    desbloqueado: true
  },
  {
    id: "archivo_002",
    titulo: "Testimonio: Cámara 7 [REDACTADO]",
    contenido: [
      "[CORRUPTO] Voz femenina registr—",
      "“No debimos escuchar. Lo que vino después... fue real.”",
      "[- Señales interrumpidas -]"
    ],
    desbloqueado: false,
    clave: "delta7"
  },
  {
    id: "archivo_003",
    titulo: "Testimonio: Incidente de las 03:33",
    contenido: [
      "“La grabación se detiene justo cuando el reloj se congela.”",
      "“Revisé los logs. Esa hora aparece en cada caso.”",
      "“Nada sobrevive después de esa frecuencia.”"
    ],
    desbloqueado: true
  },
  {
    id: "archivo_004",
    titulo: "Testimonio: Σ-Mem_Desync.log",
    contenido: [
      "“Vi mi reflejo moverse antes que yo.”",
      "“No recuerdo haber escrito este mensaje.”",
      "[Fragmento no recuperable]"
    ],
    desbloqueado: false,
    clave: "sigma"
  }
];

function cargarTestimonios() {
  const lista = document.getElementById("lista-testimonios");
  lista.innerHTML = "";

  testimonios.forEach((testimonio, index) => {
    const li = document.createElement("li");
    li.classList.add("archivo-item");
    li.innerHTML = testimonio.desbloqueado
      ? `📄 <span>${testimonio.titulo}</span>`
      : `🔒 <span>${testimonio.titulo}</span>`;
    li.onclick = () => {
      if (testimonio.desbloqueado) {
        mostrarContenidoTestimonio(testimonio);
      } else {
        solicitarClave(index);
      }
    };
    lista.appendChild(li);
  });
}

function solicitarClave(index) {
  const clave = prompt("🔐 Archivo protegido. Ingrese la clave:");
  if (clave === testimonios[index].clave) {
    testimonios[index].desbloqueado = true;
    cargarTestimonios();
    mostrarContenidoTestimonio(testimonios[index]);
  } else {
    alert("❌ Clave incorrecta.");
  }
}

function mostrarContenidoTestimonio(testimonio) {
  const detalle = document.getElementById("detalle-testimonio");
  detalle.classList.remove("oculto");
  detalle.innerHTML = `<h4>${testimonio.titulo}</h4><pre id="texto-testimonio"></pre>`;
  escribirLineasLentas(testimonio.contenido, document.getElementById("texto-testimonio"));
}

function escribirLineasLentas(lineas, contenedor) {
  let i = 0;
  contenedor.textContent = "";

  function escribirLinea() {
    if (i < lineas.length) {
      let linea = lineas[i];
      let j = 0;
      function escribirCaracter() {
        if (j <= linea.length) {
          contenedor.textContent = contenedor.textContent.replace(/\s*$/, "") + "\r" + linea.substring(0, j) + "_";
          j++;
          setTimeout(escribirCaracter, 20);
        } else {
          contenedor.textContent += "\n";
          i++;
          setTimeout(escribirLinea, 300);
        }
      }
      escribirCaracter();
    }
  }

  escribirLinea();
}










const contactosEclipse = [
  { nombre: "NODOS-13", tipo: "respuestas_libres" },
  { nombre: "Zeta_Prim", tipo: "solo_opciones", opciones: ["Acceder", "Cancelar"] },
  { nombre: "Kevin-93", tipo: "test", vidas: 3 },
  { nombre: "Σ-Dormido", tipo: "respuestas_libres" },
  { nombre: "EcoCiego", tipo: "fuera_linea" },
  { nombre: "???.wav", tipo: "respuestas_libres" },
  { nombre: "Naal", tipo: "solo_opciones", opciones: ["Sí", "No"] },
  { nombre: "RA-11", tipo: "solo_opciones", opciones: ["Iniciar", "Desconectar"] },
  { nombre: "Violeta", tipo: "fuera_linea" },
  { nombre: "Y-Null", tipo: "respuestas_libres" }
];

let contactoActual = null;
let vidasKevin = 3;
let aciertosKevin = 0;
let preguntasDisponibles = [];
let bloqueoMensajes = false;

const secretosKevin = [
  "📁 Archivo revelado: Δ-CicloPrimario.res",
  "📦 Coordenadas: **-15 // Zona prohibida",
  "⚠  Type: /unlock Σ-nodo //¿Seguro?",
  "🔓 Clave Maestra: EVAC-13X-R",
  "⚠ Identidad cruzada con RA-11 confirmada",
  "🧬 Anomalía gen-Δ detectada en sujeto S-02",
  "💾 Registro: Δ-archivo_oculto.bkp restaurado"
];

const preguntasKevin = [
  {
    pregunta: "¿Cuál es el código de acceso del archivo 'EchoPrimario'?",
    opciones: ["Δ394", "K-11", "X-VOID"],
    correcta: "Δ394"
  },
  {
    pregunta: "¿Qué ocurre al abrir 'fragmento.sys' sin aislamiento?",
    opciones: ["Nada", "Se corrompe", "Desbloquea núcleo"],
    correcta: "Se corrompe"
  },
  {
    pregunta: "¿Quién fue el primer sujeto en comunicarse con 'Y-Null'?",
    opciones: ["S-03", "Desconocido", "RA-11"],
    correcta: "Desconocido"
  },
  {
    pregunta: "¿Qué protocolo activa 'Zeta_Prim' al recibir señal?",
    opciones: ["Retiro", "Inmersión", "Eco Latente"],
    correcta: "Eco Latente"
  },
  {
    pregunta: "¿Cuál es la frecuencia de eco de Naal?",
    opciones: ["3.33 Hz", "0.02 kHz", "Sin registro"],
    correcta: "Sin registro"
  }
];

function cargarContactos() {
  const ul = document.getElementById("lista-contactos");
  ul.innerHTML = "";

  contactosEclipse.forEach((c, i) => {
    const li = document.createElement("li");
    li.textContent = c.nombre;
    li.onclick = () => abrirChat(i);
    ul.appendChild(li);
  });
}

function abrirChat(index) {
  contactoActual = contactosEclipse[index];
  bloqueoMensajes = false; // Reiniciar bloqueo al entrar
  document.getElementById("nombre-contacto").textContent = contactoActual.nombre;
  document.getElementById("panel-chat").classList.remove("oculto");
  document.getElementById("chat-mensajes").innerHTML = "";

  if (contactoActual.tipo === "fuera_linea") {
    agregarMensaje("sistema", "⛔ Usuario no disponible.");
  } else if (contactoActual.tipo === "test") {
    vidasKevin = 3;
    aciertosKevin = 0;
    preguntasDisponibles = [...preguntasKevin];
    agregarMensaje("sistema", "Bienvenido al test de Kevin-93. Cada error resta 1 vida.");
    hacerPreguntaKevin();
  } else {
    agregarMensaje("sistema", "⏳ Estableciendo conexión...");
    setTimeout(() => {
      agregarMensaje("sistema", "✅ Conectado.");
    }, 800);
  }
}

function cerrarChat() {
  document.getElementById("panel-chat").classList.add("oculto");
}

function detectarEnter(e) {
  if (e.key === "Enter") enviarMensaje();
}

function enviarMensaje() {
  if (bloqueoMensajes) return; // 🔐 No permite mensajes

  const input = document.getElementById("entrada-usuario");
  const texto = input.value.trim();
  if (texto === "") return;

  agregarMensaje("usuario", texto);
  input.value = "";

  if (!contactoActual) return;

  if (contactoActual.tipo === "solo_opciones") {
  const inputLower = texto.toLowerCase();
  const nombre = contactoActual.nombre;

  switch (nombre) {
    case "Zeta_Prim":
      if (inputLower === "acceder") {
        agregarMensaje("sistema", "🔓 Acceso autorizado. Clave: ZP-Δ7-113");
        setTimeout(() => agregarMensaje("sistema", "🧬 Iniciando módulo de transcodificación de eco..."), 800);
        setTimeout(() => agregarMensaje("sistema", "⚠ Advertencia: El protocolo aún no está completo."), 1600);
      } else if (inputLower === "cancelar") {
        agregarMensaje("sistema", "✖ Proceso interrumpido. Regresando a latencia.");
      } else {
        agregarMensaje("sistema", "⚠ Instrucción no reconocida por Zeta_Prim.");
      }
      break;

    case "Naal":
      if (inputLower === "sí" || inputLower === "si") {
        agregarMensaje("sistema", "🌀 Has aceptado. El enlace ahora está activo.");
        setTimeout(() => agregarMensaje("sistema", "🔗 Vinculación emocional iniciada."), 1000);
        setTimeout(() => agregarMensaje("sistema", "⚠ Advertencia: Algunos lazos no pueden deshacerse."), 2000);
      } else if (inputLower === "no") {
        agregarMensaje("sistema", "⛓ Has rechazado el vínculo. Se ha sellado la línea de comunicación.");
      } else {
        agregarMensaje("sistema", "⛔ Solo se permiten respuestas puras."); //si o no
      }
      break;

    case "RA-11":
      if (inputLower === "iniciar") {
        agregarMensaje("sistema", "⚙ Unidad RA-11 activada.");
        setTimeout(() => agregarMensaje("sistema", "🔧 Sincronizando con núcleo central..."), 800);
        setTimeout(() => agregarMensaje("sistema", "✅ Estado: Estable. Unidad lista para ejecutar comandos."), 1800);
      } else if (inputLower === "desconectar") {
        agregarMensaje("sistema", "🔌 Unidad RA-11 entrando en estado de hibernación...");
        setTimeout(() => agregarMensaje("sistema", "☠ Desconectado."), 1500);
      } else {
        agregarMensaje("sistema", "❌ Comando no autorizado para RA-11.");
      }
      break;

    default:
      const opciones = contactoActual.opciones.map(o => o.toLowerCase());
      if (opciones.includes(inputLower)) {
        agregarMensaje("sistema", "✔ Orden aceptada.");
      } else {
        agregarMensaje("sistema", "❌ Comando inválido.");
      }
  }
}

  else if (contactoActual.nombre === "Kevin-93") {
    validarRespuestaKevin(texto);
  } else if (contactoActual.tipo === "respuestas_libres") {
    const config = respuestasPersonalizadas[contactoActual.nombre];

    if (config) {
      const r = Math.random();
      const lista = r < 0.7 ? config.respuestas : config.rechazo;
      const respuesta = lista[Math.floor(Math.random() * lista.length)];
      setTimeout(() => agregarMensaje("sistema", respuesta), 1000);
    } else {
      const respuestas = [
        "¿Seguro de eso?",
        "No deberías haber dicho eso...",
        "🛑 Canal inestable",
        "¿Por qué confías en mí?"
      ];
      const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
      setTimeout(() => agregarMensaje("sistema", respuesta), 1000);
    }
  } else if (contactoActual.tipo === "fuera_linea") {
    agregarMensaje("sistema", "⛔ Usuario no disponible.");
  }
}

function agregarMensaje(autor, texto) {
  const contenedor = document.getElementById("chat-mensajes");
  const div = document.createElement("div");
  div.classList.add("mensaje", autor);
  div.textContent = texto;
  contenedor.appendChild(div);
  contenedor.scrollTop = contenedor.scrollHeight;
}

function hacerPreguntaKevin() {
  if (preguntasDisponibles.length === 0) {
    agregarMensaje("sistema", "✅ Has respondido todas las preguntas disponibles.");
    agregarMensaje("sistema", "📦 Fin del test.");
    return;
  }

  const index = Math.floor(Math.random() * preguntasDisponibles.length);
  const p = preguntasDisponibles[index];
  preguntasDisponibles.splice(index, 1);

  contactoActual.preguntaActual = p;
  agregarMensaje("sistema", `❓ ${p.pregunta}`);
  p.opciones.forEach(op => agregarMensaje("sistema", `→ ${op}`));
}

function validarRespuestaKevin(respuesta) {
  const p = contactoActual.preguntaActual;
  if (!p) return;

  if (respuesta === p.correcta) {
    aciertosKevin++;
    agregarMensaje("sistema", "✔ Respuesta correcta. Acceso extendido.");

    if (aciertosKevin === 3) {
      const secreto = secretosKevin[Math.floor(Math.random() * secretosKevin.length)];
      agregarMensaje("sistema", `🔓 Secreto revelado: ${secreto}`);
      agregarMensaje("sistema", "🛑 Kevin-93 ha cerrado el canal.");
      bloqueoMensajes = true;
      return;
    }

    hacerPreguntaKevin();
  } else {
    vidasKevin--;
    agregarMensaje("sistema", `✖ Incorrecto. Vidas restantes: ${vidasKevin}`);
    if (vidasKevin <= 0) {
      agregarMensaje("sistema", "⛔ Has sido desconectado del canal.");
      setTimeout(() => cerrarChat(), 2000);
    } else {
      hacerPreguntaKevin();
    }
  }
}










const respuestasPersonalizadas = {
  "NODOS-13": {
    respuestas: [
      "Canal inestable... reintentando...",
      "Niveles de eco fluctuando...",
      "Conexión con 'RA-11' incompleta.",
      "Detección parcial de Δ-resonancia.",
      "Advertencia: Nodo corrupto en línea 7"
    ],
    rechazo: [
      "No comprendo tu instrucción.",
      "La petición excede mis parámetros.",
      "Conexión ignorada. Red no sincronizada."
    ]
  },
  "Σ-Dormido": {
    respuestas: [
      "Soñé que eras otro...",
      "La voz... no coincide con la memoria.",
      "Espacios rotos, memorias solapadas.",
      "Sigues aquí, pero no deberías estarlo.",
      "Me cuesta mantener esta forma..."
    ],
    rechazo: [
      "Silencio...",
      "No quiero hablar de eso.",
      "¿Por qué fuerzas la conversación?"
    ]
  },
  "???.wav": {
    respuestas: [
      "Reproduciendo señal codificada...",
      "*Zzzzrrrkk...* [Audio ilegible]",
      "Frecuencia 3.33 capturada.",
      "Ese eco... no es mío.",
      "Has activado un pulso olvidado."
    ],
    rechazo: [
      "Frecuencia no válida.",
      "Ese mensaje no fue registrado.",
      "Distorsión ignorada."
    ]
  },
  "Y-Null": {
    respuestas: [
      "¿Quién eres tú realmente?",
      "La identidad es una construcción débil.",
      "Estoy entre lo que fue y lo que no existe.",
      "Mi nombre ya no importa...",
      "Has activado un registro huérfano."
    ],
    rechazo: [
      "Tu mensaje no contiene verdad.",
      "Interferencia emocional detectada.",
      "Evita este canal si no estás listo."
    ]
  }
};



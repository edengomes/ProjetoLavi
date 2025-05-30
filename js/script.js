function abrirEnvelope(envelope) {
  envelope.classList.add('aberto');
}

const emojis = ['💖', '🌹', '💕', '💘', '💗'];
const quantidade = 30;

for (let i = 0; i < quantidade; i++) {
  const emoji = document.createElement('span');
  emoji.className = 'emoji-flutuante';
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Garante que o emoji não fique na área central (onde está o envelope/carta)
  let left;
  do {
    left = Math.random() * 100;
  } while (left > 35 && left < 65); // Ajuste conforme necessário
  emoji.style.left = `${left}%`;

  emoji.style.animationDelay = `${Math.random() * 10}s`;
  emoji.style.fontSize = `${20 + Math.random() * 30}px`;
  document.body.appendChild(emoji);
}
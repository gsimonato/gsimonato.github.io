(function () {
  // Sugere qualidade máxima ao player do YouTube via postMessage.
  // O YouTube pode ignorar/rebaixar conforme a banda de quem assiste —
  // isso é um pedido, não uma garantia. Reforça o pedido algumas vezes
  // porque o player às vezes reajusta a qualidade nos primeiros segundos.
  const iframe = document.getElementById('radar-demo-video');
  if (!iframe) return;

  function sendCommand(func, args) {
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: func, args: args || [] }),
      'https://www.youtube-nocookie.com'
    );
  }

  function requestHighQuality() {
    sendCommand('setPlaybackQuality', ['hd1080']);
    sendCommand('setPlaybackQualityRange', ['hd1080', 'hd1080']);
  }

  iframe.addEventListener('load', function () {
    // Repete o pedido nos primeiros segundos — o player só aceita
    // comandos depois de pronto, e reavalia a qualidade sozinho no início.
    [500, 1500, 3000, 6000].forEach(function (delay) {
      setTimeout(requestHighQuality, delay);
    });
  });
})();

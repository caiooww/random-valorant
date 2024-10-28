const agentes = [
    "Brimstone", "Phoenix","Sage", "Sova", "Viper", "Cypher", "Reyna", "Killjoy", "Breach", "Omen", "Jett", "Raze", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", "Harbor", "Gekko", "Deadlock", "Iso", "Clove", "Vyse"];
  
  function sortearAgentes() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
  
    if (quantidade > 5 || quantidade <= 0) {
      alert('Por favor, escolha um número entre 1 e 5.');
      return;
    }
  
    const agentesSorteados = [];
  
    while (agentesSorteados.length < quantidade) {
      const indiceAleatorio = Math.floor(Math.random() * agentes.length);
      const agenteSorteado = agentes[indiceAleatorio];
  
      if (!agentesSorteados.includes(agenteSorteado)) {
        agentesSorteados.push(agenteSorteado);
      }
    }
  
    document.getElementById('resultado').textContent = agentesSorteados.join(', ');
  }
// Obtém referências aos elementos HTML
const baixarVideoButton = document.getElementById("baixar-video");
const baixarAudioButton = document.getElementById("baixar-audio");
const formatContainer = document.getElementById("format-container");
const formatSelect = document.getElementById("format");
const downloadButton = document.querySelector("button[type=submit]");

// Adiciona um evento de clique para o botão "Baixar Vídeo"
baixarVideoButton.addEventListener("click", function() {
    // Exibe os botões de formato para vídeo (MP4 e MKV)
    formatContainer.style.display = "block";
    formatSelect.innerHTML = `
        <option value="mp4">MP4</option>
        <option value="mkv">MKV</option>
    `;
});

// Adiciona um evento de clique para o botão "Baixar Áudio"
baixarAudioButton.addEventListener("click", function() {
    // Exibe os botões de formato para áudio (MP3 e WAV)
    formatContainer.style.display = "block";
    formatSelect.innerHTML = `
        <option value="mp3">MP3</option>
        <option value="wav">WAV</option>
    `;
});

// Adiciona um evento de clique para o botão "Download"
downloadButton.addEventListener("click", function() {
    // Obtém o formato selecionado
    const selectedFormat = formatSelect.value;

    // Simula o download do arquivo com base no formato selecionado
   
    alert(`Baixando arquivo no formato ${selectedFormat}`);
});

// Obtém referências aos elementos HTML
const baixarVideoButton = document.getElementById("baixar-video");
const baixarAudioButton = document.getElementById("baixar-audio");
const formatContainer = document.getElementById("format-container");
const formatSelect = document.getElementById("format");
const downloadButton = document.getElementById("submit-button");
const downloadLink = document.getElementById("download-link");

// Adiciona um evento de clique para o botão "Baixar Vídeo"
baixarVideoButton.addEventListener("click", function() {
    // Exibe os botões de formato para vídeo (MP4 e MKV)
    formatContainer.style.display = "block";
    formatSelect.innerHTML = `
        <option value="mp4">MP4</option>
        <option value="mkv">MKV</option>
    `;
    // Exibe o botão de download
    downloadButton.style.display = "block";
});

// Adiciona um evento de clique para o botão "Baixar Áudio"
baixarAudioButton.addEventListener("click", function() {
    // Exibe os botões de formato para áudio (MP3 e WAV)
    formatContainer.style.display = "block";
    formatSelect.innerHTML = `
        <option value="mp3">MP3</option>
        <option value="wav">WAV</option>
    `;
    // Exibe o botão de download
    downloadButton.style.display = "block";
});

// Adiciona um evento de clique para o botão de download
downloadButton.addEventListener("click", function() {
    // Obtém o formato selecionado
    const selectedFormat = formatSelect.value;

    // Obtém a URL do vídeo a partir do campo de entrada
    const videoUrl = document.getElementById("video-url").value;

    // Cria um objeto de dados para enviar no corpo da solicitação POST
    const requestData = {
        "video-url": videoUrl,
        "format": selectedFormat
    };

    // Realiza uma solicitação POST para a rota /download no servidor Flask
    fetch("/download", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        // Lida com a resposta do servidor aqui
        if (data.message !== undefined) {
            // Se a resposta contém uma mensagem, exibe um link de download
            downloadLink.innerHTML = `<a href="${data.message}" download>Clique aqui para baixar</a>`;
        } else {
            alert("Mensagem não definida no servidor.");
        }
    })
    .catch(error => {
        console.error("Erro ao fazer a solicitação ao servidor:", error);
    });
});

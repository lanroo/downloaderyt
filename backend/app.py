from flask import Flask, request, jsonify, render_template
import youtube_dl

app = Flask(__name__)

# Defina uma rota raiz para renderizar o template HTML do frontend
@app.route('/')
def home():
    return render_template('index.html')

# Defina a rota '/download' para processar a solicitação de download
@app.route('/download', methods=['POST'])
def download_video():
    try:
        video_url = request.form.get('video-url')
        video_format = request.form.get('format')

        ydl_opts = {
            'format': video_format,
            'outtmpl': 'downloads/%(title)s.%(ext)s',
        }

        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(video_url, download=False)
            video_title = info['title']

            ydl.download([video_url])

        return jsonify({'message': f'Download do vídeo "{video_title}" concluído com sucesso'})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)

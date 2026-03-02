<template>
    <div class="footer-widget footer-video-widget">
        <h6 class="footer-widget__title mb-20">Video Corporativo</h6>
        <div class="footer-video-container">
            <div class="video-wrapper">
                <iframe 
                    class="youtube-video"
                    :src="videoEmbedUrl"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy"
                ></iframe>
            </div>
            <p class="video-description">
                IBS Consultores<br>
                Tu Mejor Agente de Seguros y de Fianzas
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterVideo',
    computed: {
        videoEmbedUrl() {
            // ID del video: _jjpmhHy8SU
            return 'https://www.youtube.com/embed/_jjpmhHy8SU?rel=0&modestbranding=1';
        }
    }
};
</script>

<style scoped lang="scss">
.footer-video-widget {
    .footer-widget__title {
        margin-bottom: 20px;
    }
}

.footer-video-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; // 16:9 aspect ratio
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: rgba(0, 0, 0, 0.2);
}

.youtube-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.video-description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    line-height: 1.6;
    text-align: center;
    margin: 0;
    font-weight: 500;
}

@media (max-width: 991px) {
    .footer-video-container {
        max-width: 300px;
        margin: 0 auto;
    }
}

@media (max-width: 575px) {
    .footer-video-container {
        max-width: 100%;
    }
    
    .video-description {
        font-size: 12px;
    }
}
</style>
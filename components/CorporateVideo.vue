<template>
    <div class="corporate-video-section">
        <div class="video-container">
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'CorporateVideo',
    computed: {
        videoEmbedUrl() {
            // ID del video: jeTPliYrpcE
            return 'https://www.youtube.com/embed/jeTPliYrpcE?rel=0&modestbranding=1';
        }
    }
};
</script>

<style scoped lang="scss">
.corporate-video-section {
    width: 100%;
    padding: 20px 0;
}

.video-container {
    position: relative;
    width: 100%;
    max-width: 100%;
}

.video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; // 16:9 aspect ratio
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    background-color: rgba(0, 0, 0, 0.1);
}

.youtube-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
}

@media (max-width: 991px) {
    .corporate-video-section {
        padding: 15px 0;
    }
    
    .video-wrapper {
        border-radius: 8px;
    }
    
    .youtube-video {
        border-radius: 8px;
    }
}
</style>
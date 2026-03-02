<template>
    <div class="insurance-directory section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="directory-header text-center section-space--mb_60">
                        <h2 class="directory-title">{{ data.title }}</h2>
                        <p class="directory-subtitle">{{ data.subtitle }}</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6" v-for="company in data.companies" :key="company.id">
                    <div class="insurance-company-card">
                        <div class="company-logo-wrapper">
                            <img 
                                :src="company.logo" 
                                :alt="company.name"
                                class="company-logo"
                                @error="handleImageError"
                            >
                        </div>
                        <div class="company-info">
                            <h4 class="company-name">{{ company.name }}</h4>
                            <div class="company-phone">
                                <i class="fas fa-phone phone-icon"></i>
                                <a :href="company.phoneLink" class="phone-link">{{ company.phone }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data/insuranceDirectory.json';

export default {
    name: 'InsuranceDirectory',
    data() {
        return {
            data
        }
    },
    methods: {
        handleImageError(event) {
            // Si la imagen no existe, mostrar un placeholder con el nombre de la compañía
            const companyName = event.target.alt;
            event.target.style.display = 'none';
            const parent = event.target.parentElement;
            if (parent && !parent.querySelector('.logo-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'logo-placeholder';
                placeholder.innerHTML = `<span>${companyName.charAt(0)}</span>`;
                parent.appendChild(placeholder);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.insurance-directory {
    background: #F8F9FA;
}

.directory-header {
    margin-bottom: 50px;
}

.directory-title {
    font-size: 42px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 10px;
    line-height: 1.3;

    @media (max-width: 991px) {
        font-size: 32px;
    }

    @media (max-width: 575px) {
        font-size: 28px;
    }
}

.directory-subtitle {
    font-size: 20px;
    color: #086AD8;
    margin: 0;
    font-weight: 600;

    @media (max-width: 991px) {
        font-size: 18px;
    }

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

.insurance-company-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 30px 25px;
    margin-bottom: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-color: #086AD8;
    }

    @media (max-width: 991px) {
        padding: 25px 20px;
    }

    @media (max-width: 575px) {
        padding: 20px 15px;
        margin-bottom: 20px;
    }
}

.company-logo-wrapper {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 15px;
    position: relative;

    @media (max-width: 991px) {
        height: 100px;
        margin-bottom: 15px;
    }

    @media (max-width: 575px) {
        height: 90px;
    }

    .logo-placeholder {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 32px;
        font-weight: 700;

        @media (max-width: 575px) {
            width: 60px;
            height: 60px;
            font-size: 24px;
        }
    }
}

.company-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(0%);
    transition: all 0.3s ease;
}

.insurance-company-card:hover .company-logo {
    filter: grayscale(0%);
    transform: scale(1.05);
}

.company-info {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.company-name {
    font-size: 18px;
    font-weight: 700;
    color: #333333;
    margin: 0;
    line-height: 1.3;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 991px) {
        font-size: 16px;
        min-height: 45px;
    }

    @media (max-width: 575px) {
        font-size: 15px;
        min-height: 40px;
    }
}

.company-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 15px;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    border-radius: 10px;
    transition: all 0.3s ease;

    .phone-icon {
        color: #ffffff;
        font-size: 16px;
        flex-shrink: 0;
    }

    .phone-link {
        color: #ffffff;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        word-break: break-word;

        &:hover {
            color: #FFD700;
            text-decoration: underline;
        }

        @media (max-width: 575px) {
            font-size: 13px;
        }
    }

    &:hover {
        background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
        transform: scale(1.05);
    }

    @media (max-width: 575px) {
        padding: 10px 12px;
        flex-direction: column;
        gap: 5px;
    }
}

@media (max-width: 991px) {
    .insurance-company-card {
        margin-bottom: 25px;
    }
}

@media (max-width: 767px) {
    .insurance-company-card {
        margin-bottom: 20px;
    }
}
</style>
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
                            <div class="company-payment-link">
                                <a 
                                    :href="company.paymentUrl" 
                                    target="_blank"
                                    class="payment-btn"
                                    :class="{ 'disabled-link': company.paymentUrl === '#' }"
                                >
                                    <i class="fas fa-external-link-alt link-icon"></i>
                                    <span>{{ company.paymentText }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data/cobranzaDirectory.json';

export default {
    name: 'InsuranceDirectoryCobranza',
    data() {
        return {
            data
        }
    },
    methods: {
        handleImageError(event) {
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
    margin-bottom: 15px;
    line-height: 1.3;

    @media (max-width: 991px) {
        font-size: 32px;
    }

    @media (max-width: 575px) {
        font-size: 28px;
    }
}

.directory-subtitle {
    font-size: 18px;
    color: #666666;
    margin: 0;
    font-weight: 400;

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

.company-payment-link {
    width: 100%;
    display: flex;
    justify-content: center;
}

.payment-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 25px;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    border-radius: 10px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 200px;
    box-shadow: 0 4px 15px rgba(8, 106, 216, 0.3);

    .link-icon {
        font-size: 14px;
    }

    &:hover {
        background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(8, 106, 216, 0.4);
        color: #ffffff;
    }

    &.disabled-link {
        background: linear-gradient(135deg, #CCCCCC 0%, #999999 100%);
        cursor: not-allowed;
        opacity: 0.6;

        &:hover {
            transform: none;
            box-shadow: 0 4px 15px rgba(8, 106, 216, 0.3);
        }
    }

    @media (max-width: 575px) {
        padding: 12px 20px;
        font-size: 14px;
        max-width: 100%;
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
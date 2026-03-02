<template>
    <div v-if="show" class="insurance-modal-overlay" @click.self="closeModal">
        <div class="insurance-modal">
            <div class="modal-header">
                <h3 class="modal-title">{{ seguroData.heading || seguroData.name }}</h3>
                <button class="modal-close" @click="closeModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="modal-description" v-if="seguroData.desc">
                    {{ seguroData.desc }}
                </p>
                <p class="modal-description" v-else-if="seguroData.acordDesc">
                    {{ seguroData.acordDesc }}
                </p>
                <div class="modal-benefits" v-if="seguroData.acord1">
                    <h4 class="benefits-title">Beneficios:</h4>
                    <ul class="benefits-list">
                        <li v-if="seguroData.acord1">{{ seguroData.acord1 }}</li>
                        <li v-if="seguroData.acord2">{{ seguroData.acord2 }}</li>
                        <li v-if="seguroData.acord3">{{ seguroData.acord3 }}</li>
                        <li v-if="seguroData.acord4">{{ seguroData.acord4 }}</li>
                        <li v-if="seguroData.acord5">{{ seguroData.acord5 }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InsuranceModal',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        seguroData: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    },
    watch: {
        show(newVal) {
            if (newVal) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    },
    beforeDestroy() {
        document.body.style.overflow = '';
    }
};
</script>

<style scoped lang="scss">
.insurance-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
}

.insurance-modal {
    background: #ffffff;
    border-radius: 20px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease;

    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media (max-width: 575px) {
        max-width: 100%;
        border-radius: 16px;
    }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 20px;
    border-bottom: 2px solid #E3F2FD;

    @media (max-width: 575px) {
        padding: 25px 20px 15px;
    }
}

.modal-title {
    font-size: 28px;
    font-weight: 700;
    color: #002FA6;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 575px) {
        font-size: 24px;
    }
}

.modal-close {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #F8F9FA;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #666666;
    font-size: 20px;

    &:hover {
        background: #086AD8;
        color: #ffffff;
        transform: rotate(90deg);
    }

    @media (max-width: 575px) {
        width: 35px;
        height: 35px;
        font-size: 18px;
    }
}

.modal-body {
    padding: 30px;

    @media (max-width: 575px) {
        padding: 20px;
    }
}

.modal-description {
    font-size: 16px;
    color: #333333;
    line-height: 1.8;
    margin: 0 0 25px 0;
    text-align: justify;

    @media (max-width: 575px) {
        font-size: 15px;
        margin-bottom: 20px;
    }
}

.modal-benefits {
    margin-top: 0;
}

.benefits-title {
    font-size: 20px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 15px;
    line-height: 1.3;

    @media (max-width: 575px) {
        font-size: 18px;
    }
}

.benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
        font-size: 15px;
        color: #333333;
        line-height: 1.6;
        padding-left: 25px;
        position: relative;

        &::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #086AD8;
            font-weight: 700;
            font-size: 18px;
        }

        @media (max-width: 575px) {
            font-size: 14px;
            padding-left: 22px;
        }
    }
}
</style>
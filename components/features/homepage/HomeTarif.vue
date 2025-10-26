<script setup lang="ts">
import { ref } from 'vue'
import MyBtn from '~/components/shared/UI/MyBtn.vue';
const pricingPlans = ref([
    {
        name: 'Site Vitrine',
        price: 'À partir de 800€',
        description: 'Parfait pour un site simple de 3 pages, idéal pour présenter votre activité en ligne.',
        features: {
            users: 'Nom de domaine inclus (tarif annuel)',
            components: 'Hébergement inclus (tarif annuel)',
            access: 'Formulaire de contact intégré',
            updates: 'Mises à jour faciles',
            projects: '1 projet inclus',
            support: 'Support flexible'
        },
        button: {
            text: 'Choisir ce plan',
            link: '/contact?plan=vitrine'
        }
    },
    {
        name: 'Site E-commerce',
        price: 'À partir de 3000€',
        description: 'Vendez vos produits en ligne grâce à un catalogue complet et un paiement sécurisé.',
        features: {
            users: 'Nom de domaine inclus (tarif annuel)',
            components: 'Hébergement inclus (tarif annuel)',
            access: 'Catalogue produits complet',
            updates: 'Mises à jour régulières',
            projects: '1 projet inclus',
            support: 'Support flexible'
        },
        button: {
            text: 'Choisir ce plan',
            link: '/contact?plan=ecommerce'
        }
    },
    {
        name: 'Sur devis',
        price: 'Contactez-nous',
        description: 'Projets spécifiques ou besoins personnalisés : nous créons une solution sur-mesure pour vous.',
        features: {
            users: 'Nom de domaine possible selon projet (tarif annuel si inclus)',
            components: 'Hébergement inclus (tarif annuel)',
            access: 'Fonctionnalités personnalisées',
            updates: 'Suivi et mises à jour adaptées',
            projects: 'Selon projet',
            support: 'Support flexible'
        },
        button: {
            text: 'Demander un devis',
            link: '/contact?plan=devis'
        }
    }
])



</script>

<template>
    <div class="pricing-section">
        <div class="section-header">
            <h2 class="section-title">Nos offres de création de site</h2>
            <p class="section-description">
                Découvrez nos différentes formules adaptées à vos besoins : que vous souhaitiez un site vitrine
                simple, une boutique en ligne complète ou un projet sur-mesure, nous avons la solution.
            </p>

        </div>

        <div class="pricing-cards">
            <div v-for="(plan, index) in pricingPlans" :key="index" class="pricing-card-wrapper">
                <div :class="['pricing-card', plan.name === 'Business' ? 'featured' : '']">
                    <span class="plan-name">{{ plan.name }}</span>
                    <h2 class="plan-price">
                        {{ plan.price }}
                    </h2>
                    <p class="plan-description">{{ plan.description }}</p>
                    <div class="plan-features">
                        <p>{{ plan.features.users }}</p>
                        <p>{{ plan.features.components }}</p>
                        <p>{{ plan.features.access }}</p>
                        <p>{{ plan.features.updates }}</p>
                        <p>{{ plan.features.projects }}</p>
                        <p>{{ plan.features.support }}</p>
                    </div>
                    <MyBtn variant="third" :href="plan.button.link" color="#090a11" class="plan-button">
                        {{ plan.button.text }}
                    </MyBtn>

                    <span class="svg-circle-large">
                        <svg width="77" height="172" viewBox="0 0 77 172" fill="none">
                            <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="86" y1="0" x2="86" y2="172"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#f15a52" stop-opacity="0.09" />
                                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>

                    <span class="svg-circle-small">
                        <svg width="41" height="89" viewBox="0 0 41 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="38.9138" cy="87.4849" r="1.42021" transform="rotate(180 38.9138 87.4849)"
                                fill="#f15a52" />
                            <circle cx="38.9138" cy="74.9871" r="1.42021" transform="rotate(180 38.9138 74.9871)"
                                fill="#f15a52" />
                            <circle cx="38.9138" cy="62.4892" r="1.42021" transform="rotate(180 38.9138 62.4892)"
                                fill="#f15a52" />
                            <circle cx="38.9138" cy="38.3457" r="1.42021" transform="rotate(180 38.9138 38.3457)"
                                fill="#f15a52" />
                            <circle cx="38.9138" cy="13.634" r="1.42021" transform="rotate(180 38.9138 13.634)"
                                fill="#f15a52" />
                            <circle cx="38.9138" cy="50.2754" r="1.42021" transform="rotate(180 38.9138 50.2754)"
                                fill="#f15a52" />
                            <circle cx="38.9138" cy="26.1319" r="1.42021" transform="rotate(180 38.9138 26.1319)"
                                fill="#f15a52" />
                            <circle cx="38.9138" cy="1.42021" r="1.42021" transform="rotate(180 38.9138 1.42021)"
                                fill="#f15a52" />
                            <circle cx="26.4157" cy="87.4849" r="1.42021" transform="rotate(180 26.4157 87.4849)"
                                fill="#f15a52" />
                            <circle cx="26.4157" cy="74.9871" r="1.42021" transform="rotate(180 26.4157 74.9871)"
                                fill="#f15a52" />
                            <circle cx="26.4157" cy="62.4892" r="1.42021" transform="rotate(180 26.4157 62.4892)"
                                fill="#f15a52" />
                            <circle cx="26.4157" cy="38.3457" r="1.42021" transform="rotate(180 26.4157 38.3457)"
                                fill="#f15a52" />
                            <circle cx="26.4157" cy="13.634" r="1.42021" transform="rotate(180 26.4157 13.634)"
                                fill="#f15a52" />
                            <circle cx="26.4157" cy="50.2754" r="1.42021" transform="rotate(180 26.4157 50.2754)"
                                fill="#f15a52" />
                            <circle cx="26.4157" cy="26.1319" r="1.42021" transform="rotate(180 26.4157 26.1319)"
                                fill="#f15a52" />
                            <circle cx="26.4157" cy="1.4202" r="1.42021" transform="rotate(180 26.4157 1.4202)"
                                fill="#f15a52" />
                            <circle cx="13.9177" cy="87.4849" r="1.42021" transform="rotate(180 13.9177 87.4849)"
                                fill="#f15a52" />
                            <circle cx="13.9177" cy="74.9871" r="1.42021" transform="rotate(180 13.9177 74.9871)"
                                fill="#f15a52" />
                            <circle cx="13.9177" cy="62.4892" r="1.42021" transform="rotate(180 13.9177 62.4892)"
                                fill="#f15a52" />
                            <circle cx="13.9177" cy="38.3457" r="1.42021" transform="rotate(180 13.9177 38.3457)"
                                fill="#f15a52" />
                            <circle cx="13.9177" cy="13.634" r="1.42021" transform="rotate(180 13.9177 13.634)"
                                fill="#f15a52" />
                            <circle cx="13.9177" cy="50.2754" r="1.42021" transform="rotate(180 13.9177 50.2754)"
                                fill="#f15a52" />
                            <circle cx="13.9177" cy="26.1319" r="1.42021" transform="rotate(180 13.9177 26.1319)"
                                fill="#f15a52" />
                            <circle cx="13.9177" cy="1.42019" r="1.42021" transform="rotate(180 13.9177 1.42019)"
                                fill="#f15a52" />
                            <circle cx="1.41963" cy="87.4849" r="1.42021" transform="rotate(180 1.41963 87.4849)"
                                fill="#f15a52" />
                            <circle cx="1.41963" cy="74.9871" r="1.42021" transform="rotate(180 1.41963 74.9871)"
                                fill="#f15a52" />
                            <circle cx="1.41963" cy="62.4892" r="1.42021" transform="rotate(180 1.41963 62.4892)"
                                fill="#f15a52" />
                            <circle cx="1.41963" cy="38.3457" r="1.42021" transform="rotate(180 1.41963 38.3457)"
                                fill="#f15a52" />
                            <circle cx="1.41963" cy="13.634" r="1.42021" transform="rotate(180 1.41963 13.634)"
                                fill="#f15a52" />
                            <circle cx="1.41963" cy="50.2754" r="1.42021" transform="rotate(180 1.41963 50.2754)"
                                fill="#f15a52" />
                            <circle cx="1.41963" cy="26.1319" r="1.42021" transform="rotate(180 1.41963 26.1319)"
                                fill="#f15a52" />
                            <circle cx="1.41963" cy="1.4202" r="1.42021" transform="rotate(180 1.41963 1.4202)"
                                fill="#f15a52" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        <div class="additional-services">
            <p>
                Services complémentaires : création de nom de domaine et boîtes mail professionnelles
                disponibles séparément.
            </p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.pricing-section {
    position: relative;
    z-index: 10;
    overflow: hidden;

    .section-header {
        text-align: center;
        max-width: 510px;
        margin: 0 auto 60px;

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #111;
            margin-bottom: 0.75rem;
        }

        .section-description {
            font-size: 1rem;
            color: #666;
        }
    }

    .additional-services {
        text-align: center;
        max-width: 510px;
        margin: 0 auto 60px;
        font-size: 1rem;
        color: #666;
    }

    .pricing-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: -15px;
        margin-right: -15px;

        .pricing-card-wrapper {
            width: 100%;
            max-width: 375px;
            padding: 0 15px;
            margin-bottom: 40px;
        }

        .pricing-card {
            position: relative;
            z-index: 10;
            border: 2px solid #eee;
            border-radius: 10px;
            padding: 50px 30px;
            
            transition: all 0.3s ease;
            @include medium-up{
                box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
            }
            &.featured {
                border-color: #f15a52;
            }

            .plan-name {
                display: block;
                font-size: 1.125rem;
                font-weight: 600;
                color: #f15a52;
                margin-bottom: 1rem;
            }

            .plan-price {
                font-size: 2.625rem;
                font-weight: 700;
                color: #111;
                margin-bottom: 1.25rem;

                .plan-period {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #666;
                }
            }

            .plan-description {
                border-bottom: 1px solid #eee;
                padding-bottom: 2rem;
                margin-bottom: 2rem;
                color: #666;
            }

            .plan-features {
                display: flex;
                flex-direction: column;
                gap: 14px;
                margin-bottom: 2rem;
                color: #666;
            }

            .plan-button {

                color: #000;

                &:hover {
                    color: #fff;
                }
            }

            .svg-circle-large {
                position: absolute;
                right: 0;
                top: 28px;
                z-index: -1;
            }

            .svg-circle-small {
                position: absolute;
                right: 16px;
                top: 16px;
                z-index: -1;
            }
        }
    }
}
</style>

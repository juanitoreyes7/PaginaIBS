<template>
    <div class="team-member-wrapper section-space--pt_100 section-space--pb_40">
        <div class="container">
            <div class="row">

                <div class="col-lg-8 ht-team-member-style-one">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 wow move-up" v-for="teamMember in data.teamMembers.slice(0, 1)"
                            :key="teamMember.id">
                            <TeamMember :teamMember="teamMember" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="section-title section-space--mb_60">
                    <h3 class="heading" v-html="data.sectionTitle">{{ data.sectionTitle }}</h3>
                    <p class="text mt-30">{{ data.sectionSubTitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data/team.json';

import TeamMember from '@/components/TeamMember';
export default {
    components: {
        TeamMember,
    },
    data() {
        return {
            data
        }
    }
};
</script>
<template>
    <div class="heading row">
        <div class="departure cell">Departure time</div>
        <div class="city-name cell">City Name</div>
        <div class="code cell">Code</div>
        <div class="airline cell">Airline</div>
        <div class="gate cell">Gate</div>
        <div class="status cell">Status</div>
    </div>
</template>

<style lang="scss" scoped>
.heading.row {
    display: flex;
    width: 100%;
    padding: 16px 16px 16px 78px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 34px;
    background: linear-gradient(90deg, #FFFFFF 0%, #F7F8F9 12.5%, #EFF1F4 20.31%, #EDF0F3 22.4%, #E9EDF0 27.6%, #E4E9ED 33.33%, #E3E8EC 33.34%, #D9E0E6 38.05%, #B3C0CD 56.25%, #C3CDD8 63.02%, #C9D2DC 65.62%, #C0CBD5 77.6%, #BCC8D3 82.29%, #B5C1CE 91.67%, #BAC5D1 91.68%, #B1BECC 96.35%, #AEBCCA 100%);
    .cell {
        &.departure {
            flex-basis: 16.5%;
        }
        &.city-name {
            flex-basis: 17.5%;
        }
        &.code {
            flex-basis: 12%;
        }
        &.airline {
            flex-basis: 22%;
        }
        &.gate {
            flex-basis: 10%;
        }
        &.status {
            flex-grow: 1;
            min-width: 214px;
        }
    }
}
@media screen and (max-width: 1024px){
    .heading.row {
        align-items: center;
        text-align: center;
        padding: 16px 16px 16px 18px;
        .cell {
            flex-shrink: 0;
            padding: 0 10px;
            &.departure {
                flex-basis: 16.5%;
            }
            &.city-name {
                flex-basis: 16.5%;
            }
            &.code {
                flex-basis: 12%;
            }
            &.airline {
                flex-basis: 22%;
            }
            &.gate {
                flex-basis: 10%;
            }
            &.status {
                flex-grow: 1;
                min-width: 214px;
                padding: 0;
            }
        }
    }
}
@media screen and (max-width: 960px){
    .heading.row {
        font-size: 14px;
        .cell {
            flex-shrink: 0;
            padding: 0 10px;
            &.departure {
                flex-basis: 15%;
            }
            &.city-name {
                flex-basis: 15%;
            }
            &.code {
                flex-basis: 10%;
            }
            &.airline {
                flex-basis: 20%;
            }
            &.gate {
                flex-basis: 10%;
            }
            &.status {
                flex-grow: 1;
                min-width: 130px;
                padding: 0;
            }
        }
    }
}

@media screen and (max-width: 640px) {
    .heading.row {
        display: none;
    }
}
</style>
<template>
    <div class="flight row">
        <div class="departure cell">{{departureTime}}</div>
        <div class="city-name cell">{{flight.arrivalAirport.cityName}}</div>
        <div class="code cell">{{flight.arrivalAirport.code}}</div>
        <div class="airline cell">{{flight.airline.name}}</div>
        <div class="gate cell">{{flight.departureGate.number}}</div>
        <div class="status cell"><FlightStatus :flight="flight"/></div>
        <div class="mobile">
            <div class="column">
                <div class="departure">{{departureTime}}</div>
                <div class="airline">{{flight.airline.name}}</div>
            </div>
            <div class="column">
                <div class="city-name">{{flight.arrivalAirport.code}} - {{flight.arrivalAirport.cityName}}</div>
            </div>
            <div class="column">
                <div class="gate">{{flight.departureGate.number}}</div>
            </div>
            <div class="column">
                <FlightStatus :flight="flight"/>
            </div>
        </div>
    </div>
</template>

<script>
import FlightStatus from './Flight-Status.vue';
export default {
    props: [
        'flight'
    ],
    components: {
        FlightStatus
    },
    computed: {
        departureTime(){
            const departure = new Date(this.flight.estimatedDepartureDateTime);
            return `${departure.getHours()}.${departure.getMinutes()}`;
        }
    }
}
</script>

<style lang="scss" scoped>
    .flight.row {
        display: flex;
        width: 100%;
        padding: 18px 16px 22px 78px;
        border-radius: 10px;
        border: 2px solid #FFFFFF;
        color: white;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 16px;
        align-items: center;
        .cell {
            &.departure {
                flex-basis: 16.5%;
            }
            &.city-name {
                flex-basis: 17.5%;
                color: #F5D836;
            }
            &.code {
                flex-basis: 12%;
            }
            &.airline {
                flex-basis: 22%;
            }
            &.gate {
                flex-basis: 10%;
                color: #F5D836;
            }
            &.status {
                flex-grow: 1;
            }
        }
        .mobile {
            display: none;
        }
    }
    @media screen and (max-width: 1024px){
        .flight.row {
            text-align: center;
            font-size: 18px;
            padding: 18px 16px 22px 18px;
            .cell {
                padding: 0 10px;
                flex-shrink: 0;
                &.departure {
                    flex-basis: 16.5%;
                }
                &.city-name {
                    flex-basis: 16.5%;
                }
                &.code {
                    flex-basis: 15%;
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
        .flight.row {
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
    .flight.row {
        .cell {
            display: none;
        }
        .mobile {
            display: flex;
            align-items: center;
            gap: 20px;
            width: 100%;
            flex-wrap: wrap;
            .column {
                display: flex;
                flex-direction: column;
                font-size: 16px;
                flex-shrink: 0;
                .departure, .gate {
                    color: #F5D836;
                    font-size: 22px;
                }
                &:nth-child(1){
                    flex-basis: 20%;
                    flex-grow: 1;
                }
                &:nth-child(2){
                    flex-basis: 30%;
                    flex-grow: 1;
                }
                &:nth-child(3){
                    flex-basis: 10%;
                    flex-grow: 1;
                }
                &:nth-child(4){
                    flex-grow: 1;
                }
            }
        }
    }
}
</style>
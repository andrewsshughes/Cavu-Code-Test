<template>
    <div class="status" :class="{'warn': gateStatus === 'Flight Closing', 'active': gateStatus === 'Boarding', 'waiting': gateStatus == 'Go to gate'}">
        {{gateStatus}}
    </div>
</template>

<script>
    export default {
        props: [
            'flight'
        ],
        computed: {
            gateStatus(){
                const gateOpen = (new Date(this.flight.scheduledDepartureDateTime)).setMinutes(-30);
                switch(this.flight.departureGate.action){
                    case "Final Call":
                        return "Flight Closing";
                    case "Gate Open":
                        return "Boarding";
                    default: 
                        if(Date.now() > gateOpen){
                            return "Go to gate"
                        }
                        return `Gate opens ${gateOpen.getHour()}.${gateOpen.getMinutes()}`;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .status {
        background: #FFFFFF;
        box-shadow: inset 12px 0px 0px #F5D836;
        color: #000;
        padding: 10px 29px 10px 28px;
        display: inline-block;
        min-width: 214px;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        border-radius: 5px 26px 26px 5px;
        &.warn {
            color: #D67B27;
            box-shadow: inset 12px 0px 0px #D67B27;
        }
        &.active {
            box-shadow: inset 12px 0px 0px #1EA945;
            color: #1EA945
        }
        &.waiting {
            box-shadow: inset 12px 0px 0px #3677F5;
        }
    }
    @media screen and (max-width: 1024px){ 
        .status {
            font-size: 14px;
            padding: 5px 19px 5px 18px;
            text-align: left;
            min-width: 130px;
        }
    }
</style>
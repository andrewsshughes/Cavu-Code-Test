<template>
    <form id="flight-edit" @submit.prevent="updateFlight">
        <div class="input-group">
            <label for="flightSelect">Flight</label>
            <select name="flightSelect" id="flightSelect" v-model="selectedFlight">
                <option disabled :value="null">Select a flight</option>
                <option v-for="(flight, i) in flights" :key="i" :value="flight">[{{formatToTime(flight.estimatedDepartureDateTime)}}]{{flight.flightNumber}} - {{flight.arrivalAirport.name}}</option>
            </select>
        </div>
        <div class="input-group">
            <label for="statusSelect">Status</label>
            <select name="statusSelect" id="statusSelect" v-model="selectedStatus">
                <option disabled :value="null">Select a status</option>
                <option v-for="(status, i) in statusOptions" :key="i" >{{status}}</option>
            </select>
        </div>
        <div class="input-group" v-if="selectedStatus === 'Text Input'">
            <label for="customStatus">Flight Status Input</label>
            <input type="text" v-model="customStatus" id="customStatus" name="customStatus"/>
        </div>
        <input class="button" type="submit" value="Update Flight"/>
    </form>
</template>

<script>
    export default {
        props: [
            'flights'
        ],
        data(){
            return {
                statusOptions: [
                    'Departed',
                    'Diverted',
                    'Delayed',
                    'Cancelled',
                    'Text Input'
                ],
                selectedFlight: null,
                selectedStatus: null,
                customStatus: ""
            }
        },
        methods: {
            updateFlight(){
                console.log("Updating Flight");
                if(this.selectedFlight != null & this.selectedStatus != null){
                    this.selectedFlight.status = this.selectedStatus === 'Text Input' ? this.customStatus : this.selectedStatus;
                }
            },
            formatToTime(date){
                const dateObj = new Date(date);
                return `${dateObj.getHours()}.${("00"+dateObj.getMinutes()).substr(-2)}`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #flight-edit {
        padding: 25px;
        border-radius: 10px;
        max-width: 300px;
        background-color: #f2f2f2;
        .input-group {
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            label {
                margin-bottom: 10px;
            }
            select, input {
                padding: 5px;
                font-size: 14px;
                font-family: 'Helvetica', sans-serif;
            }
        }
        .button {
            background-color: #3677F5;
            color: #FFF;
            padding: 5px 10px;
            font-size: 14px;
            font-family: 'Helvetica', sans-serif;
            border-radius: 5px;
            border: none;
            display: block;
            width: 100%;
            margin-top: 20px;
        }
    }
</style>
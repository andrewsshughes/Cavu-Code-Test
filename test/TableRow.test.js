import { mount } from '@vue/test-utils'
import TableRow from '../components/Table-Row.vue';

describe("Table Row Renders Flight", () => {
    test('Renders provided flight Prop', () => {
        const wrapper = mount(TableRow, {
            stubs: ['nuxt'],
            propsData: {
                flight: {
                    "flightDirection": "departure",
                    "scheduledDepartureDateTime": "2022-08-22T10:40:00",
                    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
                    "estimatedDepartureDateTime": "2022-08-22T11:30:00",
                    "actualDepartureDateTime": null,
                    "arrivalAirport": {
                        "name": "Istanbul Airport",
                        "cityName": "Istanbul",
                        "countryName": "Turkey",
                        "code": "IST"
                    },
                    "departureAirport": {
                        "name": "Manchester Airport",
                        "cityName": "Manchester",
                        "countryName": "United Kingdom",
                        "code": "MAN"
                    },
                    "flightNumber": "TK1994",
                    "airline": {
                        "name": "Turkish Airlines",
                        "code": "TK"
                    },
                    "departureGate": {
                        "name": "Gate 31",
                        "number": "31",
                        "action": "Final Call"
                    },
                    "arrivalTerminal": null,
                    "departureTerminal": "1",
                    "status": "Final Call - Gate 31"
                }
            }
        });

        expect(wrapper.text()).toContain("IST");
        expect(wrapper.text()).toContain("Istanbul");
    });
});
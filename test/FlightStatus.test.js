import { mount } from '@vue/test-utils';
import FlightStatus from '../components/Flight-Status.vue';

describe("Flight Status States Correctly", () => {
    test("Final Call show Flight Closing" ,() => {
        const wrapper = mount(FlightStatus, {
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

        expect(wrapper.text()).toContain('Flight Closing');
    });

    test("Gate Open show Boarding" ,() => {
        const wrapper = mount(FlightStatus, {
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
                        "action": "Gate Open"
                    },
                    "arrivalTerminal": null,
                    "departureTerminal": "1",
                    "status": "Gate Open - Gate 31"
                }
            }
        });

        expect(wrapper.text()).toContain('Boarding');
    });
});
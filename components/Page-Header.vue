<template>
    <header>
        <img src="/img/Departures.svg"/>
        Departures
    </header>
</template>

<style lang="scss" scoped>
header {
    background: radial-gradient(81.65% 10898.53% at 18.35% 50%, #EAD550 0%, #EAD250 2.07%, #EAD250 2.08%, #EAD250 2.09%, #EAD250 9.38%, #EAD250 25%, #EAD250 25.01%, #EAD250 27.08%, #EAD250 31.25%, #EAD250 31.26%, #EAD250 34.38%, #EAD251 37.5%, #EAD251 41.15%, #EAD251 45.83%, #EAD351 66.42%, #E5CD42 80.21%, #E2C837 90.62%, #E2C836 90.64%, #DFC42E 100%);
    padding: 32px 40px;
    font-family: 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 40px;
    display: flex;
    gap: 40px;
    align-items: center;
}
@media screen and (max-width: 1024px){
    header {
        font-size: 36px;
    }
}
@media screen and (max-width: 740px){
    header {
        font-size: 24px;
    }
}
@media screen and (max-width: 360px){
    header {
        font-size: 18px;
    }
}
</style>

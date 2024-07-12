<script setup></script>

<template>
    <div class="card">
        <div class="main-content">
            <div class="header">
                <span>Article on</span>
                <span>2024-07-10</span>
            </div>
            <p class="heading">Different ways to use CSS in React</p>
            <div class="categories">
                <span>React</span>
                <span>CSS</span>
                <span>Vue.js</span>
            </div>
        </div>
        <div class="footer">
            by Harsh
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    height: 220px;
    padding: 20px;
    color: white;
    background: linear-gradient(#969ef8, #FFFACC) padding-box,
        linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 23px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform-origin: right bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.card .main-content {
    flex: 1;
}

.card .header span:first-child {
    font-weight: 600;
    color: #000;
    margin-right: 4px;
}

.card .heading {
    font-size: 24px;
    margin: 24px 0 16px;
    font-weight: 600;
}

.card .categories {
    display: flex;
    gap: 8px;
}

.card .categories span {
    background-color: #e81cff;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
}

.card .footer {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
}

.card:hover {
    rotate: 8deg;
}
</style>

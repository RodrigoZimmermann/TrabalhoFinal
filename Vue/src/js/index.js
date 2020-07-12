import Vue from 'vue';
import App from './App.vue';
/*
import express from 'express';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.use(require('./routes'));
*/

new Vue({ render: createElement => createElement(App) }).$mount('#app');
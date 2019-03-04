import React from 'react';
import dva from 'dva';
import routerConfig from './routes'
import "@/styles/reset.css"
import "@/styles/style.scss"
const app = dva();
app.router(routerConfig);
app.start('#index');


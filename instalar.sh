#!/bin/bash

# codigo para clonar automaticamente el repositorio de github

pm2 stop temperatura
rm IOTTemperatura -r
git clone https://github.com/friki57/IOTTemperatura.git
cd IOTTemperatura
npm i
pm2 start src/temperatura.js


#!/bin/bash

# codigo para clonar automaticamente el repositorio de github

rm IOTTemperatura -r
git clone https://github.com/friki57/IOTTemperatura.git
cd IOTTemperatura
npm i
npm start


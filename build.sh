#!/bin/bash
npx tailwindcss -i ./src/css/tailwind.css -o ./src/css/tailwind.compiled.css
npm install && npm run dev

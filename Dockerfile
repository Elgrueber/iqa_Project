FROM mcr.microsoft.com/playwright:v1.51.1-jammy
COPY . /tests
WORKDIR /tests
RUN npm install
RUN npx playwright install
CMD [ "npx", "playwright", "test" ]
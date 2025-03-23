FROM mcr.microsoft.com/playwright:v1.51.1-jammy
COPY . /tests
WORKDIR /tests
RUN npm install -g npm@11.2.0
RUN npx playwright install
CMD [ "npx", "playwright", "test" ]
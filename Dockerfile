FROM denoland/deno:latest

WORKDIR /app
COPY . .

RUN deno install
RUN deno task compile

CMD ["./app"]
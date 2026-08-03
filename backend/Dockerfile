FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client (IMPORTANT!)
RUN npx prisma generate

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
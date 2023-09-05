require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

export const {
  SERVER_PORT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  SWAGGER_ROUTE,
  API_PREFIX,
  JWT_SECRET_ACCESS_KEY,
  JWT_SECRET_REFRESH_KEY,
  JWT_REFRESH_TOKEN_EXPIRATION_TIME,
  JWT_ACCESS_TOKEN_EXPIRATION_TIME,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_SNS_REGION,
  AWS_SES_REGION,
  FIND_EMAIL_ID,
  API_HOST,
  API_URL,
} = process.env

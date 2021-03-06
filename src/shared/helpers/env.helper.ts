
export default {
  port: process.env.PORT || 8000,
  isVerboseLog: (process.env.VERBOSE_LOG && process.env.VERBOSE_LOG === '1'),
  isProduction: (process.env.NODE_ENV && process.env.NODE_ENV === 'production'),
  openWeatherMapAppId: process.env.OPEN_WEATHER_MAP_APP_ID || '556cbb3084bd3ce10130429477b56710',
  queueRedisHost: process.env.QUEUE_REDIS_HOST || 'redis://127.0.0.1:6379'
}

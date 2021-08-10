module.exports = {
  dialect: "postgres",
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: { ssl: { rejectUnauthorized: false } },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

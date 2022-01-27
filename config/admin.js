module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '45230f6d6470103f63ab433eca018ce2'),
  },
});

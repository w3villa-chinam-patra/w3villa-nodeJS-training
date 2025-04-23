/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "POST /api/auth/register": { action: "auth/register" },
  "POST /api/auth/login": { action: "auth/login" },
  "POST /api/blog/": { action: "blog/create" },
  "GET /api/blog/:id": { action: "blog/read-one" },
  "GET /api/blog": { action: "blog/read-all" },
  "GET /api/category": { action: "category/read-all" },
  "POST /api/like": { action: "like/like" },
  "GET /api/total-likes/:blogId": { action: "like/total-likes" },
  "POST /api/comment": { action: "comment/create" },
  "GET /api/comment/:blogId": { action: "comment/read-all" },
};

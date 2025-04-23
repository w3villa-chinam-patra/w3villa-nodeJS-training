/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

const isAuthenticated = require("../api/policies/isAuthenticated");

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/

  // '*': true,
  "auth/*": true,
  "blog/*": true,
  "blog/create": isAuthenticated,
  "like/*": isAuthenticated,
  "like/total-likes": true,
  "comment/*": isAuthenticated,
  "comment/read-all": true,
};

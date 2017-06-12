/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    followers: {
      type: 'integer'
    },
    following: {
      type: 'integer'
    },
    tweetsNumber: {
      type: 'integer'
    },
    bio: {
      type: 'string'
    },
    toJSON: function () {

      let obj = this.toObject();
      delete obj.id;
      delete obj.updatedAt;
      return obj;
    }
  },

};

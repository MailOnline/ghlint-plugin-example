'use strict';


module.exports = {
  rules: {
    'mol-repo-name': {
      meta: {
        name: 'mol-repo-name',
        description: 'Repository name should start from "mol-"',
        category: 'Repo'
      },

      schema: {},

      source: 'meta',

      check: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            pattern: '^mol-'
          }
        }
      }
    }
  }
};

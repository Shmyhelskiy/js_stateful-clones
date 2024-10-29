'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateCopy = { ...state };
  const container = [];

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(stateCopy, actions[i].extraData);
        container.push({ ...stateCopy });
        break;

      case 'removeProperties':
        actions[i].keysToRemove.forEach((item) => {
          delete { ...stateCopy[item] };
        });
        container.push({ ...stateCopy });
        break;

      case 'clear':
        container.push({});
        break;

      default:
        null;
    }
  }

  return container;
}

module.exports = transformStateWithClones;

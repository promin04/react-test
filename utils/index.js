const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
    // code here
    for (let key in scores) {
      for (let i = 0; i < store.length; i++) {

        if (store[i].subject === key) {
          return store[i].students.push(
            {
              name,
              score:scores[key]
            }
          )
        }else if(i === store.length-1){
          store.push({subject:key,student:[]})
        }

      }
    }


console.log('storess',JSON.stringify(store));
return store;
};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
    // code here
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    // code here
};

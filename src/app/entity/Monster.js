'use strict';

let NPC = require('./NPC');


/**
 * 
 * 
 * @param {any} x 
 * @param {any} y 
 * @param {any} key 
 */
function Monster(x, y, key) {
    NPC.call(this, x, y, key);
    /**
     * @todo(anand): As of now, nothing. Need to add Attributes
     */
}

Monster.prototype = Object.create(Entity.prototype);
Monster.prototype.constructor = Monster;

module.exports = Monster;
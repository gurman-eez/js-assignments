'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
	//  throw new Error('Not implemented');
	this.width = width;
	this.height = height;
}
Rectangle.prototype.getArea = () => this.width * this.height;

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
	//  throw new Error('Not implemented');
	return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    var r = fromJSON(Rectangle.prototype, '{"width":10, "height":20}');
 *
 */
function fromJSON(proto, json) {
	//  throw new Error('Not implemented');
	return Object.setPrototypeOf(JSON.parse(json), proto);
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurences
 *
 * All types of selectors can be combined using the combinators ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy and implement the functionality
 * to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string repsentation according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple, clear and readable as possible.
 *
 * @example
 *
 *  var builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()  => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()  => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()        =>    'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */
// class CssSel {
// 	constructor() {
// 		this._way = "";
// 	}

	


// 	element(e) {
// 		if (this._elem) {
// 			throw new Error ('Element, id and pseudo-element should not take place more then one time inside the selector!')
// 		}
// 		this.check('element');
// 		this._elem = e;
// 		this.toWay(this._elem);
// 		return this;
// 	}

// 	id(e) {
// 		if (this._id) {
// 			throw new Error('"Element", "id" and "pseudo-element" should not take place more then one time inside the selector!')
// 		}
// 		this.check('id');
// 		this._id = `#${e}`;
// 		this.toWay(this.id);
// 		return this;
// 	}

// 	class(e) {
// 		if (this._class) {
// 			throw new Error('"Element", "id" and "pseudo-element" should not take place more then one time inside the selector!')
// 		}
// 		this.check('id');
// 		this._class = `.${e}`;
// 		this.toWay(this.class);
// 		return this;
// 	}

// 	attribute(e) {
// 		if (this._attribute) {
// 			throw new Error('"Element", "id" and "pseudo-element" should not take place more then one time inside the selector!')
// 		}
// 		this.check('id');
// 		this._attribute = `[${e}]`;
// 		this.toWay(this.attribute);
// 		return this;
// 	}

// 	pseudoClass(e) {
// 		if (this._pseudoClass) {
// 			throw new Error('Error')
// 		}
// 		this.check('id');
// 		this._pseudoClass = `:${e}`;
// 		this.toWay(this.pseudoClass);
// 		return this;
// 	}

// 	pseudoElement(e) {
// 		if (this._pseudoElement) {
// 			throw new Error('Error')
// 		}
// 		this.check('id');
// 		this._pseudoElement = `::${e}`;
// 		this.toWay(this.pseudoElement);
// 		return this;
// 	}

// 	check(e) {
// 		const arr = ['element', 'id', 'class', 'attribute', 'pseudoClass', 'pseudoElement'];
// 		if (arr.slice(arr.findIndex(elem => elem === e) + 1).some(elem => this[`_${elem}`])) {
// 			throw new Error(`Selector parts should be in the following order: 1.element, 2.id, 3.class, 4.attribute, 5.pseudo-class, 6.pseudo-element`)
// 		}
// 	}

// 	toWay(e) {
// 		this._way += e;
// 	}

// 	stringify() {
// 		return this._way;
// 	}

// }

// class CssSelCombined {
// 	constructor (sel1, comb, sel2) {
// 		this.sel1 = sel1;
// 		this.comb = comb;
// 		this.sel2 = sel2;
// 	}

// 	stringify() {
// 		return `${this.sel1.stringify()}${this.comb}${this.sel2.stringify()}`;
// 	}
// }


class CssWay {
	constructor() {
		this._way = '';
	}

	check(x) {
		const order = ['element', 'id', 'class', 'attr', 'pseudoClass', 'pseudoElement'];
		if (order.slice(order.findIndex(elem => elem === x) + 1).some(elem => this[`_${elem}`])) {
			throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
		}
	}

	element(x) {
		if (this._element) {
			throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
		}
		this.check('element');
		this._element = x;
		this.addToPath(this._element);
		return this;
	}

	id(x) {
		if (this._id) {
			throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
		}
		this.check('id');
		this._id = `#${x}`;
		this.addToPath(this._id);
		return this;
	}

	pseudoElement(x) {
		if (this._pseudoElement) {
			throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
		}
		this.check('pseudoElement');
		this._pseudoElement = `::${x}`;
		this.addToPath(this._pseudoElement);
		return this;
	}

	class(x) {
		this.check('class');
		this._class = `.${x}`;
		this.addToPath(this._class);
		return this;
	}

	attr(x) {
		this.check('attr');
		this._attr = `[${x}]`;
		this.addToPath(this._attr);
		return this;
	}

	pseudoClass(x) {
		this.check('pseudoClass');
		this._pseudoClass = `:${x}`;
		this.addToPath(this._pseudoClass);
		return this;
	}

	

	addToPath(x) {
		this._way += x;
	}

	stringify() {
		return this._way;
	}
}

class CssWayComb {
	constructor(sel1, comb, sel2) {
		this.sel1 = sel1;
		this.comb = comb;
		this.sel2 = sel2;
	}

	stringify() {
		return `${this.sel1.stringify()} ${this.comb} ${this.sel2.stringify()}`;
	}
}

const cssSelectorBuilder = {

    element: function(value) {
		//   throw new Error('Not implemented');
		return new CssWay().element(value);
    },

    id: function(value) {
		//   throw new Error('Not implemented');
		return new CssWay().id(value);
    },

    class: function(value) {
		//   throw new Error('Not implemented');
		return new CssWay().class(value);
    },

    attr: function(value) {
		//   throw new Error('Not implemented');
		return new CssWay().attr(value);
    },

    pseudoClass: function(value) {
		//   throw new Error('Not implemented');
		return new CssWay().pseudoClass(value);
    },

    pseudoElement: function(value) {
		//   throw new Error('Not implemented');
		return new CssWay().pseudoElement(value);
    },

    combine: function(selector1, combinator, selector2) {
		//   throw new Error('Not implemented');
		return new CssWayComb(selector1, combinator, selector2);
    },
};


module.exports = {
    Rectangle: Rectangle,
    getJSON: getJSON,
    fromJSON: fromJSON,
    cssSelectorBuilder: cssSelectorBuilder
};

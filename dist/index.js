(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['vue-component'] = {})));
}(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var uniqueRandom = function (min, max) {
		var prev;
		return function rand() {
			var num = Math.floor(Math.random() * (max - min + 1) + min);
			return prev = num === prev && min !== max ? rand() : num;
		};
	};

	var uniqueRandomArray = function (arr) {
		var rand = uniqueRandom(0, arr.length - 1);

		return function () {
			return arr[rand()];
		};
	};

	var starwarsNames = [
	  "4-LOM",
	  "Aayla Secura",
	  "Admiral Ackbar",
	  "Admiral Thrawn",
	  "Ahsoka Tano",
	  "Anakin Solo",
	  "Asajj Ventress",
	  "Aurra Sing",
	  "Senator Bail Organa",
	  "Barriss Offee",
	  "Bastila Shan",
	  "Ben Skywalker",
	  "Bib Fortuna",
	  "Biggs Darklighter",
	  "Boba Fett",
	  "Bossk",
	  "Brakiss",
	  "C-3PO",
	  "Cad Bane",
	  "Cade Skywalker",
	  "Callista Ming",
	  "Captain Rex",
	  "Carnor Jax",
	  "Chewbacca",
	  "Clone Commander Cody",
	  "Count Dooku",
	  "Darth Bane",
	  "Darth Krayt",
	  "Darth Maul",
	  "Darth Nihilus",
	  "Darth Vader",
	  "Dash Rendar",
	  "Dengar",
	  "Durge",
	  "Emperor Palpatine",
	  "Exar Kun",
	  "Galen Marek",
	  "General Crix Madine",
	  "General Dodonna",
	  "General Grievous",
	  "General Veers",
	  "Gilad Pellaeon",
	  "Grand Moff Tarkin",
	  "Greedo",
	  "Han Solo",
	  "IG 88",
	  "Jabba The Hutt",
	  "Jacen Solo",
	  "Jaina Solo",
	  "Jango Fett",
	  "Jarael",
	  "Jerec",
	  "Joruus C'Baoth",
	  "Ki-Adi-Mundi",
	  "Kir Kanos",
	  "Kit Fisto",
	  "Kyle Katarn",
	  "Kyp Durron",
	  "Lando Calrissian",
	  "Luke Skywalker",
	  "Luminara Unduli",
	  "Lumiya",
	  "Mace Windu",
	  "Mara Jade",
	  "Mission Vao",
	  "Natasi Daala",
	  "Nom Anor",
	  "Obi-Wan Kenobi",
	  "Padmé Amidala",
	  "Plo Koon",
	  "Pre Vizsla",
	  "Prince Xizor",
	  "Princess Leia",
	  "PROXY",
	  "Qui-Gon Jinn",
	  "Quinlan Vos",
	  "R2-D2",
	  "Rahm Kota",
	  "Revan",
	  "Satele Shan",
	  "Savage Opress",
	  "Sebulba",
	  "Shaak Ti",
	  "Shmi Skywalker",
	  "Talon Karrde",
	  "Ulic Qel-Droma",
	  "Visas Marr",
	  "Watto",
	  "Wedge Antilles",
	  "Yoda",
	  "Zam Wesell",
	  "Zayne Carrick",
	  "Zuckuss"
	]
	;

	var starwarsNames$1 = /*#__PURE__*/Object.freeze({
		default: starwarsNames
	});

	var _starwarsNames = ( starwarsNames$1 && starwarsNames ) || starwarsNames$1;

	var dist = createCommonjsModule(function (module) {



	var _uniqueRandomArray2 = _interopRequireDefault(uniqueRandomArray);



	var _starwarsNames2 = _interopRequireDefault(_starwarsNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getRandomItem = (0, _uniqueRandomArray2.default)(_starwarsNames2.default);

	module.exports = {
	  all: _starwarsNames2.default,
	  random: random
	};

	function random(number) {
	  if (number === undefined) {
	    return getRandomItem();
	  } else {
	    var randomItems = [];
	    for (var i = 0; i < number; i++) {
	      randomItems.push(getRandomItem());
	    }
	    return randomItems;
	  }
	}
	});

	var names = unwrapExports(dist);
	var dist_1 = dist.all;
	var dist_2 = dist.random;

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" div[data-v-2964abc9] { background: powderblue; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	const pouet = 'Pouet';

	var index = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("Poeut! "+_vm._s(_vm.label))])},staticRenderFns: [],_scopeId: 'data-v-2964abc9',
	  computed: {
	    label() {
	      return names.random()
	    }
	  }
	}

	exports.pouet = pouet;
	exports.default = index;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
